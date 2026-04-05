import { useState, useEffect } from "react";
import API from "../api";
import "../App.css";

export default function Resident() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(window.localStorage.getItem("currentUser") || "null");

  const fetchVisits = async () => {
    try {
      const { data } = await API.get("/visits/global");
      const sorted = data.sort((a, b) => new Date(b.check_in_time) - new Date(a.check_in_time));
      setVisits(sorted);
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

  const myVisits = visits.filter(v => v.flat_no === user?.flat_no);
  const pendingVisits = myVisits.filter(v => v.status === "pending");

  const stats = {
    total: myVisits.length,
    pending: pendingVisits.length,
    flat: user?.flat_no || "N/A"
  };

  const approve = async (id) => {
    try {
      await API.put(`/visit/${id}/approve`);
      fetchVisits();
    } catch (err) {
      alert("Error approving visit. " + (err.response?.data?.error || err.message));
    }
  };

  const reject = async (id) => {
    try {
      await API.put(`/visit/${id}/reject`);
      fetchVisits();
    } catch (err) {
      alert("Error rejecting visit. " + (err.response?.data?.error || err.message));
    }
  };

  const logout = () => {
    window.localStorage.clear();
    window.location = "/login";
  };

  /* ─── Dashboard Tab ─── */
  const renderDashboard = () => (
    <>
      {/* Stats Row */}
      <div className="dash-stats-row" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        <div className="resident-stat-card resident-stat-blue">
          <label>Total Visits</label>
          <strong>{stats.total}</strong>
        </div>
        <div className="resident-stat-card resident-stat-orange">
          <label>Action Required</label>
          <strong>{stats.pending}</strong>
        </div>
        <div className="resident-stat-card resident-stat-flat">
          <label>Flat Number</label>
          <strong style={{ fontSize: "1.75rem" }}>{stats.flat}</strong>
        </div>
      </div>

      {/* Pending Approvals */}
      <div className="dash-form-card" style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.25rem" }}>Pending Approvals</h2>
        <p style={{ color: "#64748b", fontSize: "0.85rem", margin: "0 0 1.5rem 0" }}>Visitors at the gate awaiting your approval</p>

        <div style={{ overflowX: "auto" }}>
          <table className="dash-table">
            <thead>
              <tr>
                <th>Visitor</th>
                <th>Phone</th>
                <th>Purpose</th>
                <th>Date</th>
                <th>Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingVisits.length === 0 ? (
                <tr><td colSpan="6" style={{ textAlign: "center", color: "#94a3b8", padding: "2rem" }}>No pending approvals right now</td></tr>
              ) : (
                pendingVisits.map(v => (
                  <tr key={v.visit_id}>
                    <td style={{ fontWeight: 500 }}>{v.visitor_name}</td>
                    <td>{v.phone_no || '—'}</td>
                    <td>{v.purpose}</td>
                    <td>{new Date(v.check_in_time).toISOString().split('T')[0]}</td>
                    <td>{new Date(v.check_in_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                    <td>
                      <div style={{ display: "flex", gap: "0.5rem" }}>
                        <button className="btn-pill-approve" onClick={() => approve(v.visit_id)}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                          Approve
                        </button>
                        <button className="btn-pill-reject" onClick={() => reject(v.visit_id)}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Visit History (compact) */}
      <div className="dash-table-wrapper" style={{ padding: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.25rem" }}>Visit History</h2>
        <p style={{ color: "#64748b", fontSize: "0.85rem", margin: "0 0 1.5rem 0" }}>Recent visitors to your flat</p>

        <div style={{ overflowX: "auto" }}>
          <table className="dash-table">
            <thead>
              <tr>
                <th>Visitor</th>
                <th>Phone</th>
                <th>Type</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {myVisits.filter(v => v.status !== "pending").length === 0 ? (
                <tr><td colSpan="6" style={{ textAlign: "center", color: "#94a3b8", padding: "2rem" }}>No visit history yet</td></tr>
              ) : (
                myVisits.filter(v => v.status !== "pending").slice(0, 5).map(v => (
                  <tr key={v.visit_id}>
                    <td style={{ fontWeight: 500 }}>{v.visitor_name}</td>
                    <td>{v.phone_no || '—'}</td>
                    <td>{v.purpose}</td>
                    <td>{new Date(v.check_in_time).toISOString().split('T')[0]}</td>
                    <td>{new Date(v.check_in_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
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

  /* ─── History Tab ─── */
  const renderHistory = () => (
    <>
      <div style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#0f172a", margin: "0 0 0.5rem 0" }}>Visit History</h2>
        <p style={{ color: "#64748b", margin: 0 }}>All visitor records for your flat</p>
      </div>

      <div className="dash-table-wrapper" style={{ padding: "1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <h3 style={{ margin: 0, fontSize: "1.1rem" }}>All Visits</h3>
          <input type="text" placeholder="🔍 Search visitor..." style={{ padding: "0.5rem 1rem", border: "1px solid #e2e8f0", borderRadius: "8px", minWidth: "220px" }} />
        </div>

        <div style={{ overflowX: "auto" }}>
          <table className="dash-table">
            <thead>
              <tr>
                <th>Visitor</th>
                <th>Phone</th>
                <th>Type</th>
                <th>Vehicle</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {myVisits.length === 0 ? (
                <tr><td colSpan="7" style={{ textAlign: "center", color: "#94a3b8", padding: "2rem" }}>No records found</td></tr>
              ) : (
                myVisits.map(v => (
                  <tr key={v.visit_id}>
                    <td style={{ fontWeight: 500 }}>{v.visitor_name}</td>
                    <td>{v.phone_no || '—'}</td>
                    <td>{v.purpose}</td>
                    <td>{v.vehicle_no || '—'}</td>
                    <td>{new Date(v.check_in_time).toISOString().split('T')[0]}</td>
                    <td>{new Date(v.check_in_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
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

  /* ─── Settings Tab ─── */
  const renderSettings = () => (
    <div style={{ maxWidth: "800px" }}>
      {/* Profile Information */}
      <div className="dash-form-card" style={{ marginBottom: "2rem" }}>
        <div className="settings-section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          Profile Information
        </div>
        <div className="settings-section-desc">Your account details</div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" readOnly value={user?.name || "abc"} />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" readOnly value={user?.email || "abc@gmail.com"} />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" readOnly value="1234567898" />
          </div>
          <div className="form-group">
            <label>Role</label>
            <input type="text" readOnly value="Resident" />
          </div>
          <div className="form-group" style={{ gridColumn: "span 2" }}>
            <label>Flat Number</label>
            <input type="text" readOnly value={user?.flat_no || "A-101"} />
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
            <span style={{ color: "#1e293b", fontWeight: 500 }}>Smart Visitor Approval System</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 0", borderBottom: "1px solid #f1f5f9", color: "#64748b" }}>
            <span>Account ID</span>
            <span style={{ color: "#1e293b", fontWeight: 500 }}>#10</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 0", color: "#64748b" }}>
            <span>Member Since</span>
            <span style={{ color: "#1e293b", fontWeight: 500 }}>April 2026</span>
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
            <strong>Resident Portal</strong>
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

      {/* Main */}
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