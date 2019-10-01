//ACTIVITYをfetchする
export const fetchActivities = () => {
  return {
    type: "FETCH_ACTIVITIES"
  };
};

export function receiveActivities(activities) {
  console.log("receiveActivities");
  console.log(activities);
  return {
    type: "RECEIVE_ACTIVITIES",
    activities: activities
  };
}

export function fetchPostsError() {
  return {
    type: "FETCH_ERROR"
  };
}

//ACTIVITYを完了する
export const changeActivity = actionId => {
  return {
    type: "CHANGE_ACTIVITY",
    actionId
  };
};

export const deleteActivity = actionId => {
  console.log("deleteActivity");
  console.log(actionId);
  return {
    type: "DELETE_ACTIVITY",
    actionId: actionId
  };
};

function getActivities() {
  return dispatch => {
    dispatch(fetchActivities());
    return fetch("http://127.0.0.1:4000/timereport/activities")
      .then(response => response.json())
      .then(data => dispatch(receiveActivities(data)));
  };
}

export function addActivity(name) {
  console.log("addActivity");
  console.log(name);
  return dispatch => {
    dispatch(fetchActivities());
    fetch("http://127.0.0.1:4000/timereport/activities/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name
      })
    })
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: "ADD_ACTIVITY",
          payload: { actionId: data[0].actionId, name: data[0].name }
        })
      );
  };
}
function deleteActivityDb(actionId) {
  return dispatch => {
    dispatch(fetchActivities());
    fetch("http://127.0.0.1:4000/timereport/activities/" + actionId, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => dispatch(receiveActivities(data)));
  };
}

export function getActivitiesIfNeeded() {
  return (dispatch, getState) => {
    if (getState().isFetching) {
      // You don’t have to return Promises, but it’s a handy convention
      // so the caller can always call .then() on async dispatch result.
      return Promise.resolve();
    } else {
      return dispatch(getActivities());
    }
  };
}
