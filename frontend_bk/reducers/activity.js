import { combineReducers } from 'redux';


// 一つ一つのACTIVITYを処理するための関数（activitiesから利用されます）
const activity = (state, action) => {
return state;
}

// 複数のACTIVITYを処理するための関数
const activities = (state = [], action) => {
 return state;
}

// ACTIVITYの表示状態を処理するための関数
const visibilityFilter = (state = 'SHOW_ALL', action) => {
return state;
}

const activityApp = combineReducers({
  activities: activities,
  visibilityFilter: visibilityFilter
});



export default activityApp;

