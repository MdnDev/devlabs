import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { Col, Row, Button } from 'react-bootstrap';
;




const SearchBox = () => {
  const [name, setName] = useState('');

  const navigate = useNavigate()

  const submitHandler = (e) => {
      e.preventDefault();
      navigate(`/search/name/${name}`)
  }
  return (
    <Col>
        <Row>
      <form onSubmit={submitHandler}>
        <div className='row'>
            <input 
                type="text" 
                name="q" 
                id="q"
                className='form-control' 
                placeholder='Recherche...' 
                aria-label='Search' 
                onChange={(e) => setName(e.target.value)}>
            </input>
            <Button color="outline-primary" type='submit'>
                Chercher
            </Button>
        </div>
      </form>
      </Row>
      </Col>
    )
};

export default SearchBox;