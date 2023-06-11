import React from 'react';
import { Route, Routes, NavLink, useNavigate, Navigate } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './header.css';
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import Contactus from '../Contactus';
import Userdashboard from '../Userdashboard';
import Orientation from '../Orientation';
import Monitoring from '../monitoring/Monitoring';
import Certification from './Certification';
import Donate from '../monitoring/Donate'
import Admin from '../Admin';
import Admindashboard from '../Admindashboard'
import { useSelector, useDispatch } from 'react-redux';
import { clearLoginStatus } from '../../slices/userSlice';

function Header() {
  const { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogout = () => {
    localStorage.clear();
    dispatch(clearLoginStatus());
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MARPU</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {isSuccess !== true ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="login">Login</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="register">SignUp</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="contactus">ContactUs</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="admin">Admin</NavLink>
                  </li>
                </>
              ) : (
                <>
                  <NavDropdown title={userObj.username} id="collasible-nav-dropdown" id="drop-down">
                    <NavDropdown.Item>Change password</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={userLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="userdashboard">InterDashBoard</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="orientation">Orientation</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="monitoring">Monitoring</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="certification">Certificate</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="update">Update</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='contactus' element={<Contactus />} />
        <Route path="admin" element={<Admin/>}/>
        <Route path="userdashboard" element={<Userdashboard/>}/>
        <Route path="orientation" element={<Orientation/>}/>
        <Route path="monitoring" element={<Monitoring/>}/>
        <Route path="certification" element={<Certification/>} username={userObj.username}/> 
        <Route path="update" element={<Donate/>}/> 
        <Route path="admin/dashboard" element={<Admindashboard />} />
      </Routes>
    </div>
  );
}

export default Header;
