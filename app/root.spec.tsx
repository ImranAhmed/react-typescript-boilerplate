import * as React from "react";
import { Router, Route  } from "react-router";
import { shallow } from "enzyme";

import * as helper from "./common/tests";
import { Home } from "./home/containers/home-container";
import { Search } from "./search/containers/search-container";

import { Root } from "./root";

describe(helper.GROUP_NAME, () => {
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