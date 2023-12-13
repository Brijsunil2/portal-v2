import "./AppSection.css";
import { Col, Container, Row } from "react-bootstrap";
import { MdForum } from "react-icons/md";
import { BsCalendarEvent } from "react-icons/bs";
import AppEntry from "./AppEntry";

const AppSection = () => {
  return (
    <Container className="appsection-container">
      <h2>Applications</h2>
      <Row>
        <Col>
          <AppEntry appName="Forums" appIcon={<MdForum />} />
        </Col>
        <Col>
          <AppEntry appName="Calendar" appIcon={<BsCalendarEvent />} />
        </Col>
      </Row>
    </Container>
  );
};

export default AppSection;
