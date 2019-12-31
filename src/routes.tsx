import React, { FC } from "react";
import { Router, Switch, Route } from "react-router";
import history from "./pages/history";

import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./pages/PrivatePages";

const Routes: FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/home" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
