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