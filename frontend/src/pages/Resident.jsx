import { useState, useEffect } from "react";
import API from "../api";
import "../App.css";

export default function Resident() {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [preForm, setPreForm] = useState({ name: "", date: new Date().toISOString().split("T")[0], time: "", purpose: "" });
  const [historyFilter, setHistoryFilter] = useState("all");

  const user = JSON.parse(window.localStorage.getItem("currentUser") || "null");

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
    // Poll every 10 seconds for real-time vibe
    const interval = setInterval(fetchVisits, 10000);
    return () => clearInterval(interval);
  }, []);

  const myVisits = visits.filter(v => v.flat_no === user?.flat_no);
  
  const pendingVisits = myVisits.filter(v => v.status === "pending");
  const expectedVisits = myVisits.filter(v => v.status === "expected");
  const historyVisits = myVisits.filter(v => v.status === "approved" || v.status === "rejected");
  const filteredHistory = historyFilter === "all" ? historyVisits : historyVisits.filter(v => v.status === historyFilter);

  const stats = {
    total: myVisits.length,
    pending: pendingVisits.length,
    expected: expectedVisits.length
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

  const submitPreApprove = async () => {
    if (!preForm.name || !preForm.date || !preForm.time) {
      alert("Please fill name, date, and time");
      return;
    }
    try {
      await API.post("/visit/expected", {
        name: preForm.name,
        date: preForm.date,
        time: preForm.time,
        purpose: preForm.purpose
      });
      setPreForm({ name: "", date: new Date().toISOString().split("T")[0], time: "", purpose: "" });
      fetchVisits();
      alert("Guest Pre-Approved Successfully. The guard has been notified.");
    } catch (err) {
      alert("Error generating expected pass: " + (err.response?.data?.error || err.message));
    }
  };

  const logout = () => {
    window.localStorage.clear();
    window.location = "/login";
  };

  return (
    <div className="portal-container" style={{ maxWidth: "1200px" }}>
      <header className="portal-header" style={{ marginBottom: "3rem" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
            <div style={{ background: "var(--primary-light)", color: "var(--primary)", padding: "12px", borderRadius: "12px" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <h1 style={{ fontSize: "2.2rem", fontWeight: "800", letterSpacing: "-0.05em", color: "var(--text-main)", margin: 0 }}>My Residence</h1>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", margin: 0 }}>
            {user?.flat_no ? `Flat ${user.flat_no}` : "Flat Not Set"} &mdash; {user?.email}
          </p>
        </div>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", alignItems: "start" }}>
        
        {/* LEFT COLUMN: URGENT ACTIONS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <div className="page-box" style={{ background: pendingVisits.length > 0 ? "var(--warning-bg)" : "var(--bg-surface)", border: pendingVisits.length > 0 ? "2px solid var(--warning)" : "1px solid var(--border-color)", padding: "2rem" }}>
            <h2 style={{ fontSize: "1.25rem", color: pendingVisits.length > 0 ? "#b45309" : "var(--text-main)", display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {pendingVisits.length > 0 ? "🔴 Action Required!" : "✔️ No Pending Approvals"}
            </h2>
            <div className="visits-list">
              {loading ? <p style={{ color: "var(--text-muted)" }}>Loading...</p> : 
                (pendingVisits.length === 0 ? (
                  <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>You are all caught up. No visitors are currently waiting at the gate.</p>
                ) : (
                  pendingVisits.map(v => (
                    <div key={v.visit_id} style={{ background: "white", padding: "1.5rem", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-md)", border: "1px solid var(--warning-border)", marginBottom: "1rem" }}>
                      <div style={{ marginBottom: "1.5rem" }}>
                        <strong style={{ fontSize: "1.5rem", display: "block", color: "var(--text-main)", marginBottom: "4px" }}>{v.visitor_name}</strong>
                        <span style={{ fontSize: "1.05rem", color: "var(--text-muted)" }}>Purpose: {v.purpose}</span>
                      </div>
                      <div style={{ display: "flex", gap: "1rem" }}>
                        <button onClick={() => approve(v.visit_id)} style={{ flex: 1, padding: "1rem", background: "var(--success)", color: "white", borderRadius: "8px", fontWeight: "800", fontSize: "1.1rem", border: "none", cursor: "pointer", boxShadow: "0 4px 6px -1px rgba(16, 185, 129, 0.2)" }}>
                          GRANT ENTRY
                        </button>
                        <button onClick={() => reject(v.visit_id)} style={{ flex: 1, padding: "1rem", background: "white", color: "var(--danger)", border: "2px solid var(--danger)", borderRadius: "8px", fontWeight: "800", fontSize: "1.1rem", cursor: "pointer" }}>
                          DENY
                        </button>
                      </div>
                    </div>
                  ))
                ))
              }
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: ENTRY PASS FORM */}
        <div className="page-box" style={{ padding: "2.5rem 2rem", boxShadow: "var(--shadow-md)" }}>
           <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Pre-Approve Guest</h2>
           <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "2rem" }}>Generate an expected entry pass for quick clearance.</p>
           <form onSubmit={e => { e.preventDefault(); submitPreApprove(); }} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div className="form-group" style={{ margin: 0 }}>
                <label style={{ color: "var(--text-muted)", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "0.05em", fontWeight: "700" }}>Guest Full Name</label>
                <input type="text" placeholder="e.g. Michael Scott" value={preForm.name} onChange={e => setForm({ ...preForm, name: e.target.value })} style={{ border: "2px solid var(--border-color)", background: "white", padding: "1rem", fontSize: "1rem", borderRadius: "8px" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label style={{ color: "var(--text-muted)", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "0.05em", fontWeight: "700" }}>Date</label>
                  <input type="date" value={preForm.date} onChange={e => setForm({ ...preForm, date: e.target.value })} style={{ border: "2px solid var(--border-color)", background: "white", padding: "1rem", fontSize: "1rem", borderRadius: "8px" }} />
                </div>
                <div className="form-group" style={{ margin: 0 }}>
                  <label style={{ color: "var(--text-muted)", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "0.05em", fontWeight: "700" }}>Time</label>
                  <input type="time" value={preForm.time} onChange={e => setForm({ ...preForm, time: e.target.value })} style={{ border: "2px solid var(--border-color)", background: "white", padding: "1rem", fontSize: "1rem", borderRadius: "8px" }} />
                </div>
              </div>
              <div className="form-group" style={{ margin: 0 }}>
                <label style={{ color: "var(--text-muted)", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "0.05em", fontWeight: "700" }}>Purpose of Visit (Optional)</label>
                <input type="text" placeholder="e.g. Plumber, Birthday Party" value={preForm.purpose} onChange={e => setForm({ ...preForm, purpose: e.target.value })} style={{ border: "2px solid var(--border-color)", background: "white", padding: "1rem", fontSize: "1rem", borderRadius: "8px" }} />
              </div>
              <button type="submit" className="btn-signin" disabled={loading} style={{ background: "var(--primary)", padding: "1.25rem", fontSize: "1.1rem", borderRadius: "12px", marginTop: "1rem" }}>
                {loading ? 'Processing...' : 'Create Pre-Approved Pass ➔'}
              </button>
           </form>
        </div>

      </div>
    </div>
  );
}