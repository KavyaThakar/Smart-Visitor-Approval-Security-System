import React from "react";

export default function AdminSettings() {
  return (
    <div className="portal-container" style={{ maxWidth: "1000px", padding: "3rem" }}>
      <header style={{ marginBottom: "3rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "2rem", margin: "0 0 0.5rem 0", color: "var(--text-main)" }}>System Configuration</h1>
        <p style={{ color: "var(--text-muted)", margin: 0 }}>Manage global security settings and integrations.</p>
      </header>

      <div className="page-box">
        <h2 style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>Gate Access Rules</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", background: "var(--bg-main)", borderRadius: "8px" }}>
            <div>
              <strong style={{ display: "block" }}>Require OTP for Delivery Agents</strong>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Enforce strict OTP verification for swiggy/zomato.</span>
            </div>
            <input type="checkbox" defaultChecked style={{ width: "20px", height: "20px" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", background: "var(--bg-main)", borderRadius: "8px" }}>
            <div>
              <strong style={{ display: "block" }}>Auto-Reject after 15 Minutes</strong>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Cancel visitor request if resident does not respond.</span>
            </div>
            <input type="checkbox" defaultChecked style={{ width: "20px", height: "20px" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", background: "var(--bg-main)", borderRadius: "8px" }}>
            <div>
              <strong style={{ display: "block" }}>Enable Night Lockdown</strong>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Only pre-approved guests allowed between 11 PM and 6 AM.</span>
            </div>
            <input type="checkbox" style={{ width: "20px", height: "20px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
