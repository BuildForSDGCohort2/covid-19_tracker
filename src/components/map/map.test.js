import React from "react";
import Map from "./index";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "./../../utils";

const setUp = (props = {}) => {
    const component = shallow(<Map {...props} />);
    return component;
};

describe("Map Component", () => {
    describe("Have Props", () => {
        let component;
        beforeEach(() => {
            const expectedProps = {
                casesType: "cases",
                center: {
                    lat: 34.80746,
                    lng: -40.4796
                },
                countries: [],
                zoom: 3
            };
            component = setUp(expectedProps);
        });

        test("should render map without errors", () => {
            const wrapper = findByTestAttr(component, "map");
            expect(wrapper.length).toBe(1);
        });

        test("should render leaftletmap element without errors", () => {
            const wrapper = findByTestAttr(component, "map__leafletmap");
            expect(wrapper.length).toBe(1);
        });

    });

    describe("Checking PropTypes", () => {

        test("Should not throw any warning", () => {
            const expectedProps = {
                casesType: "cases",
                center: {
                    lat: 34.80746,
                    lng: -40.4796
                },
                countries: [],
                zoom: 3
            };
            const propsError = checkProps(Map, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });
});

