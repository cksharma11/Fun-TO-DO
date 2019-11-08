import React from "react";

const AddTodoPrompt = () => {
  return (
      <form method="POST" action="/addTodo" className="addTodo">
      <input
        type="text"
        name="todo"
        placeholder="Add your todo here"
        className="addTodoBox"
        autocomplete="off"
        required
      />
      <input type="submit" value="ADD TODO" className="addTodoButton" />
    </form>
  );
};

export default AddTodoPrompt;
