// ACTIVITYをfetchする
const fetchActivities = () => ({
  type: "FETCH_ACTIVITIES",
});

function fetchPostsError(error) {
  return {
    type: "FETCH_ERROR",
    error,
  };
}

function receiveActivities(activities) {
  return {
    type: "RECEIVE_ACTIVITIES",
    activities,
  };
}

function getActivities() {
  return (dispatch) => {
    dispatch(fetchActivities());
    return fetch("http://127.0.0.1:4000/timereport/activities")
      .then((response) => response.json())
      .then((data) => dispatch(receiveActivities(data)));
  };
}

export function addActivity(value) {
  return (dispatch) => {
    dispatch(fetchActivities());
    fetch("http://127.0.0.1:4000/timereport/activity/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: value,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          dispatch(fetchPostsError("error"));
          throw Error(response.statusText);
        }
        return response.json;
      })
      .then((data) => {
        dispatch({
          type: "ADD_ACTIVITY",
          payload: { actionId: data[0].actionId, name: data[0].name },
        });
      });
  };
}

export function updateActivity(actionId, value) {
  return (dispatch) => {
    dispatch(fetchActivities());
    fetch(`http://127.0.0.1:4000/timereport/activity/${actionId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "UPDATE_ACTIVITY",
          payload: { actionId: data[0].actionId, name: data[0].name },
        });
      });
  };
}

export function deleteActivity(actionId) {
  return (dispatch) => {
    dispatch(fetchActivities());
    fetch(`http://127.0.0.1:4000/timereport/activity/${actionId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: "DELETE_ACTIVITY",
          payload: { actionId },
        });
      });
  };
}

export function getActivitiesIfNeeded() {
  return (dispatch, getState) => {
    if (getState().isFetching) {
      // You don’t have to return Promises, but it’s a handy convention
      // so the caller can always call .then() on async dispatch result.
      return Promise.resolve();
    }
    return dispatch(getActivities());
  };
}
