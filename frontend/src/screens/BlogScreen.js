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
      <SlideNav />

      <Col className="my-3" style={{textAlign: 'center'}}>
        <Col style={{ display: 'inline-block' }} xs={12} sm={12} md={6} lg={4} xl={4}>
        <Card className="mt-5 mx-auto" style={{ width: '20rem' }}>
          <Card.Body>
          <Card.Img variant="top" src="../../images/blogpost-challenge.jpg"/>
            <Card.Title>les galères d'un développeur autodidacte</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Wilfried Maudon</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Link to='/article'>Lire l'article</Link>
          </Card.Body>
        </Card>
        </Col>

        <Col style={{ display: 'inline-block' }} xs={12} sm={12} md={6} lg={4} xl={4}>
        <Card className="mt-5 mx-auto" style={{ width: '20rem' }}>
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

        <Col style={{ display: 'inline-block' }} xs={12} sm={12} md={6} lg={4} xl={4}>
        <Card className="mt-5 mx-auto" style={{ width: '20rem' }}>
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

        <Col style={{ display: 'inline-block' }} xs={12} sm={12} md={6} lg={4} xl={4}>
        <Card className="mt-5 mx-auto" style={{ width: '20rem' }}>
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

        <Col style={{ display: 'inline-block' }} xs={12} sm={12} md={6} lg={4} xl={4}>
        <Card className="mt-5 mx-auto" style={{ width: '20rem' }}>
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

        <Col style={{ display: 'inline-block' }} xs={12} sm={12} md={6} lg={4} xl={4}>
        <Card className="mt-5 mx-auto" style={{ width: '20rem' }}>
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

        <Col style={{ display: 'inline-block' }} xs={12} sm={12} md={6} lg={4} xl={4}>
        <Card className="mt-5 mx-auto" style={{ width: '20rem' }}>
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