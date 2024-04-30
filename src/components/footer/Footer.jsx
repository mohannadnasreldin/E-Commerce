/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {FaTwitter} from 'react-icons/fa'
import {BsFacebook, BsInstagram} from 'react-icons/bs'

import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="left section">
       
      </div>
      <div className="main section">

      <h1 className="mian-logo">BLACK <span>SHOPPING</span></h1>

        <FaTwitter className='social-icon'/>
        <BsFacebook className='social-icon'/>
        <BsInstagram className='social-icon'/>

        <p>ENJOY SHOPPING</p>
        
        <a href="mailto:Blackshopping@email.com" className='butn'>E-MAIL US</a>
        <p>&copy; 2023 </p>
      </div>
      <div className="right section">
       
      </div>
    </footer>
  )
}

export default Footer
