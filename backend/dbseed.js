const mysql = require('mysql');
const dbConfig = {
    HOST: "hack-western-9.chu7zm5ttrq2.us-east-1.rds.amazonaws.com",
    PORT: "3306",
    USER: "admin",
    PASSWORD: "hackwestern",
    DB: "locationData"
}

const conn = mysql.createConnection({
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected to the Database!");
})