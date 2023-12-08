import { useState } from "react";
import { Container, Button, Col, Form, InputGroup, Row } from "react-bootstrap";

const AuthLogin = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className="authlogin-container">
      <h2 className="auth-h2">Login to get Started</h2>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email"
            />
            <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
            />
          </Form.Group>
        </Row>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default AuthLogin;
