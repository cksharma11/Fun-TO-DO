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

const loginHandler = (req, res) => {
  const { username, password } = req.body;
  const query = `select * from todoUsers where todoUsers.username="${username}" AND todoUsers.password="${password}";`;
  const result = executeQuery(query);
  if (result.length) {
    res.cookie("username", username);
    return res.redirect("/home");
  }
  return res.send("username or password is incorrect");
};

module.exports = {
  loginHandler,
  signUpHandler
};
