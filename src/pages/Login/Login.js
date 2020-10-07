import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  function login() {
    if (email === "arthur@cpejr.com.br" && password === "123") {
      alert("Bem vindo!\n" + email);
      history.push("home");
    } else alert("Dados incorretos");
  }

  return (
    <div className="base">
      <div className="container1">
        <img className="image" src="/images/Quick_note.png" alt="Quick note" />
        <Form className="inputs">
          <Form.Group controlId="email">
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="senha">
            <Form.Control
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={login}>
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
