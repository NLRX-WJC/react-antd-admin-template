import React from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import Sider from "./Sider";
import { Layout } from "antd";
const Main = (props) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider />
      <Layout>
        <Header />
        <Content />
        {/* <Footer /> */}
      </Layout>
    </Layout>
  );
};
export default Main;
