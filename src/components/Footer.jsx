import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { NavLink } from 'react-router-dom'


export default function Footer() {
  return (
    <div className='fixed w-full top-[95%] md:top-[92%]'>
      <nav className=' h-full text-white text-4xl flex justify-center gap-32 items-center'>
        <a href="https://github.com/chandwho">
          <FontAwesomeIcon icon={faGithub} className='hover:text-[#022c43]'/>
        </a>
        <a href="https://www.linkedin.com/in/chandan-pandey06">
          <FontAwesomeIcon icon={faLinkedin} className='hover:text-[#022c43]'/>
        </a>   
        <NavLink to='/Portfolio/contact'>
          <FontAwesomeIcon icon={faEnvelope} className='hover:text-[#022c43]'/>
        </NavLink>
        </nav>
    </div>
  )
}
