import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/mainSlice";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    {/* <Dashboard /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
