import * as React from "react";
import { AppContainer } from "react-hot-loader";
import { render } from "react-dom";

import { Root } from "./root";

import "../styles/global.scss";

declare var module: { hot: any };

const rootEl = document.getElementById("app");

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept("./root", () => {
    const NextApp = require("./root").Root;
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  });
};