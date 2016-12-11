import * as React from "react";
import { Router, Route } from "react-router";
import { shallow } from "enzyme";

import { Home } from "../home/home-component";

import { Root } from "./root";

import * as constants from "../constants";

describe(constants.APPLICATION_NAME, () => {
    describe("Root ::", () => {

        // Arrange
        let wrapper: any;

        beforeEach(() => {
            wrapper = shallow(<Root />);
        });

        it("should have a router", () => {

            // Assert
            expect(wrapper.find(Router).length).toEqual(1);
        });

        it("should have one route link", () => {

            // Assert
            expect(wrapper.find(Route).length).toEqual(1);
        });

        it("should have home link", () => {

            // Assert
            expect(wrapper.find(Route).find({ component: Home }).length).toEqual(1);
        });

        it("should have home link as its first link", () => {

            // Assert
            expect(wrapper.find(Route).first().prop("component")).toEqual(Home);
        });
    });
});