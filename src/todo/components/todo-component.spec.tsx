import * as React from "react";
import { shallow } from "enzyme";

import { TodoComponent } from "./todo-component";
import * as constants from "../../constants";

describe(constants.APPLICATION_NAME, () => {
    describe("Todo :: TodoComponent :: ", () => {

        // Arrange
        let wrapper: any;
        const someText: string = "Some text";
        const onClickSpy: any = jasmine.createSpy("onClick");

        beforeEach(() => {
            wrapper = shallow(<TodoComponent completed={true} text={someText} onClick={onClickSpy} />);
        });

        it("should have a parent div with class as component name", () => {

            // Assert
            expect(wrapper.find("div").prop("className")).toEqual("todo-component");
        });

        it("should contain a single list item", () => {

            // Assert
            expect(wrapper.find("li").length).toEqual(1);
        });

        it("should show text in list item", () => {

            // Assert
            expect(wrapper.find("li").first().text()).toEqual(someText);
        });

        it("should call onClick", () => {

            // Assert
            let item = wrapper.find("li").first();
            const { onClick } = item.props();

            // Act
            onClick();

            // Assert
            expect(onClickSpy).toHaveBeenCalled();
        });

        describe("Completed", () => {

            it("should set class to line_through", () => {

                // Assert
                expect(wrapper.find("li").first().prop("className")).toContain("line_through");
            });
        });

        describe("Not Completed", () => {

            it("should set class to none", () => {

                // Arrange
                wrapper = shallow(<TodoComponent completed={false} text={someText} onClick={onClickSpy} />);

                // Assert
                expect(wrapper.find("li").first().prop("className")).toContain("none");
            });
        });
    });
});