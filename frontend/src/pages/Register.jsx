import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import "../styles/Auth.css";

export default function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("resident");
  const [flatNo, setFlatNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
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
    setSuccess("");

    // Validation
    if (!name || !phone || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (!/^\d+$/.test(phone) || phone.length < 10) {
      setError("Phone must be at least 10 digits");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      // Call register API
      const payload = {
        name,
        email,
        phone,
        password,
        role,
        ...(role === "resident" && { flat_no: flatNo })
      };
      console.log("Sending registration data:", payload);
      
      const response = await API.post("/register", payload);
      console.log("Registration response:", response.data);

      setSuccess("Account created successfully! Redirecting to login...");
      setError("");

      // Redirect to login after 1.5 seconds
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      console.error("Registration error details:", {
        message: err.message,
        status: err.response?.status,
        data: err.response?.data,
        config: err.config?.url
      });
      setError(err.response?.data?.error || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left" style={{ background: "linear-gradient(rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.9)), url('/lobby-bg.png') center/cover no-repeat" }}>
        <div className="auth-brand">
          <div className="brand-header">
            <div className="brand-logo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shield-icon"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <span className="brand-name">VisitorGuard</span>
          </div>
          <h1>Join VisitorGuard</h1>
          <p>Create your account to manage visitor access for your residential community.</p>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-box" style={{ maxWidth: '480px' }}>
          <h2 className="auth-title">Create account</h2>
          <p className="auth-subtitle">Fill in your details to get started</p>

          <form onSubmit={submit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Role</label>
                <select
                  value={role}
                  onChange={e => setRole(e.target.value)}
                  required
                >
                  <option value="" disabled hidden>Select role</option>
                  <option value="resident">Resident</option>
                  <option value="guard">Guard</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              {role === "resident" && (
                <div className="form-group">
                  <label>Flat No</label>
                  <input
                    type="text"
                    placeholder="e.g. A-204"
                    value={flatNo}
                    onChange={e => setFlatNo(e.target.value)}
                    required
                  />
                </div>
              )}
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Min 8 characters"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="Re-enter password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {error && <p className="error-msg">{error}</p>}
            {success && <p className="success-msg">{success}</p>}

            <button type="submit" className="btn-signin" disabled={loading}>
              {loading ? "Creating Account..." : "Create account"}
            </button>
          </form>

          <div className="auth-footer">
            <p>Already have an account? <a href="#" onClick={e => { e.preventDefault(); navigate("/login"); }}>Sign in</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
