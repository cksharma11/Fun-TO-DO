import React from "react";

const Todo = ({ todo }) => {
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
      <input type="checkbox" onClick={toggleTodoState.bind(null, { todo })} />
      <div className={`todoText ${todo.done ? "done" : ""}`}>{todo.todo}</div>
      <button className="markAsDone">{`\u{1F5D1}`}</button>
    </div>
  );
};

export default Todo;
