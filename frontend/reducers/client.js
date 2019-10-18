import { combineReducers } from "redux";

const initialState = {
  clients: [],
  client: {},
  isFetching: false,
  modalIsOpen: false
};
// 一
// 一つ一つのCLIENTを処理するための関数（clientsから利用されます）
const client = (state, action) => {
  console.log("reducere client");
  console.log(action);
  switch (action.type) {
    case "ADD_CLIENT":
      return {
        actionId: action.actionId,
        name: action.name
      };
    case "DELETE_CLIENT":
      return {
        actionId: action.actionId
      };
    default:
      return state;
  }
};

// 複数のCLIENTを処理するための関数
const clientApp = (state = initialState, action) => {
  console.log("reducere clients action");
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
      return [...state, client(undefined, action)];
    case "DELETE_CLIENT":
      return state.filter(client => client.actionId !== action.actionId);
    case "RECEIVE_CLIENT":
      return {
        ...state,
        client: action.client,
        modalIsOpen: true,
        isFetching: false
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

function currentCleintId(state = 1, action) {
  switch (action.type) {
    case "CHANGE_CLIENT":
      return action.clientId;
    default:
      return state;
  }
}

export default clientApp;
