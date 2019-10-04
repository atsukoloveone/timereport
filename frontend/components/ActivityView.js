import React from "react";
import PropTypes from "prop-types";
import Select from "@material-ui/core/Select";
import MenuItem from "material-ui/MenuItem";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

export default class ActivityListView extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      defaultValue: {},
      selectedValue: {},
      activityName: ""
    };
  }

  selectHandleChange = event => {
    console.log("handleChange");
    console.log(event.target.value);
    this.setState({ selectedValue: event.target.value });
    this.setState({ activityName: event.target.value.name });
  };

  deleteHandleClick = event => {
    if (!this.state.selectedValue) {
      return;
    }
    this.props.deleteActivity(this.state.selectedValue.actionId);
    this.setState({ activityName: "" });
  };

  saveHandleClick = event => {
    console.log("saveActivity");
    console.log(this.refs.saveValue.value);
    console.log(this.state.selectedValue);
    if (!this.state.selectedValue.actionId) {
      this.props.addActivity(this.refs.saveValue.value);
    } else {
      this.props.updateActivity(
        this.state.selectedValue.actionId,
        this.refs.saveValue.value
      );
    }
    this.setState({ selectedValue: this.state.selectedValue });
  };

  addHandleClick = event => {
    this.setState({ selectedValue: [] });
    this.setState({ activityName: "" });
  };

  changeHandleClick = event => {
    const nameValue = event.target.value;
    this.setState({ activityName: nameValue });
    this.setState({ selectedValue: this.state.selectedValue });
    console.log("handleChange");
    console.log(event.target.value);
    console.log(this.state.selectedValue);
  };

  componentDidMount() {
    this.props.getActivitiesIfNeeded();
  }

  render() {
    const { activities } = this.props;

    return (
      <div>
        {activities && (
          <FormControl>
            <InputLabel shrink htmlFor="age-label-placeholder">
              Aktivitet name:
            </InputLabel>
            <Select
              value={this.state.selectedValue}
              onChange={this.selectHandleChange}
              displayEmpty
            >
              <MenuItem value="" disabled>
                <em>select the value</em>
              </MenuItem>
              {activities.map(activity => (
                <MenuItem
                  key={activity.actionId}
                  value={activity}
                  name={activity.name}
                >
                  {activity.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        <Button variant="contained" onClick={this.addHandleClick}>
          Lägg till aktivitet
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.deleteHandleClick}
        >
          Ta bort aktivitet
        </Button>

        <input
          ref="saveValue"
          value={this.state.activityName}
          onChange={this.changeHandleClick}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={this.saveHandleClick}
        >
          Spara
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
  onActivityClick: PropTypes.func,
  addActivity: PropTypes.func,
  updateActivity: PropTypes.func
};
