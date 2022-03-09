import React from 'react'
import { Container, Image, Form, Button, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Message from '../components/Message';

const ContactScreen = () => {
  return (
    <Container >
            <Row className="contactArtist my-5">
              <Col xs={12} sm={12} md={12} lg={4} xl={4} style={{textAlign: 'center'}}>
                <Row>
                  <Image className="mx-auto" src="../../images/logo.png" style={{width: '25rem', borderRadius: '50%'}}/>
                </Row>
                <Row className="mt-4">
                  <Button href="https://github.com/MdnDev" target="_blank" style={{backgroundColor: '#1d804d', fontFamily: 'Russo One, serif'}}>Github</Button>
                  </Row>
              </Col>
              <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                <div className="my-5" style={{textAlign: 'center'}}>
                <h1>Wilfried Maudon</h1>
                <h6>devlabs@outlook.fr</h6>
                <h3 className="my-5">Technologies que j'utilise</h3>
                  <Badge bg="primary">
                    HTML5
                  </Badge>{' '}
                  <Badge bg="secondary">
                    CSS3
                  </Badge>{' '}
                  <Badge bg="success">
                    Javascript
                  </Badge>{' '}
                  <Badge bg="danger">
                    React
                  </Badge>{' '}
                  <Badge bg="warning" text="dark">
                    Node.js
                  </Badge>{' '}
                  <Badge bg="info">
                    Redux
                  </Badge>{' '}
                  <Badge bg="light" text="dark">
                    Express.js
                  </Badge>{' '}
                  <Badge bg="dark">
                    MongoDB
                  </Badge>

                  
                </div>
              </Col>
            </Row>

            <section className='my-5'>
              <Row>
                <Col xs={12} sm={12} md={12} lg={5} xl={4} style={{textAlign: 'center'}}>
                  <Image className="my-5" src="../../images/inconnus.gif" style={{height: '16rem'}}/>
                </Col>

                <Col xs={12} sm={12} md={12} lg={7} xl={8} style={{textAlign: 'center'}}>
                  <h5>Pour me contacter, veuillez remplir le formulaire ci-dessous:</h5>

                  <Form action="https://formsubmit.co/ca48cbbdcea2063c2d3a0b775cb136cd" method="POST" >
                   
                      <Form.Label className="my-2">Nom</Form.Label>
                      <Form.Control type="text" placeholder="Nom" name="Nom" />
                   

                    
                      <Form.Label className="my-2">Prénom</Form.Label>
                      <Form.Control type="text" placeholder="Prénom" name="Prénom" />
                   
                     
                    
                      <Form.Label className="my-2">Email</Form.Label>
                      <Form.Control type="email" placeholder="Email" name="Email" required/>
                    

                    
                      <Form.Label className="my-2">Objet</Form.Label>
                      <Form.Control type="text" placeholder="Objet" name="Objet" />
                    

                      <input type="text" name="_honey" style={{display: 'none'}}></input>
                      <label htmlFor="Message" className="my-2">
                        Message
                      </label>
                      <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      name="message"
                      />
                      <div className="field">
                        <div data-netlify-recaptcha="true"></div>
                      </div>
                    

                    <Button
                      style={{backgroundColor: '#1d804d', fontFamily: 'Russo One, serif'}} 
                      className="my-3" 
                      variant="dark" 
                      type="submit" 
                      >
                      Envoyer
                    </Button>
                  </Form>
                </Col>
              </Row>
            
            </section>
        </Container>
  )
}

export default ContactScreen