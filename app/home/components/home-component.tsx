import * as React from "react";
import { Link } from "react-router";
import classNames from "classnames";

import * as constants from "../constants";

const styles = require("./home-component.scss");

export const Home = () => {
        return (<div className="home-container">
                <h2 className={classNames(styles.title, "text-muted")}>{constants.MY_APPLICATION}</h2>
                <Link to="/search">search</Link>
        </div>);
};

