import React from 'react'
import { Button, Col, Row, Image, Card, Container } from 'react-bootstrap'
import ClientCarousel from '../components/ClientCarousel'
import Service from '../components/Service'

const ServiceScreen = () => {
  return (
    <Container className="my-5" >
      <Row className="my-5">
        <Row xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>Design </h1>
          <br/>
          <h6>Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500</h6>
        </Row>
        <Row className="my-3" xs="12" sm="12" md="12" lg="12" xl="12">
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src='../../images/webdev.png' className="mx-auto" style={{ width: '8rem' }} />
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
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='../../images/email.png' className="mx-auto" style={{ width: '8rem' }} />
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
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='../../images/branding.png' className="mx-auto" style={{ width: '8rem' }} />
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
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='../../images/seo.png' className="mx-auto" style={{ width: '8rem' }} />
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
        </Row>
      </Row>

        {/* SECOND SECTION */}
        <Row className="my-5" >
        <Row xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>Dévelopment </h1>
          <br/>
          <h6>Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500</h6>
        </Row>
        <Row className="my-3" xs="12" sm="12" md="12" lg="12" xl="12">
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src='../../images/html5.png' className="mx-auto" style={{ width: '8rem' }} />
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
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='../../images/css3.png' className="mx-auto" style={{ width: '8rem' }} />
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
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='../../images/react.png' className="mx-auto" style={{ width: '8rem' }} />
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
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='../../images/database.png' className="mx-auto" style={{ width: '8rem' }} />
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
        </Row>
      </Row>
        {/* END OF SECOND SECTION */}

        {/* THIRD SECTION */}
        <Row className="my-5">
          <Row xs="12" sm="12" md="12" lg="12" xl="12">
            <h1>Autres Services </h1>
            <br/>
            <h6>Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500</h6>
          </Row>
          <Row className="my-3" xs="12" sm="12" md="12" lg="12" xl="12">
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src='../../images/shopify.png' className="mx-auto" style={{ width: '8rem' }} />
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
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='../../images/wordpress.png' className="mx-auto" style={{ width: '8rem' }} />
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
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='../../images/blog.png' className="mx-auto" style={{ width: '8rem' }} />
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
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='../../images/media.png' className="mx-auto" style={{ width: '8rem' }} />
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
        </Row>
          </Row>
        {/* END OF THIRD SECTION */}

        
        



    </Container>
  )
}

export default ServiceScreen