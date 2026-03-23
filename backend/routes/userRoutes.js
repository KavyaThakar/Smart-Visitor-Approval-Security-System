const express = require("express");
const router = express.Router();
const { authenticate, authorize } = require("../middleware/authMiddleware");
const { getUsers, updateUser } = require("../controllers/userController");

router.get("/users", authenticate, authorize("admin"), getUsers);
router.put("/users/:user_id", authenticate, authorize("admin"), updateUser);

module.exports = router;