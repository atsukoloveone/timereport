import config from "../config";
import * as actionTypes from "../actionTypes";

const url = config.serverLocalUrl;

// CLIENTをfetchする
const fetchClients = () => ({
  type: actionTypes.FETCH_CLIENTS,
});

const receiveClients = (clients) => ({
  type: actionTypes.RECEIVE_CLIENTS,
  clients,
});

const receiveClient = (client) => ({
  type: actionTypes.RECEIVE_CLIENT,
  client,
});

const getClients = () => (dispatch) => {
  dispatch(fetchClients());
  return fetch(`${url}/timereport/clients`)
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
  return fetch(`${url}timereport/client/${clientId}`)
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
  type: actionTypes.NEW_CLIENT,
});

export function deleteClient(clientId) {
  return (dispatch) => {
    dispatch(fetchClients());
    fetch(`${url}/timereport/client/${clientId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: actionTypes.DELETE_CLIENT,
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
    fetch(`${url}/timereport/client/create`, {
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
        console.log("addClient data");
        console.log(data);
        dispatch({
          type: actionTypes.ADD_CLIENT,
          payload: { client: data[0] },
        });
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function updateClient(clientId, value) {
  return (dispatch) => {
    dispatch(fetchClients());
    fetch(`${url}/timereport/client/${clientId}`, {
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
          type: actionTypes.UPDATE_CLIENT,
          payload: { client: data[0] },
        });
      })
      .catch((error) => {
        throw error;
      });
  };
}
export const hideModal = () => ({
  type: actionTypes.HIDE_MODAL,
});
