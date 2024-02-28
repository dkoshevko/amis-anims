const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

db.connect((err) => {
  if (err) {
    console.log("Error connecting to MySQL database:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

module.exports = db;