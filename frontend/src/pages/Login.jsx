import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import "../styles/Auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const user = JSON.parse(window.localStorage.getItem("currentUser") || "null");
    if (token && user) {
      navigate("/" + (user.role === "admin" ? "admin" : user.role === "resident" ? "resident" : ""));
    }
  }, [navigate]);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await API.post("/login", { email, password });
      const { token, user } = response.data;

      window.localStorage.setItem("token", token);
      window.localStorage.setItem("currentUser", JSON.stringify(user));
      window.localStorage.setItem("role", user.role);

      // Redirect based on user role
      if (user.role === "guard") navigate("/");
      else if (user.role === "resident") navigate("/resident");
      else if (user.role === "admin") navigate("/admin");
    } catch (err) {
      setError(err.response?.data?.error || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="auth-brand">
          <div className="brand-logo">🛡️</div>
          <h1>Smart Visitor</h1>
          <p>Enterprise-grade visitor management and security monitoring platform</p>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-box">
          <h2>Welcome back</h2>
          <p className="auth-subtitle">Sign in to your security dashboard</p>

          <form onSubmit={submit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="error-msg">{error}</p>}

            <button type="submit" className="btn-signin" disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="auth-footer">
            <p>Don't have an account? <a href="#" onClick={e => { e.preventDefault(); navigate("/register"); }}>Sign Up</a></p>
          </div>

          <p className="security-note">🔒 Protected by enterprise-grade encryption</p>
        </div>
      </div>
    </div>
  );
}
