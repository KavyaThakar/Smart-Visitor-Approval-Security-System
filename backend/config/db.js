const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "visitor_system",
  password: "@happy1753",
  port: 5432,
});

module.exports = pool;