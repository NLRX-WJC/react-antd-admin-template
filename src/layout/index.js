import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Copyright from "./Copyright";
import NavMeun from "./NavMeun";
import { Layout } from "antd";
import userAction from "@/store/actionCreator/user";
import "./index.less";
const { Header, Sider, Content, Footer } = Layout;

class Main extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  componentWillMount() {
    console.log(this.props);
    
    this.props.getUserInfo(this.props.token);
  }
  render() {
    const { token } = this.props;

    if (!token) {
      return <Redirect to="/login" />;
    }
    return (
      <Layout>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <NavMeun />
        </Sider>
        <Layout>
          <Header className="header">
            <NavBar />
          </Header>
          <Content className="content">{this.props.children}</Content>
          <Footer>
            <Copyright />
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default connect(
  (state) => state.user,
  userAction
)(Main);
