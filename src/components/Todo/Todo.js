import React from "react";

const Todo = ({ todo, toggleTodoState, deleteTodo }) => {
  return (
    <div className="todoContainer">
      <input
        type="checkbox"
        onClick={toggleTodoState.bind(null, { todo })}
        checked={todo.done === 1}
      />
      <div className={`todoText ${todo.done ? "done" : ""}`}>{todo.todo}</div>
      <button
        className="markAsDone"
        onClick={deleteTodo.bind(null, { todo })}
      >{`\u{1F5D1}`}</button>
    </div>
  );
};

export default Todo;
