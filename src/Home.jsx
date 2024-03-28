import React from 'react'
import Navbar from './navbar/Navbar';
import './style.css'
import Footer from './footer/Footer';
import { IoCubeOutline } from "react-icons/io5";
import { LuLayers } from "react-icons/lu";
import { PiPenNibStraightThin } from "react-icons/pi";
import { BsFillHddStackFill } from "react-icons/bs";
import { TiArrowRightThick } from "react-icons/ti";
const Home = () => {
  return (
    <>
    <Navbar/>
      <div className="row main">
        
        <div className="col-lg-5">
          
            <div className="intro">
            <span></span>
            <p> Introducing</p>
            </div>
            <div className="about-name">
            <h1 className='text text-white'>Hello</h1>
            <h1 className="name text-white">I'm Jessy Walter
            </h1>
            </div>
            <p className='experience'>Since beginning my journey as a freelance designer <br /> nearby 7 years ago, I 've done remote work for <br /> agencies, consulted for startup, and collaborated with <br /> talented people to create digital products.</p>
            <div className="contact-button">
                    <button>Contact Me</button>
                </div>
        </div>
        
        
        <div className="col-lg-7">
        
          <div className="img">
            <img src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/hero-img.png" alt="" />
          </div>
        <div class="circle-with-hole"></div>
        
        <div className="id-icon">
          <p>ld</p>
        </div>
        
        <div className="ps-icon">
          <p>Ps</p>
        </div> 
        <div className="ai-icon">
          <p>Ai</p>
        </div>
        <div className="xd-icon">
          <p>Xd</p>
        </div>
        </div>
      </div>

      
      <div className="main-2">
        <div className="cards">
          <div className="left-cards">
            
            <div className="product-design">
              <div className="product-logo mx-auto">
              <IoCubeOutline />
              </div>
              <h3>Product Design</h3>
              <p>The technological revolution is changing aspect</p>
            </div>
          
            <div className="product-design">
              <div className="product-logo mx-auto">
              <LuLayers />
              </div>
              <h3>Ui Design</h3>
              <p>The technological revolution is changing aspect</p>
            </div>  
          </div>
          <div className="right-cards">
          
          <div className="icon-design">
              <div className="icon-logo mx-auto">
              <PiPenNibStraightThin />
              </div>
              <h3>Logo Design</h3>
              <p>The technological revolution is changing aspect</p>
            </div>
          
          <div className="icon-design">
              <div className="icon-logo mx-auto">
              <BsFillHddStackFill />
              </div>
              <h3>Icon Design</h3>
              <p>The technological revolution is changing aspect</p>
            </div>

            

          </div>
        
        
        
        </div>
      
        <div className="skills">
        
        <div className="my-skills">
            <span></span>
            <p> My Skills</p>
            </div>

            <h2>Why Hire Me For Next <br /> Project?</h2>
            <p>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
        <div className="download-button">
          <button>Download CV</button>
        </div>
        </div>
      </div>
    


    <div className="main-3">
      
      <div className="main-3-left">
      <div className="project-1">
            <span></span>
            <p>Project 1</p>
            </div>
            <h2>Branding Nice Studio</h2>
            <p>The technological revolution is changing aspect of our lives,<br /> and the fabric of society itself. it's also changing the way we <br /> learn and what we learn. Factual knowledge is less prized when <br /> everything you ever need to know can be found on your <br /> phone. There's no imperative to be an expert at doing <br /> everything when you can.</p>
            <div className="read-more">
              <div className="read-icon">
              <TiArrowRightThick />
              </div>
              <p>Read More</p>
            </div>
      </div>
      
      <div className="main-3-right">
        <div className="main-div">
        <div className="back-div"></div>
        <div className="front-div">
          <img src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-1-img.jpg" alt="" />
        </div>
        </div>
        
          
      </div>
    </div>


    <Footer/>
    </>
  )
}

export default Home