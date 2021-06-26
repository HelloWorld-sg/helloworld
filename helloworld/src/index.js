import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <Dashboard /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
