import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { BsCashCoin } from 'react-icons/bs'
const MainNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="w-100 bg-gradient">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <BsCashCoin /> CryptoSphere
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="mx-3">Home</Nav.Link>
              <Nav.Link as={Link} to="/cryptocurrencies" className="mx-3">Cryptocurrencies</Nav.Link>
              <Nav.Link as={Link} to="/news" className="mx-3" >News</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MainNavbar