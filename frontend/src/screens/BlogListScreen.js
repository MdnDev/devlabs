import React, { useEffect } from 'react'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import {
  listBlogpost,
  deleteBlogpost,
  createBlogpost,
} from '../actions/blogpostActions'
import { BLOGPOST_CREATE_RESET } from '../constants/blogpostConstants'

const BlogListScreen = () => {
    const params = useParams()
    const navigate = useNavigate()
    const pageNumber = params.pageNumber || 1
  
    const dispatch = useDispatch()
  
    const blogpostList = useSelector((state) => state.blogpostList)
    const { loading, error, blogposts, page, pages } = blogpostList
  
    const blogpostDelete = useSelector((state) => state.blogpostDelete)
    const {
      loading: loadingDelete,
      error: errorDelete,
      success: successDelete,
    } = blogpostDelete
  
    const blogpostCreate = useSelector((state) => state.blogpostCreate)
    const {
      loading: loadingCreate,
      error: errorCreate,
      success: successCreate,
      blogpost: createdBlogpost,
    } = blogpostCreate
  
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
  
    useEffect(() => {
      dispatch({ type: BLOGPOST_CREATE_RESET })
  
      if (!userInfo || !userInfo.isAdmin) {
        navigate('/login')
      }
  
      if (successCreate) {
        navigate(`/admin/blogpost/${createdBlogpost._id}/edit`)
      } else {
        dispatch(listBlogpost('', { pageNumber }))
      }
    }, [
      dispatch,
      navigate,
      userInfo,
      successDelete,
      successCreate,
      createdBlogpost,
      pageNumber,
    ])
  
    const deleteHandler = (id) => {
      if (window.confirm('Supprimer ?')) {
        dispatch(deleteBlogpost(id))
      }
    }
  
    const createBlogpostHandler = () => {
      dispatch(createBlogpost())
    }
  
    return (
      <>
        <Row className='align-items-center'>
          <Col>
            <h1>Articles</h1>
          </Col>
          <Col className='text-right'>
            <Button className='my-3' onClick={createBlogpostHandler}>
              <i className='fas fa-plus'></i> Poster un article
            </Button>
          </Col>
        </Row>
        {loadingDelete && <Loader />}
        {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
        {loadingCreate && <Loader />}
        {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
            <Table striped bordered hover responsive className='table-sm'>
              <thead>
                <tr>
                  <th>IDENTIFIANT</th>
                  <th>NOM</th>
                  <th>CATEGORIE</th>
                  <th>MARQUE</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {blogposts.map((blogpost) => (
                  <tr key={blogpost._id}>
                    <td>{blogpost._id}</td>
                    <td>{blogpost.name}</td>
                    <td>{blogpost.category}</td>
                    <td>{blogpost.brand}</td>
                    <td>
                      <a href={`/admin/blogpost/${blogpost._id}/edit`}>
                        <Button variant='light' className='btn-sm'>
                          <i className='fas fa-edit'></i>
                        </Button>
                      </a>
                      <Button
                        variant='danger'
                        className='btn-sm'
                        onClick={() => deleteHandler(blogpost._id)}
                      >
                        <i className='fas fa-trash'></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Paginate pages={pages} page={page} isAdmin={true} />
          </>
        )}
      </>
    )
  }
  
  export default BlogListScreen