import React from "react";
import Header from "./index";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "./../../utils";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {

  describe("Have Props", () => {
    let component;
    beforeEach(() => {
      const expectedProps = {
        country: "country",
        countries: [{
          name: "country name",
          value: "country iso"
        }],
        onCountryChange: () => { }
      };
      component = setUp(expectedProps);
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

  describe("Checking PropTypes", () => {

    const expectedProps = {
      country: "country",
      countries: [{
        name: "country name",
        value: "country iso"
      }],
      onCountryChange: () => { }
    };


    test("should not throw any warnings", () => {
      const propsError = checkProps(Header, expectedProps);
      expect(propsError).toBeUndefined();
    });

  });


});
