import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";

import "./index.scss";

import { BrowserRouter as Router } from "react-router-dom";

import { store } from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
