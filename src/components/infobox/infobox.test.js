import React from "react";
import { shallow } from "enzyme";
import InfoBox from "./index";
import { findByTestAttr, checkProps } from "./../../utils";



const setUp = (props = {}) => {
  const component = shallow(<InfoBox {...props} />);
  return component;
};

describe("InfoBox component", () => {

  describe("Have Props", () => {
    let component;
    beforeEach(() => {
      const expectedProps = {
        title: "title",
        cases: 23,
        total: 34
      };
      component = setUp(expectedProps);
    });

    test("should render card element without errors", () => {
      const wrapper = findByTestAttr(component, "infoBoxcard");
      expect(wrapper.length).toBe(1);
    });

    test("should render cardcontent element without errors", () => {
      const wrapper = findByTestAttr(component, "infoBox__cardcontent");
      expect(wrapper.length).toBe(1);
    });

    test("should render title element without errors", () => {
      const wrapper = findByTestAttr(component, "infoBox__title");
      expect(wrapper.length).toBe(1);
    });

    test("should render cases element without errors", () => {
      const wrapper = findByTestAttr(component, "infoBox__cases");
      expect(wrapper.length).toBe(1);
    });

    test("should render total element without errors", () => {
      const wrapper = findByTestAttr(component, "infoBox__total");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Have No props",()=>{
    let component;
    beforeEach(() => {
      component = setUp();
    });

    test("Should not render", () => {
      const wrapper = findByTestAttr(component, "infoBox__total");
      expect(wrapper.length).toBe(0);
    });

  });

  describe("Checking PropTypes",()=>{

    test("Should not throw any warning",()=>{
      const expectedProps = {
        title: "title",
        cases: 23,
        total: 34
      };

      const propsError = checkProps(InfoBox,expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
});
