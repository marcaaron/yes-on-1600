import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from './reducers';
import App from './App';
import "./index.css";

const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
  , root
);
