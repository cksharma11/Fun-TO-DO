const mysql = require("mysql");

const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

const dbConfig = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: "todo"
});

module.exports = { logger, dbConfig };
