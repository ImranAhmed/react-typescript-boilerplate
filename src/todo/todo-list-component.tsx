import * as React from "react";
import classNames from "classnames";

import { Todo } from "./model";
import { TodoComponent } from "./todo-component";

export interface TodoListComponentProps {
    todos: Todo[];
    onTodoClick(item: number): void;
};

const styles = require("./todo-list-component.scss");

export const TodoListComponent = (props: TodoListComponentProps) => {

    const renderListOfItems = () => {
        return (<ul>
            {props.todos.map(todo =>
                <TodoComponent
                    key={todo.id}
                    {...todo}
                    onClick={() => props.onTodoClick(todo.id)} />
            )}
        </ul>);
    };

    return (<div className={classNames(styles.main, "todo-list-component")}>
        {props.todos ? renderListOfItems() : null}
    </div>);
};
