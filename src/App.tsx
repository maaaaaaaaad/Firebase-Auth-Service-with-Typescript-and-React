import React from "react";
import AuthServiceImpl from "./components/service/authService";
import postCSS from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Lobby from "./components/Lobby/Lobby";

interface AuthService {
  authService: AuthServiceImpl;
}

const App: React.FC<AuthService> = ({ authService }) => {
  return (
    <section className={postCSS.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService}></Login>
          </Route>
          <Route path="/lobby">
            <Lobby authService={authService}></Lobby>
          </Route>
        </Switch>
      </BrowserRouter>
    </section>
  );
};

export default App;
