
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";


function NavBar() {
  
  return (<div>

  <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand  href="\">Home</Navbar.Brand>
    <div>
      <Nav className="me-auto">
        <Nav.Link href="/aboutUs">About Us</Nav.Link>
        <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
        <Nav.Link href="/signin">Login/Signup</Nav.Link>
      </Nav>
      </div>
  </Container>
</Navbar>
  </div>
  );
}

export default NavBar;
