import React from "react";
import Content from "./Content";
import Header from "./Header";
import RightPanel from "./RightPanel";
import Sider from "./Sider";
import TagsView from "./TagsView";
import { Layout } from "antd";
const Main = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider />
      <Layout>
        <Header />
        <TagsView/>
        <Content />
        <RightPanel />
      </Layout>
    </Layout>
  );
};
export default Main;
