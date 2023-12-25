import React from "react";
import { useLocation, Route, Routes, Navigate, useRoutes, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux'
import DocumentTitle from "react-document-title";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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


  const location = useLocation();
  const userState = useSelector(state => state.user);

  const { role } = userState;

  // console.log(`LayoutContent role:${role}`)

  const { pathname } = location;
  const handleFilter = (route) => {
    // 过滤没有权限的页面
    let result = role === "admin" || !route.roles || route.roles.includes(role);
    // console.log(`location:${pathname},role:${role},handleFilter for ${route.path}, result:${result}`)
    return result;
  };



  return (

    <Outlet />
  );

  {/*<DocumentTitle title={getPageTitle(menuList, pathname)}>
      <Content style={{ height: "calc(100% - 100px)" }}>
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            timeout={500}
            classNames="fade"
            exit={false}
          >*/}
  {
    /* <Routes location={location}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            {routeList.map((route) => {
              return (
                handleFilter(route) ? (
                  <Route
                    element={route.component}
                    key={route.path}
                    path={route.path}
                  />
                ) : null
              );
            })}
            <Route path="*" element={<Navigate to="/error/404" replace />} />
          </Routes> */
  }


  {/* </CSSTransition>
        </TransitionGroup>
      </Content> */}
  {/* </DocumentTitle> */ }


};

export default LayoutContent;