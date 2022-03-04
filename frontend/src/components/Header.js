import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import { NavDropdown } from 'react-bootstrap'

const Header = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }
  return (
    <div>
        <Navbar expand="lg" collapseOnSelect style={{backgroundColor: '#eefff4'}}>
            <Container>
              <div className="mx-auto" >
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse  id="basic-navbar-nav">
                <Navbar.Brand href="#home">
                    <img
                        src='../../images/logo.png'
                        height='125rem'
                        alt=''
                        loading='lazy'
                        />
                </Navbar.Brand>
                <Nav className="me-auto">
                  <NavLink className="Nav_link" to="/">Accueil</NavLink>
                  <NavLink className="Nav_link" to="/services">Services</NavLink>
                  <NavLink className="Nav_link" to="/portfolio">Portfolio</NavLink>
                  <NavLink className="Nav_link" to="/pricing">Tarifs</NavLink>
                  <NavLink className="Nav_link" to="/contact">Contact</NavLink>
                  <NavLink className="Nav_link" to="/blog">Blog</NavLink>
                  {userInfo ? (
                        <NavDropdown title={userInfo.name} id='username'>
                            <Link className="Nav_link" to="/profile" style={{ display: "block"}}>
                                <div>Profil</div>
                            </Link>
                            <Nav.Item>
                              <Link className="Nav_link" to="/admin/bloglist" style={{ display: "block"}}>
                                  <div>Articles</div>
                              </Link>
                            </Nav.Item>

                            <Nav.Link className="Nav_link" style={{ display: "block"}}>
                                <div onClick={logoutHandler}>Déconnexion</div>
                            </Nav.Link>
                        </NavDropdown>
                ) : <></>}
                </Nav>
              </Navbar.Collapse>
              </div>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header