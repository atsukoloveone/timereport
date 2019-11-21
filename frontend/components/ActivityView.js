import React from "react";
import PropTypes from "prop-types";
import Select from "@material-ui/core/Select";
import MenuItem from "material-ui/MenuItem";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import s from "../index.css";

class ActivityView extends React.Component {
  constructor(props) {
    super(props);
    this.saveValue = React.createRef();
    this.state = {
      selectedValue: {},
      activityName: "",
    };
  }

  componentDidMount() {
    this.props.getActivitiesIfNeeded();
  }

  addHandleClick = () => {
    this.setState({ selectedValue: [] });
    this.setState({ activityName: "" });
  };

  changeHandleClick = (event) => {
    const nameValue = event.target.value;
    this.setState({ activityName: nameValue });
    // this.setState({ selectedValue: this.state.selectedValue });
  };

  selectHandleChange = (event) => {
    this.setState({ selectedValue: event.target.value });
    this.setState({ activityName: event.target.value.name });
  };

  deleteHandleClick = () => {
    if (!this.state.selectedValue) {
      return;
    }
    this.props.deleteActivity(this.state.selectedValue.actionId);
    this.setState({ activityName: "" });
  };

  saveHandleClick = () => {
    if (!this.state.selectedValue.actionId) {
      this.props.addActivity(this.saveValue.value);
    } else {
      this.props.updateActivity(
        this.state.selectedValue.actionId,
        this.saveValue.value,
      );
    }
    // this.setState({ selectedValue: this.state.selectedValue });
  };

  render() {
    const { activities } = this.props;

    return (
      <div>
        {activities && (
          <div>
            <FormControl className={s.list_activity}>
              <InputLabel
                shrink
                htmlFor="age-label-placeholder"
                className={s.input_activity}
              >
                Aktivitet name:
              </InputLabel>
              <Select
                value={this.state.selectedValue}
                onChange={this.selectHandleChange}
                className={s.input_activity}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  <em>select the value</em>
                </MenuItem>
                {activities.map((activity) => (
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
          </div>
        )}
        <Button
          variant="contained"
          onClick={this.addHandleClick}
          className={s.button_activity}
        >
          Lägg till aktivitet
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.deleteHandleClick}
          className={s.button_activity}
        >
          Ta bort aktivitet
        </Button>

        <input
          ref={this.saveValue}
          value={this.state.activityName}
          onChange={this.changeHandleClick}
          className={s.input_activity}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={this.saveHandleClick}
          className={s.button_activity}
        >
          Spara
        </Button>
      </div>
    );
  }
}

// 制約の指定
ActivityView.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      actionId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  getActivitiesIfNeeded: PropTypes.func.isRequired,
  addActivity: PropTypes.func.isRequired,
  updateActivity: PropTypes.func.isRequired,
  deleteActivity: PropTypes.func.isRequired,
};

export default ActivityView;
