import React from "react";

const Todo = ({ todo }) => {
  return (
    <div>
      <button>Mark As Done</button>
      <div>{todo}</div>
    </div>
  );
};

export default Todo;
