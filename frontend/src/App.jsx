import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Guard from "./pages/Guard";
import Resident from "./pages/Resident";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";

const PrivateRoute = ({ role, children }) => {
  const user = JSON.parse(window.localStorage.getItem("currentUser") || "null");
  if (!user) return <Navigate to="/login" />;
  if (role && role !== user.role) return <Navigate to="/login" />;
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <PrivateRoute role="guard">
              <Guard />
            </PrivateRoute>
          }
        />

        <Route
          path="/resident"
          element={
            <PrivateRoute role="resident">
              <Resident />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <PrivateRoute role="admin">
              <Admin />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;