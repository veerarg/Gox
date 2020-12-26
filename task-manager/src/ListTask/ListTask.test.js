import React from "react";
import { shallow } from "enzyme";
import ListTask from "./ListTask";

describe("ListTask", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListTask />);
    expect(wrapper).toMatchSnapshot();
  });
});
