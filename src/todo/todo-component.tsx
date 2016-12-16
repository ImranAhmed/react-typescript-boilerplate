import * as React from "react";
import classNames from "classnames";

const styles = require("./todo-component.scss");

interface TodoComponentProps {
    completed: boolean;
    text: string;
    onClick(): void;
};

export const TodoComponent = (props: TodoComponentProps) => {
    return (<div className={styles.main}>
        <li
            onClick={props.onClick}
            className={props.completed ? classNames(styles.line_through, "todo-component") : classNames(styles.none, "todo-component")}>
            {props.text}
        </li>
    </div>);
};

