import React from "react";
import Routes from "./routes";
import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginContextProvider from "./Contexts/LoginContext";

function App() {
  return (
    <LoginContextProvider>
      <Routes />
    </LoginContextProvider>
  );
}

export default App;
