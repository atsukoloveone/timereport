import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { Router, Route } from "react-router-dom";
import logger from "redux-logger";
import thunk from "redux-thunk";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { createHashHistory } from "history";

import todoApp from "./reducers/index";
import activityApp from "./reducers/activity";
import clientApp from "./reducers/client";

import App from "./components/App";
import Activity from "./components/AppActivity";
import Client from "./components/AppClient";

import Sidebar from "./components/Sidebar";

const history = createHashHistory();

/* eslint-disable no-underscore-dangle */

const store = createStore(
  combineReducers({ activityApp, clientApp, todoApp }),
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={store}>
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
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root"),
);
