import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image, Button, Collapse } from 'react-bootstrap'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { listBlogpostDetails } from '../actions/blogpostActions';
import { Link, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';

const BlogpostScreen = () => {
    const dispatch = useDispatch()
    const params = useParams()

    const blogpostDetails = useSelector((state) => state.blogpostDetails)
    const { loading, error, blogpost } = blogpostDetails


   useEffect(() => {
       dispatch(listBlogpostDetails(params.id))
   }, [dispatch, params])

   const [blogposts, setBlogposts] = useState([])
   

    useEffect(() => {
        const fetchBlogposts = async () => {
            const { data } = await axios.get('/api/blogposts')

            setBlogposts(data)
        }
        fetchBlogposts()
    }, [])

    const [open, setOpen] = useState(false);
  return (
    <Container style={{textAlign: 'center'}}>
      <Link to='/blogposts' className='btn btn-light my-3'>
        Retour
      </Link>
        <Col xs={12} sm={12} md={12} lg={9} xl={9} style={{border: '2px solid red', display: 'inline-block', textAlign: 'justify'}}>
          {loading ? ( <Loader />) : error ? ( <Message variant="danger">{error}</Message> ) : (
            <div>
              <Image src={blogpost.image} alt={blogpost.title} fluid/>
              <strong><h1>{blogpost.title}</h1></strong>
          <br></br>
          <h4>Le {blogpost.date}, par {blogpost.author}</h4>
          <section>
              <p>
              {blogpost.paragraph1}
              </p>
              
              <br></br>
              <p>
              {blogpost.paragraph2}
              </p>
              

              <br></br>
              <p>
              {blogpost.paragraph3}
              </p>
              
              </section>
            </div>
            
          )}
          
        </Col>
        
    </Container>
  )
}

export default BlogpostScreen