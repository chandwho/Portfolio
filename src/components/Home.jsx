import React from 'react'
import img from '../assets/images/myimg.jpg'
// import BounceLoader from "react-spinners/BounceLoader";
import {motion} from 'framer-motion' 
import { NavLink } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'

export default function Home(props) {
  return (
    <motion.div className='flex flex-col gap-8 w-full items-center justify-center  p-5 md:pl-80 md:justify-evenly md:mt-0 p-20 min-h-screen md:gap-0'
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
        <div className='relative flex flex-col gap-14 md:flex-row mb-10'>
            <div className='flex flex-col justify-end items-center font-bold text-[21px] w-full md:w-4/6 md:text-4xl lg:text-6xl md:p-0 md:items-start gap-6'>
              <h1>Hi!</h1> 
              <h1>Chandan here.</h1>
              <TypeAnimation
                sequence={[
                  'I am a web developer', // Types 'One'
                  2000, // Waits 1s
                  'I am a front-end web developer.', // Deletes 'One' and types 'Two'
                  4000
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className='text-yellow-400'
              />

              <div className=' hidden md:block mt-10'>
              <NavLink to='/Portfolio/contact'>
              <button className='text-3xl font-semibold bg-white text-yellow-600 border-2 hover:border-yellow-400 h-20 w-60 rounded-md hover:text-white hover:bg-[#022c43] hover:shadow-black transition duration-300 ease-in shadow-inner shadow-[#022c43]'>Contact Me</button>
              </NavLink>
        </div>
            </div>
            <div className='flex justify-center w-4/6 sm:w-3/6 md:w-2/6 m-auto'>
              <img src={img} alt='My Image'className='border rounded-md brightness-50 sepia hover:brightness-100 hover:sepia-0 transition duration-300 ease-in w-3/4 '/>
            </div>
        </div>
        <div className='flex md:hidden md:pl-80 md:translate-x-[-50%]  '>
              <NavLink to='/Portfolio/contact'>
              <button className='text-3xl font-semibold bg-white text-yellow-600 hover:border-yellow-400   border-2 h-20 w-80 rounded-md hover:text-white hover:bg-[#022c43] hover:shadow-black transition duration-300 ease-in shadow-inner shadow-[#022c43]'>Contact Me</button>
              </NavLink>
        </div>
    </motion.div>
  ) 
}
