import React from "react";
import { connect } from "react-redux";
import { Icon, Menu, Dropdown, Modal, Layout, Avatar } from "antd";
import { Link } from "react-router-dom";
import { logout, getUserInfo } from "@/store/actions";
import FullScreen from '@/components/FullScreen'
import Settings from '@/components/Settings'
import Hamburger from '@/components/Hamburger'
import BreadCrumb from '@/components/BreadCrumb'
import "./index.less";
const { Header } = Layout;

const LayoutHeader = (props) => {
  const { token, avatar,sidebarCollapsed, logout, getUserInfo } = props;
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
      <Hamburger />
      <BreadCrumb/>
      <div className="right-menu">
        <FullScreen/>
        <Settings/>
        <div className="dropdown-wrap">
          <Dropdown overlay={menu}>
            <div>
              <Avatar
                shape="square"
                size="medium"
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
export default connect(mapStateToProps, { logout, getUserInfo })(
  LayoutHeader
);
