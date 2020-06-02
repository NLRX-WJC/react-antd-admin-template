import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as Sentry from "@sentry/browser";
import "antd/dist/antd.less";
import "@/styles/index.less";
import "./mock";

// Sentry 埋点配置
Sentry.init({
  dsn: "https://eb974c77042e4550bc218ac2eb6426e9@o401432.ingest.sentry.io/5261004",
  beforeSend(event) {
    // Check if it is an exception, if so, show the report dialog
    if (event.exception) {
      Sentry.showReportDialog();
    }
    return event;
  },
});

ReactDOM.render(<App />, document.getElementById("root"));
