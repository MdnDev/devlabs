import React from 'react'
import { Container, Image, Form, Button, Row, Col } from 'react-bootstrap';
import Message from '../components/Message';

const ContactScreen = () => {
  return (
    <Container >
            <Row className="contactArtist my-5">
              <Col style={{border: '1px solid blue'}}>
                <Image src="../../images/logo.png" style={{height: '20rem', borderRadius: '50%'}}/>
              </Col>
              <Col style={{border: '1px solid red'}}>
                <div className="my-3">
                <h1>Wilfried Maudon</h1>
                <h6>devlabs@outlook.fr</h6>
                <p className="my-3" style={{textAlign: 'justify' }}>
                  Jean-Noel Vireeye est un écrivain, cinéaste et photographe Français.
                  Il est le fils d'une enseignante Martiniquaise qui lui permet notemment de découvrir le cinéma.
                  Lors de ses études en histoires et en cinéma à Paris, il découvre l'art de la photographie tout en aiguisant sa plume.
                  C'est en alliant ce rapport à l'écriture et à l'image qu'il en vient à faire ses débuts dans le cinéma avec un film primétravers le monde. 
                  Les photos présentées sur ce site sont les premières saisies par ce jeune photographe.
                </p>
                </div>
                </Col>
             </Row>

            <section >
            <h5>Pour me contacter, veuillez remplir le formulaire ci-dessous:</h5>
            <Form action="https://formsubmit.co/devlabs@outlook.fr" method="POST">
                <Row>
                    <Col>
                        <Form.Label className="my-2">Nom</Form.Label>
                        <Form.Control type="text" placeholder="Nom" name="Nom" />
                    </Col>

                    <Col>
                        <Form.Label className="my-2">Prénom</Form.Label>
                        <Form.Control type="text" placeholder="Prénom" name="Prénom" />
                    </Col>
                </Row>
                
                <Form.Label className="my-2">Email</Form.Label>
                <Form.Control type="email" placeholder="Email" name="Email" required/>
                
                <Form.Label className="my-2">Objet</Form.Label>
                <Form.Control type="text" placeholder="Objet" name="Objet" />

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
                  className="my-3" 
                  variant="dark" 
                  type="submit" 
                  onClick={<Message variant="success">Votre mail à été envoyé. Merci d'avoir pris contact.</Message>}>
                    Envoyer
                </Button>
            </Form>
            </section>
        </Container>
  )
}

export default ContactScreen