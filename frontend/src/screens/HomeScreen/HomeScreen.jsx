import "./HomeScreen.css"
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthSection from "../../components/AuthSection/AuthSection";

const HomeScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navagate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navagate("/home");
    }
  }, [userInfo, navagate]);

  return (
    <Container className="homescreen-container">
      <AuthSection />
    </Container>
  );
};

export default HomeScreen;
