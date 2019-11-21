import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { addTodo, addTodoIfNeeded } from "../actions";


class AddTodo extends React.Component {
  render() {
    let input;
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            this.props.dispatch(addTodo(input.value));
            this.props.dispatch(addTodoIfNeeded(input.value));
            // ActionCreatorからActionを取得し、Storeに渡している
            input.value = "";
          }}
        >
          <input
            ref={(node) => {
              input = node;
            }}
          />
          <Button type="submit" className="btn btn-large btn-primary">
            Add Todo
          </Button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);
