import { combineReducers } from "redux";

const initialState = {
  clients: [],
  client: {},
  isFetching: false,
  modalIsOpen: false
};
// 一

// 複数のCLIENTを処理するための関数
const clientApp = (state = initialState, action) => {
  console.log("reducere clients action");
  console.log(state);
  console.log(action);

  switch (action.type) {
    case "FETCH_CLIENTS":
      return {
        ...state,
        isFetching: true
      };
    case "RECEIVE_CLIENTS":
      return { ...state, clients: action.clients, isFetching: false };
    case "ADD_CLIENT":
      return {
        activities: [action.payload, ...state.clients],
        isFetching: false
      };
    case "UPDATE_CLIENT":
      return {
        clients: state.clients.map(client => {
          if (client.clientId === action.payload.client.clientId) {
            return action.payload.client;
          } else return client;
        }),
        isFetching: false
      };
    case "DELETE_CLIENT":
      return {
        clients: state.clients.filter(
          client => client.clientId !== action.payload.clientId
        ),
        isFetching: false
      };
    case "RECEIVE_CLIENT":
      return {
        ...state,
        client: action.client,
        modalIsOpen: true,
        isFetching: false
      };
    case "NEW_CLIENT":
      return {
        ...state,
        client: {},
        modalIsOpen: true
      };
    case "HIDE_MODAL":
      return {
        ...state,
        modalIsOpen: false
      };
    default:
      return state;
  }
};

export default clientApp;
