import React from "react";

const Todo = ({ todo }) => {
  const actionLabel = todo.done ? "Mark as undone" : "Mark as done";

  const toggleTodoState = async body => {
    await fetch("/toggleTodoState", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(res => {
        if (!res.error) window.location.reload();
      });
  };

  return (
    <div className="todoContainer">
      <div className={`todoText ${todo.done ? "done" : ""}`}>{todo.todo}</div>
      <button
        onClick={toggleTodoState.bind(null, { todo })}
        className="markAsDone"
      >
        {actionLabel}
      </button>
    </div>
  );
};

export default Todo;
