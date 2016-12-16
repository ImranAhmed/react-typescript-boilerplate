import { connect } from "react-redux";
import { toggleTodo } from "./actions";
import { TodoListComponent, TodoListComponentProps } from "./todo-list-component";
import { Todo } from "./model";


interface VisibleTodoListContainerState {
    visibilityFilter: string;
    todos: Todo[];
};

const getVisibleTodos = (todos: Todo[], filter: string) => {
    switch (filter) {
        case "SHOW_ALL":
            return todos;
        case "SHOW_COMPLETED":
            return todos.filter(t => t.completed);
        case "SHOW_ACTIVE":
            return todos.filter(t => !t.completed);
    }
};

const mapStateToProps = (state: VisibleTodoListContainerState) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onTodoClick: (id: number) => {
            dispatch(toggleTodo(id));
        }
    };
};

export const VisibleTodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListComponent);
