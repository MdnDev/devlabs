import React from 'react'
import { Container, Card, Col, Row } from 'react-bootstrap'

const BlogScreen = () => {
  return (
    <Container>
      <h1>Blog</h1>
      <Col className="my-3" style={{textAlign: 'center'}}>
        <Col style={{ display: 'inline-block' }} xs={12} sm={12} md={12} lg={3} xl={3}>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
          <Card.Img variant="top" src="../../images/blogpost-challenge.jpg"/>
            <Card.Title>les galères d'un développeur autodidacte</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Wilfried Maudon</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Card.Link href="#">Lire l'article</Card.Link>
          </Card.Body>
        </Card>
        </Col>

        <Col style={{ display: 'inline-block' }} xs={12} sm={12} md={12} lg={3} xl={3}>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
          <Card.Img variant="top" src="../../images/github.jpg"/>
            <Card.Title>Pourquoi je préfère Github à Stack Overflow</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Wilfried Maudon</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Card.Link href="#">Lire l'article</Card.Link>
          </Card.Body>
        </Card>
        </Col>

        <Col style={{ display: 'inline-block' }} xs={12} sm={12} md={12} lg={3} xl={3}>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
          <Card.Img variant="top" src="../../images/blogpost-react.jpg"/>
            <Card.Title>Qu'est ce que React ?</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Wilfried Maudon</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Card.Link href="#">Lire l'article</Card.Link>
          </Card.Body>
        </Card>
        </Col>

        <Col style={{ display: 'inline-block' }} xs={12} sm={12} md={12} lg={3} xl={3}>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
          <Card.Img variant="top" src="../../images/blogpost-react-router-v6.jpeg"/>
            <Card.Title>Changements majeur sur React Router V6</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Wilfried Maudon</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Card.Link href="#">Lire l'article</Card.Link>
          </Card.Body>
        </Card>
        </Col>

        <Col style={{ display: 'inline-block' }} xs={12} sm={12} md={12} lg={3} xl={3}>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
          <Card.Img variant="top" src="../../images/blogpost-timer.jpg"/>
            <Card.Title>La méthode Pomodoro, Utile ?</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Wilfried Maudon</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Card.Link href="#">Lire l'article</Card.Link>
          </Card.Body>
        </Card>
        </Col>
      </Col>
    </Container>
  )
}

export default BlogScreen