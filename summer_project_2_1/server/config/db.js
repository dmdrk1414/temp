const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'qkrtmdcks1!',
    database: 'myDb',
    // port: '3306',
});

module.exports = db;
