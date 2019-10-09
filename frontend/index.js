import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import thunkMiddleware from "redux-thunk";
import { getTodosIfNeeded } from "./actions";

import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { Router, Route, browserHistory, BrowserRouter } from "react-router-dom";

import { createHashHistory } from "history";
import todoApp from "./reducers/index";
import activityApp from "./reducers/activity";
import clientApp from "./reducers/client";
import App from "./components/App";
import Activity from "./components/AppActivity";
import Client from "./components/AppClient";

import Sidebar from "./components/Sidebar";

const history = createHashHistory();

let store = createStore(
  combineReducers({ activityApp, clientApp, todoApp }),
  applyMiddleware(thunk, logger)
);

//store.dispatch(getTodosIfNeeded());

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={history}>
        <div>
          <Sidebar />
          <div style={{ paddingLeft: 300 }}>
            <div>
              <Route name="App" exact path="/" component={App} />
              <Route
                name="Activity"
                exact
                path="/activity"
                component={Activity}
              />
              <Route name="Client" exact path="/client" component={Client} />
            </div>
          </div>
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
