import React from 'react'
import { Button, Col, Row, Image, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HomeCarousel from '../components/HomeCarousel'

const HomeScreen = () => {
  return (

    <Container className="my-5" >
      <Row >
        <Row xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>Design et développement de sites & d'application web</h1>
          <br/>
          <h5>En tant que dévoloppeur fullstack, j'apporte la solution pour apporter le plus de visibilité à votre activité </h5>
          <HomeCarousel />
            
        </Row>
        <Container style={{textAlign: 'center'}} xs={12} sm={12} md={12} lg={6} xl={6}>
            <Link to="/contact"><Button className="btn btn-success mx-0" >Me contacter</Button></Link>
        </Container>
      </Row>

        {/* SECOND SECTION */}
        <Row className="my-5" >
          <Row xs="12" sm="12" md="12" lg="12" xl="12">
            <h1>Mon approche pour developper votre site personnel</h1>
            <br/>
            <h5>Du design au développment, ainsi que dans la durée, je vous accompagne dans votre projet</h5>
          </Row>
        </Row>
        {/* END OF SECOND SECTION */}

        {/* SERVICES SECTION */}
        <Col className="my-3" style={{textAlign: 'center'}}>
          <Col style={{ display: 'inline-block' }} xs={12} sm={12} md={6} lg={6} xl={4}>
            <Card className="mt-5 mx-auto" style={{ width: '20rem'}}>
              <Card.Img variant="top" src='../../images/collab.svg' />
              <Card.Body>
                  <Card.Title>Communication</Card.Title>
                  <Card.Text>
                  Du début à la fin, je travaille avec vous.
                  Mon but est de comprendre tout de votre activité, votre mission
                  </Card.Text>
                  
              </Card.Body>
            </Card>
          </Col>

          <Col style={{ display: 'inline-block' }} xs={12} sm={12} md={6} lg={6} xl={4}>
            <Card className="mt-5 mx-auto" style={{ width: '20rem'}}>
              <Card.Img variant="top" src='../../images/personalsettings.svg' />
              <Card.Body>
                  <Card.Title>Un site personalisé</Card.Title>
                  <Card.Text>
                  Je prends en compte toutes vos envie et idées. Je vous guide ensuite pour arriver à un résultat optimal pour vous et vos clients.
                  </Card.Text>
                  
              </Card.Body>
            </Card>
          </Col>

          <Col style={{ display: 'inline-block' }} xs={12} sm={12} md={6} lg={6} xl={4}>
            <Card className="mt-5 mx-auto" style={{ width: '20rem'}}>
              <Card.Img variant="top" src='../../images/pride.svg' />
              <Card.Body>
                  <Card.Title>Votre satisfaction est primodiale</Card.Title>
                  <Card.Text>
                   Mon but est de vous développer un site que vous prendrez plaisir a présenter, ainsi qu'a utliser comme outil pour votre activité.
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Col>

        <Container style={{textAlign: 'center'}} xs={12} sm={12} md={12} lg={6} xl={6}>
            <Link to='/services'>
              <Button className="btn btn-success mx-0 my-4">Voir les services</Button>
            </Link>
        </Container>
        {/* END OF SERVICES SECTION */}

        {/* TESTIMONIALS SECTION */}
       

        
        {/* END OF TESTIMONIALS SECTION */}



    </Container>
  )
}

export default HomeScreen