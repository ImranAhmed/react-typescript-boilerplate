import React, { PropTypes } from "react";

import { FilterLinkContainer } from "../containers/filter-link-container";

export const FooterComponent = () => {

    return (
        <div>
            <FilterLinkContainer filter="SHOW_ALL">All</FilterLinkContainer>
            <FilterLinkContainer filter="SHOW_ACTIVE">Active</FilterLinkContainer>
            <FilterLinkContainer filter="SHOW_COMPLETED">Completed</FilterLinkContainer>
        </div>);
};