import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { addTodoDb } from "../actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.saveValue = React.createRef();
  }

  saveHandleClick = () => {
    console.log("saveHandleClick");
    console.log(this.saveValue.current.value);

    this.props.addTodoDb(this.saveValue.current.value);

    // this.setState({ selectedValue: this.state.selectedValue });
  };

  render() {
    let input;

    return (
      <div>
        <form
          onSubmit={this.saveHandleClick}
          // this.props.addTodoDb(input.value);
          // ActionCreatorからActionを取得し、Storeに渡している
          // input.value = "";
        >
          <input ref={this.saveValue} />
          <Button type="submit" className="btn btn-large btn-primary">
            Add Todo
          </Button>
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  addTodoDb: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addTodoDb: (value) => dispatch(addTodoDb(value)),
});

export default connect(mapDispatchToProps)(AddTodo);
