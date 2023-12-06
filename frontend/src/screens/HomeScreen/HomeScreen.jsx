import { Container } from "react-bootstrap";
import AuthSection from "../../components/AuthSection/AuthSection";
import DateTimeSection from "../../components/DateTimeSection/DateTimeSection";

const HomeScreen = () => {
  return (
    <Container className="homescreen-container">


      <AuthSection />
      <DateTimeSection />
    </Container>
  );
};

export default HomeScreen;
