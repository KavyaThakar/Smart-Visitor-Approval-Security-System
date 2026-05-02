const { Client } = require('pg');

const client = new Client({
  connectionString: "postgresql://neondb_owner:npg_vO4dgn3orlzD@ep-proud-cell-ao26z641.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
});

async function run() {
  await client.connect();
  const res = await client.query(`
    SELECT pg_get_constraintdef(c.oid) AS constraint_def
    FROM pg_constraint c
    JOIN pg_class t ON c.conrelid = t.oid
    WHERE c.conname = 'visits_visitor_type_check';
  `);
  console.log(res.rows[0]);
  
  // also check visitor_type constraint allowed values
  await client.end();
}

run().catch(console.error);
