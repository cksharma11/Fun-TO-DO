import React, { useState, useEffect } from "react";
import AddTodoPromot from "../AddTodoPromot/AddTodoPromot";
import TodoList from "../TodoList/TodoList";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const updateTodos = async () => {
    await fetch("/todos")
      .then(res => res.json())
      .then(res => setTodos({ todos: res }));
  };

  useEffect(() => {
    updateTodos();
  }, []);

  return (
    <div>
      <AddTodoPromot />
      <TodoList todos={todos} />
    </div>
  );
};

export default Home;
