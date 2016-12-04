import * as React from "react";
import { render } from "react-dom";
const { AppContainer } = require("react-hot-loader");

import { Home } from "./home/containers/home";

import "./styles/global.scss";

declare var module: { hot: any };

const rootEl = document.getElementById("app");

render(
  <AppContainer>
    <Home />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept("./home/containers/home", () => {
    const NextApp = require("./home/containers/home").Home;
    render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootEl
    );
  });
};