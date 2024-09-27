import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',    // Your database host
  user: 'root',    // Your database user
  password: 'root', // Your database password
  database: 'evoke', // Your database name
});

export default db;
