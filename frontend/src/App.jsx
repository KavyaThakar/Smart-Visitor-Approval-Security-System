import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import SidebarLayout from "./components/SidebarLayout";
import Guard from "./pages/Guard";
import GuardEmergency from "./pages/GuardEmergency";
import GuardStaff from "./pages/GuardStaff";
import Resident from "./pages/Resident";
import ResidentHistory from "./pages/ResidentHistory";
import ResidentFamily from "./pages/ResidentFamily";
import Admin from "./pages/Admin";
import AdminReports from "./pages/AdminReports";
import AdminSettings from "./pages/AdminSettings";

import Login from "./pages/Login";
import Register from "./pages/Register";

const PrivateRoute = ({ role, children }) => {
  const user = JSON.parse(window.localStorage.getItem("currentUser") || "null");
  if (!user) return <Navigate to="/login" />;
  if (role && role !== user.role) return <Navigate to="/login" />;
  
  // Skip the sidebar entirely for Guards
  if (role === "guard") {
     return <>{children}</>;
  }

  // Wrap protected children in the global sidebar layout for Admin & Resident
  return (
    <SidebarLayout role={user.role}>
      {children}
    </SidebarLayout>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* GUARD ROUTES */}
        <Route path="/" element={<PrivateRoute role="guard"><Guard /></PrivateRoute>} />
        <Route path="/guard/emergency" element={<PrivateRoute role="guard"><GuardEmergency /></PrivateRoute>} />
        <Route path="/guard/staff" element={<PrivateRoute role="guard"><GuardStaff /></PrivateRoute>} />

        {/* RESIDENT ROUTES */}
        <Route path="/resident" element={<PrivateRoute role="resident"><Resident /></PrivateRoute>} />
        <Route path="/resident/history" element={<PrivateRoute role="resident"><ResidentHistory /></PrivateRoute>} />
        <Route path="/resident/family" element={<PrivateRoute role="resident"><ResidentFamily /></PrivateRoute>} />

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<PrivateRoute role="admin"><Admin /></PrivateRoute>} />
        <Route path="/admin/reports" element={<PrivateRoute role="admin"><AdminReports /></PrivateRoute>} />
        <Route path="/admin/settings" element={<PrivateRoute role="admin"><AdminSettings /></PrivateRoute>} />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;