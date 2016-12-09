
import * as React from "react";
import { render } from "react-dom";
import { Router, Route, Link, browserHistory } from "react-router";

import { Home } from "./home/components/home-component";
import { Search } from "./search/components/search-component";

export const Root = () => {
  return (
  <Router history={browserHistory}>
    <Route path="/" component={Home}></Route>
    <Route path="/search" component={Search} />
  </Router>
  );
};