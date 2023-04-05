import React from 'react'
import '../App.css'
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import js from '../assets/images/js.png'
import bootstrap from '../assets/images/bootstrap.png'
import tailwind from '../assets/images/tailwind.svg'
import react from '../assets/images/react.svg'
import git from '../assets/images/git.svg'
// import BounceLoader from "react-spinners/BounceLoader";
import {motion} from 'framer-motion' 

export default function Skills(props) {
  return (
    <motion.div className='flex flex-col p-20 w-full min-h-screen justify-center items-start gap-16 md:pl-80'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >

{/* x:window.innerWidth, transition:{duration:0.5} */}
      {/* {props.loading? 
        <BounceLoader className='absolute m-auto top-1/2'
          color={props.color}
          loading={props.loading}
          size={props.size}
        />
        : */}
      <>
        <h1 className='text-4xl md:text-6xl font-semibold'>Skills</h1>
        <div className='top skill-container grid grid-cols-2 auto-rows-fr gap-16  md:grid-cols-3 lg:grid-cols-4'>
          <div>
          <img src={html} alt="HTML" />
          </div>
          <div>
          <img src={css} alt="CSS" />
          </div>
          <div>
          <img src={bootstrap} alt="Bootstrap" />
          </div>
          <div>
          <img src={tailwind} alt="Tailwind" />
          </div>
          <div>
          <img src={js} alt="JavaScript" />
          </div>
          <div>
          <img src={react} alt="ReactJS" />
          </div>
          <div>
          <img src={git} alt="Git" />
          </div>
        </div>  
      </>
    </motion.div>
  )
}
