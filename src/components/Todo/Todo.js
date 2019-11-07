import React from "react";

const Todo = ({ todo }) => {
  console.log(todo);
  return (
    <div>
      <button>Mark As Done</button>
      <div>Message</div>
    </div>
  );
};

export default Todo;
