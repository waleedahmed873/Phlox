import React from 'react'
import './footer.css'
import { ImFoursquare } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { RiBehanceFill } from "react-icons/ri";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="main-footer">
            <div className="logo">
                <img src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/logo-header.svg" alt="" />
            </div>
            <div className="footer-text"><p>© 2024 Freelancer - Phlox Elementor WordPress Theme. All rights reserved.</p></div>
        
        <div className="social-icons">
            <div className="foursquare">
            <ImFoursquare />
            </div>
            <div className="linkdin">
            <FaLinkedinIn />
            </div>
            <div className="instagram">
            <LuInstagram />
            </div>
            <div className="behance">
            <RiBehanceFill />
            </div>
        </div>
        </div>
        </footer>  
    </>
  )
}

export default Footer