import React, { Component } from "react";
import { Spin } from "antd";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style

NProgress.configure({ showSpinner: false })// NProgress Configuration

class Loading extends Component {
  componentDidMount() {
    NProgress.start()
  }
  componentWillUnmount() {
    NProgress.done()
  }
  render() {
    return (
      <div className="app-container">
        <Spin />
      </div>
    );
  }
}

export default Loading;
