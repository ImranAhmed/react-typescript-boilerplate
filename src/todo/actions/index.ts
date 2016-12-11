import * as actionTypes from "../../constants/action-types";

let nextTodoId = 0;

export const addTodo = (text: string) => {
    return {
        type: actionTypes.ADD_TODO,
        id: nextTodoId++,
        text
    };
};

export const setVisibilityFilter = (filter: string) => {
    return {
        type: actionTypes.SET_VISIBILITY_FILTER,
        filter
    };
};

export const toggleTodo = (id: number) => {
    return {
        type: actionTypes.TOGGLE_TODO,
        id
    };
};