import React from "react";
import { connect } from "react-redux";
import { addActivity } from "../actions/activity";
import { Form, FormGroup, ControlLabel, Button } from "react-bootstrap";

class SaveActivity extends React.Component {
  render() {
    let input;
    return (
      <div>
        <form
          onSubmit={e => {
            console.log("AddActivity");
            console.log(this);
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            this.props.dispatch(addActivity(input.value));
            //↑ActionCreatorからActionを取得し、Storeに渡している
            input.value = "";
          }}
        >
          <input
            ref={node => {
              input = node;
            }}
          />
          <Button type="submit" className="btn btn-large btn-primary">
            Spara
          </Button>
        </form>
      </div>
    );
  }
}

export default connect()(SaveActivity);
