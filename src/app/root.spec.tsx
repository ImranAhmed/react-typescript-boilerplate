import * as React from "react";
import { Router, Route  } from "react-router";
import { shallow } from "enzyme";

import * as constants from "./constants";
import { Home } from "../home/home-component";
import { Search } from "../search/search-component";

import { Root } from "./root";

describe(constants.MY_APPLICATION, () => {
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

        it("should have two route links", () => {
            // Assert
            expect(wrapper.find(Route).length).toEqual(2);
        });

        it("should have home link", () => {
            // Assert
            expect(wrapper.find(Route).find({ component: Home }).length).toEqual(1);
        });

        it("should have home link as its first link", () => {
            // Assert
            expect(wrapper.find(Route).first().prop("component")).toEqual(Home);
        });

        it("should have search link", () => {
            // Assert
            expect(wrapper.find(Route).find({ component: Search }).length).toEqual(1);
        });

        it("should have search link as its last link", () => {
            // Assert
            expect(wrapper.find(Route).last().prop("component")).toEqual(Search);
        });
    });
});