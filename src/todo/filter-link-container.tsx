import { connect } from "react-redux";

import { setVisibilityFilter } from "./actions";
import { FilterLinkComponent } from "./filter-link-component";

interface FilterLinkContainerProps {
    filter: string;
};

interface FilterLinkContainerState {
    visibilityFilter: string;
};

const mapStateToProps = (state: FilterLinkContainerState, ownProps: FilterLinkContainerProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
};

const mapDispatchToProps = (dispatch: any, ownProps: FilterLinkContainerProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    };
};

export const FilterLinkContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterLinkComponent);