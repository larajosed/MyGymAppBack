const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '3151485',
    port: 3306,
    database: 'mygymapp'
});

conn.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("CONEXIÓM REALIZADA");
        global.db = conn;
    }
})