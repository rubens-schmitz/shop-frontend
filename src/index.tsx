import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import { store } from "store";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
reportWebVitals();
