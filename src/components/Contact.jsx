import {motion} from 'framer-motion' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j4lhh55', 'template_vxql309', form.current, 'chhqYTS42FJrwWdEq')
      .then(() => {
          alert('Email sent successfully!');
          window.location.reload(false)
      }, () => {
          alert('Failed to send email. Please try again.');
      });
  };

  return (
    <motion.div className='flex flex-col max-w-screen min-h-screen justify-center items-center md:items-start gap-16 p-8 md:pl-80 md:p-20'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
      >
        <>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold text-yellow-400'>Contact</h1>
        <div className='flex justify-start max-w-full'>
        <form ref={form} onSubmit={sendEmail}
        className='flex flex-col gap-5 max-w-full text-3xl'>
            <div className='grid md:grid-cols-2 gap-5'>
              <input type="text"
              name='name'
              placeholder='Name'
              required
              className='bg-[rgb(2,44,67,.9)] border-2 rounded-md h-20 p-4 shadow-inner shadow-black'
              />
              <input type="email"
              name='email'
              placeholder='Email'
              required
              className='bg-[rgb(2,44,67,.9)] border-2 rounded-md h-20 p-4 shadow-inner shadow-black'
              />
            </div>
            <div>
              <input type="text"
              name='subject'
              placeholder='Subject' 
              className='bg-[rgb(2,44,67,.9)] border-2 rounded-md h-20 p-4 shadow-inner shadow-black w-full'
              />
            </div>
            <div>
              <textarea name="message" 
              cols="30" rows="10" 
              placeholder='Type your message'
              required
              className='bg-[rgb(2,44,67,.9)] border-2 rounded-md p-4 shadow-inner shadow-black w-full'>
              </textarea></div> 
              <button className='text-3xl font-semibold bg-white text-yellow-600  border-2 h-20 w-full rounded-md hover:text-white hover:bg-[#022c43] hover:border-yellow-400 hover:shadow-black transition duration-300 ease-in shadow-inner shadow-[#022c43]'
              value='Send'>
                Send  <FontAwesomeIcon icon={faPaperPlane} />
              </button>
          </form>
        </div>
        </>
    </motion.div>
  )
}
