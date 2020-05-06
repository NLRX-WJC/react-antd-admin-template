import React from "react";
import { connect } from "react-redux";
import { Icon } from "antd";
import { toggleSiderBar } from "@/store/actions";
import "./index.less";
const Hamburger = (props) => {
  const { sidebarCollapsed, toggleSiderBar } = props;
  return (
    <div className="hamburger-container">
      <Icon
        type={sidebarCollapsed ? "menu-unfold" : "menu-fold"}
        onClick={toggleSiderBar}
      />
    </div>
  );
};

export default connect((state) => state.app, { toggleSiderBar })(Hamburger);
