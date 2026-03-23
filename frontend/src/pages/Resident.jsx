import { useState } from "react";
import "../App.css";

export default function Resident() {
  const [visits, setVisits] = useState([
    { visit_id: 1, visitor_name: "John Doe", purpose: "Delivery", status: "pending", check_in_time: "2026-03-20T10:00:00" },
    { visit_id: 2, visitor_name: "Alice", purpose: "Guest", status: "approved", check_in_time: "2026-03-20T09:00:00" }
  ]);
  const [status, setStatus] = useState("pending");

  const user = JSON.parse(window.localStorage.getItem("currentUser") || "null");

  const filtered = visits.filter(v => (status ? v.status === status : true));

  const approve = (id) => {
    setVisits(visits.map(v => v.visit_id === id ? { ...v, status: "approved" } : v));
  };

  const reject = (id) => {
    setVisits(visits.map(v => v.visit_id === id ? { ...v, status: "rejected" } : v));
  };

  const logout = () => {
    window.localStorage.clear();
    window.location = "/login";
  };

  return (
    <div className="portal-container">
      <header className="portal-header">
        <div className="portal-title">
          <h1>👤 Resident Portal</h1>
        </div>
        <div className="portal-user-info">
          <span>{user?.email}</span>
          <button className="btn-logout" onClick={logout}>Logout</button>
        </div>
      </header>

      <div className="portal-content">
        <div className="page-box">
          <h2>Pending Visitor Approvals</h2>
          
          <div className="filter-section">
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label>Filter by Status</label>
              <select value={status} onChange={e => setStatus(e.target.value)}>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="">All</option>
              </select>
            </div>
          </div>

          <div className="visits-list">
            {filtered.length === 0 ? (
              <p style={{ textAlign: "center", color: "#9ca3af", padding: "2rem" }}>No visitors to display</p>
            ) : (
              filtered.map(v => (
                <div key={v.visit_id} className="visit-card">
                  <div className="visit-header">
                    <div>
                      <strong>{v.visitor_name}</strong>
                      <p style={{ fontSize: "0.9rem", color: "#9ca3af", margin: "4px 0 0 0" }}>Purpose: {v.purpose}</p>
                    </div>
                    <span className={`status-badge status-${v.status}`}>{v.status.toUpperCase()}</span>
                  </div>
                  {v.status === "pending" && (
                    <div className="action-buttons">
                      <button
                        onClick={() => approve(v.visit_id)}
                        className="btn-approve"
                      >
                        ✓ Approve
                      </button>
                      <button
                        onClick={() => reject(v.visit_id)}
                        className="btn-reject"
                      >
                        ✕ Reject
                      </button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}