import React from 'react'
import { Row, Col, Carousel, Button } from 'react-bootstrap';

const HomeCarousel = () => {
  return (
    <div>
        <Row className="my-5" style={{ textAlign: 'center', backgroundColor: 'snow'}}>
                <Carousel fade style={{width: '100%'}}>
                    <Carousel.Item>
                        <img
                        style={{ height: '100%', width: '100%', borderRadius: '0%'}}
                        className="d-block w-100"
                        src="../../images/coding.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        style={{ height: '100%', width: '100%', borderRadius: '0%'}}
                        className="d-block w-100"
                        src="../../images/coding2.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        style={{ height: '100%', width: '100%', borderRadius: '0%'}}
                        className="d-block w-100"
                        src="../../images/coding3.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        
                        </Carousel.Caption>
                    </Carousel.Item>

                    
                </Carousel>
            </Row>

    </div>
  )
}

export default HomeCarousel