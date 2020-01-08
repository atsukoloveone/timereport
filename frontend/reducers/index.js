import { combineReducers } from "redux";
import * as actionTypes from "../actionTypes";

const initialState = {
  id: 0,
  text: "Use Redux",
  completed: false,
};
// 一つ一つのTODOを処理するための関数（todosから利用されます）
const todo = (state = initialState, action) => {
  console.log("reducere todo");
  console.log(state);
  console.log(action);
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case actionTypes.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return { ...state, completed: !state.completed };
    default:
      return state;
  }
};

// 複数のTODOを処理するための関数
const todos = (state = [], action) => {
  console.log("reducere todos");
  console.log(state);
  console.log(action);
  switch (action.type) {
    case actionTypes.FETCH_TODOS:
      return state;
    case actionTypes.RECEIVE_TODOS:
      return action.todos;
    case actionTypes.ADD_TODO:
      return [...state, todo(undefined, action)];
    case actionTypes.TOGGLE_TODO:
      return state.map((t) => todo(t, action));
    case actionTypes.DELETE_TODOS:
      return [];
    case actionTypes.FETCH_ERROR_TODOS:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

// TODOの表示状態を処理するための関数
const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case actionTypes.SET_VISIBILITY_FILTER_TODO:
      return action.filter;
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});

export default todoApp;
