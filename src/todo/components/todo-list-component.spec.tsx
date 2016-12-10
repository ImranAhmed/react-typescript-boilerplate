import * as React from "react";
import * as _ from "lodash";

import { shallow } from "enzyme";

import { Todo } from "../models/todo";
import { TodoListComponent } from "./todo-list-component";
import { TodoComponent } from "./todo-component";

describe("Todo :: TodoListComponent :: ", () => {

    describe("Empty ", () => {

        let wrapper: any;

        // Arrange
        beforeEach(() => {

            const onTodoClickSpy: any = jasmine.createSpy("onTodoClick");
            const todos: Array<Todo> = null;

            wrapper = shallow(<TodoListComponent todos={todos} onTodoClick={onTodoClickSpy} />);
        });

        it("should have a parent div with class as component name", () => {

            // Assert
            expect(wrapper.find("div").prop("className")).toEqual("todo-list-component");
        });

        it("should not contain an unordered list", () => {

            // Assert
            expect(wrapper.find("ul").length).toEqual(0);
        });

        it("should not contain a todo component", () => {

            // Assert
            expect(wrapper.find(TodoComponent).length).toEqual(0);
        });
    });

    describe("Not Empty ", () => {

        let wrapper: any;

        // Arrange
        beforeEach(() => {

            const onTodoClickSpy: any = jasmine.createSpy("onTodoClick");
            let todos: Array<Todo> = new Array<Todo>();
            let todo: Todo = {
                id: 1,
                completed: true,
                text: _.uniqueId()
            };

            todos.push(todo);
            wrapper = shallow(<TodoListComponent todos={todos} onTodoClick={onTodoClickSpy} />);
        });

        it("should have a parent div with class as component name", () => {

            // Assert
            expect(wrapper.find("div").prop("className")).toEqual("todo-list-component");
        });

        it("should contain a single unordered list", () => {

            // Assert
            expect(wrapper.find("ul").length).toEqual(1);
        });

        it("should contain a todo component", () => {

            // Assert
            expect(wrapper.find(TodoComponent).length).toEqual(1);
        });
    });
});