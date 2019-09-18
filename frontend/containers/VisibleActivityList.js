import { connect } from 'react-redux';
import { toggleActivity } from '../actions/activity';
import { changeActivity } from '../actions/activity';
import ActivityList from '../components/ActivityList';


// フィルタリング状態によってTODOリストの絞り込みを行う
const getVisibleActivities = (activities, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return activities;
    case 'SHOW_COMPLETED':
      return activities.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return activities.filter(t => !t.completed);
  }
};

// StateをViewのプロパティに落としこむ
const mapStateToProps = (state) => {
          console.log("mapStateToProps activities");
          console.log(state.activities);       
  return {
    activities: getVisibleActivities(state.activityApp.activities, state.activityApp.visibilityFilter, state.activityApp.currentActionId)
  };
};

// ViewからStateにイベントを伝える
const mapDispatchToProps = (dispatch) => {
  return {
    onActivityClick: (actionId) => {
      //ActionCreatorからActionを取得し、Storeに渡す
      dispatch(changeActivity(actionId))
    }
  };
};

// つなぎこみ
const VisibleActivityList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityList); //ViewにはReact.jsで用意したActivityListを使用する

export default VisibleActivityList;

