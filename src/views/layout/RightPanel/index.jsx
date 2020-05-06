import React from "react";
import { connect } from "react-redux";
import { Drawer } from "antd";
import { toggleSettingPanel } from "@/store/actions";
const RightPanel = (props) => {
  const { settingPanelVisible, toggleSettingPanel } = props;
  return (
    <div className="rightSettings">
      <Drawer
        title="系统设置"
        placement="right"
        width="350"
        onClose={toggleSettingPanel}
        visible={settingPanelVisible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default connect((state) => state.app, { toggleSettingPanel })(
  RightPanel
);
