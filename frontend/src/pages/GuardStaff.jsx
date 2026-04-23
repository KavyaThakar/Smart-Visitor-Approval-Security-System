import React from "react";

export default function GuardStaff() {
  const staff = [
    { name: "Rajesh Kumar", role: "Plumber", phone: "9876543210", status: "On Duty" },
    { name: "Sunita Devi", role: "Housekeeping", phone: "8765432109", status: "Off Duty" },
    { name: "Amit Singh", role: "Electrician", phone: "7654321098", status: "On Duty" },
    { name: "Mohammad Ali", role: "Lift Technician", phone: "6543210987", status: "On Call" }
  ];

  return (
    <div className="portal-container" style={{ maxWidth: "1000px", padding: "3rem" }}>
      <header style={{ marginBottom: "3rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "2rem", margin: "0 0 0.5rem 0", color: "var(--text-main)" }}>Maintenance Staff</h1>
        <p style={{ color: "var(--text-muted)", margin: 0 }}>Approved internal workers and service personnel.</p>
      </header>

      <div className="page-box">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Trade / Role</th>
              <th>Contact Number</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((s, i) => (
              <tr key={i}>
                <td style={{ fontWeight: "700" }}>{s.name}</td>
                <td style={{ color: "var(--text-muted)" }}>{s.role}</td>
                <td style={{ color: "var(--text-muted)" }}>{s.phone}</td>
                <td>
                  <span className={`status-badge ${s.status === 'On Duty' ? 'status-approved' : s.status === 'Off Duty' ? 'status-rejected' : 'status-pending'}`}>
                    {s.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
