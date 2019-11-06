import React from "react";

const SignUp = () => {
  return (
    <form>
      <h3>SignUp</h3>
      <input
        type="text"
        value="username"
        placeholder="username"
        name="username"
      />
      <input
        type="text"
        value="username"
        placeholder="username"
        name="password"
      />
      <input type="submit" />
    </form>
  );
};

export default SignUp;
