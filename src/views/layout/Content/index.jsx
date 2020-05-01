import React from "react";
import { Redirect, withRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import DocumentTitle from "react-document-title";
import { connect } from "react-redux";
import { Layout } from "antd";
import routeList from "@/config/routeMap";
import menuList from "@/config/menuConfig";
const { Content } = Layout;
const LayoutContent = (props) => {
  const { role, location } = props;
  const { pathname } = location;
  const handleFilter = (route) => {
    // 过滤没有权限的页面
    return !route.roles || route.roles.includes(role);
  };

  function getPageTitle(menuList, pathname) {
    let stark = [];
    let title = 'Ant Design Pro';
    stark = stark.concat(menuList);

    while (stark.length) {
      var temp = stark.shift();
      if (temp.children) {
        stark = temp.children.concat(stark);
      }
      if (pathname === temp.path) {
        title = `${temp.title} - Ant Design Pro`;
      }
    }
    return title
  }

  console.log(getPageTitle(menuList, pathname));
  return (
    <DocumentTitle title={getPageTitle(menuList, pathname)}>
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
    </DocumentTitle>
  );
};

export default connect((state) => state.user)(withRouter(LayoutContent));
