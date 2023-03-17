import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdPermContactCalendar } from "react-icons/md";
import Logo from "../../assets/images/logo.svg";
import DarkMode from "../DarkMode/DarkMode";

import {
  HeaderContainer,
  LogoImg,
  Option,
  Location,
  ButtonCon,
  // OptionDiv,
} from "./header.styles";
import "./header.css";

import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

function Header({ currentUser }) {
  return (
    <HeaderContainer>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid className="container">
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              className="off-canvas"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Navbar.Brand>
                    <Option to="/">
                      <LogoImg src={Logo} alt="" />
                    </Option>
                  </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 off-nav">
                  <Nav.Link>
                    <Option to="/shop" className="locationDiv">
                      <HiOutlineShoppingBag className="location" />
                      <Location>shop</Location>
                    </Option>
                  </Nav.Link>
                  <Nav.Link>
                    <Option to="" className="locationDiv">
                      <DarkMode />
                      <Location>dark/light mode</Location>
                    </Option>
                  </Nav.Link>
                  <Nav.Link>
                    <Option to="/" className="locationDiv">
                      <MdPermContactCalendar className="location" />
                      <Location>contact</Location>
                    </Option>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Navbar.Brand>
              <Option to="/" className="me-auto">
                <LogoImg src={Logo} alt="" />
              </Option>
            </Navbar.Brand>

            {currentUser ? (
              <Nav.Link className="option-nav ms-auto">
                <Option to="/">
                  <ButtonCon onClick={() => auth.signOut()}>
                   {currentUser.displayName}
                  </ButtonCon>
                </Option>
              </Nav.Link>
            ) : (
              <Nav.Link className="option-nav ms-auto">
                <Option to="/signin">
                  <ButtonCon>sign in</ButtonCon>
                </Option>
              </Nav.Link>
            )}
          </Container>
        </Navbar>
      ))}
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
