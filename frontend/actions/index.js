let nextTodoId = 10; // TODOのid管理するための変数

// TODOをfetchする
export const fetchTodos = () => ({
  type: "FETCH_TODOS",
});

export function receiveTodos(todos) {
  return {
    type: "RECEIVE_TODOS",
    todos,
  };
}

export function fetchPostsError() {
  return {
    type: "FETCH_ERROR",
  };
}

// TODOを追加する
const addTodo = (text) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text,
});

// TODOを完了する
const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});

// TODOをフィルタリングする
export const setVisibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER_TODO",
  filter,
});

function getTodos() {
  return (dispatch) => {
    fetch("http://127.0.0.1:4000/todos")
      .then((response) => response.json())
      .then((data) => dispatch(receiveTodos(data)));
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
        completed: 0,
      }),
    })
      .then((response) => response.json())
      .then(() => dispatch(addTodo(text)));
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
          type: "DELETE_TODOS",
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
