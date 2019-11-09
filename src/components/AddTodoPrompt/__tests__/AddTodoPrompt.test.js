import React from "react";
import { shallow, configure } from "enzyme";
import AddTodoPrompt from "../AddTodoPrompt";

import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("AddTodoPrompt", () => {
  it("should render properly", () => {
    const wrapper = shallow(<AddTodoPrompt />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
