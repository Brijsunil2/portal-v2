import "./Header.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../slices/authSlice";
import { useLogoutMutation } from "../../slices/usersApiSlice";
import { MdPerson } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import DateTimeSection from "../DateTimeSection/DateTimeSection";
import WeatherSection from "../WeatherSection/WeatherSection";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navagate = useNavigate();
  const [logoutAPI] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutAPI().unwrap();
      dispatch(logout());
      navagate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header>
      <Navbar collapseOnSelect expand="md">
        <Container>
          <Navbar.Brand href="/">
            <h1>Portal</h1>
          </Navbar.Brand>
          <DateTimeSection />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              {userInfo && (
                <NavDropdown title={<TiWeatherPartlySunny size={25} />}>
                  <WeatherSection />
                </NavDropdown>
              )}
            </Nav>
            <Nav>
              {userInfo && (
                <NavDropdown title={<MdPerson size={25} />}>
                  <Container className="mx-1">
                    <p>Logged in as:</p>
                    <h2>{userInfo.username}</h2>
                    <h3>{userInfo.name}</h3>
                  </Container>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => navagate("/settings")}>
                    Settings
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
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
