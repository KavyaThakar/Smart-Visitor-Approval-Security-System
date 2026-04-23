import React from "react";

export default function AdminReports() {
  return (
    <div className="portal-container" style={{ maxWidth: "1000px", padding: "3rem" }}>
      <header style={{ marginBottom: "3rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "2rem", margin: "0 0 0.5rem 0", color: "var(--text-main)" }}>Activity Reports</h1>
        <p style={{ color: "var(--text-muted)", margin: 0 }}>Review historical traffic and incident logs.</p>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        <div className="page-box">
          <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Weekly Gate Traffic</h2>
          {/* Simple CSS graph mockup */}
          <div style={{ height: "150px", display: "flex", alignItems: "flex-end", gap: "10%", padding: "1rem", background: "var(--bg-main)", borderRadius: "8px" }}>
             <div style={{ width: "15%", height: "40%", background: "var(--primary)" }}></div>
             <div style={{ width: "15%", height: "80%", background: "var(--primary)" }}></div>
             <div style={{ width: "15%", height: "30%", background: "var(--primary)" }}></div>
             <div style={{ width: "15%", height: "90%", background: "var(--primary)" }}></div>
             <div style={{ width: "15%", height: "60%", background: "var(--primary)" }}></div>
          </div>
        </div>

        <div className="page-box" style={{ background: "var(--primary)", color: "white" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "white" }}>Generate PDF Export</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem" }}>Download a complete 30-day manifest of all entries, exits, and rejected visitors for compliance auditing.</p>
          <button style={{ padding: "0.75rem 1.5rem", background: "white", color: "var(--primary)", border: "none", borderRadius: "8px", fontWeight: "700", cursor: "pointer" }}>
            Download Log (.pdf)
          </button>
        </div>
      </div>
    </div>
  );
}
