import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
        <Navbar style={{backgroundColor: '#eefff4'}}>
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src='../../images/logo.png'
                        height='125rem'
                        alt=''
                        loading='lazy'
                        />
                </Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link id="navText" href="#home">Accueil</Nav.Link>
                <Nav.Link id="navText" href="#features">Services</Nav.Link>
                <Nav.Link id="navText" href="#pricing">Tarifs</Nav.Link>
                <Nav.Link id="navText" href="#pricing">Contact</Nav.Link>
                <Nav.Link id="navText" href="#pricing">Blog</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header