import React, { PropTypes } from "react";

import { FilterLinkContainer } from "./filter-link-container";

const styles = require("./filter-component.scss");

export const FilterComponent = () => {

    return (
        <div className={styles.main}>
            <div className="btn-group" role="group" aria-label="Set visibility">
                <button type="button" className="btn btn-secondary"><FilterLinkContainer filter="SHOW_ALL">All</FilterLinkContainer></button>
                <button type="button" className="btn btn-secondary"><FilterLinkContainer filter="SHOW_ACTIVE">Active</FilterLinkContainer></button>
                <button type="button" className="btn btn-secondary"><FilterLinkContainer filter="SHOW_COMPLETED">Completed</FilterLinkContainer></button>
            </div>
        </div>);
};