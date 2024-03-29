import React from "react";
import Todo from "../Todo/Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: props.todos };
    this.toggleTodoState = this.toggleTodoState.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  async toggleTodoState(body) {
    await fetch("/toggleTodoState", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ todos: res });
      });
  }

  async deleteTodo(body) {
    await fetch("/todo", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ todos: res });
      });
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      todos: newProps.todos
    });
  }

  render() {
    return (
      <div>
        {this.state.todos.reverse().map(todo => {
          return (
            <Todo
              key={todo.time}
              todo={todo}
              toggleTodoState={this.toggleTodoState}
              deleteTodo={this.deleteTodo}
            />
          );
        })}
      </div>
    );
  }
}

export default TodoList;
