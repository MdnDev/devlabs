import React from 'react'
import { Carousel, Col, Row, Container } from 'react-bootstrap'

const ClientCarousel = () => {
  return (
    <Container>
    <Carousel  pause="hover" className="my-2" className="bg-dark">
        <Carousel.Item>
            <Row>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <img  style={{ height: '100%', width: '100%', borderRadius: '0%', margin: '0px'}} src="../../images/jnphotography.gif" alt="alt" fluid/>
            </Col>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <Row>
                   
                        <img  className="my-4" style={{ height: '30%', width: '30%', borderRadius: '50%', margin: '10px'}} src="../../images/JN.png" alt="alt" fluid/>
                        <h6 style={{color: 'white'}}>Jean-Noël Vireeye, Photographe & Réalisteur</h6>
                   
                    
                </Row>
                <Row>
                    <p className='aboutParagraph py-4 '>
                    "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C.".
                    "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C.".
                    </p>
                </Row>
            </Col>
            </Row>
        </Carousel.Item>

        <Carousel.Item>
            <Row>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <img  style={{ height: '100%', width: '100%', borderRadius: '0%', margin: '0px'}} src="../../images/sorbet.gif" alt="alt" fluid/>
            </Col>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <Row>
                   
                        <img  className="my-4" style={{ height: '30%', width: '30%', borderRadius: '50%', margin: '10px'}} src="../../images/Laurie2.jpg" alt="alt" fluid/>
                        <h6 style={{color: 'white'}}>Laurie Doinel, Gérante de glacerie</h6>
                   
                    
                </Row>
                <Row>
                    <p className='aboutParagraph py-4 '>
                    "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C.".
                    "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C.".
                    </p>
                </Row>
            </Col>
            </Row>
        </Carousel.Item>

        <Carousel.Item>
            <Row>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <img  style={{ height: '100%', width: '100%', borderRadius: '0%', margin: '0px'}} src="../../images/sample.jpg" alt="alt" fluid/>
            </Col>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <Row>
                   
                        <img  className="my-4" style={{ height: '30%', width: '30%', borderRadius: '50%', margin: '10px'}} src="../../images/LMSDarkVariant.png" alt="alt" fluid/>
                        <h6 style={{color: 'white'}}>Rollin Noko, Gérant, Light Multi Services</h6>
                   
                    
                </Row>
                <Row>
                    <p className='aboutParagraph py-4 '>
                    "Ce projet a pris naissance parallèlement aux prémices du cinéma guyanais.

                    Dans les années 1990, Alain Maline, réalisateur notamment de « Cayenne palace » tourné en Guyane, met en oeuvre un projet de studio de production à Montsinery dans lequel il tourne le film « Jean Galmot, aventurier".
                    </p>
                </Row>
            </Col>
            </Row>
        </Carousel.Item>

        
    </Carousel>
    </Container>
  )
}

export default ClientCarousel