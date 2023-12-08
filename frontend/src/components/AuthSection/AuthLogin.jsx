import { useState } from "react";
import { Container, Button, Col, Form, Row } from "react-bootstrap";

const AuthLogin = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    setValidated(true);
    console.log(e.target.loginEmailInput.value);
    console.log(e.target.loginPassInput.value);
  };

  return (
    <Container className="authlogin-container">
      <h2 className="auth-h2">Login to Portal!</h2>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Control
              id="loginEmailInput"
              type="email"
              placeholder="Email"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Control
              id="loginPassInput"
              type="password"
              placeholder="Password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a password.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default AuthLogin;
