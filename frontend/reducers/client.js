import { combineReducers } from "redux";

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
    case "TOGGLE_CLIENT":
      if (state.actionId !== action.actionId) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });
    default:
      return state;
  }
};

// 複数のCLIENTを処理するための関数
const clients = (state = [], action) => {
  console.log("reducere clients action");
  console.log(action);
  switch (action.type) {
    case "FETCH_CLIENTS":
      return state;
    case "RECEIVE_CLIENTS":
      return action.clients;
    case "ADD_CLIENT":
      return [...state, client(undefined, action)];
    case "DELETE_CLIENT":
      return state.filter(client => client.actionId !== action.actionId);
    case "TOGGLE_CLIENT":
      return state.map(t => client(t, action));
    default:
      return state;
  }
};

// CLIENTの表示状態を処理するための関数
const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER_CLIENT":
      return action.filter;
    default:
      return state;
  }
};

function currentActionId(state = 1, action) {
  switch (action.type) {
    case "CHANGE_CLIENT":
      return action.actionId;
    default:
      return state;
  }
}

const clientApp = combineReducers({
  clients: clients,
  visibilityFilter: visibilityFilter,
  currentActionId: currentActionId
});

export default clientApp;
