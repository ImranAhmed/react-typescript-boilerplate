import * as React from "react";
import classNames from "classnames";

import * as constants from "../constants";

const styles = require("./home.scss");

export const Home = () => {
        return (<div data-type="home-container">
                <h2 className={classNames(styles.title, "text-muted")}>{constants.MY_APPLICATION}</h2>
        </div>);
};