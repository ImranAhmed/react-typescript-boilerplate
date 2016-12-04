import * as React from "react";
import { shallow } from "enzyme";

import * as helper from "../../common/tests";

import { Home } from "./home";

describe(helper.GROUP_NAME, () => {
    describe("Home :: Containers :: Home", () => {

        // Arrange
        let wrapper: any;

        beforeEach(() => {
            wrapper = shallow(<Home />);
        });

        it("should have a parent div with correct data type", () => {
            // Assert
            expect(wrapper.find("div").first().prop("data-type")).toEqual("home-container");
        });

        it("should have a heading with correct text", () => {
            // Assert
            let h2 = wrapper.find("h2");
            expect(h2.text()).toEqual("My Application");
        });

        it("should have a heading with correct class", () => {
            // Assert
            let h2 = wrapper.find("h2");
            expect(h2.prop("className")).toContain("home__title___");
        });

        it("should have a heading with bootstrap class text-muted", () => {
            // Assert
            let h2 = wrapper.find("h2");
            expect(h2.prop("className")).toContain("text-muted");
        });
    });
});