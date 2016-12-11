import * as React from "react";
import { shallow } from "enzyme";

import { FilterLinkComponent } from "./filter-link-component";

import * as constants from "../../constants";

describe(constants.APPLICATION_NAME, () => {
    describe("Todo :: LinkComponent :: ", () => {

        function createWrapper(isActive: boolean): any {
            const onClickSpy: any = jasmine.createSpy("onClick");
            let children: number[] = new Array<number>();
            children.push(1);
            children.push(2);
            return shallow(<FilterLinkComponent active={isActive} onClick={onClickSpy} children={children} />);
        }

        describe("Not Active ", () => {

            let wrapper: any;
            beforeEach(() => {
                wrapper = createWrapper(false);
            });

            it("should have a parent div with class as component name", () => {

                // Assert
                expect(wrapper.find("div").prop("className")).toEqual("link-component");
            });

            it("should have a span containing children", () => {

                // Assert
                const element = wrapper.find("span");
                expect(element.length).toEqual(1);
                expect(element.prop("className")).toEqual("non-active");
                expect(element.text()).toEqual("12");
            });
        });

        describe("Active ", () => {

            let wrapper: any;
            beforeEach(() => {
                wrapper = createWrapper(true);
            });

            it("should have a parent div with class as component name", () => {

                // Assert
                expect(wrapper.find("div").prop("className")).toEqual("link-component");
            });

            it("should have a link containing children", () => {

                // Assert
                const element = wrapper.find("a");
                expect(element.length).toEqual(1);
                expect(element.prop("className")).toEqual("active");
                expect(element.text()).toEqual("12");
            });
        });
    });
});
