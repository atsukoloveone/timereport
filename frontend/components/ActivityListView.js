import React from "react";
import PropTypes from "prop-types";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import { deleteActivity, deleteActivityIfNeeded } from "../actions/activity";
import { Button } from "react-bootstrap";

export default class ActivityListView extends React.Component {
  state = {
    selectedValue: 1
  };

  handleChange = (event, index, value) => {
    console.log("handleChange");
    console.log(this.state);
    this.setState({ selectedValue: value });
  };
  componentDidMount() {
    this.props.getActivitiesIfNeeded();
  }

  render() {
    const { activities } = this.props;
    return (
      <div>
        {activities && (
          <SelectField
            floatingLabelText="Aktivitet name:"
            value={this.state.selectedValue}
            onChange={this.handleChange}
          >
            {activities.map(activity => (
              <MenuItem
                key={activity.actionId}
                value={activity.actionId}
                primaryText={activity.name}
              />
            ))}
          </SelectField>
        )}
        <Button type="submit" bsStyle="danger">
          Ta bort
        </Button>
      </div>
    );
  }
}

// 制約の指定
ActivityListView.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      actionId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ),
  onActivityClick: PropTypes.func
};
