
import * as React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import { Home } from "../home/home-component";

export const Root = () => {
  return (
  <Router history={browserHistory}>
    <Route path="/" component={Home}></Route>
  </Router>
  );
};