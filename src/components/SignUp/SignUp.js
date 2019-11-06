import React from "react";

const SignUp = () => {
  return (
    <form method="POST" action="/signup">
      <h3>SignUp</h3>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <input type="submit" />
    </form>
  );
};

export default SignUp;
