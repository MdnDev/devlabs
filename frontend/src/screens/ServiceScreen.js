import React from 'react'
import { Button, Col, Row, Image, Container } from 'react-bootstrap'
import ClientCarousel from '../components/ClientCarousel'
import Service from '../components/Service'

const ServiceScreen = () => {
  return (
    <Container className="my-5" style={{border: '1px solid black'}}>
      <Row className="my-5" style={{border: '2px dotted red'}}>
        <Row xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>Design </h1>
          <br/>
          <h6>Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500</h6>
        </Row>
        <Row className="my-3" xs="12" sm="12" md="12" lg="12" xl="12">
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                <Service style={{ width: '100%'}}/>
            </Col>

          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Service style={{ width: '100%'}}/>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Service style={{ width: '100%'}}/>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Service style={{ width: '100%'}}/>
          </Col>
        </Row>
        <Row xs="12" sm="12" md="8" lg="6" xl="6">
          <Button className="btn btn-success m-3">Voir les services</Button>
        </Row>
      </Row>

        {/* SECOND SECTION */}
        <Row className="my-5" style={{border: '2px dotted red'}}>
        <Row xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>Dévelopment </h1>
          <br/>
          <h6>Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500</h6>
        </Row>
        <Row className="my-3" xs="12" sm="12" md="12" lg="12" xl="12">
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                <Service style={{ width: '100%'}}/>
            </Col>

          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Service style={{ width: '100%'}}/>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Service style={{ width: '100%'}}/>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Service style={{ width: '100%'}}/>
          </Col>
        </Row>
        <Row xs="12" sm="12" md="8" lg="6" xl="6">
          <Button className="btn btn-success m-3">Voir les services</Button>
        </Row>
      </Row>
        {/* END OF SECOND SECTION */}

        {/* THIRD SECTION */}
        <Row className="my-5" style={{border: '2px dotted red'}}>
        <Row xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>Autres Services </h1>
          <br/>
          <h6>Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500</h6>
        </Row>
        <Row className="my-3" xs="12" sm="12" md="12" lg="12" xl="12">
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                <Service style={{ width: '100%'}}/>
            </Col>

          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Service style={{ width: '100%'}}/>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Service style={{ width: '100%'}}/>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Service style={{ width: '100%'}}/>
          </Col>
        </Row>
        <Row xs="12" sm="12" md="8" lg="6" xl="6">
          <Button className="btn btn-success m-3">Voir les services</Button>
        </Row>
      </Row>
        {/* END OF THIRD SECTION */}

        
        



    </Container>
  )
}

export default ServiceScreen