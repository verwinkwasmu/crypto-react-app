import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom';

const MainNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="w-100">
          <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/cryptocurrencies">Cryptocurrencies</Nav.Link>
          <Nav.Link as={Link} to="/exchanges">Exchanges</Nav.Link>
          <Nav.Link as={Link} to="/news">News</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
    </>
  )
}

export default MainNavbar