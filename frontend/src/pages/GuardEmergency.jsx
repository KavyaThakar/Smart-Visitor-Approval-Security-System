import React from "react";

export default function GuardEmergency() {
  return (
    <div className="portal-container" style={{ maxWidth: "1000px", padding: "3rem" }}>
      <header style={{ marginBottom: "3rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "2rem", margin: "0 0 0.5rem 0", color: "var(--danger)" }}>🚨 Emergency Contacts</h1>
        <p style={{ color: "var(--text-muted)", margin: 0 }}>Immediate dispatch numbers. DO NOT misuse.</p>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
        <div className="page-box" style={{ background: "#fef2f2", border: "2px solid #fca5a5", textAlign: "center", padding: "3rem 1rem" }}>
          <h2 style={{ fontSize: "1.5rem", color: "#b91c1c" }}>Local Police</h2>
          <p style={{ fontSize: "3rem", fontWeight: "900", margin: "1rem 0", color: "#991b1b" }}>100</p>
          <button style={{ background: "#dc2626", color: "white", padding: "0.75rem 2rem", borderRadius: "8px", border: "none", fontWeight: "700" }}>Dispatch</button>
        </div>
        <div className="page-box" style={{ background: "#eff6ff", border: "2px solid #93c5fd", textAlign: "center", padding: "3rem 1rem" }}>
          <h2 style={{ fontSize: "1.5rem", color: "#1d4ed8" }}>Ambulance</h2>
          <p style={{ fontSize: "3rem", fontWeight: "900", margin: "1rem 0", color: "#1e3a8a" }}>108</p>
          <button style={{ background: "#2563eb", color: "white", padding: "0.75rem 2rem", borderRadius: "8px", border: "none", fontWeight: "700" }}>Dispatch</button>
        </div>
        <div className="page-box" style={{ background: "#fffbeb", border: "2px solid #fcd34d", textAlign: "center", padding: "3rem 1rem" }}>
          <h2 style={{ fontSize: "1.5rem", color: "#b45309" }}>Fire Brigade</h2>
          <p style={{ fontSize: "3rem", fontWeight: "900", margin: "1rem 0", color: "#92400e" }}>101</p>
          <button style={{ background: "#d97706", color: "white", padding: "0.75rem 2rem", borderRadius: "8px", border: "none", fontWeight: "700" }}>Dispatch</button>
        </div>
      </div>
    </div>
  );
}
