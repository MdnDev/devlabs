import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'



const LoginScreen = ({ }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    

    useEffect(() => {
      if(userInfo) {
          navigate('/')
      }
  }, [userInfo, navigate])
    
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

  return (
    <FormContainer>
    <h1>Espace Administrateur</h1>
    {error && <Message variant='danger'>L'adresse e-mail et/ou le mot de passe sont incorrectes.</Message>}
    {loading && <Loader></Loader>}
    <Form onSubmit={submitHandler}>
      <Form.Group controlId='email'>
        <Form.Label>Addresse Email</Form.Label>
        <Form.Control
        type='email'
        placeholder="Entrer l'email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        >
        </Form.Control>
      </Form.Group>

      <Form.Group controlId='password'>
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control
        type='password'
        placeholder="Entrer le mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        >
        </Form.Control>
      </Form.Group>

      <Container style={{textAlign: 'center'}} xs={12} sm={12} md={12} lg={6} xl={6}>
            <Button className="btn btn-success mx-0 my-5" type="submit">Me contacter</Button>
        </Container>

    </Form>
  </FormContainer>
  )
  
}
  
  export default LoginScreen