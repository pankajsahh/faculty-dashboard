
import React from "react";
import {Form,FormControl,Button, Offcanvas, Navbar, Container, Nav } from "react-bootstrap";


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
{/* second navbar will start from here
upper one is main nav bar */}
<Navbar bg="white" expand={false}>
  <Container fluid>
  <Navbar.Brand href="#"></Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Faculty-Reasearch</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
      <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Login</Nav.Link>
          <Nav.Link href="#action2">Faculty details</Nav.Link>
          <Nav.Link href="#action2">My Profile</Nav.Link>
          <Nav.Link href="#action2">Admin login</Nav.Link>
          <Nav.Link href="#action2">Download</Nav.Link>
          <Nav.Link href="#action2">Contact us</Nav.Link>
          <Nav.Link href="#action2">Report</Nav.Link>
          
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
    
  </Container>
</Navbar>
  </div>
  );
}

export default NavBar;
