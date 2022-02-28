import React, { useState } from 'react'
import { NavLink, Nav, Offcanvas, Button, Container } from 'react-bootstrap'

const SlideNav = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <Container style={{textAlign: 'center'}}>
        <Button style={{backgroundColor: '#1d804d'}} onClick={handleShow}>
          Trier par catégorie
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton style={{backgroundColor: '#eefff4'}}>
            <Offcanvas.Title>Articles</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Nav defaultActiveKey="/home" className="flex-column">
            <NavLink style={{color: '#1d804d'}}className="Nav_link">React</NavLink>
            <NavLink className="Nav_link">MongoDB</NavLink>
            <NavLink className="Nav_link">Express</NavLink>
            <NavLink className="Nav_link">Productivité</NavLink>
          </Nav>
          </Offcanvas.Body>
        </Offcanvas>
    </Container>
  )
}

export default SlideNav