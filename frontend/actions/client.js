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

function getClients() {
  return dispatch => {
    dispatch(fetchClients());
    return fetch("http://127.0.0.1:4000/timereport/clients")
      .then(response => response.json())
      .then(data => dispatch(receiveClients(data)));
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
