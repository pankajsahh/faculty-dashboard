
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";


function NavBar() {
  
  return (<div>

  <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand  href="#home">Home</Navbar.Brand>
    <Navbar id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">About Us</Nav.Link>
        <Nav.Link href="#home">Contact Us</Nav.Link>
        <Nav.Link href="#link">Login/Signup</Nav.Link>
      </Nav>
    </Navbar>
  </Container>
</Navbar>
  </div>
  );
}

export default NavBar;
