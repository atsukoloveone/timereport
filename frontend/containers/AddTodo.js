import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import { addTodoIfNeeded } from "../actions";
import { Form, FormGroup, ControlLabel, Button } from "react-bootstrap";

class AddTodo extends React.Component {
  render() {
    let input;
    return (
      <div>
        <form
          onSubmit={e => {
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
            ref={node => {
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
