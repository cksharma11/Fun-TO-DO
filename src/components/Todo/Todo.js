import React from "react";

const Todo = ({ todo, toggleTodoState }) => {
  return (
    <div className="todoContainer">
      <input
        type="checkbox"
        onClick={toggleTodoState.bind(null, { todo })}
        checked={todo.done === 1}
      />
      <div className={`todoText ${todo.done ? "done" : ""}`}>{todo.todo}</div>
      <button className="markAsDone">{`\u{1F5D1}`}</button>
    </div>
  );
};

export default Todo;
