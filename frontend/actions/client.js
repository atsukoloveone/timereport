// CLIENTをfetchする
const fetchClients = () => ({
  type: "FETCH_CLIENTS",
});

const receiveClients = (clients) => ({
  type: "RECEIVE_CLIENTS",
  clients,
});

const receiveClient = (client) => ({
  type: "RECEIVE_CLIENT",
  client,
});

const getClients = () => (dispatch) => {
  dispatch(fetchClients());
  return fetch("http://127.0.0.1:4000/timereport/clients")
    .then((response) => response.json())
    .then((data) => dispatch(receiveClients(data)));
};

export const getClientsIfNeeded = () => (dispatch, getState) => {
  if (getState().isFetching) {
    return Promise.resolve();
  }
  return dispatch(getClients());
};

const getClient = (clientId) => (dispatch) => {
  dispatch(fetchClients());
  return fetch(`http://127.0.0.1:4000/timereport/client/${clientId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("getClient actions");
      console.log(data);
      return dispatch(receiveClient(data));
    });
};

export const getClientInfo = (clientId) => (dispatch, getState) => {
  if (getState().isFetching) {
    return Promise.resolve();
  }
  return dispatch(getClient(clientId));
};

export const newClient = () => ({
  type: "NEW_CLIENT",
});

export function deleteClient(clientId) {
  return (dispatch) => {
    dispatch(fetchClients());
    fetch(`http://127.0.0.1:4000/timereport/client/${clientId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: "DELETE_CLIENT",
          payload: { clientId },
        });
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function addClient(value) {
  return (dispatch) => {
    dispatch(fetchClients());
    fetch("http://127.0.0.1:4000/timereport/client/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("addClient data");
        // console.log(data);
        dispatch({
          type: "ADD_CLIENT",
          payload: { client: data[0] },
        });
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function updateClient(clientId, value) {
  // console.log("updateClient");
  // console.log(clientId);
  // console.log(value);
  return (dispatch) => {
    dispatch(fetchClients());
    fetch(`http://127.0.0.1:4000/timereport/client/${clientId}`, {
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
        // console.log("updateClient data");
        // console.log(data);
        dispatch({
          type: "UPDATE_CLIENT",
          payload: { client: data[0] },
        });
      })
      .catch((error) => {
        throw error;
      });
  };
}
export const hideModal = () => ({
  type: "HIDE_MODAL",
});
