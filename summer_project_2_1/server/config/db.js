const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'dmdrk1414',
    password: 'qkrtmdcks1!',
    database: 'summer_project',
    port: '3306',
});

module.exports = db;
