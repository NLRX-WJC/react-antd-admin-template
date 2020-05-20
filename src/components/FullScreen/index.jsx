import React, { useState, useEffect } from "react";
import screenfull from "screenfull";
import { Icon, message, Tooltip } from "antd";
import "./index.less";

const click = () => {
  if (!screenfull.isEnabled) {
    message.warning("you browser can not work");
    return false;
  }
  screenfull.toggle();
};

const FullScreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const init = () => {
    if (screenfull.isEnabled) {
      screenfull.on("change", change);
    }
  };

  const change = () => {
    setIsFullscreen(screenfull.isFullscreen);
  };

  useEffect(() => {
    init();
    return () => {
      if (screenfull.isEnabled) {
        screenfull.off("change", change);
      }
    };
  }, []);

  const title = isFullscreen ? "取消全屏" : "全屏";
  const type = isFullscreen ? "fullscreen-exit" : "fullscreen";
  return (
    <div className="fullScreen-container">
      <Tooltip placement="bottom" title={title}>
        <Icon type={type} onClick={click} />
      </Tooltip>
    </div>
  );
};

export default FullScreen;
