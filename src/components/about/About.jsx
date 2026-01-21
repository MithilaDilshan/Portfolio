import React from 'react'
import './About.css'
import {MdCastForEducation} from 'react-icons/md'



function about() {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__content">
            <div className="about__cards">
                <article className='about__card'>
                    <MdCastForEducation className='about__icon'/>
                    <h5>Education</h5>
                    <small>Sri Lanka Institute of Information Technology <br /></small>
                     <small>2020 - 2024 <br /> Graduated </small>
                </article>
                <article className='about__card'>
                    <MdCastForEducation className='about__icon'/>
                    <h5>Education</h5>
                    <small>Dambulla Central Collage - Advanced Level <br /> ICT - S <br /> Engineering Technology - S  <br /> Science For Technology - S</small>
                </article>
                <article className='about__card'>
                    <MdCastForEducation className='about__icon'/>
                    <h5>Education</h5>
                    <small>Dambulla Central Collage - Ordinary Level <br />3A Pass <br />2B pass <br />3C pass <br />1S pass</small>
                </article>
               

            </div>
<p>
  Quality Assurance Engineer with hands-on experience in manual and automation testing for production-level Network Management System (NMS) products. 
  Strong knowledge of test planning, regression testing, defect tracking, API testing, and Agile methodologies. Experienced in collaborating with cross-functional teams 
  Teams to ensure high-quality software delivery.
</p>
<a href="#contact" className='btn btn-primary'>Let's Talk</a>
</div>
        </div>
    </section>
  )
}

export default about
