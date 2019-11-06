const mysql = require("mysql");

const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

const util = require("util");

const config = {
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "b5d7b33082b4f5",
  password: "143a102d",
  database: "heroku_8c73c7264a704e7"
};

const pool = mysql.createPool(config);
pool.query = util.promisify(pool.query);

module.exports = { logger, pool };
