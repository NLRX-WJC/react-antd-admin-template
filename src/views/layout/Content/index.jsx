import React from "react";
import { Redirect, withRouter, Route, Switch } from "react-router-dom";
import DocumentTitle from "react-document-title";
import { connect } from "react-redux";
import { Layout } from "antd";
import { getMenuItemInMenuListByProperty } from "@/utils";
import routeList from "@/config/routeMap";
import menuList from "@/config/menuConfig";
const { Content } = Layout;

const getPageTitle = (menuList, pathname) => {
  let title = "Ant Design Pro";
  let item = getMenuItemInMenuListByProperty(menuList, "path", pathname);
  if (item) {
    title = `${item.title} - Ant Design Pro`;
  }
  return title;
};

const LayoutContent = (props) => {
  const { role, location } = props;
  const { pathname } = location;
  const handleFilter = (route) => {
    // 过滤没有权限的页面
    return role === "admin" || !route.roles || route.roles.includes(role);
  };
  return (
    <DocumentTitle title={getPageTitle(menuList, pathname)}>
      <Content style={{ height: "calc(100% - 100px)" }}>
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          {routeList.map((route) => {
            return (
              handleFilter(route) && (
                <Route
                  component={route.component}
                  key={route.path}
                  path={route.path}
                />
              )
            );
          })}
          <Redirect to="/error/404" />
        </Switch>
      </Content>
    </DocumentTitle>
  );
};

export default connect((state) => state.user)(withRouter(LayoutContent));
