import React from 'react'
import { Nav } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import { NavDropdown } from 'react-bootstrap'

const Footer = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }
  return (
    <div>
       <div className='footer text-center p-3'>
          &copy; {new Date().getFullYear()}{' '}
          <a className='text-dark' href='https://devlabstech.com/'>
            devlabstech.com
          </a>
          { !userInfo ? (
                    <NavLink className="Nav_link" to="/login">
                        <i className='fas fa-lock'></i>
                    </NavLink>
                ) : (
                        <NavDropdown title={userInfo.name} id='username'>
                            <Link className="Nav_link" to="/profile" style={{ display: "block"}}>
                                <NavDropdown.Item>Profil</NavDropdown.Item>
                            </Link>
                            
                            <Nav.Item>
                              <Link className="Nav_link" to="/admin/bloglist" style={{ display: "block"}}>
                                  <div>Articles</div>
                              </Link>
                            </Nav.Item>
                            
                            <Nav.Link className="Nav_link" style={{ display: "block"}}>
                                <NavDropdown.Item onClick={logoutHandler}>Déconnexion</NavDropdown.Item>
                            </Nav.Link>
                        </NavDropdown>
                )}
          
        </div>
    </div>
  )
}

export default Footer