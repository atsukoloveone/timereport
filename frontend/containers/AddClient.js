import React from "react";
import { connect } from "react-redux";
import { addClient, addClientIfNeeded } from "../actions/client";


class AddClient extends React.Component {
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
            this.props.dispatch(addClient(input.value));
            this.props.dispatch(addClientIfNeeded(input.value));
            // ↑ActionCreatorからActionを取得し、Storeに渡している
            input.value = "";
          }}
        >
          <Button type="submit" className="btn btn-large btn-primary">
            Lägga til Klient
          </Button>
        </form>
      </div>
    );
  }
}

export default connect()(AddClient);
