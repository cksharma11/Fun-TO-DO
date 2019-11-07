import React from "react";

const AddTodoPromot = () => {
  return (
    <form method="POST" action="/addTodo">
      <input type="text" name="todo" placeholder="Add your todo here" />
      <input type="submit" />
    </form>
  );
};

export default AddTodoPromot;
