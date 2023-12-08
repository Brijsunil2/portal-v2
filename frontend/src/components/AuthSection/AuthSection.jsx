import { useState } from "react";
import "./AuthSection.css";
import AuthLogin from "./AuthLogin";
import AuthSignup from "./AuthSignup";
import { ButtonGroup, Container, ToggleButton } from "react-bootstrap";

const AuthSection = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true);

  const loginOnClick = () => {
    setIsLogin(true);
  };

  const signupOnClick = () => {
    setIsLogin(false);
  };

  return (
    <Container className="authsection-container">
      <ButtonGroup>
        <ToggleButton
          type="radio"
          checked={isLogin}
          onClick={() => setIsLogin(true)}
        >
          Login
        </ToggleButton>
        <ToggleButton
          type="radio"
          checked={!isLogin}
          onClick={() => setIsLogin(false)}
        >
          Sign-up
        </ToggleButton>
      </ButtonGroup>
      <Container>{isLogin ? <AuthLogin /> : <AuthSignup />}</Container>
    </Container>
  );
};

export default AuthSection;
