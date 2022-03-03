import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listBlogpostDetails, updateBlogpost } from '../actions/blogpostActions'
import { BLOGPOST_UPDATE_RESET } from '../constants/blogpostConstants'


const BlogEditScreen = () => {
    const navigate = useNavigate()
    const params = useParams()
    

    const blogpostId = params.id
    

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [author, setAuthor] = useState('')
    const [category, setCategory] = useState('')
    const [text, setText] = useState('')
    const [bannerImage, setBannerImage] = useState('')
    const [date, setDate] = useState('')
    

    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()


    const blogpostDetails = useSelector((state) => state.blogpostDetails)
    const { loading, error, blogpost } = blogpostDetails

    

    const blogpostUpdate = useSelector((state) => state.blogpostUpdate)
    const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
    } = blogpostUpdate


    useEffect(() => {
        if (successUpdate) {
          dispatch({ type: BLOGPOST_UPDATE_RESET })
          navigate('/admin/bloglist')
        } else {
          if (!blogpost.title || blogpost._id !== blogpostId) {
            dispatch(listBlogpostDetails(blogpostId))
          } else {
            setTitle(blogpost.title)
            setImage(blogpost.image)
            setAuthor(blogpost.author)
            setCategory(blogpost.category)
            setText(blogpost.text)
            setBannerImage(blogpost.bannerImage)
            setDate(blogpost.date)
            
          }
        }
      }, [dispatch, navigate, blogpost, blogpostId, successUpdate])

     
      const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)
    
        try {
          const config = {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
    
          const { data } = await axios.post('/api/upload', formData, config)
    
          setImage(data)
          setUploading(false)
        } catch (error) {
          console.error(error)
          setUploading(false)
        }
      }
      
      

      const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
          updateBlogpost({
            _id: blogpostId,
            title,
            image,
            author,
            category,
            text,
            bannerImage,
            date
            
          })
        )
      }

    return (
        <>
          <Link to='/admin/bloglist' className='btn btn-light my-3'>
        Retour
      </Link>
      <FormContainer>
        <h1>Créer/ Modifier un article</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='title'>
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type='title'
                placeholder='Enter title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <input
                type="file"
                id='image-file'
                label='Choose File'
                onChange={uploadFileHandler}
              ></input>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId='bannerImage'>
              <Form.Label>Image Bannière</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={bannerImage}
                onChange={(e) => setBannerImage(e.target.value)}
              ></Form.Control>
              <input
                type="file"
                id='image-file'
                label='Choose File'
                onChange={uploadFileHandler}
              ></input>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId='author'>
              <Form.Label>Auteur</Form.Label>
              <Form.Control
                type='text'
                placeholder='Nom'
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='date'>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type='text'
                placeholder='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='category'>
              <Form.Label>Categorie</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-4" controlId='text'>
              <Form.Label>Texte</Form.Label>
              <Form.Control
                type='text'
                placeholder='Entrer le texte'
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></Form.Control>
            </Form.Group>
           
            <Button className="my-3" type='submit' variant='primary'>
              Valider
            </Button>
          </Form>
        )}
      </FormContainer>
        </>
    )
}

export default BlogEditScreen