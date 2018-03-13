import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';


const initialState = { 
  todos: [{id:123, text:'hello', completed: false}] 
};


let store = createStore(
  todoApp, 
  initialState
);

//let store = createStore(todoAtodoApppp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
