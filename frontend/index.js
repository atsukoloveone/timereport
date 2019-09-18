import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import thunkMiddleware from "redux-thunk";
import { getTodosIfNeeded } from "./actions";
import { getActivitiesIfNeeded } from "./actions/activity";

import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import {
  Router,
  Route,
  browserHistory,
  BrowserRouter,
  Link
} from "react-router-dom";

import { createHashHistory } from "history";
import todoApp from "./reducers/index";
import activityApp from "./reducers/activity";
import App from "./components/App";
import Activity from "./components/AppActivity";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const history = createHashHistory();
const initialState = {
  todos: [{ id: 123, text: "hello", completed: false }],
  activities: [{ actionId: 123, name: "hello" }]
};

//let store = createStore(todoApp);

let store = createStore(
  //todoApp,
  //activityApp,

  combineReducers({ todoApp, activityApp }),
  applyMiddleware(thunk, logger)
  //initialState
);

store.dispatch(getTodosIfNeeded());
store.dispatch(getActivitiesIfNeeded());

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
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
