import React from 'react'
import { Button, Col, Row, Image, Container } from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <Container className="py-5" style={{border: '1px solid black'}}>
      <Row xs="12" sm="12" md="12" lg="12" xl="12">
        <h1>Design et développement d'application web</h1>
        <br/>
        <h6>Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500</h6>
      </Row>
      <Row xs="12" sm="12" md="12" lg="12" xl="12">
        <Col>
          <Button className="btn btn-success m-3">Quote</Button>
          <Button className="btn btn-success m-3">Quote</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeScreen