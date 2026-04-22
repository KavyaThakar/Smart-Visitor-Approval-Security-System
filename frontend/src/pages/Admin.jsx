import { useState, useEffect } from "react";
import API from "../api";
import "../App.css";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");
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
      setVisits(visitRes.data);
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

  // Quick stats
  const totalVisits = visits.length;
  const pendingVisits = visits.filter(v => v.status === "pending").length;
  const expectedVisits = visits.filter(v => v.status === "expected").length;

  return (
    <div className="portal-container" style={{ maxWidth: "1600px", padding: "2rem" }}>
      
      {/* PROFESSIONAL ADMIN HEADER */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border-color)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <div style={{ background: "linear-gradient(135deg, var(--button-dark) 0%, #0f172a 100%)", color: "white", padding: "0.75rem", borderRadius: "14px", boxShadow: "0 10px 15px -3px rgba(15, 23, 42, 0.2)" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4.9V12c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V6.9L12 2z"/></svg>
          </div>
          <div>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--text-main)", margin: 0, letterSpacing: "-0.05em" }}>V-Guard System</h1>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", margin: 0, fontWeight: "500" }}>Global Administration Console</p>
          </div>
        </div>
      </header>

      <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        
        {/* MAIN CONTENT AREA: DASHBOARD */}
        <div style={{ animation: "fadeIn 0.3s ease" }}>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>System Overview</h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", marginBottom: "3rem" }}>
            <div style={{ background: "white", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-sm)" }}>
              <p style={{ textTransform: "uppercase", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-muted)", letterSpacing: "0.05em", margin: "0 0 8px 0" }}>Total Traffic</p>
              <p style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--text-main)", margin: 0, letterSpacing: "-0.05em" }}>{totalVisits}</p>
            </div>
            <div style={{ background: "white", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border-color)", borderBottom: "4px solid var(--success)", boxShadow: "var(--shadow-sm)" }}>
              <p style={{ textTransform: "uppercase", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-muted)", letterSpacing: "0.05em", margin: "0 0 8px 0" }}>Approved Entry</p>
              <p style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--success)", margin: 0, letterSpacing: "-0.05em" }}>{visits.filter(v=>v.status==='approved').length}</p>
            </div>
            <div style={{ background: "white", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border-color)", borderBottom: "4px solid var(--warning)", boxShadow: "var(--shadow-sm)" }}>
              <p style={{ textTransform: "uppercase", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-muted)", letterSpacing: "0.05em", margin: "0 0 8px 0" }}>Gate Queue</p>
              <p style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--warning)", margin: 0, letterSpacing: "-0.05em" }}>{pendingVisits}</p>
            </div>
            <div style={{ background: "white", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border-color)", borderBottom: "4px solid var(--primary)", boxShadow: "var(--shadow-sm)" }}>
              <p style={{ textTransform: "uppercase", fontSize: "0.8rem", fontWeight: "700", color: "var(--text-muted)", letterSpacing: "0.05em", margin: "0 0 8px 0" }}>Expected Passes</p>
              <p style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)", margin: 0, letterSpacing: "-0.05em" }}>{expectedVisits}</p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "2rem" }}>
            <div style={{ background: "white", borderRadius: "16px", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-md)", overflow: "hidden" }}>
              <div style={{ padding: "1.5rem 2rem", borderBottom: "1px solid var(--border-color)", background: "var(--bg-main)" }}>
                 <h3 style={{ margin: 0, fontSize: "1.25rem" }}>Global Access Log</h3>
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--border-color)" }}>
                    <th style={{ padding: "1rem 2rem", fontSize: "0.85rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: "700", letterSpacing: "0.05em" }}>Timestamp</th>
                    <th style={{ padding: "1rem 2rem", fontSize: "0.85rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: "700", letterSpacing: "0.05em" }}>Identity</th>
                    <th style={{ padding: "1rem 2rem", fontSize: "0.85rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: "700", letterSpacing: "0.05em" }}>Destination</th>
                    <th style={{ padding: "1rem 2rem", fontSize: "0.85rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: "700", letterSpacing: "0.05em" }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {loading && visits.length === 0 ? (
                    <tr><td colSpan="4" style={{ textAlign: "center", padding: "3rem", color: "var(--text-muted)" }}>Connecting to database...</td></tr>
                  ) : visits.map(v => (
                    <tr key={v.visit_id} style={{ borderBottom: "1px solid var(--border-color)", transition: "background 0.2s" }} onMouseOver={e => e.currentTarget.style.background="var(--bg-main)"} onMouseOut={e => e.currentTarget.style.background="white"}>
                      <td style={{ padding: "1.25rem 2rem", color: "var(--text-muted)", fontWeight: "500" }}>{new Date(v.check_in_time).toLocaleString([], {month:'short', day:'numeric', hour:'2-digit', minute:'2-digit'})}</td>
                      <td style={{ padding: "1.25rem 2rem" }}>
                        <strong style={{ display: "block", color: "var(--text-main)", fontSize: "1.05rem" }}>{v.visitor_name}</strong>
                        <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{v.purpose}</span>
                      </td>
                      <td style={{ padding: "1.25rem 2rem", color: "var(--text-main)", fontWeight: "600" }}>{v.flat_no ? `Flat ${v.flat_no}` : "—"}</td>
                      <td style={{ padding: "1.25rem 2rem" }}>
                        <span className={`status-badge status-${v.status}`} style={{ padding: "0.5rem 1rem", borderRadius: "8px" }}>
                          {v.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ background: "var(--button-dark)", borderRadius: "16px", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-md)", overflow: "hidden", color: "white" }}>
              <div style={{ padding: "2rem" }}>
                <h3 style={{ margin: 0, fontSize: "1.25rem", color: "white" }}>Volume Telemetry</h3>
                <p style={{ color: "#94a3b8", fontSize: "0.95rem", marginTop: "0.5rem" }}>Automated network traffic distribution.</p>
                
                <div style={{ display: "flex", alignItems: "flex-end", height: "180px", gap: "10%", marginTop: "2rem", borderBottom: "1px solid #475569" }}>
                  <div style={{ width: "20%", height: "30%", background: "#475569", borderRadius: "6px 6px 0 0" }}></div>
                  <div style={{ width: "20%", height: "90%", background: "var(--primary)", borderRadius: "6px 6px 0 0", position: "relative" }}>
                    <span style={{ position: "absolute", top: "-30px", left: "50%", transform: "translateX(-50%)", background: "white", color: "black", padding: "4px 8px", borderRadius: "4px", fontSize: "0.75rem", fontWeight: "bold" }}>PEAK</span>
                  </div>
                  <div style={{ width: "20%", height: "55%", background: "#475569", borderRadius: "6px 6px 0 0" }}></div>
                  <div style={{ width: "20%", height: "70%", background: "var(--primary-light)", borderRadius: "6px 6px 0 0" }}></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "#cbd5e1", marginTop: "1rem", fontWeight: "700", letterSpacing: "0.05em" }}>
                  <span>08:00</span>
                  <span>13:00</span>
                  <span>17:00</span>
                  <span>20:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT AREA: USERS DIRECTORY */}
        <div style={{ animation: "fadeIn 0.3s ease" }}>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>System Directory & Provisioning</h2>
          <div style={{ background: "white", borderRadius: "16px", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-md)", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 450px" }}>
              
              {/* LEFT: User Directory */}
              <div style={{ borderRight: "1px solid var(--border-color)", padding: "2rem" }}>
                <h3 style={{ margin: "0 0 2rem 0", fontSize: "1.5rem" }}>Network Directory</h3>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid var(--border-color)" }}>
                      <th style={{ padding: "0 0 1rem 0", fontSize: "0.85rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: "700" }}>Identity</th>
                      <th style={{ padding: "0 0 1rem 0", fontSize: "0.85rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: "700" }}>Role</th>
                      <th style={{ padding: "0 0 1rem 0", fontSize: "0.85rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: "700", textAlign: "right" }}>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading && users.length === 0 ? (
                      <tr><td colSpan="3" style={{ textAlign: "center", padding: "3rem" }}>Fetching directory...</td></tr>
                    ) : users.map((u, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid var(--border-color)" }}>
                        <td style={{ padding: "1.25rem 0" }}>
                          <strong style={{ display: "block", fontSize: "1.1rem", color: "var(--text-main)", marginBottom: "4px" }}>{u.name}</strong>
                          <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{u.email}</span>
                        </td>
                        <td style={{ padding: "1.25rem 0" }}>
                          <span style={{ 
                            background: u.role === "admin" ? "var(--warning-bg)" : u.role === "guard" ? "var(--primary-light)" : "var(--success-bg)",
                            color: u.role === "admin" ? "#b45309" : u.role === "guard" ? "var(--primary)" : "var(--success)",
                            padding: "0.5rem 1rem", borderRadius: "8px", fontSize: "0.8rem", fontWeight: "800", textTransform: "uppercase"
                          }}>
                            {u.role}
                          </span>
                        </td>
                        <td style={{ padding: "1.25rem 0", textAlign: "right", fontWeight: "600", color: "var(--text-main)" }}>
                          {u.flat_number ? `Flat ${u.flat_number}` : "Global"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* RIGHT: Provisioning Form */}
              <div style={{ padding: "2rem", background: "var(--bg-main)" }}>
                <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.5rem" }}>Provision Credential</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "2rem" }}>Create a new system access profile.</p>
                
                <form onSubmit={e => { e.preventDefault(); handleProvision(); }} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                   <div className="form-group" style={{ margin: 0 }}>
                      <label style={{ fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700", color: "var(--text-muted)", letterSpacing: "0.05em" }}>Full Name</label>
                      <input type="text" placeholder="Jane Doe" value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={{ padding: "1rem", fontSize: "1rem", border: "2px solid var(--border-color)", background: "white", borderRadius: "8px" }} />
                   </div>
                   <div className="form-group" style={{ margin: 0 }}>
                      <label style={{ fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700", color: "var(--text-muted)", letterSpacing: "0.05em" }}>Email Address</label>
                      <input type="email" placeholder="jane@society.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={{ padding: "1rem", fontSize: "1rem", border: "2px solid var(--border-color)", background: "white", borderRadius: "8px" }} />
                   </div>
                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                     <div className="form-group" style={{ margin: 0 }}>
                        <label style={{ fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700", color: "var(--text-muted)", letterSpacing: "0.05em" }}>Phone</label>
                        <input type="tel" placeholder="987654321" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} style={{ padding: "1rem", fontSize: "1rem", border: "2px solid var(--border-color)", background: "white", borderRadius: "8px" }} />
                     </div>
                     <div className="form-group" style={{ margin: 0 }}>
                        <label style={{ fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700", color: "var(--text-muted)", letterSpacing: "0.05em" }}>Password</label>
                        <input type="password" placeholder="••••••••" value={form.password} onChange={e => setForm({...form, password: e.target.value})} style={{ padding: "1rem", fontSize: "1rem", border: "2px solid var(--border-color)", background: "white", borderRadius: "8px" }} />
                     </div>
                   </div>
                   
                   <div className="form-group" style={{ margin: 0 }}>
                      <label style={{ fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700", color: "var(--text-muted)", letterSpacing: "0.05em" }}>System Authority</label>
                      <select value={form.role} onChange={e => setForm({...form, role: e.target.value})} style={{ padding: "1rem", fontSize: "1rem", border: "2px solid var(--border-color)", background: "white", borderRadius: "8px" }}>
                        <option value="guard">Security Guard</option>
                        <option value="resident">Resident</option>
                        <option value="admin">Administrator</option>
                      </select>
                   </div>

                   {form.role === "resident" && (
                     <div className="form-group" style={{ margin: 0, animation: "fadeIn 0.2s" }}>
                        <label style={{ fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "700", color: "var(--text-muted)", letterSpacing: "0.05em" }}>Assigned Flat</label>
                        <input type="text" placeholder="101" value={form.flat_no} onChange={e => setForm({...form, flat_no: e.target.value})} required style={{ padding: "1rem", fontSize: "1rem", border: "2px solid var(--border-color)", background: "var(--primary-light)", borderRadius: "8px" }} />
                     </div>
                   )}

                   <button type="submit" className="btn-signin" disabled={loading} style={{ background: "var(--button-dark)", color: "white", padding: "1.25rem", fontSize: "1.1rem", borderRadius: "12px", marginTop: "1rem", boxShadow: "var(--shadow-md)" }}>
                     {loading ? 'Processing...' : 'Provision Credential ➔'}
                   </button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}