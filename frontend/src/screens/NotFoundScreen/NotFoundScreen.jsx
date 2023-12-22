import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GrDocumentMissing } from "react-icons/gr";
import { IoMdArrowForward } from "react-icons/io";

const NotFoundScreen = () => {
  return (
    <Container className="m-5 text-center">
      <h1>
        <GrDocumentMissing /> 404 Page Not Found
      </h1>
      <Link className="m-5" to={"/"}>
        <IoMdArrowForward /> Navagate to Homepage?
      </Link>
    </Container>
  );
};

export default NotFoundScreen;
