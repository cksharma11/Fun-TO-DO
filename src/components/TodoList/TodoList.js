import React from "react";
import Todo from "../Todo/Todo";

const TodoList = ({ todos }) => {
  console.log(todos);

  console.log("die");
  return (
    <div>
      {todos.map(todo => {
        return <Todo todo={todo.todo} />;
      })}
    </div>
  );
};

export default TodoList;
