import React from "react";

import { Suspense } from 'react';


import { useSelector } from "react-redux";
import Content from "./Content";
import Header from "./Header";
import RightPanel from "./RightPanel";
import Sider from "./Sider";
import TagsView from "./TagsView";
import { Layout } from "antd";
const Main = (props) => {
  const { tagsView } = useSelector(state => state.settings);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider />
      <Layout>
        <Header />
        {tagsView ? <TagsView /> : null}
        <Suspense>
          <Content />
        </Suspense>

        <RightPanel />
      </Layout>
    </Layout>
  );
};
export default Main;
