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

  return (
    <div className="portal-container">
      <header className="portal-header">
        <div className="portal-title">
          <h1>🏠 Resident Portal</h1>
        </div>
        <div className="portal-user-info">
          <span>{user?.flat_no ? `Flat ${user.flat_no}` : "Flat Not Set"} • {user?.email}</span>
          <button className="btn-logout" onClick={logout}>Logout</button>
        </div>
      </header>

      <div className="portal-content">
        <div className="stats-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          <div className="stats-card">
            <div className="stat-number" style={{ color: "#3b82f6" }}>{stats.total}</div>
            <div className="stat-label">Total Visits</div>
          </div>
          <div className="stats-card">
            <div className="stat-number" style={{ color: "#fbbf24" }}>{stats.pending}</div>
            <div className="stat-label">Action Required</div>
          </div>
          <div className="stats-card">
            <div className="stat-number" style={{ color: "#8b5cf6" }}>{stats.expected}</div>
            <div className="stat-label">Expected Guests</div>
          </div>
        </div>

        <div className="portal-row">
          <div className="portal-col-6">
            <div className="page-box" style={{ borderLeft: "4px solid #f59e0b" }}>
              <h2>⚠️ Action Required (Pending)</h2>
              <div className="visits-list">
                {loading ? <p style={{ textAlign: "center", color: "#9ca3af" }}>Loading network data...</p> :
                  (pendingVisits.length === 0 ? (
                    <p style={{ textAlign: "center", color: "#9ca3af", padding: "1rem" }}>No pending approvals right now.</p>
                  ) : (
                    pendingVisits.map(v => (
                      <div key={v.visit_id} className="visit-card" style={{ background: "rgba(251, 191, 36, 0.05)" }}>
                        <div className="visit-header">
                          <div>
                            <strong>{v.visitor_name}</strong>
                            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", margin: "4px 0 0 0" }}>{v.purpose}</p>
                          </div>
                          <span className={`status-badge status-${v.status}`}>{v.status.toUpperCase()}</span>
                        </div>
                        <div className="action-buttons">
                          <button onClick={() => approve(v.visit_id)} className="btn-approve">✓ Approve</button>
                          <button onClick={() => reject(v.visit_id)} className="btn-reject">✕ Reject</button>
                        </div>
                      </div>
                    ))
                  ))
                }
              </div>
            </div>

            <div className="page-box" style={{ marginTop: "1.5rem" }}>
              <h2>Pre-Approve a Visitor</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                Expecting someone? Pre-approve them so they don't have to wait at the gate.
              </p>
              <form onSubmit={e => { e.preventDefault(); submitPreApprove(); }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 1rem" }}>
                  <div className="form-group" style={{ gridColumn: "span 2" }}>
                    <label>Guest Name *</label>
                    <input type="text" placeholder="Full Name" value={preForm.name} onChange={e => setPreForm({ ...preForm, name: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>Expected Date *</label>
                    <input type="date" value={preForm.date} onChange={e => setPreForm({ ...preForm, date: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>Expected Time *</label>
                    <input type="time" value={preForm.time} onChange={e => setPreForm({ ...preForm, time: e.target.value })} />
                  </div>
                  <div className="form-group" style={{ gridColumn: "span 2" }}>
                    <label>Purpose / Note</label>
                    <input type="text" placeholder="e.g. Birthday Party, Fixing AC" value={preForm.purpose} onChange={e => setPreForm({ ...preForm, purpose: e.target.value })} />
                  </div>
                </div>
                <button type="submit" className="btn-signin" disabled={loading} style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)", marginTop: "0.5rem" }}>
                  {loading ? 'Connecting...' : 'Generate Entry Pass'}
                </button>
              </form>
            </div>
          </div>

          <div className="portal-col-6">
            <div className="page-box">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <h2 style={{ margin: 0 }}>Visit History</h2>
                <select value={historyFilter} onChange={e => setHistoryFilter(e.target.value)} style={{ width: "auto", padding: "0.5rem", marginBottom: 0 }}>
                  <option value="all">All Past Visits</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>

              <div className="visits-list">
                {expectedVisits.map(v => (
                  <div key={v.visit_id} className="visit-card" style={{ borderLeft: "3px solid #8b5cf6", background: "rgba(139, 92, 246, 0.05)" }}>
                    <div className="visit-header">
                      <div>
                        <strong>{v.visitor_name}</strong>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: "4px 0 0 0" }}>{v.purpose}</p>
                      </div>
                      <span className="status-badge" style={{ background: "#ede9fe", color: "#8b5cf6", border: "1px solid #ddd6fe" }}>EXPECTED</span>
                    </div>
                    <p style={{ margin: "10px 0 0", fontSize: "0.85rem", color: "var(--text-main)", fontWeight: "600" }}>⏱ Expected at: {new Date(v.check_in_time).toLocaleString()}</p>
                  </div>
                ))}

                {filteredHistory.length === 0 ? (
                  <p style={{ textAlign: "center", color: "#9ca3af", padding: "2rem" }}>No past visits to display</p>
                ) : (
                  filteredHistory.map(v => (
                    <div key={v.visit_id} className="visit-card">
                      <div className="visit-header">
                        <div>
                          <strong>{v.visitor_name}</strong>
                          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: "4px 0 0 0" }}>{v.purpose}</p>
                        </div>
                        <span className={`status-badge status-${v.status}`}>{v.status.toUpperCase()}</span>
                      </div>
                      <p style={{ margin: "10px 0 0", fontSize: "0.85rem", color: "var(--text-muted)" }}>{new Date(v.check_in_time).toLocaleString()}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
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