import React from 'react'
import Navbar from './navbar/Navbar';
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import Footer from './footer/Footer';
const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="row contact">
      <div className="col-lg-6 contact-left">
        
      <div className="contact-me">
            <span></span>
            <p>Contact Me</p>
            </div>
            <div className="contact-heading">
            <h1>Get In Touch With Me</h1>
            </div>
            <div className="contact-para">
              <p>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert Factual knowledge is less prized when everything you ever need to know can be found at doing everything.</p>
            </div>
            
            <div className="ph-email">
            <div className="phone">
              <div className="p-icon">
              <MdOutlinePhoneInTalk />
              </div>
              <div className="numbers">
              <p className='ph'>Phone</p>
              <p className='p-numb'>+99 (0) 101 0000 888 <br /> +99 (0) 101 0000 777</p>
              </div>
            </div>
      
            <div className="email">
              <div className="email-icon">
              <HiOutlineMail />
              </div>
              <div className="emails">
              <p className='text'>Email</p>
              <p className='both-emails'>Info@yourdomain.com <br /> Info@yourdomain.net</p>
              </div>
            </div>
            </div>
      
      
      </div>

      <div className="col-lg-6 contact-right">
        <form action="">
          <div className="row pb-4">
            <div className="col-lg-6">
              <input className='input' type="text" placeholder='Full Name' />
            </div>
            <div className="col-lg-6">
              <input className='input' type="text" placeholder='Email' />
            </div>
          </div>
          <div className="text-area pt-1 text-white">
            <textarea  placeholder='Message*' name="" id="" cols="72" rows="8"></textarea>
            </div> 
          
              <button className='send-button'>Send To Me</button>
            
        </form>
      </div>
    
    
    
    </div>
    <Footer/>
    </>
  )
}

export default Contact