import * as React from "react";
import classNames from "classnames";

const styles = require("./home-component.scss");

export const Home = () => {
        return (<div className="home-container">
                <h2 className={classNames(styles.title, "text-muted")}>My Application</h2>
        </div>);
};

