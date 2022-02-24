import React from 'react'
import { Container, Card, Col, Row, Button } from 'react-bootstrap'

const Portfolio = () => {
  return (
    <Container>
        <h1 className='py-5'>Mes Projets</h1>
        <Row>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="../../images/jnphotography.gif" />
                    <Card.Body>
                        <Card.Title>Jean-Noël Vireeye Photography</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Light Multi Services</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Wilfried Maudon</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="../../images/sorbet.gif" />
                    <Card.Body>
                        <Card.Title>Royaume Sorbet</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Portfolio