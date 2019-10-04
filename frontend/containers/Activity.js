import { connect } from "react-redux";
import {
  changeActivity,
  getActivitiesIfNeeded,
  deleteActivity,
  addActivity,
  updateActivity
} from "../actions/activity";
import ActivityListView from "../components/ActivityView";

// StateをViewのプロパティに落としこむ
const mapStateToProps = state => {
  console.log("mapStateToProps activities");
  console.log(state.activityApp.activities);
  return {
    activities: state.activityApp.activities
  };
};

// ViewからStateにイベントを伝える
const mapDispatchToProps = dispatch => ({
  onActivityClick: actionId => dispatch(changeActivity(actionId)),
  getActivitiesIfNeeded: () => dispatch(getActivitiesIfNeeded()),
  deleteActivity: actionId => dispatch(deleteActivity(actionId)),
  addActivity: value => dispatch(addActivity(value)),
  updateActivity: (actionId, value) => dispatch(updateActivity(actionId, value))
});

// つなぎこみ
const ActivityList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityListView); //ViewにはReact.jsで用意したActivityListを使用する

export default ActivityList;
