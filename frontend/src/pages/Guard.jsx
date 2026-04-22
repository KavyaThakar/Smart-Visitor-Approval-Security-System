import { useState, useEffect } from "react";
import API from "../api";
import "../App.css";

export default function Guard() {
  const [form, setForm] = useState({
    name: "",
    phone_no: "",
    flat_no: "",
    vehicle_no: "",
    vehicle_type: "None",
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
    rejected: activeVisits.filter(v => v.status === "rejected").length
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
         vehicle_no: form.vehicle_no,
         vehicle_type: form.vehicle_type,
         entry_date: form.entry_date,
         entry_time: form.entry_time
      });
      setForm({ 
        name: "", phone_no: "", flat_no: "", vehicle_no: "", vehicle_type: "None",
        entry_date: new Date().toISOString().split("T")[0],
        entry_time: new Date().toTimeString().split(" ")[0].slice(0, 5)
      });
      fetchVisits();
      alert("Visitor Added Successfully!");
    } catch (err) {
      alert("Failed to add visitor: " + (err.response?.data?.error || err.message));
    }
  };

  const handleMarkArrived = async (expected_id) => {
    try {
       await API.put(`/visit/${expected_id}/arrive`);
       fetchVisits();
       alert("Marked as Arrived and Approved!");
    } catch (err) {
       alert("Failed to mark arrived: " + (err.response?.data?.error || err.message));
    }
  };

  const logout = () => {
    window.localStorage.clear();
    window.location = "/login";
  };

  return (
    <div className="portal-container" style={{ maxWidth: "1600px", background: "var(--bg-main)" }}>
      <header className="portal-header" style={{ marginBottom: "1.5rem" }}>
        <div className="portal-title">
          <div style={{ background: "var(--button-dark)", color: "white", padding: "0.5rem", borderRadius: "10px", display: "flex" }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h1 style={{ fontSize: "1.8rem", fontWeight: "800", letterSpacing: "-0.05em" }}>Security Terminal</h1>
        </div>
        <div className="portal-user-info">
          <span style={{ fontWeight: "700", color: "var(--text-main)" }}>Operator: {user?.email}</span>
          <button className="btn-logout" onClick={logout}>Sign Out</button>
        </div>
      </header>

      <div className="portal-content" style={{ display: "grid", gridTemplateColumns: "1fr 450px", gap: "2rem", alignItems: "start" }}>
        
        {/* LEFT COLUMN: LIVE FEED */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          
          <div className="stats-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            <div className="stats-card" style={{ borderTop: "4px solid var(--warning)", padding: "1.25rem 1.5rem" }}>
              <div className="stat-label">Pending Approval</div>
              <div className="stat-number" style={{ color: "var(--warning)", fontSize: "2.5rem" }}>{stats.pending}</div>
            </div>
            <div className="stats-card" style={{ borderTop: "4px solid var(--success)", padding: "1.25rem 1.5rem" }}>
              <div className="stat-label">Granted Entry</div>
              <div className="stat-number" style={{ color: "var(--success)", fontSize: "2.5rem" }}>{stats.approved}</div>
            </div>
            <div className="stats-card" style={{ borderTop: "4px solid var(--danger)", padding: "1.25rem 1.5rem" }}>
              <div className="stat-label">Rejected</div>
              <div className="stat-number" style={{ color: "var(--danger)", fontSize: "2.5rem" }}>{stats.rejected}</div>
            </div>
          </div>

          <div className="page-box" style={{ padding: "0", overflow: "hidden", border: "1px solid var(--border-color)", borderTop: "4px solid var(--primary)" }}>
            <div style={{ padding: "1.5rem", background: "var(--bg-surface)", borderBottom: "1px solid var(--border-color)" }}>
              <h2 style={{ margin: 0, fontSize: "1.25rem" }}>Expected Arrivals (Pre-Approved)</h2>
            </div>
            <div style={{ padding: "1.5rem", background: "var(--bg-main)" }}>
                {loading ? <p style={{ textAlign: "center", color: "var(--text-muted)" }}>Connecting to server...</p> : 
                  (expectedVisits.length === 0 ? (
                    <p style={{ textAlign: "center", color: "var(--text-muted)", padding: "1rem" }}>No expected guests scheduled.</p>
                  ) : (
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
                      {expectedVisits.map(v => (
                        <div key={v.visit_id} className="visit-card" style={{ background: "var(--bg-surface)", border: "1px solid #c7d2fe", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                          <div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                              <strong style={{ fontSize: "1.1rem" }}>{v.visitor_name}</strong>
                              <span style={{ fontSize: "0.75rem", background: "#eef2ff", color: "#4f46e5", padding: "4px 8px", borderRadius: "4px", fontWeight: "800" }}>EXPECTED</span>
                            </div>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>To: Flat {v.flat_no}</p>
                            <p style={{ color: "var(--text-main)", fontSize: "0.85rem", fontWeight: "600", marginTop: "8px" }}>Time: {new Date(v.check_in_time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                          </div>
                          <button onClick={() => handleMarkArrived(v.visit_id)} className="btn-signin" style={{ background: "var(--primary)", padding: "0.6rem", marginTop: "1rem" }}>
                            Quick Admit
                          </button>
                        </div>
                      ))}
                    </div>
                  ))
                }
            </div>
          </div>

          <div className="page-box" style={{ padding: "0", overflow: "hidden" }}>
             <div style={{ padding: "1.5rem", background: "var(--bg-surface)", borderBottom: "1px solid var(--border-color)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ margin: 0, fontSize: "1.25rem" }}>Live Access Log</h2>
            </div>
            <div>
                {activeVisits.length === 0 ? (
                  <p style={{ textAlign: "center", color: "var(--text-muted)", padding: "3rem 1rem" }}>No activity logged today.</p>
                ) : (
                  <table className="data-table" style={{ margin: 0 }}>
                    <tbody>
                      {activeVisits.map(v => (
                        <tr key={v.visit_id} style={{ transition: "all 0.2s" }} className="hover-row">
                          <td style={{ padding: "1rem 1.5rem", width: "100px", color: "var(--text-muted)", fontWeight: "600", borderRight: "1px solid var(--border-color)" }}>
                            {new Date(v.check_in_time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                          </td>
                          <td style={{ padding: "1rem 1.5rem" }}>
                            <div style={{ fontWeight: "700", color: "var(--text-main)", fontSize: "1.05rem" }}>{v.visitor_name}</div>
                            <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "4px" }}>Flat {v.flat_no} &mdash; {v.purpose}</div>
                          </td>
                          <td style={{ padding: "1rem 1.5rem", textAlign: "right" }}>
                            <span className={`status-badge status-${v.status}`} style={{ padding: "6px 12px", borderRadius: "6px" }}>{v.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: KIOSK FORM */}
        <div className="page-box" style={{ position: "sticky", top: "2rem", borderTop: "6px solid var(--button-dark)", padding: "2.5rem 2rem", boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Register Walk-in</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "2rem", lineHeight: "1.5" }}>Enter visitor details to initiate resident approval request.</p>
          
          <form onSubmit={e => { e.preventDefault(); submit(); }} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            
            <div className="form-group" style={{ margin: 0 }}>
              <label style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)" }}>Visitor Full Name <span style={{color: "var(--danger)"}}>*</span></label>
              <input type="text" placeholder="e.g. John Doe" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} 
                style={{ fontSize: "1.1rem", padding: "0.85rem", border: "2px solid var(--border-color)", backgroundColor: "white" }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
              <div className="form-group" style={{ margin: 0 }}>
                <label style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)" }}>Phone No <span style={{color: "var(--danger)"}}>*</span></label>
                <input type="tel" placeholder="9876543210" value={form.phone_no} onChange={e => setForm({ ...form, phone_no: e.target.value })} 
                  style={{ fontSize: "1.1rem", padding: "0.85rem", border: "2px solid var(--border-color)", backgroundColor: "white" }} />
              </div>
              <div className="form-group" style={{ margin: 0 }}>
                <label style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)" }}>Flat No <span style={{color: "var(--danger)"}}>*</span></label>
                <input type="text" placeholder="101" value={form.flat_no} onChange={e => setForm({ ...form, flat_no: e.target.value })} 
                  style={{ fontSize: "1.1rem", padding: "0.85rem", border: "2px solid var(--border-color)", backgroundColor: "white" }} />
              </div>
            </div>

            <div style={{ height: "1px", background: "var(--border-color)", margin: "0.5rem 0" }}></div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
              <div className="form-group" style={{ margin: 0 }}>
                <label style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)" }}>Vehicle Number</label>
                <input type="text" placeholder="Optional" value={form.vehicle_no} onChange={e => setForm({ ...form, vehicle_no: e.target.value })} 
                  style={{ fontSize: "1rem", padding: "0.85rem", border: "2px solid var(--border-color)", backgroundColor: "white" }} />
              </div>
              <div className="form-group" style={{ margin: 0 }}>
                <label style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)" }}>Vehicle Type</label>
                <select value={form.vehicle_type} onChange={e => setForm({ ...form, vehicle_type: e.target.value })}
                  style={{ fontSize: "1rem", padding: "0.85rem", border: "2px solid var(--border-color)", backgroundColor: "white" }}>
                  <option value="None">None</option>
                  <option value="2-Wheeler">2-Wheeler</option>
                  <option value="4-Wheeler">4-Wheeler</option>
                </select>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
              <div className="form-group" style={{ margin: 0 }}>
                <label style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)" }}>Date</label>
                <input type="date" value={form.entry_date} onChange={e => setForm({ ...form, entry_date: e.target.value })}
                  style={{ fontSize: "1rem", padding: "0.85rem", border: "2px solid var(--border-color)", backgroundColor: "white" }} />
              </div>
              <div className="form-group" style={{ margin: 0 }}>
                <label style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)" }}>Time</label>
                <input type="time" value={form.entry_time} onChange={e => setForm({ ...form, entry_time: e.target.value })}
                  style={{ fontSize: "1rem", padding: "0.85rem", border: "2px solid var(--border-color)", backgroundColor: "white" }} />
              </div>
            </div>

            <button type="submit" className="btn-signin" disabled={loading} style={{ marginTop: "1rem", padding: "1.25rem", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {loading ? 'Processing...' : 'SEND APPROVAL REQUEST ➔'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}