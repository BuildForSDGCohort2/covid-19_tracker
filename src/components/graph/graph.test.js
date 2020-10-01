import React from "react";
import Graph from "./index";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "./../../utils";

const setUp = (props = {}) => {
    const component = shallow(<Graph {...props} />);
    return component;
};

describe("Graph Component", () => {
    describe("Have Props", () => {
        let component;
        beforeEach(() => {
            const expectedProps = {
                casesType: "cases"
            };
            component = setUp(expectedProps);
        });

        test('should render main element without errors', () => {
            const wrapper = findByTestAttr(component, "main");
            expect(wrapper.length).toBe(1);
        });
    });

    describe("Checking PropTypes", () => {

        test("Should not throw any warning", () => {
            const expectedProps = {
                casesType: "cases"
            };
            const propsError = checkProps(Graph, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });


});
