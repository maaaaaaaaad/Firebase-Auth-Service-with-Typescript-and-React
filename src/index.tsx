import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthServiceImpl from "./components/service/authService";

const authService = new AuthServiceImpl();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById("root")
);
