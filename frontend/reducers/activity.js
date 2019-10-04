import { combineReducers } from "redux";

// 一つ一つのACTIVITYを処理するための関数（activitiesから利用されます）
const activity = (state, action) => {
  console.log("reducere activity");
  console.log(action);
  switch (action.type) {
    case "DELETE_ACTIVITY":
      return {
        actionId: action.actionId
      };
    default:
      return state;
  }
};

// 複数のACTIVITYを処理するための関数
const activities = (state = [], action) => {
  console.log("reducere activities action");
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "FETCH_ACTIVITIES":
      return state;
    case "RECEIVE_ACTIVITIES":
      return action.activities;
    case "ADD_ACTIVITY":
      return [action.payload, ...state];
    case "UPDATE_ACTIVITY":
      return state.map(activity => {
        if (activity.actionId === action.payload.actionId) {
          return action.payload;
          /*  return {
            ...activity,
            actionId: action.payload.actionId,
            name: action.payload.name
          };
      */
        } else return activity;
      });
    case "DELETE_ACTIVITY":
      return state.filter(
        activity => activity.actionId !== action.payload.actionId
      );
    default:
      return state;
  }
};

function currentActionId(state = 1, action) {
  switch (action.type) {
    case "CHANGE_ACTIVITY":
      return action.actionId;
    default:
      return state;
  }
}

const activityApp = combineReducers({
  activities: activities,
  currentActionId: currentActionId
});

export default activityApp;
