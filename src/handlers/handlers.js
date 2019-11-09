const {
  insertQuery,
  executeQuery,
  executeSignUpQuery,
  toggleTodoStateQuery,
  deleteQuery
} = require("../utils/dbUtils");

const restrictedURLsWhenLoggedIn = ["/", "/login.html", "/signup.html"];

const restrictedURLsWhenNotLoggedIn = ["/home"];

const { TABLES, LABLES } = require("../constants/constants");

const isLoggedIn = username => {
  return username !== undefined;
};

const signUpHandler = async (req, res) => {
  ``;
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
  await toggleTodoStateQuery(todo);
  const updatedTodo = await getTodoHandler(req, res);
  res.send(updatedTodo);
};

const deleteTodoHandler = async (req, res) => {
  const { todo } = req.body;
  await deleteQuery(todo);
  const updatedTodo = await getTodoHandler(req, res);
  res.send(updatedTodo);
};

const redirect = (req, res, next) => {
  const { username } = req.cookies;
  if (isLoggedIn(username) && restrictedURLsWhenLoggedIn.includes(req.url)) {
    return res.redirect("/home");
  }
  if (
    !isLoggedIn(username) &&
    restrictedURLsWhenNotLoggedIn.includes(req.url)
  ) {
    return res.redirect("/");
  }
  next();
};

module.exports = {
  loginHandler,
  signUpHandler,
  addTodoHandler,
  getTodoHandler,
  toggleTodoStateHandler,
  deleteTodoHandler,
  redirect
};
