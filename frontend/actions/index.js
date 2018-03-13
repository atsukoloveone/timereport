let nextTodoId = 0; //TODOのid管理するための変数


//TODOをfetchする
export const fetchTodos = () => {
  return {
    type: 'FETCH_TODOS'
  };
}


export function receiveTodos(todos) {
    console.log(todos);
    return {
        type: 'RECEIVE_TODOS',
        todos: todos
    };
}

export function fetchPostsError() {
  return {
    type: "FETCH_ERROR"
  };
}

//TODOを追加する
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
}

//TODOを完了する
export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
}

//TODOをフィルタリングする
export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};

function getTodos(store) {
   return dispatch => {
       dispatch(fetchTodos());
       return fetch('http://127.0.0.1:4000/todos')
         .then(response => response.json())
         .then(data => dispatch(receiveTodos(data)));
   };
}

export function getTodosIfNeeded() {
    return (dispatch, getState) => {
        if(getState().isFetching) {
            return Promise.resolve();
        } else {
            return dispatch(getTodos());
        }
    };
}
