import { connect } from "react-redux";
import { changeActivity } from "../actions/activity";
import { getActivitiesIfNeeded } from "../actions/activity";
import ActivityListView from "../components/ActivityListView";

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
  getActivitiesIfNeeded: () => dispatch(getActivitiesIfNeeded())
});

// つなぎこみ
const ActivityList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityListView); //ViewにはReact.jsで用意したActivityListを使用する

export default ActivityList;
