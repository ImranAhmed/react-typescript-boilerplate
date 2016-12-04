
import * as React from "react";
import { render } from "react-dom";
import { Router, Route, Link, browserHistory } from "react-router";

import { Home } from "./home/containers/home";
import { Search } from "./search/containers/search";

export const Root = () => {
  return (
  <Router history={browserHistory}>
    <Route path="/" component={Home}></Route>
    <Route path="/search" component={Search} />
  </Router>
  );
};