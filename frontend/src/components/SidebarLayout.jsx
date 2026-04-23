import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SidebarLayout({ children, role }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const user = JSON.parse(window.localStorage.getItem("currentUser") || "null");

  const logout = () => {
    window.localStorage.clear();
    window.location = "/login";
  };

  const getLinks = () => {
    if (role === "admin") {
      return [
        { name: "Live Dashboard", path: "/admin" },
        { name: "Activity Reports", path: "/admin/reports" },
        { name: "System Settings", path: "/admin/settings" }
      ];
    }
    if (role === "guard") {
      return [
        { name: "Security Terminal", path: "/" },
        { name: "Emergency Contacts", path: "/guard/emergency" },
        { name: "Staff Directory", path: "/guard/staff" }
      ];
    }
    if (role === "resident") {
      return [
        { name: "My Dashboard", path: "/resident" },
        { name: "Visit History", path: "/resident/history" },
        { name: "Family Members", path: "/resident/family" }
      ];
    }
    return [];
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "var(--bg-main)", overflow: "hidden" }}>
      
      {/* Mobile Overlay */}
      <div 
        className={`sidebar-overlay ${isMobileMenuOpen ? "open" : ""}`} 
        onClick={closeMenu}
      />

      {/* Sidebar */}
      <aside className={`app-sidebar ${isMobileMenuOpen ? "open" : ""}`}>
        <div style={{ padding: "2rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <h2 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "800", letterSpacing: "-0.05em", color: "white", display: "flex", alignItems: "center", gap: "10px" }}>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
             VisitorGuard
          </h2>
          <p style={{ margin: "5px 0 0", fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{role} Portal</p>
        </div>
        
        <nav style={{ padding: "2rem 1rem", flexGrow: 1, display: "flex", flexDirection: "column", gap: "0.5rem", overflowY: "auto" }}>
          {getLinks().map(link => {
            const isActive = location.pathname === link.path;
            const linkStyle = {
               padding: "1rem 1.25rem",
               borderRadius: "8px",
               color: isActive ? "white" : "rgba(255,255,255,0.7)",
               background: isActive ? "rgba(255,255,255,0.15)" : "transparent",
               textDecoration: "none",
               fontWeight: isActive ? "700" : "500",
               transition: "all 0.2s ease"
            };

            return (
              <Link key={link.path} to={link.path} style={linkStyle} onClick={closeMenu}>
                {link.name}
              </Link>
            )
          })}
        </nav>

        <div style={{ padding: "2rem", borderTop: "1px solid rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.2)" }}>
          <div style={{ marginBottom: "1.25rem" }}>
            <p style={{ margin: 0, fontWeight: "700", fontSize: "0.95rem" }}>{user?.name || user?.email}</p>
            <p style={{ margin: "4px 0 0", fontSize: "0.8rem", color: "rgba(255,255,255,0.6)" }}>{user?.flat_no ? `Flat ${user.flat_no}` : role.toUpperCase()}</p>
          </div>
          <button 
            onClick={logout} 
            style={{ width: "100%", padding: "0.75rem", background: "rgba(239, 68, 68, 0.2)", color: "#fca5a5", border: "1px solid rgba(239, 68, 68, 0.3)", borderRadius: "8px", cursor: "pointer", fontWeight: "700", transition: "all 0.2s" }}
            onMouseOver={e => e.currentTarget.style.background = "rgba(239, 68, 68, 0.3)"}
            onMouseOut={e => e.currentTarget.style.background = "rgba(239, 68, 68, 0.2)"}
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <main style={{ flexGrow: 1, height: "100vh", overflowY: "auto", position: "relative" }}>
        {/* Mobile Hamburger Button */}
        <button className="mobile-toggle-btn" onClick={() => setIsMobileMenuOpen(true)}>
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        {children}
      </main>
    </div>
  );
}
