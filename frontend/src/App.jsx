import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
