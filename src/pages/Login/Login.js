import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

function Login() {
  return (
    <div className="base">
      <div className="container">
        <div>
          <img src="/images/Quick_note.png" alt="Quick note" />
          <Form className="inputs">
            <Form.Group controlId="email">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="senha">
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>
            <Button variant="primary">Login</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
