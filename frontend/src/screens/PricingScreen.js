import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'

const PricingScreen = () => {
  return (
    <Container style={{border: '1px solid blue'}}>
      <h1>Tarifs & Plans</h1>
      <Row className="my-3" style={{textAlign: 'center', border: '1px solid blue'}}>
        <Col xs={12} sm={12} md={12} lg={3} xl={3}>
          <Card className="mt-5" style={{ width: '18rem', border: '1px solid red' }}>
            <Card.Header style={{backgroundColor: '#eefff4'}}><h4>Economique</h4></Card.Header>
            <Card.Body>
              <Card.Title><h4>~ 2000-3000€</h4></Card.Title>
              <Card.Text>
              <i className="fa-solid fa-check myIcon check mx-1"></i> Something
              <br/>
              <i className="fa-solid fa-check myIcon check mx-1"></i> Something
              <br/>
              <i className="fa-solid fa-check myIcon check mx-1"></i> Something
              <br/>
              <i className="fa-solid fa-check myIcon check mx-1"></i> Something
              <br/>
              <i className="fa-solid fa-xmark myIcon cross mx-2"></i> Something
              <br/>
              <i className="fa-solid fa-xmark myIcon cross mx-2"></i> Something
              <br/>
              <i className="fa-solid fa-xmark myIcon cross mx-2"></i> Something
              <br/>
              <i className="fa-solid fa-xmark myIcon cross mx-2"></i> Something
              <br/>
              <i className="fa-solid fa-xmark myIcon cross mx-2"></i> Something
              <br/>
              <i className="fa-solid fa-xmark myIcon cross mx-2"></i> Something
              
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={12} md={12} lg={3} xl={3}>
          <Card className="mt-4" style={{ width: '18rem' }}>
            <Card.Header className="py-5" style={{backgroundColor: '#eefff4'}}><h4>Prenium</h4></Card.Header>
            <Card.Body>
              <Card.Title><h4>~ 8000-10000€</h4></Card.Title>
              <Card.Text>
              <i className="fa-solid fa-check myIcon check mx-1"></i> Something
              <br/>
              <i className="fa-solid fa-check myIcon check mx-1"></i> Something
              <br/>
              <i className="fa-solid fa-check myIcon check mx-1"></i> Something
              <br/>
              <i className="fa-solid fa-check myIcon check mx-1"></i> Something
              <br/>
              <i className="fa-solid fa-check myIcon check mx-1"></i> Something
              <br/>
              <i className="fa-solid fa-check myIcon check mx-1"></i> Something
              <br/>
              <i className="fa-solid fa-check myIcon check mx-1"></i> Something
              <br/>
              <i className="fa-solid fa-xmark myIcon cross mx-2"></i> Something
              <br/>
              <i className="fa-solid fa-xmark myIcon cross mx-2"></i> Something
              <br/>
              <i className="fa-solid fa-xmark myIcon cross mx-2"></i> Something
              </Card.Text>
            </Card.Body>

            
          </Card>
        </Col>

        <Col xs={12} sm={12} md={12} lg={3} xl={3}>
          <Card className="mt-5" style={{ width: '18rem' }}>
            <Card.Header style={{backgroundColor: '#eefff4'}}>
              <h4>Elite</h4>
              </Card.Header>
            <Card.Body>
              <Card.Title><h4>~ 12000-15000€</h4></Card.Title>
              <Card.Text>
              <i className="fa-solid fa-check myIcon check mx-2"></i> Something
              <br/>
              <i className="fa-solid fa-check myIcon check mx-2"></i> Something
              <br/>
              <i className="fa-solid fa-check myIcon check mx-2"></i> Something
              <br/>
              <i className="fa-solid fa-check myIcon check mx-2"></i> Something
              <br/>
              <i className="fa-solid fa-check myIcon check mx-2"></i> Something
              <br/>
              <i className="fa-solid fa-check myIcon check mx-2"></i> Something
              <br/>
              <i className="fa-solid fa-check myIcon check mx-2"></i> Something
              <br/>
              <i className="fa-solid fa-check myIcon check mx-2"></i> Something
              <br/>
              <i className="fa-solid fa-check myIcon check mx-2"></i> Something
              <br/>
              <i className="fa-solid fa-check myIcon check mx-2"></i> Something
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default PricingScreen