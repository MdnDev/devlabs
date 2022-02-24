import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <Navbar expand="lg" collapseOnSelect style={{backgroundColor: '#eefff4'}}>
            <Container>
              <div className="mx-auto" >
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse  id="basic-navbar-nav">
                <Navbar.Brand href="#home">
                    <img
                        src='../../images/logo.png'
                        height='125rem'
                        alt=''
                        loading='lazy'
                        />
                </Navbar.Brand>
                <Nav className="me-auto">
                  <NavLink className="Nav_link" to="/">Accueil</NavLink>
                  <NavLink className="Nav_link" to="/services">Services</NavLink>
                  <NavLink className="Nav_link" to="/portfolio">Portfolio</NavLink>
                  <NavLink className="Nav_link" to="/pricing">Tarifs</NavLink>
                  <NavLink className="Nav_link" to="/contact">Contact</NavLink>
                  <NavLink className="Nav_link" to="/blog">Blog</NavLink>
                </Nav>
              </Navbar.Collapse>
              </div>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header