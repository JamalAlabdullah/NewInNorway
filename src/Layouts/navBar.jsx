
import React from "react";
import "./navbar.css";

import { Link, NavLink} from "react-router-dom";

import logoImage from "../Assets/HomePageImages/logo.png";



import './navbar.css';


const NavBar = ({user}) => {
 
    return (
      <nav className="navbar navbar-expand-lg navbar-light">  
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" >
          <img id="logoImage"  src={logoImage} alt="New In Norway logo" />
          <p id="titletext">New In Norway</p>
          </Link>
          
          <div > 
            {/**
                   <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
             */}

             

    
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            
              <NavLink className="nav-link" to="/aboutUs">
              About Us
              </NavLink>
              <NavLink className="nav-link " to="/contactUs">
                Contact Us
              </NavLink>
              {!user &&(
              <React.Fragment>
              <NavLink className="nav-link " to="/loginForm">
                Log In
              </NavLink>

              <NavLink className="nav-link " to="/register">
                Sign Up
              </NavLink>

              </React.Fragment>)}


              {user &&(
              <React.Fragment>
              <NavLink className="nav-link " to="/profile">
               {user.name}
              </NavLink>

              <NavLink className="nav-link " to="/logout">
               Logout
              </NavLink>

              </React.Fragment>)}

            </div>
          </div>
        </div>
      </nav>
    );
  
}

export default NavBar;
