import "./HomeScreen.css"
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthSection from "../../components/AuthSection/AuthSection";
import DateTimeSection from "../../components/DateTimeSection/DateTimeSection";
import WeatherSection from "../../components/WeatherSection/WeatherSection";

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
      <DateTimeSection />
      <WeatherSection />
    </Container>
  );
};

export default HomeScreen;
