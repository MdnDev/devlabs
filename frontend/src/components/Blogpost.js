import React from 'react';
import { Col, Card } from 'react-bootstrap'

const Blogpost = ({ blogpost }) => {
    return (
        <Col className="my-3" style={{textAlign: 'center'}}>
            <Col style={{ display: 'inline-block' }} xs={12} sm={12} md={6} lg={4} xl={4}>
                <Card className="mt-5 mx-auto" style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Img variant="top" src={blogpost.bannerImage}/>
                        <Card.Title>{blogpost.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{blogpost.author}</Card.Subtitle>
                        <Card.Text>
                            {blogpost.preview}
                        </Card.Text>
                        <Link to={`/blogposts/${blogpost._id}`}>Lire l'article</Link>
                    </Card.Body>
                </Card>
            </Col>
        </Col>

    )
}

export default Blogpost

