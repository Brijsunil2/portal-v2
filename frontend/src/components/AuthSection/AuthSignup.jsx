import { useState } from "react";
import { Container, Button, Col, Form, Row } from "react-bootstrap";

const errMessages = [
  "Please provide your name.",
  "Username must be a minimum of 5 characters long.",
  "Username already exists.",
  "Please provide a valid email",
  "Password must have at least one lowercase, one uppercase, a number and at least 8 characters long.",
  "Retype password",
  "Passwords do not match"
]

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
              { errMessages[0] }
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
              { errMessages[1] }
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
              { errMessages[3] }
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
              { errMessages[4] }
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Control
              id="signupRePassInput"
              type="password"
              placeholder="Retype Password"
              required
            />
          </Form.Group>
          <Form.Control.Feedback type="invalid">
              { errMessages[5] }
            </Form.Control.Feedback>
        </Row>
        <Button type="submit">Sign-up</Button>
      </Form>
    </Container>
  );
};

export default AuthSignup;
