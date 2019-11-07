import React from "react";

const LOGIN_TITLE = "LOGIN";

const Login = () => {
  return (
    <form method="POST" action="/login">
      <h3>{LOGIN_TITLE}</h3>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <input type="submit" />
    </form>
  );
};

export default Login;
