import React from 'react'
import { Button, Col, Row, Image, Card, Container } from 'react-bootstrap'
import HomeCarousel from '../components/HomeCarousel'


const HomeScreen = () => {
  return (

    <Container className="my-5" >
      <Row >
        <Row xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>Design et développement d'application web</h1>
          <br/>
          <h5>Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500</h5>
          <HomeCarousel />
            
        </Row>
        <Container style={{textAlign: 'center'}} xs={12} sm={12} md={12} lg={6} xl={6}>
            <Button className="btn btn-success mx-0">CTA Position</Button>
        </Container>
      </Row>

        {/* SECOND SECTION */}
        <Row className="my-5" >
          <Row xs="12" sm="12" md="12" lg="12" xl="12">
            <h1>Je conçois et développe sites à application pour votre orgaisation</h1>
            <br/>
            <h6>Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500</h6>
          </Row>
        </Row>
        {/* END OF SECOND SECTION */}

        {/* SERVICES SECTION */}
        <Row className="my-3" xs="12" sm="12" md="12" lg="12" xl="12" >
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem'}}>
              <Card.Img variant="top" src='../../images/collab.svg' />
              <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  </Card.Text>
                  <Button style={{backgroundColor: '#1d804d', fontFamily: 'Russo One, serif'}}>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem'}}>
              <Card.Img variant="top" src='../../images/personalsettings.svg' />
              <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  </Card.Text>
                  <Button style={{backgroundColor: '#1d804d', fontFamily: 'Russo One, serif'}}>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem'}}>
              <Card.Img variant="top" src='../../images/onlinepayments.svg' />
              <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  </Card.Text>
                  <Button style={{backgroundColor: '#1d804d', fontFamily: 'Russo One, serif'}}>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem'}}>
              <Card.Img variant="top" src='../../images/pride.svg' />
              <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  </Card.Text>
                  <Button style={{backgroundColor: '#1d804d', fontFamily: 'Russo One, serif'}} >Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Container style={{textAlign: 'center'}} xs={12} sm={12} md={12} lg={6} xl={6}>
            <Button className="btn btn-success mx-0 my-4">Voir les services</Button>
        </Container>
        {/* END OF SERVICES SECTION */}

        {/* TESTIMONIALS SECTION */}
        <Row className="py-5" style={{ backgroundColor: '#eefff4'}}>
          <Row xs="12" sm="12" md="12" lg="12" xl="12">
            <h1>Ils m'ont fait confiance</h1>
            <br/>
          </Row>

          <Row className="my-3">
           <Col xs={12} sm={12} md={6} lg={4} xl={4}>
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
           <Col xs={12} sm={12} md={6} lg={4} xl={4}>
           <Row>
                    
                    <img  className="my-4" style={{ height: '30%', width: '30%', borderRadius: '50%', margin: '10px'}} src="../../images/Laurie2.jpg" alt="alt" fluid/>
                    <h6 >Laurie Doinel, Gérante de glacerie</h6>
            
                
            </Row>
            <Row>
                <p className='aboutParagraph py-4 '>
                "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C.".
                </p>
            </Row>
           </Col>
           <Col xs={12} sm={12} md={6} lg={4} xl={4}>
           <Row>
                    
                    <img  className="my-4" style={{ height: '30%', width: '48%', borderRadius: '50%', margin: '10px'}} src="../../images/LMS.png" alt="alt" fluid/>
                    <h6>Rollin Noko, Gérant, Light Multi Services</h6>
            
                
            </Row>
            <Row>
                <p className='aboutParagraph py-4 '>
                "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C.".
                </p>
            </Row>
           </Col>
        </Row>

        </Row>
        {/* END OF TESTIMONIALS SECTION */}



    </Container>
  )
}

export default HomeScreen