import React, { PropTypes } from "react";

import { Todo } from "../models/todo";
import { TodoComponent } from "./todo-component";

interface TodoListComponentProps {
    todos: Todo[];
    onTodoClick(item: number): void;
}

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

    return (<div className="todo-list-component">
        {props.todos ? renderListOfItems() : null}
    </div>);
};
