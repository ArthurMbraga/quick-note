import React from "react";
import Routes from "./routes";
import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Provider from "./Contexts/Provider";

function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
