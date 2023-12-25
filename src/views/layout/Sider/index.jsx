import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Layout } from "antd";
import Logo from "./Logo";
import Menu from "./Menu";
const { Sider } = Layout;

const LayoutSider = (props) => {
  const { sidebarCollapsed } = useSelector(state => state.app);
  const { sidebarLogo } = useSelector(state => state.settings);
  return (
    // <Sider
    //   collapsible
    //   collapsed={sidebarCollapsed}
    //   trigger={null}
    //   style={{ zIndex: "10" }}
    // >
    //   {sidebarLogo ? <Logo /> : null}
    //   <Menu />
    // </Sider>

    <Sider
      collapsible
      collapsed={sidebarCollapsed}
      trigger={null}
      style={{ zIndex: "10" }}
    >
      {sidebarLogo ? <Logo /> : null}
      <Menu />
    </Sider>

  );
};

export default LayoutSider;
