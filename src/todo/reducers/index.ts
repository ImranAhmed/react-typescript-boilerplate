import { combineReducers } from "redux";
import { todo, todos } from "./todos-reducer";
import { visibilityFilter } from "./visibility-filter-reducer";

export const todoApp = combineReducers({
    todo,
    todos,
    visibilityFilter
});
