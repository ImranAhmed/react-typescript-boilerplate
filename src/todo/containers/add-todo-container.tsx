import * as React from "react";
import * as Redux from "redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addTodo } from "../actions";

interface AddTodoProps {
    addTodo(item: string): void;
}

const styles = require("./add-todo-container.scss");

const AddTodo = (props: AddTodoProps) => {
    let input: any;

    return (
        <div className={styles.main}>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                props.addTodo(input.value);
                input.value = "";
            } }>
                <input ref={node => {
                    input = node;
                } } />
                <button type="submit">
                    Add Todo
            </button>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    addTodo: addTodo,
  }, dispatch);
};

export const AddTodoContainer = connect(null, mapDispatchToProps)(AddTodo);