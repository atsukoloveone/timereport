import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { addTodoDb, deleteTodo } from "../actions";

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
            this.props.addTodoDb(input.value);
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
          <Button
            variant="contained"
            color="secondary"
            onClick={() => this.props.deleteTodo()}
          >
            Ta bort
          </Button>
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  addTodoDb: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  error: state.todoApp.error,
});

const mapDispatchToProps = (dispatch) => ({
  addTodoDb: (value) => dispatch(addTodoDb(value)),
  deleteTodo: () => dispatch(deleteTodo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
