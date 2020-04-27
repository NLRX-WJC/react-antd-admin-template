import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "../App";
import Layout from "../layout";
import Home from "../views/home";
import Doc from "../views/doc";
import Login from '@/views/login'
export default class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" render={() => (
                <Layout>
                  <Switch>
                    {/* {routeList.map((item, index) => {
                      return <Route key={index} path={item.path} exact render={props =>
                        (!token
                          ? ( <Redirect to={{ pathname: '/login',state: { from: props.location }}} />)
                          : (item.roles.includes(role)
                            ? <item.component {...props} />
                            : <Redirect to={{ pathname: '/404',state: { from: props.location }}} />)
                        )} />
                    })} */}
                    {/* <Redirect exact from='/' to='/home'/> */}
                    <Route path="/home" component={Home} />
                    <Route path="/doc" component={Doc} />
                    {/* <Redirect to="/home" /> */}
                  </Switch>
                </Layout>
              )}
            />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}
