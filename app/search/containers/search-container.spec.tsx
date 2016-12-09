import * as React from "react";
import { Link } from "react-router";
import { mount } from "enzyme";

import * as helper from "../../common/tests";

import { Search } from "./search-container";

describe(helper.GROUP_NAME, () => {
    describe("Search :: Containers :: Search", () => {

        // Arrange
        let wrapper: any;

        beforeEach(() => {
            wrapper = mount(<Search />);
        });

        it("should have a parent div with class as component name", () => {
            // Assert
            expect(wrapper.find("div").prop("className")).toEqual("search-container");
        });

        it("should have a single link", () => {
            // Assert
            expect(wrapper.find(Link).length).toEqual(1);
        });

        it("should have a link referencing home", () => {
            // Assert
            expect(wrapper.find(Link).find("a").text()).toEqual("home");
        });
    });
});