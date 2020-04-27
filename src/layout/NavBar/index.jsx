import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon, Menu, Dropdown, Button, Modal } from "antd";
import { Link, withRouter } from "react-router-dom";
import { logout } from "@/store/actionCreator/auth";
import "./index.less";
class NavBar extends Component {
  logout = (token) => {
    Modal.confirm({
      title: '注销',
      content: "确定要退出系统吗?",
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        this.props.logout(token);
      },
    });
  };
  onClick = ({ key }) => {
    switch (key) {
      case "logout":
        this.logout(this.props.token);
        break;
      default:
        break;
    }
  };
  render() {
    const menu = (
      <Menu onClick={this.onClick}>
        <Menu.Item key="0">
          <Link to="/home">首页</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">注销</Menu.Item>
      </Menu>
    );
    return (
      <div className="navbar">
        <div className="right-menu">
          <Dropdown overlay={menu}>
            <div className="avatar-wrapper">
              欢迎,
              <Button type="link">
                {this.props.name}
                <Icon type="down" />
              </Button>
            </div>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default connect((state) => state.user, { logout })(withRouter(NavBar));
