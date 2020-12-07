import React, { createContext } from "react";
import { useState } from "react";
import api from "../services/api";

export const LoginContext = createContext();

function LoginContextProvider({ children }) {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  async function signIn(email, password) {
    const response = await api.post("/login", { email, password });
    const data = response.data;

    setUser(data.user);
    setToken(data.accessToken);
    localStorage.setItem("session", JSON.stringify(data));
    return data;
  }

  async function loadSession() {
    const session = JSON.parse(localStorage.getItem("session"));
    if (session) {
      setUser(session.user);
      setToken(session.accessToken);
    }
  }

  return (
    <LoginContext.Provider value={{ token, user, signIn, loadSession }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
