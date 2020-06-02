import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.less";
import "@/styles/index.less";
import "./mock";
import '@/lib/monitor';

ReactDOM.render(<App />, document.getElementById("root"));
