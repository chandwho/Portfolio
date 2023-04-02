import React from 'react'
import '../App.css'
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faLaptopFile } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Outlet } from 'react-router-dom'


export default function Sidebar() {
  return (
    <div className='top-0 h-28 md:fixed p-10 top-28 h-full'>
      <nav className='text-white text-5xl flex justify-center items-center md:flex-col justify-end gap-48'> 
        <NavLink to='/' className='shadow-xl'>
        <FontAwesomeIcon icon={faIgloo}/>
        </NavLink>
        <NavLink to='/skills'>
        <FontAwesomeIcon icon={faPenToSquare} />
        </NavLink>
        <NavLink to='/projects'>
        <FontAwesomeIcon icon={faLaptopFile}/>
        </NavLink>  
      </nav>
      <Outlet/> 
    </div>
  )
}
 {/* </div> */}
        {/* <div className='h-24 w-24 rounded-full shadow-xl flex justify-center items-center'> */}