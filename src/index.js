import React from "react";
import ReactDOM from "react-dom";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import CombineReducers from "./Components/CombineReducers";
import { createLogger } from "redux-logger";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "react-input-range/lib/css/index.css";
const logger = createLogger();
export const store = createStore(
  CombineReducers,
  applyMiddleware(thunkMiddleware, logger)
);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
export default rootElement;
