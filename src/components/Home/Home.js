import React, { useState, useEffect } from "react";
import AddTodoPromot from "../AddTodoPromot/AddTodoPromot";
import TodoList from "../TodoList/TodoList";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const updateTodos = async () => {
    const todos = await fetch("/todos")
      .then(res => res.json())
      .then(res => this.setState({ todos: res }));

    setTodos(todos);
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
