import React from "react";
import { useDispatch } from "react-redux";
import { Tooltip } from "antd";
import Icon from '@ant-design/icons'
import * as icons from '@ant-design/icons';

import { toggleSettingPanel } from "@/store/actions";
import "./index.less";
const Settings = (props) => {
  // const { toggleSettingPanel } = props;

  const dispatch = useDispatch();

  const handleToggleSettingPanel = () => {
    dispatch(toggleSettingPanel())
  }

  return (
    <div className="settings-container">
      <Tooltip placement="bottom" title="系统设置">
        <Icon component={icons["SettingOutlined"]} onClick={handleToggleSettingPanel} />
      </Tooltip>
    </div>
  );
};

export default Settings;
