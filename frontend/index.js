import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { getTodosIfNeeded } from './actions/index.js';
import { createStore, applyMiddleware  } from 'redux';

import todoApp from './reducers';
import App from './components/App';


const initialState = { 
  todos: [{id:123, text:'hello', completed: false}] 
};


let store = createStore(
  todoApp, 
  applyMiddleware(thunk, logger)
  //initialState
);

store.dispatch(getTodosIfNeeded());
//let store = createStore(todoAtodoApppp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
