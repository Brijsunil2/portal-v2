import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <header>
      <Navbar collapseOnSelect expand="md">
        <Container>
          <Navbar.Brand href="/">
            <h1>Portal</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              {userInfo && (
                <NavDropdown
                  title={userInfo.username}
                  id="collapsible-nav-dropdown"
                >
                  <Container className="mx-1">Name</Container>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Settings
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
