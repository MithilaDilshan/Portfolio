import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experiance'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
      
        <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div><h4>HTML</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div><h4>React</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div><h4>Tailwind</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                 <div> <h4>CSS</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div><h4>Bootstrap</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
             
            </div>

        </div>

        
        <div className="experience__backend">
        <h3>Quality Assurance</h3>
            <div className="experience__content">
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div><h4>Software Testing</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div><h4>Cypress</h4>
                  <small className='text-light'>Intermediate</small></div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div><h4>API Testing</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div><h4>MySQL</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div><h4>JAVA</h4>
                  <small className='text-light'>Intermediate</small></div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div><h4>Intern QA Engineer at Omobio PVT Ltd</h4>
                  <small className='text-light'>8 Months Experienced</small></div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div><h4>QA Engineer at Synergy Information Systems</h4>
                  <small className='text-light'>Currently Working</small></div>
              </article>
            
            </div>

        </div>
        
      </div>




    </section>
  )
}

export default Experience
