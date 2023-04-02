import React from 'react'
import '../App.css'
import {motion} from 'framer-motion' 

export default function ProjectItem(props) {
  return (
  <motion.div className='relative flex justify-center shadow-lg shadow-black  rounded-2xl group hover:bg-gradient-to-r from-white  to-[#022c43] z-0'
    initial={{width:0}}
    animate={{width:'100%'}}
    exit={{x:window.innerWidth, transition:{duration:0.5} }}
  >
    <div className='hidden group-hover:flex flex-col justify-center items-center gap-8 absolute top-1/2 font-bold text-xl translate-y-[-50%] md:text-4xl  z-10'>
      {props.title}
      <a href={props.url}>
        <p className='text-xl md:text-3xl font-semibold bg-white text-[#022c43] text-center p-4 rounded-xl cursor-pointer shadow-inner hover:shadow-black z-20'>Take a look</p>
      </a>
    </div>
        <img src={props.img} alt='Weather App' className='rounded-2xl group-hover:opacity-10 z-0'/>
    </motion.div>
  )
}
