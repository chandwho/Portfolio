import React from 'react'
import '../App.css'
import {motion} from 'framer-motion' 

export default function ProjectItem(props) {
  return (
  <motion.div className='relative flex justify-center shadow-lg shadow-black  rounded group hover:bg-gradient-to-r from-white  to-[#022c43] z-0 h-[180px] md:h-[230px] max-w-[400px]'
  initial={{opacity:0}}
  animate={{opacity:1}}
  exit={{opacity:0}}
  >
    <div className='hidden group-hover:flex flex-col justify-center items-center gap-8 absolute top-1/2 font-bold text-2xl translate-y-[-50%] md:text-4xl  z-10 '>
      <h1>{props.title}</h1>
      <h1 className='text-3xl font-normal'>(Made with {props.tech})</h1>
      <a href={props.url}>
        <p className='text-xl md:text-3xl font-semibold bg-white text-[#022c43] text-center p-4 rounded-xl cursor-pointer shadow-inner hover:shadow-black z-20'>Take a look</p>
      </a>
    </div>
        <img src={props.img} alt='Weather App' className='rounded group-hover:opacity-10 z-0 w-max'/>
    </motion.div>
  )
}
