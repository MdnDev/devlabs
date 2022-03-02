import React from 'react'
import { Container, Card, Col, Row } from 'react-bootstrap'

const Portfolio = () => {
  return (
    <Container>
        <h1 className='py-3'>Quelques projets</h1>
        <Col style={{ display: 'inline-block' }}>
            <Col style={{ display: 'inline-block' }} className="my-3" xs={12} sm={12} md={6} lg={6} xl={4}>
                <Card className="mt-5 mx-auto" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="../../images/jnphotography.gif" />
                    <Card.Body>
                        <Card.Title><h4>Jean-Noël Vireeye</h4></Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col style={{ display: 'inline-block' }} className="my-3" xs={12} sm={12} md={6} lg={6} xl={4}>
                <Card className="mt-5 mx-auto" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="../../images/lms.gif" />
                    <Card.Body>
                        <Card.Title><h4>Light Multi Services</h4></Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col style={{ display: 'inline-block' }} className="my-3" xs={12} sm={12} md={6} lg={6} xl={4}>
                <Card className="mt-5 mx-auto" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="../../images/wilfriedmaudon.gif"/>
                    <Card.Body>
                        <Card.Title><h4>Wilfried Maudon</h4></Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col style={{ display: 'inline-block' }} className="my-3" xs={12} sm={12} md={6} lg={6} xl={4}>
                <Card className="mt-5 mx-auto" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="../../images/sorbet.gif" />
                    <Card.Body>
                        <Card.Title><h4>Royaume Sorbet</h4></Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col style={{ display: 'inline-block' }} className="my-3" xs={12} sm={12} md={6} lg={6} xl={4}>
                <Card className="mt-5 mx-auto" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="../../images/guitare.gif" />
                    <Card.Body>
                        <Card.Title><h4>E-commerce guitares</h4></Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Col>
    </Container>
  )
}

export default Portfolio