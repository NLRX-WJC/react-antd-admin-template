import React, { Component } from "react";
import screenfull from "screenfull";
import { Icon, message } from "antd";
import "./index.less";
class FullScreen extends Component {
  state = {
    isFullscreen: false,
  };
  init = () => {
    if (screenfull.isEnabled) {
      screenfull.on("change", this.change);
    }
  };
  change = () => {
    this.setState({
      isFullscreen: screenfull.isFullscreen,
    });
  };
  click = () => {
    if (!screenfull.isEnabled) {
      message.warning("you browser can not work");
      return false;
    }
    screenfull.toggle();
  };
  componentDidMount() {
    this.init();
  }
  componentWillUnmount() {
    if (screenfull.isEnabled) {
      screenfull.off("change", this.change);
    }
  }
  render() {
    return (
      <div className="fullScreen-container">
        {this.state.isFullscreen ? (
          <Icon type="fullscreen-exit" onClick={this.click} />
        ) : (
          <Icon type="fullscreen" onClick={this.click} />
        )}
      </div>
    );
  }
}

export default FullScreen;
