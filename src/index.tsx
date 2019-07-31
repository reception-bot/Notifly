import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router";

import { Hello } from "./components/Hello";
import { App } from "./components/App";

ReactDOM.render(
  <div>
    <App />
    {/* <Hello compiler="TypeScript" framework="React" /> */}
  </div>,
  document.getElementById("app")
);
