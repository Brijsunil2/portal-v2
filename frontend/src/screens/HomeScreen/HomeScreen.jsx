import "./HomeScreen.css"
import { Container } from "react-bootstrap";
import AuthSection from "../../components/AuthSection/AuthSection";
import DateTimeSection from "../../components/DateTimeSection/DateTimeSection";
import WeatherSection from "../../components/WeatherSection/WeatherSection";

const HomeScreen = () => {
  return (
    <Container className="homescreen-container">
      <AuthSection />
      <DateTimeSection />
      <WeatherSection />
    </Container>
  );
};

export default HomeScreen;
