import React from "react";

export default function ResidentFamily() {
  return (
    <div className="portal-container" style={{ maxWidth: "1000px", padding: "3rem" }}>
      <header style={{ marginBottom: "3rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "2rem", margin: "0 0 0.5rem 0", color: "var(--text-main)" }}>Family Members</h1>
        <p style={{ color: "var(--text-muted)", margin: 0 }}>Manage residents who share the same flat profile.</p>
      </header>

      <div className="page-box">
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
          <li style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem", border: "1px solid var(--border-color)", borderRadius: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "40px", height: "40px", background: "var(--primary-light)", color: "var(--primary)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800" }}>P</div>
              <div>
                <strong style={{ display: "block", fontSize: "1.1rem" }}>Primary User</strong>
                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Account Owner</span>
              </div>
            </div>
            <span style={{ fontSize: "0.75rem", background: "var(--primary)", color: "white", padding: "4px 8px", borderRadius: "99px", fontWeight: "700" }}>OWNER</span>
          </li>

          <li style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", border: "2px dashed var(--border-color)", borderRadius: "8px", cursor: "pointer", color: "var(--text-muted)" }}>
            <span style={{ fontWeight: "600" }}>+ Add Family Member</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
