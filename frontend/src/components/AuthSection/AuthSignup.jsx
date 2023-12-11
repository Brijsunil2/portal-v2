import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Button, Col, Form, Row } from "react-bootstrap";
import { useRegisterMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";

const AuthSignup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { userInfo } = useSelector((state) => state.auth);
  const [validated, setValidated] = useState(false);

  const navagate = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    if (userInfo) {
      navagate("/home");
    }
  }, [userInfo, navagate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    try {
      const res = await register({
        name,
        username,
        email,
        password,
      }).unwrap();
      dispatch(setCredentials({ ...res }));
      navagate("/");
    } catch (err) {
      console.log(err?.data?.message || err.error);
    }

    setValidated(true);
  };

  return (
    <Container className="authsignup-container">
      <h2 className="auth-h2">Sign-up to get Started!</h2>

      <Form noValidate validated={validated} onSubmit={submitHandler}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Control
              id="signupNameInput"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide your name
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Username must be a minimum of 5 characters long
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Control
              id="signupEmailInput"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Password must have at least one lowercase, one uppercase, a number
              and at least 8 characters long
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Control
              id="signupRePassInput"
              type="password"
              placeholder="Retype Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              isValid={false}
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
