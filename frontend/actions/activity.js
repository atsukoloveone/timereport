import config from "../config";
import * as actionTypes from "../actionTypes";

const url = config.serverLocalUrl;

// ACTIVITYをfetchする
const fetchActivities = () => ({
  type: actionTypes.FETCH_ACTIVITIES,
});

function fetchPostsError(error) {
  return {
    type: actionTypes.FETCH_ERROR,
    error,
  };
}

function receiveActivities(activities) {
  return {
    type: actionTypes.RECEIVE_ACTIVITIES,
    activities,
  };
}

function getActivities() {
  return (dispatch) => {
    dispatch(fetchActivities());
    return fetch(`${url}/timereport/activities`)
      .then((response) => response.json())
      .then((data) => dispatch(receiveActivities(data)));
  };
}

export function addActivity(value) {
  console.log("addActivity");
  console.log(value);
  return (dispatch) => {
    dispatch(fetchActivities());
    fetch(`${url}/timereport/activity/create`, {
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
        return response.json();
      })
      .then((data) => {
        console.log("addActivity results");
        console.log(data);
        dispatch({
          type: actionTypes.ADD_ACTIVITY,
          payload: { actionId: data[0].actionId, name: data[0].name },
        });
      });
  };
}

export function updateActivity(actionId, value) {
  return (dispatch) => {
    dispatch(fetchActivities());
    fetch(`${url}/timereport/activity/${actionId}`, {
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
          type: actionTypes.UPDATE_ACTIVITY,
          payload: { actionId: data[0].actionId, name: data[0].name },
        });
      });
  };
}

export function deleteActivity(actionId) {
  return (dispatch) => {
    dispatch(fetchActivities());
    fetch(`${url}/timereport/activity/${actionId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: actionTypes.DELETE_ACTIVITY,
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
