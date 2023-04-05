import React from 'react'
import img from '../assets/images/myimg.jpg'
// import BounceLoader from "react-spinners/BounceLoader";
import {motion} from 'framer-motion' 
import { NavLink } from 'react-router-dom'

export default function Home(props) {
  return (
    <motion.div className='flex flex-col w-full items-center justify-start mt-36 p-5 md:pl-80 md:justify-evenly md:mt-0 p-20 min-h-screen'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      {/* {props.loading? 
        <BounceLoader className='absolute m-auto'
          color={props.color}
          loading={props.loading}
          size={props.size}
        />: */}
      <>
        <div className='relative flex flex-col items-center justify-center gap-10 md:flex-row gap-14'>
            <div className='flex flex-col items-center justify-center font-semibold text-3xl p-14 w-full md:w-4/6 md:text-6xl md:p-0 md:items-start gap-6'>
              <h1>Hi!</h1> 
              <h1>Chandan here.</h1>
              <h1>I am a front-end developer.</h1>
            </div>
            <div className='flex justify-center w-3/6 md:w-2/6'>
              <img src={img} alt='My Image'className='border rounded-xl brightness-50 sepia hover:brightness-100 hover:sepia-0 transition duration-300 ease-in md:w-3/4 '/>
            </div> 
            <div className='md:absolute flex  md:bottom-0 md: left-[-17%] md:pl-80 md:translate-x-0 justify-start  '>
              <NavLink to='/Portfolio/contact'>
              <button className='text-3xl font-semibold bg-white text-yellow-600  border-2 h-20 w-60 rounded-xl hover:text-white hover:bg-[#022c43] hover:shadow-black transition duration-300 ease-in shadow-inner shadow-[#022c43]'>Contact Me</button>
              </NavLink>
            </div>
        </div>
        
        
      </>
    </motion.div>
  ) 
}
