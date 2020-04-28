import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import App from "../App";
import Layout from "../layout";
import Home from "../views/home";
import Doc from "../views/doc";
import NotFound from "@/views/NotFound";
import Login from "@/views/login";
import routeList from "@/config/menuConfig";
class Router extends React.Component {
  filterRoute = (routeList) => {
    return routeList.map((route) => {
      if (route.children) {
        return (
          <Route key={route.path} path={route.path} component={route.component}>
            {this.filterRoute(route.children)}
          </Route>
        );
      } else {
        return (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        );
      }
    });
  };

  render() {
    const { role } = this.props;
    let a = this.filterRoute(routeList)
    console.log(a);
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />

            <Route
              path="/"
              render={() => (
                <Layout>
                  <Switch>
                    <Redirect exact from="/" to="/home" />
                    {routeList.map(
                      (item, index) =>
                        item.meta.roles.includes(role) ? (
                          <Route
                            key={item.path}
                            path={item.path}
                            component={item.component}
                          />
                        ) : null
                      // <Route key={index} path={item.path} exact render={props =>
                      //   (item.meta.roles.includes(role)
                      //       ? <item.component {...props} />
                      //       : <Redirect to={{ pathname: '/404',state: { from: props.location }}} />)
                      // } />
                    )}
                    {/* <Redirect to='/404' /> */}
                  </Switch>
                </Layout>
              )}
            />
            <Route exact path="/404" component={Doc} />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}

export default connect((state) => state.user, {})(Router);
