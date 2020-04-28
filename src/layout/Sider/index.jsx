import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import Logo from "./Logo";
import Menu from "./Menu";
const { Sider } = Layout;

const LayoutSider = (props) => {
  const { sidebarCollapsed } = props;
  return (
    <Sider collapsible collapsed={sidebarCollapsed} trigger={null}>
      <Logo />
      <Menu />
    </Sider>
  );
};

export default connect((state) => state.app)(LayoutSider);
