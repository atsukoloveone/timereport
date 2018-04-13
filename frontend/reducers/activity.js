import { combineReducers } from 'redux';


// 一つ一つのACTIVITYを処理するための関数（activitiesから利用されます）
const activity = (state, action) => {
  switch (action.type) {
    case 'ADD_ACTIVITY':
      return {
        actionId: action.actionId,
        name: action.name
      };
    case 'TOGGLE_ACTIVITY':
      if (state.actionId !== action.actionId) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });
    default:
      return state;
  }
}

// 複数のACTIVITYを処理するための関数
const activities = (state = [], action) => {
          console.log("action");
          console.log(action);
  switch (action.type) {
    case 'FETCH_ACTIVITIES':
            return state;
    case 'RECEIVE_ACTIVITIES':
          return  action.activities;
    case 'ADD_ACTIVITY':
      return [
        ...state,
        activity(undefined, action)
      ];
    case 'TOGGLE_ACTIVITY':
      return state.map(t =>
        activity(t, action)
      );
    default:
      return state;
  }
}

// ACTIVITYの表示状態を処理するための関数
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER_ACTIVITY':
      return action.filter;
    default:
      return state;
  }
}

const activityApp = combineReducers({
  activities: activities,
  visibilityFilter: visibilityFilter
});



export default activityApp;

