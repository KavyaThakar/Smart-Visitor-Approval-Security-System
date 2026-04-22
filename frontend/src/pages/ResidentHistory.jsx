import { useState, useEffect } from "react";
import API from "../api";
import "../App.css";

export default function ResidentHistory() {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);
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
  }, []);

  const myVisits = visits.filter(v => v.flat_no === user?.flat_no);
  const historyVisits = myVisits.filter(v => v.status === "approved" || v.status === "rejected" || v.status === "expected");
  const filteredHistory = historyFilter === "all" ? historyVisits : historyVisits.filter(v => v.status === historyFilter);

  return (
    <div className="portal-container" style={{ maxWidth: "1000px", padding: "3rem" }}>
      <header style={{ marginBottom: "3rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
           <h1 style={{ fontSize: "2rem", margin: "0 0 0.5rem 0", color: "var(--text-main)" }}>Visit History</h1>
           <p style={{ color: "var(--text-muted)", margin: 0 }}>Review past visitors and expected arrivals.</p>
        </div>
        <select value={historyFilter} onChange={e => setHistoryFilter(e.target.value)} style={{ padding: "0.5rem 1rem", background: "var(--bg-main)", border: "1px solid var(--border-color)", borderRadius: "var(--radius-sm)", fontWeight: "600", fontSize: "0.95rem" }}>
          <option value="all">All Records</option>
          <option value="expected">Expected</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </header>

      <div className="page-box" style={{ padding: 0, overflow: "hidden" }}>
        {loading ? <p style={{ textAlign: "center", color: "var(--text-muted)", padding: "2rem" }}>Loading history...</p> : 
          filteredHistory.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--text-muted)", padding: "2rem" }}>No visit history found.</p>
          ) : (
             <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead style={{ background: "var(--bg-surface)" }}>
                  <tr style={{ borderBottom: "2px solid var(--border-color)" }}>
                    <th style={{ padding: "1.25rem 1.5rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: "700", fontSize: "0.85rem", letterSpacing: "0.05em" }}>Date & Time</th>
                    <th style={{ padding: "1.25rem 1.5rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: "700", fontSize: "0.85rem", letterSpacing: "0.05em" }}>Visitor Name</th>
                    <th style={{ padding: "1.25rem 1.5rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: "700", fontSize: "0.85rem", letterSpacing: "0.05em" }}>Purpose</th>
                    <th style={{ padding: "1.25rem 1.5rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: "700", fontSize: "0.85rem", letterSpacing: "0.05em", textAlign: "right" }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredHistory.map(v => (
                    <tr key={v.visit_id} style={{ borderBottom: "1px solid var(--border-color)", transition: "background 0.2s" }} onMouseOver={e=>e.currentTarget.style.background="var(--bg-main)"} onMouseOut={e=>e.currentTarget.style.background="white"}>
                      <td style={{ padding: "1.25rem 1.5rem", color: "var(--text-muted)", fontWeight: "500" }}>{new Date(v.check_in_time).toLocaleString([], {weekday: 'short', month: 'short', day: 'numeric', hour:'2-digit', minute:'2-digit'})}</td>
                      <td style={{ padding: "1.25rem 1.5rem", fontWeight: "700", color: "var(--text-main)", fontSize: "1.05rem" }}>{v.visitor_name}</td>
                      <td style={{ padding: "1.25rem 1.5rem", color: "var(--text-muted)" }}>{v.purpose || "—"}</td>
                      <td style={{ padding: "1.25rem 1.5rem", textAlign: "right" }}>
                        <span style={{ fontSize: "0.75rem", display: "inline-block", background: v.status === 'approved' ? "var(--success-bg)" : v.status === 'rejected' ? "var(--danger-bg)" : "var(--primary-light)", color: v.status === 'approved' ? "var(--success)" : v.status === 'rejected' ? "var(--danger)" : "var(--primary)", padding: "0.5rem 1rem", borderRadius: "8px", fontWeight: "800", letterSpacing: "0.05em" }}>
                          {v.status.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
             </table>
          )
        }
      </div>
    </div>
  );
}
