import { useEffect, useState } from "react";
import "../App.css";

export default function Admin() {
  const [data, setData] = useState({ pending: 3, approved: 6, rejected: 1, per_wing: [{ wing_name: 'A', count: 5 }, { wing_name: 'B', count: 3 }] });
  const [wingFilter, setWingFilter] = useState("");
  const [visits, setVisits] = useState([
    { visit_id: 1, visitor_name: 'John', flat_id: '101', wing_name: 'A', status: 'pending', check_in_time: '2026-03-20T10:00:00Z' },
    { visit_id: 2, visitor_name: 'Alice', flat_id: '102', wing_name: 'B', status: 'approved', check_in_time: '2026-03-19T08:00:00Z' },
    { visit_id: 3, visitor_name: 'Bob', flat_id: '103', wing_name: 'A', status: 'rejected', check_in_time: '2026-03-18T13:00:00Z' }
  ]);

  const user = JSON.parse(window.localStorage.getItem("currentUser") || "null");

  const filteredVisits = visits.filter(v => {
    if (wingFilter && v.wing_name !== wingFilter) return false;
    return true;
  });

  const logout = () => {
    window.localStorage.clear();
    window.location = "/login";
  };

  return (
    <div className="portal-container">
      <header className="portal-header">
        <div className="portal-title">
          <h1>⚙️ Admin Dashboard</h1>
        </div>
        <div className="portal-user-info">
          <span>{user?.email}</span>
          <button className="btn-logout" onClick={logout}>Logout</button>
        </div>
      </header>

      <div className="portal-content">
        <div className="stats-grid">
          <div className="stats-card">
            <div className="stat-number" style={{ color: "#fbbf24" }}>{data.pending}</div>
            <div className="stat-label">Pending</div>
          </div>
          <div className="stats-card">
            <div className="stat-number" style={{ color: "#10b981" }}>{data.approved}</div>
            <div className="stat-label">Approved</div>
          </div>
          <div className="stats-card">
            <div className="stat-number" style={{ color: "#ef4444" }}>{data.rejected}</div>
            <div className="stat-label">Rejected</div>
          </div>
        </div>

        <div className="portal-row">
          <div className="portal-col-6">
            <div className="page-box">
              <h2>Per Wing Breakdown</h2>
              <div className="wing-breakdown">
                {data.per_wing?.map((w, idx) => (
                  <div key={idx} className="wing-item">
                    <span className="wing-label">Wing {w.wing_name}</span>
                    <span className="wing-count">{w.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="portal-col-6">
            <div className="page-box">
              <h2>Quick Filters</h2>
              <div className="form-group">
                <label>Filter by Wing</label>
                <select value={wingFilter} onChange={e => setWingFilter(e.target.value)}>
                  <option value="">All wings</option>
                  {data.per_wing?.map((w) => (<option key={w.wing_name} value={w.wing_name}>Wing {w.wing_name}</option>))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="page-box">
          <h2>Visit History</h2>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Visitor</th>
                  <th>Wing</th>
                  <th>Flat</th>
                  <th>Status</th>
                  <th>Check-in Time</th>
                </tr>
              </thead>
              <tbody>
                {filteredVisits.map(v => (
                  <tr key={v.visit_id} className={`status-row-${v.status}`}>
                    <td>#{v.visit_id}</td>
                    <td><strong>{v.visitor_name}</strong></td>
                    <td>{v.wing_name}</td>
                    <td>{v.flat_id}</td>
                    <td><span className={`status-badge status-${v.status}`}>{v.status.toUpperCase()}</span></td>
                    <td>{new Date(v.check_in_time).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}