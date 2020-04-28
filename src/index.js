import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";
import { Provider } from "react-redux";
import store from "./store";
import "antd/dist/antd.less";
import "@/styles/index.less";
import "./mock";
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
