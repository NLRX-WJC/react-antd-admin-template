import React from "react";
import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";
function App(props) {
  return (
    <ConfigProvider locale={zhCN}>{props.children}</ConfigProvider>
  );
}

export default App;
