//CLIENTをfetchする
export const fetchClients = () => {
  return {
    type: "FETCH_CLIENTS"
  };
};

export const receiveClients = clients => {
  return {
    type: "RECEIVE_CLIENTS",
    clients: clients
  };
};

export const getClients = () => {
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

export const updateClientInfo = (clientId, modalProps, modalType) => {
  return {
    type: "UPDATE_CLIENT",
    clientId: clientId,
    modalProps: modalProps,
    modalType: modalType
  };
};

export const hideModal = () => dispatch => {
  dispatch({
    type: "HIDE_MODAL"
  });
};
