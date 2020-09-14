import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { findByTestAttr } from "./utils";

const setUp = (props = {}) => {
  const component = shallow(<App {...props} />);
  return component;
};


describe("App Component", () => {

  let component;
  beforeEach(() => {
    component = setUp();
  });

  test("should render without errors", () => {
    const wrapper = findByTestAttr(component, "AppComponent");
    expect(wrapper.length).toBe(1);
  });

  test("should render the header container without errors", () => {
    const wrapper = findByTestAttr(component, "App-header-container");
    expect(wrapper.length).toBe(1);
  });


});
