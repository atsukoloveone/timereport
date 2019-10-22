//CLIENTをfetchする
const fetchClients = () => {
  return {
    type: "FETCH_CLIENTS"
  };
};

const receiveClients = clients => {
  return {
    type: "RECEIVE_CLIENTS",
    clients: clients
  };
};

const receiveClient = client => {
  return {
    type: "RECEIVE_CLIENT",
    client: client
  };
};

const getClients = () => {
  return dispatch => {
    dispatch(fetchClients());
    return fetch("http://127.0.0.1:4000/timereport/clients")
      .then(response => response.json())
      .then(data => dispatch(receiveClients(data)));
  };
};

export const getClientsIfNeeded = () => {
  return (dispatch, getState) => {
    if (getState().isFetching) {
      return Promise.resolve();
    } else {
      return dispatch(getClients());
    }
  };
};

const getClient = clientId => {
  return dispatch => {
    dispatch(fetchClients());
    return fetch("http://127.0.0.1:4000/timereport/client/" + clientId)
      .then(response => response.json())
      .then(data => dispatch(receiveClient(data)));
  };
};

export const getClientInfo = clientId => {
  return (dispatch, getState) => {
    if (getState().isFetching) {
      return Promise.resolve();
    } else {
      return dispatch(getClient(clientId));
    }
  };
};

export function updateClient(clientId, value) {
  console.log("updateClient");
  console.log(clientId);
  console.log(value);
  return dispatch => {
    dispatch(fetchClients());
    fetch("http://127.0.0.1:4000/timereport/client/" + clientId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: value
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log("updateClient data");
        console.log(data);
        dispatch({
          type: "UPDATE_CLIENT",
          payload: { client: data[0] }
        });
      })
      .catch(error => {
        throw error;
      });
  };
}
export const hideModal = () => {
  return {
    type: "HIDE_MODAL"
  };
};
