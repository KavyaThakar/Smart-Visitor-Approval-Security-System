const express = require("express");
const router = express.Router();
const { login, register, getProfile, forgotPassword, resetPassword } = require("../controllers/authController");
const { authenticate } = require("../middleware/authMiddleware");

router.post("/login", login);
router.post("/register", register);
router.get("/profile", authenticate, getProfile);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;