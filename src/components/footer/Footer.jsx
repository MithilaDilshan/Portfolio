import React from 'react'
import './Footer.css'
import {MdOutlineFacebook} from 'react-icons/md'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

function Footer() {
  return (
  
      <footer>
<ul>
  <li><a href="">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#experiance">Experience</a></li>
  <li><a href="#services">Services</a></li>
  <li><a href="#portfolio">Portfolio</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
<div className="footer__socials">
  <a href="https://web.facebook.com/mithila.dilshan.355"><MdOutlineFacebook/></a>
  <a href="https://github.com/MithilaDilshan"><FaGithub/></a>
  <a href="https://www.linkedin.com/in/mithila-dilshan/"><BsLinkedin/></a>
</div>
<div className="footer__copyright">
  <small>&copy; All rights Reserved</small>
</div>
      </footer>


    
  )
}

export default Footer