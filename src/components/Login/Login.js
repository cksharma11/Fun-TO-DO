import React from "react";

const Login = () => {
  return (
    <form method="POST" action="/login">
      <h3>Login</h3>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <input type="submit" />
    </form>
  );
};

export default Login;
