import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import { deleteClient, deleteClientIfNeeded } from "../actions/activity";
import { Button } from "react-bootstrap";

class ClientList extends React.Component {
  state = {
    value: 1
  };

  handleChange = (event, index, value) => {
    this.setState({ value });
  };
  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            console.log("DeleteClient");
            console.log(this);
            e.preventDefault();
            if (!this.state.value) {
              return;
            }
            this.props.dispatch(deleteClient(this.state.value));
            this.props.dispatch(deleteClientIfNeeded(this.state.value));
          }}
        >
          <SelectField
            floatingLabelText="Aktivitet name:"
            value={this.state.value}
            onChange={this.handleChange}
          >
            {this.props.clients.map(client => (
              <MenuItem
                key={activity.actionId}
                value={activity.actionId}
                primaryText={activity.name}
              />
            ))}
          </SelectField>
          <Button type="submit" bsStyle="danger">
            Ta bort
          </Button>

          <a id="editActionBtn" ng-click="editClient()" class="btn btn-info">
            "Ändra"
          </a>
        </form>
      </div>
    );
  }
}

// 制約の指定
ClientList.propTypes = {
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      actionId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onClientClick: PropTypes.func.isRequired
};

//export default ClientList;
export default connect()(ClientList);
