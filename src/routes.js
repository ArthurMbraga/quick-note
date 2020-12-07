import React, { useContext } from "react";
import { useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LoginContext } from "./Contexts/LoginContext";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Menu from "./pages/Menu";

function Routes() {
  const { loadSession } = useContext(LoginContext);

  useEffect(() => {
    loadSession();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route path="/" component={UserMenu} />
      </Switch>
    </BrowserRouter>
  );
}

function UserMenu() {
  return (
    <Menu>
      <Switch>
        <Route path="/home" component={Home} />
        <Route component={() => <Redirect to="/login" />} />
      </Switch>
    </Menu>
  );
}

export default Routes;
