import React from "react";
import Table from "./index";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "./../../utils";

const setUp = (props = {}) => {
    const component = shallow(<Table {...props} />);
    return component;
};

describe("Table Component", () => {
    describe("Have Props", () => {
        let component;
        beforeEach(() => {
            const expectedProps = {
                countries: []
            };
            component = setUp(expectedProps);
        });

        test("should render table without errors", () => {
            const wrapper = findByTestAttr(component, "table");
            expect(wrapper.length).toBe(1);
        });
    });

    describe("Checking PropTypes", () => {
        test("Should not throw any warning", () => {
            const expectedProps = {
                countries: []
            };
            const propsError = checkProps(Table, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });


});

