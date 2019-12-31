import React, { FC } from "react";

import { Route, Redirect } from "react-router";

const PrivateRoute = (props: { exact: true; path: string; component: FC }) => {
  const isLogged = !!localStorage.getItem("token");
  return isLogged ? <Route {...props} /> : <Redirect to="/" />;
};

export default PrivateRoute;
