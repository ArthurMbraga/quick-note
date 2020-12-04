import React from "react";
import { useState } from "react";
import Context from "./Context";

function Provider({ children }) {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  async function signIn(email, password) {
    const response = await fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    setUser(data.user);
    setToken(data.accessToken);

    return data;
  }
  const login = { token, user, signIn };

  return <Context.Provider value={{ login }}>{children}</Context.Provider>;
}

export default Provider;
