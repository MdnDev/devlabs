import React from 'react'
import { Button, Col, Row, Image, Container } from 'react-bootstrap'
import ClientCarousel from '../components/ClientCarousel'
import Service from '../components/Service'

const HomeScreen = () => {
  return (

    <Container className="my-5" style={{border: '1px solid black'}}>
      <Row className="my-5" style={{border: '2px dotted red'}}>
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
      </Row>

        {/* SECOND SECTION */}
        <Row className="my-5" style={{border: '2px dotted red'}}>
          <Row xs="12" sm="12" md="12" lg="12" xl="12">
            <h1>Je conçois et développe sites à application pour votre orgaisation</h1>
            <br/>
            <h6>Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500</h6>
          </Row>
        </Row>
        {/* END OF SECOND SECTION */}

        {/* SERVICES SECTION */}
        <Row className="my-3">
          <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <Service style={{ width: '100%'}}/>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <Service style={{ width: '100%'}}/>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <Service style={{ width: '100%'}}/>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <Service style={{ width: '100%'}}/>
          </Col>
        </Row>
        <Row xs="12" sm="12" md="8" lg="6" xl="6">
          <Button className="btn btn-success m-3">Voir les services</Button>
        </Row>
        {/* END OF SERVICES SECTION */}

        {/* TESTIMONIALS SECTION */}
        <Row className="my-5" style={{border: '2px dotted red'}}>
          <Row xs="12" sm="12" md="12" lg="12" xl="12">
            <h1>Ils m'ont fait confiance</h1>
            <br/>
            <h6>Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500</h6>
          </Row>

          <Row className="my-3">
           <ClientCarousel />
        </Row>

        </Row>
        {/* END OF TESTIMONIALS SECTION */}



    </Container>
  )
}

export default HomeScreen