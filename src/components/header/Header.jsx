import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/MYPro.jpg'
import Headersocial from './Headersocial'

function Header() {
  return (
    <div className="container header__container">
        <h5>Hello I'M</h5>
        <h1>Mithila Dilshan</h1>
         <h5 className="text-light">Quality Assurance Engineer</h5>
         <CTA/>
         <Headersocial/>
            <div className="me">
                <img src={ME} alt="me" />
            </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>

    </div>


  )
}

export default Header
