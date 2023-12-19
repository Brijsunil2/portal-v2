import "./AppSection.css";
import { Col, Container, Row } from "react-bootstrap";
import { MdForum } from "react-icons/md";
import { BsCalendarEvent } from "react-icons/bs";
import AppEntry from "./AppEntry";

const AppSection = () => {
  return (
    <div className="appsection-container">
      <Container>
        <h2>Applications</h2>
        <Container className="appentries-container">
          <AppEntry appName="Forums" appIcon={<MdForum />} />
          <AppEntry appName="Calendar" appIcon={<BsCalendarEvent />} />
        </Container>
      </Container>
    </div>
  );
};

export default AppSection;
