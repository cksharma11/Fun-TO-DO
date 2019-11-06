const {
  insertQuery,
  executeQuery,
  executeSignUpQuery
} = require("../utils/dbUtils");

const signUpHandler = async (req, res) => {
  const { username, password } = req.body;
  const signUpStatus = await executeSignUpQuery(username);
  if (signUpStatus.error) {
    return res.send(JSON.stringify(signUpStatus.message));
  }
  await insertQuery("todoUsers", { username, password });
  res.redirect("/home");
};

const loginHandler = async (req, res) => {
  const { username, password } = req.body;
  const query = `select * from todoUsers where todoUsers.username="${username}" AND todoUsers.password="${password}";`;
  const result = await executeQuery(query);
  if (result.length) {
    res.cookie("username", username);
    return res.redirect("/home");
  }
  return res.send("username or password is incorrect");
};

const addTodoHandler = async (req, res) => {
  const { todo } = req.body;
  const { username } = req.cookies;
  const result = await insertQuery("todos", {
    todo,
    username,
    time: JSON.stringify(Date.now())
  });
  res.send(JSON.stringify(result));
};

module.exports = {
  loginHandler,
  signUpHandler,
  addTodoHandler
};
