import React from 'react'
import { Container, Card, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PricingScreen = () => {
  return (
    <Container >
      <h1>Tarifs & Plans</h1>
      <Col className="my-3" style={{textAlign: 'center'}}>
        <Col style={{ display: 'inline-block' }} xs={12} sm={12} md={12} lg={4} xl={4}>
          <Card className="mt-5 mx-auto" style={{ width: '18rem' }}>
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

        <Col style={{ display: 'inline-block' }} xs={12} sm={12} md={12} lg={4} xl={4}>
          <Card className="mt-4 mx-auto" style={{ width: '18rem' }}>
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

        <Col style={{ display: 'inline-block' }} xs={12} sm={12} md={12} lg={4} xl={4}>
          <Card className="mt-5 mx-auto" style={{ width: '18rem' }}>
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
      </Col>
      <Container style={{textAlign: 'center'}} xs={12} sm={12} md={12} lg={6} xl={6}>
            <Link to="/contact">
              <Button className="btn btn-success mx-0 my-5" >Me contacter</Button></Link>
        </Container>
    </Container>
  )
}

export default PricingScreen