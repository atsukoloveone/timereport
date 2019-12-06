import { connect } from "react-redux";
import {
  getActivitiesIfNeeded,
  deleteActivity,
  addActivity,
  updateActivity,
} from "../actions/activity";
import ActivityView from "../components/ActivityView";

// StateをViewのプロパティに落としこむ
const mapStateToProps = (state) => ({
  activities: state.activityApp.activities,
  error: state.activityApp.error,
});

// ViewからStateにイベントを伝える
const mapDispatchToProps = (dispatch) => ({
  getActivitiesIfNeeded: () => dispatch(getActivitiesIfNeeded()),
  deleteActivity: (actionId) => dispatch(deleteActivity(actionId)),
  addActivity: (value) => dispatch(addActivity(value)),
  updateActivity: (actionId, value) =>
    dispatch(updateActivity(actionId, value)),
});

// つなぎこみ
const Activity = connect(mapStateToProps, mapDispatchToProps)(ActivityView);
export default Activity;
