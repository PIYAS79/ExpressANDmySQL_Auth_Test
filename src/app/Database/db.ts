// src/app/db.ts
import mysql from 'mysql2/promise';

// Create a connection to the database
const pool = mysql.createPool({
    host: '127.0.0.1',      // Your MySQL host
    user: 'root',           // Your MySQL user
    password: '',   // Your MySQL password
    database: '__testdb',    // Your MySQL database name
    connectionLimit:10,
    multipleStatements:true
});

export default pool;