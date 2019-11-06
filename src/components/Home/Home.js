import React from "react";

const Home = () => {
  return (
    <div>
      <form method="POST" action="/addTodo">
        <input type="text" name="todo" placeholder="Add your todo here" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Home;
