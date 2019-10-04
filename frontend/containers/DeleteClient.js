import React from "react";
import { connect } from "react-redux";
import { deleteClient } from "../actions/client";
import { deleteClientIfNeeded } from "../actions/client";
import { Form, FormGroup, ControlLabel, Button } from "react-bootstrap";

class DeleteClient extends React.Component {
  render() {
    let input;
    return (
      <div>
        <form
          onSubmit={e => {
            console.log(this.context.redux);
            e.preventDefault();
            if (!this.context.redux.getState().value.trim()) {
              return;
            }
            this.props.dispatch(
              deleteClient(this.context.redux.getState().value)
            );
            // ActionCreatorからActionを取得し、Storeに渡している
          }}
        >
          <Button type="submit" className="btn btn-large btn-danger">
            Delete Klient
          </Button>
        </form>
      </div>
    );
  }
}

export default connect()(DeleteClient);