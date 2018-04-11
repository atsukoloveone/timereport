let nextActivityId = 10; //ACTIVITIESのid管理するための変数


//ACTIVITIESをfetchする
export const fetchActivities = () => {
  return {
    type: 'FETCH_ACTIVITIESS'
  };
}


export function receiveActivities(activities) {
    console.log(activities);
    return {
        type: 'RECEIVE_ACTIVITIESS',
        activities: activities
    };
}

export function fetchPostsError() {
  return {
    type: "FETCH_ERROR"
  };
}

//ACTIVITIESを追加する
export const addActivity = (text) => {
  return {
    type: 'ADD_ACTIVITIES',
    id: nextActivityId++,
    text
  };
}

//ACTIVITIESを完了する
export const toggleActivity = (id) => {
  return {
    type: 'TOGGLE_ACTIVITIES',
    id
  };
}



function getActivities() {
   return dispatch => {
       dispatch(fetchActivities());
       return fetch('http://127.0.0.1:4000/timereport/activities')
         .then(response => response.json())
         .then(data => dispatch(receiveActivities(data)));
   };
}

function addActivityDb(text) {
console.log("addActivityDb"); 
       console.log(text);      
   return dispatch => {
       dispatch(fetchActivities());
       fetch('http://127.0.0.1:4000/timereport/activities/new', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            text: text,
            completed: 0,
          })
        })
         //.then(response => response.json())
         //.then(data => dispatch(receiveActivities(data)));
   };
}

export function getActivitiesIfNeeded() {
    return (dispatch, getState) => {
        if(getState().isFetching) {
            return Promise.resolve();
        } else {
            return dispatch(getActivities());
        }
    };
}

export function addActivityIfNeeded(text) {
       console.log("addActivityIfNeeded");  
       console.log(text);  
    return (dispatch, getState) => {
        if(getState().isFetching) {
           console.log("addActivityIfNeeded isFetching");  

            return Promise.resolve();
        } else {
              console.log("addActivityIfNeeded Fetching");  
            return dispatch(addActivityDb(text));
        }
    };
}

