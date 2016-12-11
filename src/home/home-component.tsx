import * as React from "react";
import classNames from "classnames";

import { FilterComponent } from "../todo/components/filter-component";
import { AddTodoContainer } from "../todo/containers/add-todo-container";
import { VisibleTodoListContainer } from "../todo/containers/visible-todo-list-container";

import * as constants from "../constants";

const styles = require("./home-component.scss");

export const Home = () => {
        return (<div className="home-container">
                <FilterComponent />
                <AddTodoContainer />
                <VisibleTodoListContainer />
        </div>);
};

