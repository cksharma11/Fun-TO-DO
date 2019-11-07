import React from "react";
import Todo from "../Todo/Todo";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.reverse().map(todo => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
