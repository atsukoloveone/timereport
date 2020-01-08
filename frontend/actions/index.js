// TODOをfetchする
import * as actionTypes from "../actionTypes";

const fetchTodos = () => ({
  type: actionTypes.FETCH_TODOS,
});

function fetchTodosFailure(ex) {
  return {
    type: actionTypes.FETCH_ERROR_TODOS,
    ex,
  };
}

function receiveTodos(todos) {
  return {
    type: actionTypes.RECEIVE_TODOS,
    todos,
  };
}

// TODOを追加する
export const addTodo = (id, text) => ({
  type: actionTypes.ADD_TODO,
  id,
  text,
});

// TODOを完了する
const toggleTodo = (id) => ({
  type: actionTypes.TOGGLE_TODO,
  id,
});

// TODOをフィルタリングする
export const setVisibilityFilter = (filter) => ({
  type: actionTypes.SET_VISIBILITY_FILTER_TODO,
  filter,
});

export function getTodos() {
  return (dispatch) => {
    dispatch(fetchTodos());
    return fetch("http://127.0.0.1:4000/todos")
      .then((response) => response.json())
      .then((data) => dispatch(receiveTodos(data)))
      .catch((ex) => dispatch(fetchTodosFailure(ex)));
  };
}

export function addTodoDb(text) {
  return (dispatch) => {
    fetch("http://127.0.0.1:4000/todos/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        completed: false,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          dispatch(fetchTodosFailure("error"));
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        dispatch(addTodo(data, text));
      });
  };
}

export function toggleTodoDb(id) {
  return (dispatch) => {
    fetch(`http://127.0.0.1:4000/todos/${id}`, {
      method: "PUT",
    })
      .then((response) => response.json())
      .then(() => dispatch(toggleTodo(id)));
  };
}

export function deleteTodo() {
  return (dispatch) => {
    fetch("http://127.0.0.1:4000/todos/", {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: actionTypes.DELETE_TODOS,
        });
      });
  };
}
export function getTodosIfNeeded() {
  return (dispatch, getState) => {
    if (getState().isFetching) {
      return Promise.resolve();
    }
    return dispatch(getTodos());
  };
}
