import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "@/App";
import Layout from "@/views/layout";
import Login from "@/views/login";
class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/" component={Layout} />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}

export default Router;
