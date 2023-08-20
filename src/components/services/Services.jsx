import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
function services() {
  return (
   <section id='services'>
<h5>What i do</h5>
<h2>Services</h2>

<div className="container services__container">
  <article className="service">
    <div className="service">
      <div className="service__head">
        <h3>CRAZY Software Quality Assurance Engineer </h3></div>
        <ul className="service__list">
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Software Manual Testing</p>
              </li>
              <li>
            <BiCheck className='service__list-icon'/>
            <p>Develop highly interactive Front end / User Interfaces for your web and mobile applications</p>
              </li>
              <li>
            <BiCheck className='service__list-icon'/>
            <p>Software Automation Testing</p>
              </li>
              <li>
            <BiCheck className='service__list-icon'/>
            <p>API Testing</p>
              </li>
        </ul>
    
    </div>
  </article>
</div>


   </section>
  )
}

export default services