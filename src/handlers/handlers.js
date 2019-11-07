const {
  insertQuery,
  executeQuery,
  executeSignUpQuery,
  toggleTodoStateQuery
} = require("../utils/dbUtils");

const { TABLES, LABLES } = require("../constants/constants");

const signUpHandler = async (req, res) => {
  const { username, password } = req.body;
  const signUpStatus = await executeSignUpQuery(username);
  if (signUpStatus.error) {
    return res.send(JSON.stringify(signUpStatus.message));
  }
  await insertQuery(TABLES.todoUsers, { username, password });
  res.redirect("/login");
};

const loginHandler = async (req, res) => {
  const { username, password } = req.body;
  const query = `select * from ${TABLES.todoUsers} where ${TABLES.todoUsers}.username="${username}" AND ${TABLES.todoUsers}.password="${password}";`;
  const result = await executeQuery(query);
  if (result.length) {
    res.cookie("username", username);
    return res.redirect("/home");
  }
  return res.send(LABLES.LOGIN_ERROR);
};

const addTodoHandler = async (req, res) => {
  const { todo } = req.body;
  const { username } = req.cookies;
  await insertQuery(TABLES.todos, {
    todo,
    username,
    time: JSON.stringify(Date.now()),
    done: false
  });
  res.redirect("/home");
};

const getTodoHandler = async (req, res) => {
  const { username } = req.cookies;
  const query = `select * from ${TABLES.todos} where username="${username}"`;
  const todos = await executeQuery(query);
  res.send(todos);
};

const toggleTodoStateHandler = async (req, res) => {
  const todo = req.body;
  const result = toggleTodoStateQuery(todo);
  res.send(result);
};

module.exports = {
  loginHandler,
  signUpHandler,
  addTodoHandler,
  getTodoHandler,
  toggleTodoStateHandler
};
