import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { StaticImage } from "gatsby-plugin-image"

function Header() {
  return (
    <header>
      <div className="container Header__container">
        <Navbar className="navbar" id="up" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => scrollTo("#Graphics")}>GRAFIKA</Nav.Link>
              <Nav.Link onClick={() => scrollTo("#Photography")}>
                FOTOGRAFIA
              </Nav.Link>
              <Nav.Link onClick={() => scrollTo("#About")}>O MNIE</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Navbar.Brand href="/" className="logo__image">
          <StaticImage src="../../images/logo.png" alt="logo" />
        </Navbar.Brand>
      </div>
    </header>
  )
}

export default Header
