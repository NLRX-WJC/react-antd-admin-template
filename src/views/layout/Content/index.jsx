import React from "react";
import { Redirect, withRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { Layout } from "antd";
import routeList from "@/config/routeMap";
const { Content } = Layout;
const LayoutContent = (props) => {
  const handleFilter = (route) => {
    // 过滤没有权限的页面
    const { role } = props;
    return !route.roles || route.roles.includes(role);
  };
  return (
    <Content style={{ margin: "64px 16px 24px 16px" }}>
      <TransitionGroup>
        <CSSTransition
          classNames="fade"
          key={props.location.pathname}
          timeout={500}
        >
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
        </CSSTransition>
      </TransitionGroup>
    </Content>
  );
};

export default connect((state) => state.user)(withRouter(LayoutContent));
