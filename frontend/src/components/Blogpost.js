import React from 'react';
import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Blogpost = ({ blogpost }) => {
    return (
        <Card className="mt-5 mx-auto" style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Img variant="top" src={blogpost.image}/>
                <Card.Title>{blogpost.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{blogpost.author}
                </Card.Subtitle>
                <Card.Text>
                    {blogpost.preview}
                </Card.Text>
                <Link to={`/blogposts/${blogpost._id}`}>Lire l'article
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Blogpost

