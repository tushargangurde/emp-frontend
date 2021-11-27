import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">EMP Management</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Add</Nav.Link>
            <Nav.Link href="#features">Update</Nav.Link>
            <Nav.Link href="#pricing">Delete</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
