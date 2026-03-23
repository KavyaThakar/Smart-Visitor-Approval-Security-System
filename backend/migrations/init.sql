-- Run in psql: \i backend/migrations/init.sql

CREATE TABLE IF NOT EXISTS buildings (
  building_id SERIAL PRIMARY KEY,
  building_name VARCHAR(100) NOT NULL,
  address TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS wings (
  wing_id SERIAL PRIMARY KEY,
  building_id INT NOT NULL REFERENCES buildings(building_id),
  wing_name VARCHAR(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS flats (
  flat_id SERIAL PRIMARY KEY,
  wing_id INT NOT NULL REFERENCES wings(wing_id),
  flat_number VARCHAR(10) NOT NULL,
  floor INT NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  phone VARCHAR(15) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(10) NOT NULL CHECK (role IN ('admin','guard','resident')),
  flat_id INT REFERENCES flats(flat_id),
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS visitors (
  visitor_id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(15) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS visits (
  visit_id SERIAL PRIMARY KEY,
  visitor_id INT NOT NULL REFERENCES visitors(visitor_id),
  flat_id INT NOT NULL REFERENCES flats(flat_id),
  guard_id INT NOT NULL REFERENCES users(user_id),
  visitor_type VARCHAR(20) NOT NULL CHECK (visitor_type IN ('guest','delivery','courier','service','postman','other')),
  purpose VARCHAR(255),
  company_name VARCHAR(100),
  check_in_time TIMESTAMP NOT NULL DEFAULT NOW(),
  check_out_time TIMESTAMP NULL,
  status VARCHAR(10) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS notifications (
  notification_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(user_id),
  visit_id INT REFERENCES visits(visit_id),
  message TEXT NOT NULL,
  is_read BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS audit_logs (
  log_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(user_id),
  action VARCHAR(100) NOT NULL,
  table_name VARCHAR(100) NOT NULL,
  record_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
