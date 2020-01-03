import * as actionTypes from "../actionTypes";

const initialState = {
  activities: [],
  isFetching: false,
};
// 一つ一つのACTIVITYを処理するための関数（activitiesから利用されます）

// 複数のACTIVITYを処理するための関数
const activityApp = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ACTIVITIES:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.RECEIVE_ACTIVITIES:
      return { activities: action.activities, isFetching: false };
    case actionTypes.ADD_ACTIVITY:
      return {
        activities: [action.payload, ...state.activities],
        isFetching: false,
      };
    case actionTypes.UPDATE_ACTIVITY:
      return {
        activities: state.activities.map((activity) => {
          if (activity.actionId === action.payload.actionId) {
            return action.payload;
            /*  return {
            ...activity,
            actionId: action.payload.actionId,
            name: action.payload.name
          };
      */
          }
          return activity;
        }),
        isFetching: false,
      };

    case actionTypes.DELETE_ACTIVITY:
      return {
        activities: state.activities.filter(
          (activity) => activity.actionId !== action.payload.actionId,
        ),
        isFetching: false,
      };
    case actionTypes.FETCH_ERROR:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};
/*
const activityApp = combineReducers({
  activities: activities
});
*/
export default activityApp;
