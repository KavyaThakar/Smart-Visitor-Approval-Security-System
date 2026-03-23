const express = require("express");
const cors = require("cors");
const app = express();

const authRoutes = require("./routes/authRoutes");
const visitRoutes = require("./routes/visitRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  if (req.body && Object.keys(req.body).length > 0) {
    console.log("Body:", JSON.stringify(req.body, null, 2));
  }
  next();
});

app.use("/api", authRoutes);
app.use("/api", visitRoutes);
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Smart Visitor Approval System");
});

app.use((req, res) => {
  res.status(404).json({ error: "API route not found" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});