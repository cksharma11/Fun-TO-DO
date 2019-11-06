const { pool } = require("./utils");

const DEFAULT_CONDITION = "1=1";

const insertQuery = async (table, data) => {
  const query = `Insert into ${table} set ?`;
  const result = await pool.query(query, data);
  return result;
};

const selectQuery = async (table, condition = DEFAULT_CONDITION) => {
  const query = `Select * from ${table} where ${condition}`;
  const result = await pool.query(query);
  return result;
};

const executeQuery = async query => {
  const result = await pool.query(query);
  return result;
};

const executeSignUpQuery = async username => {
  const query = `select * from todoUsers where username="${username}";`;
  const result = executeQuery(query);
  if (result.length) {
    return { error: true, message: "username already exists" };
  }
  return { error: false, message: "signup ok" };
};

module.exports = {
  insertQuery,
  selectQuery,
  executeQuery,
  executeSignUpQuery
};
