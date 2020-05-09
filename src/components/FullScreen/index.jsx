import React, { Component } from "react";
import screenfull from "screenfull";
import { Icon, message, Tooltip } from "antd";
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
    const title = this.state.isFullscreen ? "取消全屏" : "全屏";
    const type = this.state.isFullscreen ? "fullscreen-exit" : "fullscreen";
    return (
      <div className="fullScreen-container">
        <Tooltip placement="bottom" title={title}>
          <Icon type={type} onClick={this.click} />
        </Tooltip>
      </div>
    );
  }
}

export default FullScreen;
