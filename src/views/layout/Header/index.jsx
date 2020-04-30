import React from "react";
import { connect } from "react-redux";
import { Icon, Menu, Dropdown, Modal, Layout, Avatar } from "antd";
import { Link } from "react-router-dom";
import { logout, getUserInfo, toggleSiderBar } from "@/store/actions";
import "./index.less";
const { Header } = Layout;

const LayoutHeader = (props) => {
  const { token, avatar,sidebarCollapsed, logout, getUserInfo,toggleSiderBar } = props;
  token && getUserInfo(token);
  const handleLogout = (token) => {
    Modal.confirm({
      title: "注销",
      content: "确定要退出系统吗?",
      okText: "确定",
      cancelText: "取消",
      onOk: () => {
        logout(token);
      },
    });
  };
  const onClick = ({ key }) => {
    switch (key) {
      case "logout":
        handleLogout(token);
        break;
      default:
        break;
    }
  };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="0">
        <Link to="/dashboard">首页</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">注销</Menu.Item>
    </Menu>
  );
  return (
    <Header style={sidebarCollapsed?{ width: "calc(100% - 80px)" }:{width: "calc(100% - 200px)"}}>
      <div className="left-menu">
        <div className="trigger-wrap">
          <Icon type={sidebarCollapsed ? "menu-unfold" : "menu-fold"} onClick={toggleSiderBar}/>
        </div>
        
      </div>
      <div className="right-menu">
        <div className="dropdown-wrap">
          <Dropdown overlay={menu}>
            <div>
              <Avatar
                size="large"
                src={avatar}
              />
              <Icon style={{ color: "rgba(0,0,0,.3)" }} type="caret-down" />
            </div>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

const mapStateToProps = state => {
  return {
    ...state.app,
    ...state.user
  }
}
export default connect(mapStateToProps, { logout, getUserInfo, toggleSiderBar })(
  LayoutHeader
);
