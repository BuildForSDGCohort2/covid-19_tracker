import React from "react";
import Header from "./index";
import { shallow } from "enzyme";
import { findByTestAttr } from "./../../utils";

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe("Header Component", () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });

    test("should render form control without errors", () => {
        const wrapper = findByTestAttr(component, "formcontrol");
        expect(wrapper.length).toBe(1);
      });
    
      test("should render the dropdown element without errors", () => {
        const wrapper = findByTestAttr(component, "dropdown");
        expect(wrapper.length).toBe(1);
      });

      test("should render the menuitem element without errors", () => {
        const wrapper = findByTestAttr(component, "menuitem");
        expect(wrapper.length).toBe(1);
      });
});
