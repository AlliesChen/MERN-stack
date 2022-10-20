// @ts-check

import { render } from "preact";
import { App } from "./app";
import "./index.css";
import { WorkoutsContextProvider } from "./context/WorkoutsContext";

render(
  <WorkoutsContextProvider>
    <App />
  </WorkoutsContextProvider>,
  document.getElementById("app")
);
