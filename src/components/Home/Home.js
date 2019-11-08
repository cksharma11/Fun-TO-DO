import React from "react";
import AddTodoPrompt from "../AddTodoPrompt/AddTodoPrompt";
import TodoList from "../TodoList/TodoList";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  async loadTodos() {
    await fetch("/todos", { method: "POST" })
      .then(res => res.json())
      .then(res => {
        this.setState({ todos: res });
      });
  }

  async componentDidMount() {
    await this.loadTodos();
  }

  render() {
    return (
      <div className="todoMainContainer">
        <div className="stickyHeader">
          <h3 className="homeHeader">FUN TO-DO</h3>
          <AddTodoPrompt />
        </div>
        <div className="todos">
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default Home;
