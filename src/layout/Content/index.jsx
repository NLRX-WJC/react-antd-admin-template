import React from "react";
import { Redirect, withRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Layout } from "antd";
import routeList from "@/config/routeMap";
const { Content } = Layout;
const Main = ({ location }) => {
  const handleFilter = (route) => {
    // 过滤没有权限的页面
    const role =
      localStorage.getItem("userInfo") &&
      JSON.parse(localStorage.getItem("userInfo")).role;
    return !route.roles || route.roles.includes(role);
  };
  return (
    <Content style={{ margin: "24px 16px" }}>
      <TransitionGroup>
        <CSSTransition classNames="fade" key={location.pathname} timeout={500}>
          <Switch>
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
            <Redirect from="/" to="/error/404" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Content>
  );
};

export default withRouter(Main);
