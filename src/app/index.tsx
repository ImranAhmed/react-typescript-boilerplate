import * as React from "react";
import { AppContainer } from "react-hot-loader";
import { render } from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { todoApp } from "../todo/reducers/";
import { Root } from "./root";

import "../styles/global.scss";

declare var module: { hot: any };

const rootEl = document.getElementById("app");

let store = createStore(todoApp);

render(
  <Provider store={store}>
    <AppContainer>
      <Root />
    </AppContainer>
  </Provider>,
  rootEl
);

if (module.hot) {
  module.hot.accept("./root", () => {
    const NextApp = require("./root").Root;
    render(
      <Provider store={store}>
        <AppContainer>
          <NextApp />
        </AppContainer>
      </Provider>,
      rootEl
    );
  });
};