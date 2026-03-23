const pool = require("../config/db");

exports.getUsers = async (req, res) => {
  const result = await pool.query(`
    SELECT u.user_id, u.name, u.email, u.phone, u.role, u.flat_id, u.is_active, u.created_at,
           b.building_name, w.wing_name, f.flat_number
    FROM users u
    LEFT JOIN flats f ON u.flat_id=f.flat_id
    LEFT JOIN wings w ON f.wing_id=w.wing_id
    LEFT JOIN buildings b ON w.building_id=b.building_id
  `);
  res.json(result.rows);
};

exports.updateUser = async (req, res) => {
  const { user_id } = req.params;
  const { name, phone, is_active, flat_id } = req.body;
  const result = await pool.query(
    `UPDATE users SET name=$1, phone=$2, is_active=$3, flat_id=$4 WHERE user_id=$5 RETURNING user_id,name,email,role,flat_id,is_active`,
    [name, phone, is_active, flat_id, user_id]
  );
  res.json(result.rows[0]);
};
