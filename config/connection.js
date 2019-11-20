const mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "docker",
    database: "burgers_db"
});

connection.connect((err) => {
    if (err) throw err;
    console.log('connected as ' + connection.threadId);
});

module.exports = connection;