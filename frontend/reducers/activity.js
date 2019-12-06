const initialState = {
  activities: [],
  isFetching: false,
};
// 一つ一つのACTIVITYを処理するための関数（activitiesから利用されます）

// 複数のACTIVITYを処理するための関数
const activityApp = (state = initialState, action) => {
  console.log("reducere activities action");
  console.log(state);
  switch (action.type) {
    case "FETCH_ACTIVITIES":
      return {
        ...state,
        isFetching: true,
      };
    case "RECEIVE_ACTIVITIES":
      return { activities: action.activities, isFetching: false };
    case "ADD_ACTIVITY":
      return {
        activities: [action.payload, ...state.activities],
        isFetching: false,
      };
    case "UPDATE_ACTIVITY":
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

    case "DELETE_ACTIVITY":
      return {
        activities: state.activities.filter(
          (activity) => activity.actionId !== action.payload.actionId,
        ),
        isFetching: false,
      };
    case "FETCH_ERROR":
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
