import * as React from "react";
import classNames from "classnames";

const styles = require("./todo-component.scss");

interface TodoComponentProps {
    completed: boolean;
    text: string;
    onClick(): void;
};

export const TodoComponent = (props: TodoComponentProps) => {
    return (<div className="todo-component">
        <li
            onClick={props.onClick}
            className={props.completed ? classNames(styles.line_through) : classNames(styles.none)}>
            {props.text}
        </li>
    </div>);
};

