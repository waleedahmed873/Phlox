import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import { FaDribbble } from "react-icons/fa6";
const Navbar = () => {
    
  return (
    <>
    <nav className="navbar navbar-expand-lg main-nav">
        <div className="left">
            
            
            <div className="logo">
                <img src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/logo-header.svg" alt="" />
            </div>
            
            
            <div className="info">
                <ul>
                   

                    <NavLink to="/">Home </NavLink>
            <NavLink to="/portfolio">Portfolio </NavLink>
            <NavLink  to="/contact">Contact </NavLink>

                </ul>
            </div>
        
        
        </div>
        
        
        <div className="right">
            <div className=" d-flex content">
                <div className="dribble">
                <FaDribbble />
                </div>
                <NavLink  to="/contact">
                <div className="butn">
                     
                    <button>Contact Me</button>
                </div>
                </NavLink>
            </div>
        </div>
    </nav>

    </>
  )
}

export default Navbar