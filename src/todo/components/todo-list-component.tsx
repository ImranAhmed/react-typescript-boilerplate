import * as React from "react";

import { Todo } from "../models/todo";
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

    return (<div className={styles.main}>
        {props.todos ? renderListOfItems() : null}
    </div>);
};
