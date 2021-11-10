
import React from "react";
import {Form,FormControl,Button, NavDropdown, Offcanvas, Navbar, Container, Nav } from "react-bootstrap";


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
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
    
  </Container>
</Navbar>
  </div>
  );
}

export default NavBar;
