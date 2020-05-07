import React from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import RightPanel from "./RightPanel";
import Sider from "./Sider";
import { Layout } from "antd";
const Main = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider />
      <Layout>
        <Header />
        <Content />
        {/* <Footer /> */}
        <RightPanel/>
      </Layout>
    </Layout>
  );
};
export default Main;
