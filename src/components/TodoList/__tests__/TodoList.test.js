import React from "react";
import { shallow, configure } from "enzyme";
import TodoList from "../TodoList";

import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("TodoList", () => {
  it("should render properly", () => {
    const todos = [{ todo: "dummyTodo", time: "123" }];
    const toggleTodoState = jest.fn();
    const deleteTodo = jest.fn();
    const wrapper = shallow(
      <TodoList
        todos={todos}
        toggleTodoState={toggleTodoState}
        deleteTodo={deleteTodo}
      />
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
