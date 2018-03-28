import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { getTodosIfNeeded } from './actions';

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { Router, Route, browserHistory, BrowserRouter, Link } from 'react-router-dom'

import { createHashHistory } from 'history'
import todoApp from './reducers';
import App from './components/App';
import Activity  from './components/Activity';

const history = createHashHistory();
const initialState = { 
  todos: [{id:123, text:'hello', completed: false}] 
};

//let store = createStore(todoApp);

let store = createStore(
    todoApp,
    applyMiddleware(thunk, logger),
  //initialState
);

store.dispatch(getTodosIfNeeded());

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
       <Router history={history}> 
    <div>
     <Link to="/Activity" >Activity</Link>
        <Route name="App" path="/" component={App} />    
        <Route name="Activity" path="/Activity" component={Activity} />
    </div>
   </Router>
 </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
