import * as actionTypes from "../../constants/action-types";

export const visibilityFilter = (state = "SHOW_ALL", action: any) => {
    switch (action.type) {
        case actionTypes.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};
