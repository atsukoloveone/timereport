let nextClientId = 10; //CLIENTのid管理するための変数

//CLIENTをfetchする
export const fetchClients = () => {
  return {
    type: "FETCH_CLIENTS"
  };
};

export function receiveClients(clients) {
  console.log("receiveClients");
  console.log(clients);
  return {
    type: "RECEIVE_CLIENTS",
    clients: clients
  };
}

export function fetchPostsError() {
  return {
    type: "FETCH_ERROR"
  };
}

//CLIENTを追加する
export const addActivity = name => {
  return {
    type: "ADD_CLIENT",
    actionId: nextClientId++,
    name
  };
};

//CLIENTを完了する
export const changeActivity = actionId => {
  return {
    type: "CHANGE_CLIENT",
    actionId
  };
};

//CLIENTをフィルタリングする
export const setVisibilityFilter = filter => {
  return {
    type: "SET_VISIBILITY_FILTER_CLIENT",
    filter
  };
};

export const deleteActivity = actionId => {
  console.log("deleteActivity");
  console.log(actionId);
  return {
    type: "DELETE_CLIENT",
    actionId: actionId
  };
};

function getClients() {
  return dispatch => {
    dispatch(fetchClients());
    return fetch("http://127.0.0.1:4000/timereport/clients")
      .then(response => response.json())
      .then(data => dispatch(receiveClients(data)));
  };
}

function addActivityDb(name) {
  return dispatch => {
    dispatch(fetchClients());
    fetch("http://127.0.0.1:4000/timereport/clients/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name
      })
    });
    //.then(response => response.json())
    //.then(data => dispatch(receiveClients(data)));
  };
}
function deleteActivityDb(actionId) {
  return dispatch => {
    dispatch(fetchClients());
    fetch("http://127.0.0.1:4000/timereport/clients/" + actionId, {
      method: "DELETE"
    });
  };
}

export function getClientsIfNeeded() {
  return (dispatch, getState) => {
    if (getState().isFetching) {
      return Promise.resolve();
    } else {
      return dispatch(getClients());
    }
  };
}

export function addActivityIfNeeded(name) {
  console.log("addActivityIfNeeded");
  console.log(name);
  return (dispatch, getState) => {
    if (getState().isFetching) {
      console.log("addActivityIfNeeded isFetching");

      return Promise.resolve();
    } else {
      console.log("addActivityIfNeeded Fetching");
      return dispatch(addActivityDb(name));
    }
  };
}

export function deleteActivityIfNeeded(actionId) {
  console.log("deleteActivityIfNeeded");
  console.log(actionId);
  return (dispatch, getState) => {
    if (getState().isFetching) {
      console.log("deleteActivityIfNeeded isFetching");
      return Promise.resolve();
    } else {
      console.log("deleteActivityIfNeeded Fetching");
      return dispatch(deleteActivityDb(actionId));
    }
  };
}
