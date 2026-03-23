import { useEffect, useState } from "react";
import "../App.css";

export default function Guard() {
  const [form, setForm] = useState({
    visitor_name: "",
    visitor_phone: "",
    flat_id: "",
    visitor_type: "delivery",
    purpose: "",
    company_name: ""
  });
  const [stats, setStats] = useState({ pending: 2, approved: 5, rejected: 1 });
  const [visits, setVisits] = useState([
    { visit_id: 1, visitor_name: "John Doe", purpose: "Delivery", status: "pending" },
    { visit_id: 2, visitor_name: "Pushpa", purpose: "Guest", status: "approved" }
  ]);

  const user = JSON.parse(window.localStorage.getItem("currentUser") || "null");

  const submit = () => {
    if (!form.visitor_name || !form.visitor_phone || !form.flat_id || !form.purpose) {
      alert("Please fill all required fields");
      return;
    }
    const next = visits.length + 1;
    setVisits([...visits, { visit_id: next, visitor_name: form.visitor_name, purpose: form.purpose, status: "pending" }]);
    setForm({ visitor_name: "", visitor_phone: "", flat_id: "", visitor_type: "delivery", purpose: "", company_name: "" });
    setStats({ ...stats, pending: stats.pending + 1 });
    alert("Visitor Added Successfully!");
  };

  const logout = () => {
    window.localStorage.clear();
    window.location = "/login";
  };

  return (
    <div className="portal-container">
      <header className="portal-header">
        <div className="portal-title">
          <h1>🛡️ Guard Portal</h1>
        </div>
        <div className="portal-user-info">
          <span>{user?.email}</span>
          <button className="btn-logout" onClick={logout}>Logout</button>
        </div>
      </header>

      <div className="portal-content">
        <div className="portal-row">
          <div className="portal-col-6">
            <div className="page-box">
              <h2>Today's Dashboard</h2>
              <div className="stats-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
                <div className="stats-card">
                  <div className="stat-number" style={{ color: "#fbbf24" }}>{stats.pending}</div>
                  <div className="stat-label">Pending</div>
                </div>
                <div className="stats-card">
                  <div className="stat-number" style={{ color: "#10b981" }}>{stats.approved}</div>
                  <div className="stat-label">Approved</div>
                </div>
                <div className="stats-card">
                  <div className="stat-number" style={{ color: "#ef4444" }}>{stats.rejected}</div>
                  <div className="stat-label">Rejected</div>
                </div>
              </div>
            </div>
          </div>

          <div className="portal-col-6">
            <div className="page-box">
              <h2>New Visitor Entry</h2>
              <form onSubmit={e => { e.preventDefault(); submit(); }}>
                <div className="form-group">
                  <label>Visitor Name *</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.visitor_name}
                    onChange={e => setForm({ ...form, visitor_name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Phone *</label>
                  <input
                    type="tel"
                    placeholder="9876543210"
                    value={form.visitor_phone}
                    onChange={e => setForm({ ...form, visitor_phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Flat ID *</label>
                  <input
                    type="text"
                    placeholder="101"
                    value={form.flat_id}
                    onChange={e => setForm({ ...form, flat_id: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select value={form.visitor_type} onChange={e => setForm({ ...form, visitor_type: e.target.value })}>
                    <option value="delivery">Delivery</option>
                    <option value="guest">Guest</option>
                    <option value="service">Service</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Purpose *</label>
                  <input
                    type="text"
                    placeholder="Package delivery, visit, etc."
                    value={form.purpose}
                    onChange={e => setForm({ ...form, purpose: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Company (Optional)</label>
                  <input
                    type="text"
                    placeholder="Company name"
                    value={form.company_name}
                    onChange={e => setForm({ ...form, company_name: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn-signin">Add Visitor</button>
              </form>
            </div>
          </div>
        </div>

        <div className="page-box">
          <h2>Today's Visitor List</h2>
          <div className="visits-list">
            {visits.length === 0 ? (
              <p style={{ textAlign: "center", color: "#9ca3af" }}>No visitors recorded yet</p>
            ) : (
              visits.map(v => (
                <div key={v.visit_id} className="visit-card">
                  <div className="visit-header">
                    <strong>{v.visitor_name}</strong>
                    <span className={`status-badge status-${v.status}`}>{v.status.toUpperCase()}</span>
                  </div>
                  <p className="visit-purpose">{v.purpose}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}