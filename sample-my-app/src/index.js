import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { bindActionCreators } from "redux";
import * as bugActionCreators from "./bugTracker/actions";
import * as productActionCreators from "./products/action";
import store from "./store";
import BugTracker from "./bugTracker";
import Products from "./products/view";

const bugActionDispatchers = bindActionCreators(
  bugActionCreators,
  store.dispatch
);

const productActionDispatchers = bindActionCreators(
  productActionCreators,
  store.dispatch
);

function renderApp() {
  const stateStore = store.getState();
  const bugs = stateStore.bugState;
  const products = stateStore.bugState;

  ReactDOM.render(
    <React.StrictMode>
      <h1>My App</h1>
      <Products products={products} {...productActionDispatchers} />
      <BugTracker bugs={bugs} {...bugActionDispatchers} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
renderApp();
store.subscribe(renderApp);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
