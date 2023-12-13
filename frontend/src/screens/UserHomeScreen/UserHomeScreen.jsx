import "./UserHomeScreen.css";
import { Container } from "react-bootstrap";
import AppSection from "../../components/AppSection/AppSection";
import DateTimeSection from "../../components/DateTimeSection/DateTimeSection";
import WeatherSection from "../../components/WeatherSection/WeatherSection";

const UserHomeScreen = () => {
  return (
    <Container className="userhomescreen-container">
      <AppSection />
      <DateTimeSection />
      <WeatherSection />
    </Container>
  );
};

export default UserHomeScreen;
