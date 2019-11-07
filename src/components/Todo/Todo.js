import React from "react";

const Todo = ({ todo }) => {
  return (
    <div className="todoContainer">
      <div className="todoText">{todo}</div>
      <button className="markAsDone">Mark As Done</button>
    </div>
  );
};

export default Todo;
