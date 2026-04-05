import { useState, useEffect } from "react";
import API from "../api";
import "../App.css";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("analytics_users"); // 'analytics_users', 'full_logs', 'settings'
  const [subTab, setSubTab] = useState("analytics"); // 'analytics', 'user_management'
  
  const [currentUser] = useState(() => JSON.parse(window.localStorage.getItem("currentUser") || "null"));
  const [visits, setVisits] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", phone: "", role: "guard", password: "", flat_no: "" });

  const fetchData = async () => {
    try {
      const [visitRes, userRes] = await Promise.all([
        API.get("/visits/global"),
        API.get("/users")
      ]);
      // Sort visits so newest is first
      const sortedVisits = visitRes.data.sort((a,b) => new Date(b.check_in_time) - new Date(a.check_in_time));
      setVisits(sortedVisits);
      setUsers(userRes.data);
    } catch (err) {
      console.error("Fetch data error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleProvision = async () => {
    if (!form.name || !form.email || !form.phone || !form.password) {
      alert("All fields are required.");
      return;
    }
    try {
      await API.post("/register", {
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password,
        role: form.role,
        ...(form.role === "resident" && { flat_no: form.flat_no })
      });
      setForm({ name: "", email: "", phone: "", role: "guard", password: "", flat_no: "" });
      fetchData();
      alert(`Account for ${form.name} created successfully.`);
    } catch (err) {
      alert("Failed to provision account: " + (err.response?.data?.error || err.message));
    }
  };

  const logout = () => {
    window.localStorage.clear();
    window.location = "/login";
  };

  const totalVisits = visits.length;
  const approvedVisits = visits.filter(v => v.status === "approved").length;
  const pendingVisits = visits.filter(v => v.status === "pending").length;
  const rejectedVisits = visits.filter(v => v.status === "rejected").length;

  const renderAnalyticsUsers = () => (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem" }}>
         <div className="dash-header" style={{ marginBottom: 0 }}>
            <h1>Admin Dashboard</h1>
            <p>System-wide overview and management</p>
         </div>
         <div className="admin-toggle">
            <button className={`admin-toggle-btn ${subTab === 'analytics' ? 'active' : ''}`} onClick={() => setSubTab('analytics')}>
               Analytics
            </button>
            <button className={`admin-toggle-btn ${subTab === 'user_management' ? 'active' : ''}`} onClick={() => setSubTab('user_management')}>
               User Management
            </button>
         </div>
      </div>

      {subTab === 'analytics' && (
        <>
          <div className="dash-stats-row" style={{ gridTemplateColumns: "repeat(4, 1fr)", marginBottom: "2rem" }}>
            <div className="admin-stat-card admin-stat-blue">
              <label>Total Logs</label>
              <strong>{totalVisits}</strong>
            </div>
            <div className="admin-stat-card admin-stat-green">
              <label>Granted Entry</label>
              <strong>{approvedVisits}</strong>
            </div>
            <div className="admin-stat-card admin-stat-orange">
              <label>Awaiting</label>
              <strong>{pendingVisits}</strong>
            </div>
            <div className="admin-stat-card admin-stat-red">
              <label>Rejected</label>
              <strong>{rejectedVisits}</strong>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "2rem" }}>
            <div className="dash-form-card" style={{ padding: "1.5rem" }}>
              <h2 style={{ fontSize: "1.1rem", marginBottom: "0.25rem", fontWeight: "600" }}>Daily Visitor Volume</h2>
              <p style={{ color: "#64748b", fontSize: "0.85rem", margin: "0 0 1rem 0" }}>Last 7 days</p>
              <div className="mock-chart-container">
                 <div className="mock-chart-grid-line" style={{ bottom: "0%" }}><span className="mock-chart-y-axis">0</span></div>
                 <div className="mock-chart-grid-line" style={{ bottom: "25%" }}><span className="mock-chart-y-axis">1</span></div>
                 <div className="mock-chart-grid-line" style={{ bottom: "50%" }}><span className="mock-chart-y-axis">2</span></div>
                 <div className="mock-chart-grid-line" style={{ bottom: "75%" }}><span className="mock-chart-y-axis">3</span></div>
                 <div className="mock-chart-grid-line" style={{ bottom: "100%" }}><span className="mock-chart-y-axis">4</span></div>
                 {/* Visual Mock Line */}
                 <div style={{ position: "absolute", bottom: 0, left: "20%", width: "2px", height: "40%", background: "#6366f1" }}></div>
                 <div style={{ position: "absolute", bottom: 0, left: "50%", width: "2px", height: "70%", background: "#6366f1" }}></div>
                 <div style={{ position: "absolute", bottom: 0, left: "80%", width: "2px", height: "20%", background: "#6366f1" }}></div>
              </div>
            </div>
            
            <div className="dash-form-card" style={{ padding: "1.5rem" }}>
              <h2 style={{ fontSize: "1.1rem", marginBottom: "0.25rem", fontWeight: "600" }}>Approval Trend</h2>
              <p style={{ color: "#64748b", fontSize: "0.85rem", margin: "0 0 1rem 0" }}>Approved vs Rejected over 7 days</p>
              <div className="mock-chart-container">
                 <div className="mock-chart-grid-line" style={{ bottom: "0%" }}></div>
                 <div className="mock-chart-grid-line" style={{ bottom: "25%" }}><span className="mock-chart-y-axis">1</span></div>
                 <div className="mock-chart-grid-line" style={{ bottom: "50%" }}><span className="mock-chart-y-axis">2</span></div>
                 <div className="mock-chart-grid-line" style={{ bottom: "100%" }}><span className="mock-chart-y-axis">4</span></div>
                 
                 <div style={{ position: "absolute", bottom: "-20px", left: "10%", fontSize: "0.75rem", color: "#64748b" }}>03-31 00:00:00</div>
                 <div style={{ position: "absolute", bottom: "-20px", right: "10%", fontSize: "0.75rem", color: "#64748b" }}>04-05 00:00:00</div>
                 {/* Visual Line */}
                 <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0,100 L50,50 L100,80" fill="none" stroke="#ef4444" strokeWidth="2" />
                 </svg>
              </div>
            </div>
          </div>

          <div className="dash-table-wrapper" style={{ padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1.1rem", marginBottom: "1.5rem", fontWeight: "600" }}>Recent Visitor Logs</h2>
            <div style={{ overflowX: "auto" }}>
              <table className="dash-table">
                <thead>
                  <tr>
                    <th>Visitor</th>
                    <th>Flat</th>
                    <th>Wing</th>
                    <th>Type</th>
                    <th>Time</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {visits.length === 0 ? (
                    <tr><td colSpan="7" style={{textAlign: "center", color: "#94a3b8"}}>No entries</td></tr>
                  ) : (
                    visits.slice(0, 8).map(v => (
                      <tr key={v.visit_id}>
                        <td style={{ fontWeight: 500 }}>{v.visitor_name}</td>
                        <td>{v.flat_no || '—'}</td>
                        <td>{v.wing || '—'}</td>
                        <td>{v.purpose}</td>
                        <td>{new Date(v.check_in_time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</td>
                        <td>{new Date(v.check_in_time).toISOString().split('T')[0]}</td>
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
      )}

      {subTab === 'user_management' && (
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "2rem" }}>
           <div className="dash-table-wrapper" style={{ padding: "1.5rem" }}>
             <h2 style={{ fontSize: "1.1rem", marginBottom: "1.5rem", fontWeight: "600" }}>System Users</h2>
             <div style={{ overflowX: "auto" }}>
               <table className="dash-table">
                 <thead>
                   <tr>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Role</th>
                     <th>Flat/Wing</th>
                   </tr>
                 </thead>
                 <tbody>
                   {users.length === 0 ? (
                     <tr><td colSpan="4" style={{textAlign: "center", color: "#94a3b8"}}>No users found</td></tr>
                   ) : (
                     users.map((u, i) => (
                       <tr key={i}>
                         <td style={{ fontWeight: 500 }}>{u.name}</td>
                         <td>{u.email}</td>
                         <td>
                           <span style={{ 
                             background: u.role === "admin" ? "#fef08a" : u.role === "guard" ? "#bfdbfe" : "#bbf7d0",
                             color: u.role === "admin" ? "#854d0e" : u.role === "guard" ? "#1d4ed8" : "#166534",
                             padding: "4px 8px", borderRadius: "99px", fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase"
                           }}>
                             {u.role}
                           </span>
                         </td>
                         <td>{u.flat_number || '—'}</td>
                       </tr>
                     ))
                   )}
                 </tbody>
               </table>
             </div>
           </div>

           <div className="dash-form-card" style={{ padding: "1.5rem" }}>
             <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem", fontWeight: "600" }}>Create New User</h2>
             <p style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "1.5rem" }}>Provision a new Guard or Resident account.</p>
             <form onSubmit={e => { e.preventDefault(); handleProvision(); }} className="dash-form-stack">
                <div className="form-group">
                   <label>Full Name</label>
                   <input type="text" placeholder="Jane Doe" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                </div>
                <div className="form-group">
                   <label>Email Address</label>
                   <input type="email" placeholder="jane@society.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                </div>
                <div className="form-group">
                   <label>Phone Number</label>
                   <input type="tel" placeholder="9876543210" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                </div>
                <div className="form-group">
                   <label>Temporary Password</label>
                   <input type="password" placeholder="••••••••" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
                </div>
                <div className="form-group">
                   <label>Account Role</label>
                   <select value={form.role} onChange={e => setForm({...form, role: e.target.value})}>
                     <option value="guard">Security Guard</option>
                     <option value="resident">Resident</option>
                     <option value="admin">Administrator</option>
                   </select>
                </div>
                {form.role === "resident" && (
                  <div className="form-group">
                     <label>Flat Number</label>
                     <input type="text" placeholder="101" value={form.flat_no} onChange={e => setForm({...form, flat_no: e.target.value})} required />
                  </div>
                )}
                <button type="submit" className="btn-signin" disabled={loading} style={{ background: "#6366f1", marginTop: "1rem" }}>
                  {loading ? 'Processing...' : '+ Provision Account'}
                </button>
             </form>
           </div>
        </div>
      )}
    </>
  );

  const renderFullLogs = () => (
    <>
      <div style={{ marginBottom: "1.5rem" }}>
         <h2 style={{ fontSize: "1.5rem", color: "#0f172a", margin: "0 0 0.5rem 0" }}>Full Logs</h2>
         <p style={{ color: "#64748b", margin: 0 }}>Complete audit trail of all visitor entries</p>
      </div>

      <div className="dash-table-wrapper" style={{ padding: "1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
           <h3 style={{ margin: 0, fontSize: "1.1rem" }}>All Records <span style={{color: "#64748b", fontWeight: 400, fontSize: "0.9rem"}}>({visits.length} total)</span></h3>
           <div style={{ display: "flex", gap: "1rem" }}>
             <input type="text" placeholder="🔍 Search visitor, flat, wing..." style={{ padding: "0.5rem 1rem", border: "1px solid #e2e8f0", borderRadius: "8px", minWidth: "250px" }} />
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
                <th>Flat</th>
                <th>Wing</th>
                <th>Type</th>
                <th>Guard</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {visits.length === 0 ? (
                <tr><td colSpan="9" style={{textAlign: "center", color: "#94a3b8"}}>No log records found</td></tr>
              ) : (
                visits.map(v => (
                  <tr key={v.visit_id}>
                    <td style={{ fontWeight: 500 }}>{v.visitor_name}</td>
                    <td>{v.phone_no || '—'}</td>
                    <td>{v.flat_no || '—'}</td>
                    <td>{v.wing || '—'}</td>
                    <td>{v.purpose}</td>
                    <td style={{color: "#64748b"}}>Guard<br/>Rajesh</td> {/* Mocked Guard Name like screenshot */}
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
      <div className="dash-form-card" style={{ marginBottom: "2rem" }}>
        <div className="settings-section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          Profile Information
        </div>
        <div className="settings-section-desc">Your account details</div>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" readOnly value={currentUser?.name || "xyzw"} />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" readOnly value={currentUser?.email || "xyzw@gmail.com"} />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" readOnly value="1234567898" />
          </div>
          <div className="form-group">
            <label>Role</label>
            <input type="text" readOnly value="Admin" />
          </div>
        </div>
      </div>

      <div className="dash-form-card">
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
            <strong>Admin Portal</strong>
          </div>
        </div>

        <nav className="dash-nav">
          <button 
            className={`dash-nav-item ${activeTab === 'analytics_users' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics_users')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            Analytics & Users
          </button>
          
          <button 
            className={`dash-nav-item ${activeTab === 'full_logs' ? 'active' : ''}`}
            onClick={() => setActiveTab('full_logs')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            Full Logs
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
        <header className="dash-topbar" style={{ padding: "1.5rem 2.5rem" }}>
          <h1>
            {activeTab === 'analytics_users' && 'Analytics & Users'}
            {activeTab === 'full_logs' && 'Full Logs'}
            {activeTab === 'settings' && 'Settings'}
          </h1>
        </header>

        <main className="dash-main" style={{ padding: "2rem 2.5rem" }}>
           {activeTab === 'analytics_users' && renderAnalyticsUsers()}
           {activeTab === 'full_logs' && renderFullLogs()}
           {activeTab === 'settings' && renderSettings()}
        </main>
      </div>
    </div>
  );
}