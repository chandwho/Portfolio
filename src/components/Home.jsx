import React from 'react'
import img from '../assets/images/myimg.jpg'
import BounceLoader from "react-spinners/BounceLoader";
import {motion} from 'framer-motion' 

export default function Home(props) {
  return (
    <motion.div className='flex flex-col w-full items-center justify-evenly p-5 md:pl-80 p-20 min-h-screen'
    initial={{width:0}}
    animate={{width:'100%'}}
    exit={{x:window.innerWidth, transition:{duration:0.5} }}
    >
      {props.loading? 
        <BounceLoader className='absolute m-auto top-1/2'
          color={props.color}
          loading={props.loading}
          size={props.size}
        />:
      <>
        <div className='flex flex-col items-center flex-between gap-10 md:flex-row gap-14'>
            <div className='flex flex-col items-start justify-center font-semibold text-3xl p-16 w-full md:w-4/6 md:text-6xl md:p-0 gap-6'>
              <h1>Hi!</h1> 
              <h1>Chandan here.</h1>
              <h1>I am a front-end developer.</h1>
            </div>
            <div className='flex justify-center w-2/6'>
              <img src={img} alt='My Image'className='border rounded-xl brightness-50 sepia hover:brightness-100 hover:sepia-0 transition duration-300 ease-in md:w-3/4 '/>
            </div>   
        </div>
        <div className='w-full flex justify-center md:justify-start'>
          <button className='text-3xl font-semibold  border-2 h-20 w-60 rounded-xl hover:text-yellow-600 hover:bg-white hover:shadow-yellow-600 transition duration-300 ease-in shadow-inner shadow-[#022c43]'>Contact Me</button>
        </div>
      </>
}
    </motion.div>
  )
}
