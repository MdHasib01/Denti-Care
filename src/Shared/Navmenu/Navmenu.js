import React from "react";
import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Navmenu.css";
import useAuth from "../../hooks/useAuth"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltUp, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Navmenu = () => {
  const {user,signInWithGoogle, logOut} = useAuth();
  console.log(user)
  return (
    <div className="nav-menu">
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
        <Navbar.Brand as={Link} to="/home">
        <img
          alt=""
          src="/assets/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      <span className="logo-txt">Denti<span className="color-txt">Care</span></span>
      </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={NavLink} to="/home" activeStyle={{
                fontWeight: "700",
                color: "#0456a8"}}>Home
              </Nav.Link>
              
              <Nav.Link as={NavLink} to="/apointment" activeStyle={{
                fontWeight: "700",
                color: "#0456a8"}}>Apointment
              </Nav.Link>
              <Nav.Link as={NavLink} to="/blogs" activeStyle={{
                fontWeight: "700",
                color: "#0456a8"}}>Blogs
              </Nav.Link>
              
              <Nav.Link as={NavLink} to="/about" activeStyle={{
                fontWeight: "700",
                color: "#0456a8"}}>About us
              </Nav.Link>
              
            </Nav>
            <Navbar.Text className="nav-login">
              <img src={user?.photoURL} alt="" />
              <a href="#login">{user?.displayName}</a>
              {
                user.displayName && <a onClick={logOut}><FontAwesomeIcon icon={faSignOutAlt}/></a>
              }
              
        

      </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navmenu;
