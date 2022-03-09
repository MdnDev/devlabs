import React, { useEffect, useState } from 'react'
import { NavLink, Nav, Offcanvas, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import { listBlogpostCategories, listBlogposts } from '../actions/blogpostActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const SlideNav = () => {
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
    <Container style={{textAlign: 'center'}}>
        <Button style={{backgroundColor: '#1d804d'}} onClick={handleShow}>
          Trier par catégorie
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton style={{backgroundColor: '#eefff4'}}>
            <Offcanvas.Title>Articles</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          {loadingCategories ? ( <Loader/> ) : errorCategories ? ( <Message variant="danger">{error}</Message> ) : (
                            <Nav defaultActiveKey="/home" className="flex-column">
                                {categories.map(c => (
                                <div key={c}>
                                    <Link
                                    className={c === category ? 'active': ''}
                                    to={getFilterUrl({category:c})}>
                                        <div
                                        className="Nav_link"
                                        style={{width: '100%', margin: '2px', color: '#1d804d'}}>
                                            {c}
                                        </div>
                                    </Link>
                                </div>
                                ))} 
                            </Nav>
                            )}
          </Offcanvas.Body>
        </Offcanvas>
    </Container>
  )
}

export default SlideNav