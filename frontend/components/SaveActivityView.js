import React from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, ControlLabel, Button } from "react-bootstrap";

export default class SaveActivityView extends React.Component {
  handleSubmit = event => {
    console.log("AddActivity");
    console.log(this.refs.addValue.value);
    this.props.addActivity(this.refs.addValue.value);
  };

  render() {
    const { addValue } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="addValue" value={addValue} />
          <Button type="submit" className="btn btn-large btn-primary">
            Spara
          </Button>
        </form>
      </div>
    );
  }
}

// 制約の指定
SaveActivityView.propTypes = {
  addActivity: PropTypes.func
};
