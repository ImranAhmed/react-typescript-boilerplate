import * as React from "react";
import classNames from "classnames";

import { FilterComponent } from "../todo/filter-component";
import { AddTodoContainer } from "../todo/add-todo-container";
import { VisibleTodoListContainer } from "../todo/visible-todo-list-container";

import * as constants from "../constants";

const styles = require("./home-component.scss");

export const Home = () => {
        return (<div className="home-container">
                <h2 className={classNames(styles.title, "text-muted")}>{constants.APPLICATION_NAME}</h2>
                <FilterComponent />
                <AddTodoContainer />
                <VisibleTodoListContainer />
        </div>);
};

