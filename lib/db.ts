import { Pool } from 'pg';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const db = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: parseInt(process.env.PG_PORT || '5432', 10),  // PostgreSQL default port is 5432
  ssl: {
    rejectUnauthorized: process.env.PG_SSL === 'true',  // Set to true in production
  },
});

export default db;
