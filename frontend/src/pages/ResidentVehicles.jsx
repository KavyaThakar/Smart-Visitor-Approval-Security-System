import React from "react";

export default function ResidentVehicles() {
  return (
    <div className="portal-container" style={{ maxWidth: "1000px", padding: "3rem" }}>
      <header style={{ marginBottom: "3rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "2rem", margin: "0 0 0.5rem 0", color: "var(--text-main)" }}>My Registered Vehicles</h1>
        <p style={{ color: "var(--text-muted)", margin: 0 }}>Vehicles pre-approved for immediate gate opening via ANPR cameras.</p>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        <div className="page-box" style={{ padding: "2rem", borderTop: "4px solid var(--primary)" }}>
          <h2 style={{ fontSize: "1.25rem", margin: "0 0 0.5rem 0" }}>Toyota Innova</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: "0 0 1rem 0" }}>4-Wheeler Car</p>
          <div style={{ background: "#f8fafc", border: "2px solid #cbd5e1", padding: "1rem", textAlign: "center", borderRadius: "8px" }}>
            <span style={{ fontSize: "1.5rem", fontWeight: "800", letterSpacing: "0.1em", color: "#334155" }}>MH 01 AB 1234</span>
          </div>
          <span style={{ display: "inline-block", marginTop: "1.5rem", background: "var(--success-bg)", color: "var(--success)", padding: "0.25rem 0.75rem", borderRadius: "99px", fontSize: "0.75rem", fontWeight: "700" }}>RFID ACTIVE</span>
        </div>

        <div className="page-box" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "2px dashed var(--border-color)", background: "transparent", color: "var(--text-muted)", padding: "3rem 1rem", cursor: "pointer" }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "1rem" }}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          <h2 style={{ fontSize: "1.1rem", margin: 0 }}>Register New Vehicle</h2>
        </div>
      </div>
    </div>
  );
}
