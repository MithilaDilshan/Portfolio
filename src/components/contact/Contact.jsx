import React from 'react'
import './Contact.css'
import {MdOutlineMailOutline} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import {BiMessageSquareDots} from 'react-icons/bi';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact=()=> {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wevqtww', 'template_580trfl', form.current, '6hr1Rj1CqT2eKHhPD')
   e.target.reset()
    
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <MdOutlineMailOutline className='content__image'/>
              <h4>Email</h4>
              <h5>mithiladilshan2000@gmail.com</h5>
              <a href="mailto:mithiladilshan2000@gmail.com" target="_blank">Send a Message</a>
            </article>
            <article className="contact__option">
              <BiMessageSquareDots className='content__image'/>
              <h4>Messege /Call</h4>
              <h5>071-1888933</h5>
             
            </article>
            <article className="contact__option">
              <BsWhatsapp className='content__image'/>
              <h4>Whatsapp</h4>
              <h5>071-1888933</h5>
              <a href="https://api.whatsapp.com/send?phone=0711888933" target="_blank">Send a Message</a>
            </article>
       
        </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea  name='message' rows="7" placeholder='Your Message' required/>
            <button type='submit' className='btn btn-primary' >Send a Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact