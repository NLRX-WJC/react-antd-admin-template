import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import Sider from "./Sider";
import { Layout } from "antd";

const Main = (props) => {
  const { token } = props;
  if (!token) {
    return <Redirect to="/login" />;
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider />
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </Layout>
  );
};

export default connect((state) => state.user)(Main);
