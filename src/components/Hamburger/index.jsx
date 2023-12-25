import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Icon } from "antd";
import Icon from '@ant-design/icons'
import * as icons from '@ant-design/icons';


import { toggleSiderBar } from "@/store/actions";
import "./index.less";
const Hamburger = (props) => {
  const { sidebarCollapsed } = useSelector(state => state.app);
  const dispatch = useDispatch();

  const handleToggleSiderBar = () => {
    dispatch(toggleSiderBar());
  }
  return (
    <div className="hamburger-container">
      <Icon component={sidebarCollapsed ? icons["MenuUnfoldOutlined"] : icons["MenuFoldOutlined"]}
        onClick={handleToggleSiderBar}
      />
    </div>
  );
};

export default Hamburger;
