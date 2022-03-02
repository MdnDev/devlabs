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
              <Card.Img variant="top" src='../../images/onlinepayments.svg' />
              <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
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
        <Row className="py-5" style={{ backgroundColor: '#eefff4'}}>
          <Row xs="12" sm="12" md="12" lg="12" xl="12">
            <h1>Ils m'ont fait confiance</h1>
            <br/>
          </Row>

          <Row className="my-3">
           <Col xs={12} sm={12} md={6} lg={4} xl={4} style={{borderBottom: '1px solid grey', borderTop: '1px solid grey'}}>
           <Row>
              <img  className="my-4" style={{ height: '30%', width: '30%', borderRadius: '50%', margin: '10px'}} src="../../images/JN.png" alt="alt" fluid/>
              <h6 >Jean-Noël Vireeye, Photographe & Réalisteur</h6>
            </Row>

            <Row>
                <p className='aboutParagraph py-4 '>
                "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C.".
                </p>
            </Row>
           </Col>
           <Col xs={12} sm={12} md={6} lg={4} xl={4} style={{borderBottom: '1px solid grey', borderTop: '1px solid grey'}}>
           <Row>
              <img  className="my-4" style={{ width: '30%', borderRadius: '50%'}} src="../../images/Laurie2.jpg" alt="alt" fluid/>
              <h6 >Laurie Doinel, Gérante de glacerie</h6>
            </Row>

            <Row>
              <p className='aboutParagraph py-4 '>
                "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C.".
              </p>
            </Row>
           </Col>

           <Col xs={12} sm={12} md={6} lg={4} xl={4} style={{borderBottom: '1px solid grey', borderTop: '1px solid grey'}}>
           <Row>
            <img  className="my-4" style={{ width: '48%', borderRadius: '50%', margin: '10px'}} src="../../images/LMS.png" alt="alt" fluid/>
            <h6>Rollin Noko, Gérant, Light Multi Services</h6>
            </Row>

            <Row>
              <p className='aboutParagraph py-4 '>
                "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C.".
              </p>
            </Row>
           </Col>

           <Container style={{textAlign: 'center'}} xs={12} sm={12} md={12} lg={6} xl={6}>
            <Link to="/contact"><Button className="btn btn-success mx-0 my-5" >Me contacter</Button></Link>
        </Container>
        </Row>

        </Row>
        {/* END OF TESTIMONIALS SECTION */}



    </Container>
  )
}

export default HomeScreen