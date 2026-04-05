import { useState, useEffect } from "react";
import API from "../api";
import "../App.css";

export default function Guard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [form, setForm] = useState({
    name: "",
    phone_no: "",
    flat_no: "",
    wing: "",
    visitor_type: "Guest",
    vehicle_no: "",
    entry_date: new Date().toISOString().split("T")[0],
    entry_time: new Date().toTimeString().split(" ")[0].slice(0, 5)
  });
  
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVisits = async () => {
    try {
      const { data } = await API.get("/visits/global");
      setVisits(data);
    } catch (err) {
      console.error("Fetch visits error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVisits();
    const interval = setInterval(fetchVisits, 10000);
    return () => clearInterval(interval);
  }, []);

  const user = JSON.parse(window.localStorage.getItem("currentUser") || "null");

  const expectedVisits = visits.filter(v => v.status === "expected");
  const activeVisits = visits.filter(v => v.status !== "expected");

  const stats = {
    pending: activeVisits.filter(v => v.status === "pending").length,
    approved: activeVisits.filter(v => v.status === "approved").length,
    total: activeVisits.length
  };

  const submit = async () => {
    if (!form.name || !form.phone_no || !form.flat_no) {
      alert("Please fill all required fields");
      return;
    }
    
    try {
      await API.post("/visit", {
         name: form.name,
         phone_no: form.phone_no,
         flat_no: form.flat_no,
         wing: form.wing,
         visitor_type: form.visitor_type,
         vehicle_no: form.vehicle_no,
         entry_date: form.entry_date,
         entry_time: form.entry_time
      });
      setForm({ 
        name: "", phone_no: "", flat_no: "", wing: "", visitor_type: "Guest", vehicle_no: "",
        entry_date: new Date().toISOString().split("T")[0],
        entry_time: new Date().toTimeString().split(" ")[0].slice(0, 5)
      });
      fetchVisits();
      alert("Visitor Added Successfully!");
    } catch (err) {
      alert("Failed to add visitor: " + (err.response?.data?.error || err.message));
    }
  };

  const logout = () => {
    window.localStorage.clear();
    window.location = "/login";
  };

  const renderDashboard = () => (
    <>
      <div className="dash-stats-row">
        <div className="dash-stat-card">
          <div className="dash-stat-info">
            <label>Pending Approvals</label>
            <strong>{stats.pending}</strong>
          </div>
        </div>
        <div className="dash-stat-card">
          <div className="dash-stat-info">
            <label>Approved Today</label>
            <strong>{stats.approved}</strong>
          </div>
        </div>
        <div className="dash-stat-card">
          <div className="dash-stat-info">
            <label>Total Today</label>
            <strong>{stats.total}</strong>
          </div>
        </div>
      </div>

      <div className="dash-split-view">
        {/* Left Col: Entry Form */}
        <div className="dash-form-card" style={{ padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1.1rem", marginBottom: "1.5rem", fontWeight: "600" }}>New Visitor Entry</h2>
          <form onSubmit={e => { e.preventDefault(); submit(); }} className="dash-form-stack">
            <div className="form-group">
              <label>Visitor Name</label>
              <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" value={form.phone_no} onChange={e => setForm({...form, phone_no: e.target.value})} />
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label>Wing</label>
                <input type="text" value={form.wing} onChange={e => setForm({...form, wing: e.target.value})} />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label>Flat Number</label>
                <input type="text" value={form.flat_no} onChange={e => setForm({...form, flat_no: e.target.value})} />
              </div>
            </div>

            <div className="form-group">
              <label>Purpose</label>
              <select value={form.visitor_type} onChange={e => setForm({...form, visitor_type: e.target.value})}>
                <option value="Guest">Guest</option>
                <option value="Delivery">Delivery</option>
                <option value="Service">Service</option>
                <option value="Courier">Courier</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Vehicle Number (Optional)</label>
              <input type="text" value={form.vehicle_no} onChange={e => setForm({...form, vehicle_no: e.target.value})} />
            </div>

            <button type="submit" className="btn-signin" disabled={loading} style={{ width: "100%", background: "#6366f1", marginTop: "0.5rem" }}>
              {loading ? 'Submitting...' : 'Submit Entry'}
            </button>
          </form>
        </div>

        {/* Right Col: Recent Entries */}
        <div className="dash-table-wrapper" style={{ padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1.1rem", marginBottom: "1.5rem", fontWeight: "600" }}>Recent Entries</h2>
          <div style={{ overflowX: "auto" }}>
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Visitor</th>
                  <th>Flat</th>
                  <th>Type</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {activeVisits.length === 0 ? (
                  <tr><td colSpan="5" style={{textAlign: "center", color: "#94a3b8"}}>No entries yet</td></tr>
                ) : (
                  activeVisits.slice(0, 5).map(v => (
                    <tr key={v.visit_id}>
                      <td style={{ fontWeight: 500 }}>{v.visitor_name}</td>
                      <td>{v.wing ? `${v.wing}-${v.flat_no}` : v.flat_no}</td>
                      <td>{v.purpose}</td>
                      <td>{new Date(v.check_in_time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</td>
                      <td>
                        <span className={`status-badge status-${v.status}`} style={{ margin: 0 }}>
                          {v.status.toLowerCase()}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );

  const renderHistory = () => (
    <>
      <div style={{ marginBottom: "1.5rem" }}>
         <h2 style={{ fontSize: "1.5rem", color: "#0f172a", margin: "0 0 0.5rem 0" }}>Visitor History</h2>
         <p style={{ color: "#64748b", margin: 0 }}>All visitor entries logged at the gate</p>
      </div>

      <div className="dash-table-wrapper" style={{ padding: "1.5rem" }}>
        {/* Mockup filter header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
           <h3 style={{ margin: 0, fontSize: "1.1rem" }}>All Entries</h3>
           <div style={{ display: "flex", gap: "1rem" }}>
             <input type="text" placeholder="🔍 Search visitor, flat..." style={{ padding: "0.5rem 1rem", border: "1px solid #e2e8f0", borderRadius: "8px", minWidth: "250px" }} />
             <select style={{ padding: "0.5rem 1rem", border: "1px solid #e2e8f0", borderRadius: "8px", background: "white" }}>
               <option>All Status</option>
             </select>
           </div>
        </div>
        
        <div style={{ overflowX: "auto" }}>
          <table className="dash-table">
            <thead>
              <tr>
                <th>Visitor</th>
                <th>Phone</th>
                <th>Flat / Wing</th>
                <th>Type</th>
                <th>Vehicle</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {activeVisits.length === 0 ? (
                <tr><td colSpan="8" style={{textAlign: "center", color: "#94a3b8"}}>No historical records found</td></tr>
              ) : (
                activeVisits.map(v => (
                  <tr key={v.visit_id}>
                    <td style={{ fontWeight: 500 }}>{v.visitor_name}</td>
                    <td>{v.phone_no || '—'}</td>
                    <td>{v.wing ? `${v.wing}-${v.flat_no}` : v.flat_no}</td>
                    <td>{v.purpose}</td>
                    <td>{v.vehicle_no || '—'}</td>
                    <td>{new Date(v.check_in_time).toISOString().split('T')[0]}</td>
                    <td>{new Date(v.check_in_time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</td>
                    <td>
                      <span className={`status-badge status-${v.status}`} style={{ margin: 0 }}>
                        {v.status.charAt(0).toUpperCase() + v.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

  const renderSettings = () => (
    <div style={{ maxWidth: "800px" }}>
      {/* Profile Information Mockup */}
      <div className="dash-form-card" style={{ marginBottom: "2rem" }}>
        <div className="settings-section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          Profile Information
        </div>
        <div className="settings-section-desc">Your account details</div>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" readOnly value={user?.name || "Kavya Thakar"} />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" readOnly value={user?.email || "guard@example.com"} />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" readOnly value="1234567898" />
          </div>
          <div className="form-group">
            <label>Role</label>
            <input type="text" readOnly value="Guard" />
          </div>
        </div>
      </div>

      {/* Account Security */}
      <div className="dash-form-card" style={{ marginBottom: "2rem" }}>
        <div className="settings-section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          Account Security
        </div>
        <div className="settings-section-desc">Manage your password and security settings</div>

        <div className="form-group">
          <label>Current Password</label>
          <input type="password" placeholder="Enter current password" />
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label>New Password</label>
            <input type="password" placeholder="New password" />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm new password" />
          </div>
        </div>

        <button className="btn-signin" style={{ width: "auto", background: "white", color: "#1e293b", border: "1px solid #e2e8f0" }}>
          Update Password
        </button>
      </div>

      {/* System Information */}
      <div className="dash-form-card">
        <div className="settings-section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          System Information
        </div>
        <div style={{ marginTop: "1.5rem", borderTop: "1px solid #f1f5f9", paddingTop: "1rem" }}>
           <div style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 0", borderBottom: "1px solid #f1f5f9", color: "#64748b" }}>
              <span>System</span>
              <span style={{ color: "#1e293b", fontWeight: 500 }}>VisitorGuard OS v2.1</span>
           </div>
           <div style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 0", borderBottom: "1px solid #f1f5f9", color: "#64748b" }}>
              <span>Account ID</span>
              <span style={{ color: "#1e293b", fontWeight: 500 }}>GD-10924</span>
           </div>
           <div style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 0", color: "#64748b" }}>
              <span>Member Since</span>
              <span style={{ color: "#1e293b", fontWeight: 500 }}>July 2024</span>
           </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="dash-layout">
      {/* Sidebar */}
      <aside className="dash-sidebar">
        <div className="dash-logo-area">
          <div className="dash-logo-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          </div>
          <div className="dash-logo-text">
            <strong>Guard Portal</strong>
          </div>
        </div>

        <nav className="dash-nav">
          <button 
            className={`dash-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            Dashboard
          </button>
          
          <button 
            className={`dash-nav-item ${activeTab === 'history' ? 'active' : ''}`}
            onClick={() => setActiveTab('history')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            History
          </button>
          
          <button 
             className={`dash-nav-item ${activeTab === 'settings' ? 'active' : ''}`}
             onClick={() => setActiveTab('settings')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            Settings
          </button>
        </nav>
        
        <div className="dash-sidebar-footer">
          <button className="dash-nav-item" onClick={logout}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Container Wrapper */}
      <div className="dash-main-wrapper">
        <header className="dash-topbar">
          <h1>
            {activeTab === 'dashboard' && 'Dashboard'}
            {activeTab === 'history' && 'History'}
            {activeTab === 'settings' && 'Settings'}
          </h1>
        </header>

        <main className="dash-main">
           {activeTab === 'dashboard' && renderDashboard()}
           {activeTab === 'history' && renderHistory()}
           {activeTab === 'settings' && renderSettings()}
        </main>
      </div>
    </div>
  );
}