import React, { useState, useEffect } from 'react'
import { Container, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SlideNav from '../components/SlideNav';
import SearchBox from '../components/SearchBox';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listBlogpostCategories, listBlogposts } from '../actions/blogpostActions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import Blogpost from '../components/Blogpost';

const BlogScreen = () => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { title = 'all', category = 'all' } = useParams()
    const dispatch = useDispatch()

    const blogpostList =  useSelector((state) => state.blogpostList)
    const { loading, error, blogposts } = blogpostList

    const blogpostCategoryList = useSelector((state) => state.blogpostCategoryList);
    const {
        loading: loadingCategories,
        error: errorCategories,
        categories,
    } = blogpostCategoryList;

    useEffect(() => {
        dispatch(listBlogpostCategories());
    }, [dispatch]);

    useEffect(() => {
        dispatch(listBlogposts({ 
            title: title !== 'all' ? title: '',
            category: category !== 'all' ? category : '',
        }))
    }, [dispatch, title, category])
    
    const getFilterUrl = (filter) => {
        const filterCategory = filter.category || category;
        const filterTitle = filter.title || title;
        return `/search/category/${filterCategory}/title/${filterTitle}`;
      };
  return (
    <Container>
      <h1>Blog</h1>

      <Col className="my-3" style={{textAlign: 'center'}}>
        {loading ? ( <Loader/> ) : error ? ( <Message variant="danger">{error}</Message> ) : (
                            <>
                            {blogposts.map(blogpost => (
                                <Col key={blogpost._id} style={{ display: 'inline-block' }} xs={12} sm={12} md={6} lg={4} xl={4} >
                                <Blogpost blogpost={blogpost} style={{ width: '100%'}}/>
                                </Col>
                            ))}
                            </>
                            )}
        
      </Col>
    </Container>
  )
}

export default BlogScreen