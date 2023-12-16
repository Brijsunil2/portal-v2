import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Container className="my-1 my-md-2">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
