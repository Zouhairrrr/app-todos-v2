const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '8000',
    user: 'root',
    password: 'azerty1234',
    database: 'todosv2',
});

connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL.');
});
module.exports = connection;