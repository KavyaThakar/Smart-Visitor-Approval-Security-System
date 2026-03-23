const pool = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

exports.register = async (req, res) => {
  try {
    const { name, email, phone, password, role } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !password || !role) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const exists = await pool.query("SELECT 1 FROM users WHERE email=$1", [email]);
    if (exists.rows.length) return res.status(400).json({ error: "Email already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const result = await pool.query(
      `INSERT INTO users (name,email,phone,password,role)
       VALUES ($1,$2,$3,$4,$5) RETURNING user_id,name,email,role`,
      [name, email, phone, hashed, role]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ error: "Registration failed. " + err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
  if (!user.rows.length) return res.status(400).json({ error: "Invalid credentials" });

  const record = user.rows[0];
  const match = await bcrypt.compare(password, record.password);
  if (!match) return res.status(400).json({ error: "Invalid credentials" });

  const payload = {
    user_id: record.user_id,
    name: record.name,
    role: record.role,
    flat_id: record.flat_id
  };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "12h" });
  res.json({ token, user: payload });
};

exports.getProfile = async (req, res) => {
  const { user_id } = req.user;
  const user = await pool.query("SELECT user_id,name,email,role,flat_id FROM users WHERE user_id=$1", [user_id]);
  if (!user.rows.length) return res.status(404).json({ error: "User not found" });
  res.json(user.rows[0]);
};