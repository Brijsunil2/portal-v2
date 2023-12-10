import { useState } from "react";
import { Container, Button, Col, Form, Row } from "react-bootstrap";

const AuthSignup = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    setValidated(true);
    console.log(e.target.signupUsernameInput.value);
    console.log(e.target.signupEmailInput.value);
    console.log(e.target.signupPassInput.value);
  };

  return (
    <Container className="authsignup-container">
      <h2 className="auth-h2">Sign-up to get Started!</h2>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Control
              id="signupNameInput"
              type="text"
              placeholder="Name"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide your fullname.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Control
              id="signupUsernameInput"
              type="text"
              placeholder="Username"
              minLength="5" 
              maxLength="40"
              required
            />
            <Form.Control.Feedback type="invalid">
              Username must be a minimum of 5 characters long.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Control
              id="signupEmailInput"
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
              id="signupPassInput"
              type="password"
              placeholder="Password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              required
            />
            <Form.Control.Feedback type="invalid">
              Password must have at least one lowercase, one uppercase, a number
              and at least 8 characters long.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Control
              id="signupRePassInput"
              type="password"
              placeholder="Retype Password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              required
            />
          </Form.Group>
        </Row>
        <Button type="submit">Sign-up</Button>
      </Form>
    </Container>
  );
};

export default AuthSignup;
