import { Todo } from "../models/todo";
import { TodoState, TodoAction } from "../models/app-state";
import * as actionTypes from "../../constants/action-types";

const initialTodoState: TodoState = {

};

export const todo = (todo = initialTodoState, action: TodoAction): TodoState => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case actionTypes.TOGGLE_TODO:
            if (todo.id !== action.id) {
                return todo;
            }

            return Object.assign({}, todo, {
                completed: !todo.completed
            });

        default:
            return todo;
    }
};

const initialTodosState: TodoState[] = new Array<TodoState>();

export const todos = (todos = initialTodosState, action: TodoAction): TodoState[] => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [
                ...todos,
                todo(undefined, action)
            ];
        case actionTypes.TOGGLE_TODO:
            return todos.map(t =>
                todo(t, action)
            );
        default:
            return todos;
    }
};
