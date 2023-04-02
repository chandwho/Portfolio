import React from 'react'
import BounceLoader from "react-spinners/BounceLoader";
import {motion} from 'framer-motion' 
import ProjectItem from './ProjectItem';
import weatherapp from '../assets/images/weather_app.png'
import codepen from '../assets/images/codepen.png'
import tenzies from '../assets/images/tenzies.png'
import etchsketch from '../assets/images/etchsketch.png'
import calc from '../assets/images/calc.png'
import rps from '../assets/images/rps.png' 


export default function Projects(props) {
  return (

    <motion.div className='md:pl-80 p-20'
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
      <h1 className='text-3xl md:text-6xl font-semibold text-center mb-16'>Projects</h1>
      <div className='grid grid-col-1 auto-rows-fr gap-10 md:grid-cols-3'>
        <ProjectItem
        img={weatherapp}
        title='Weather App'
        url='https://chandwho.github.io/Weather_App/'
        />
        <ProjectItem
        img={codepen}
        title='Codepen'
        url='https://gleeful-maamoul-64f2c4.netlify.app'
        />
        <ProjectItem
        img={tenzies}
        title='Tenzies'
        url='https://chandwho.github.io/Tenzies_game/'
        />
        <ProjectItem
        img={etchsketch}
        title='Etch-a-Sketch'
        url='https://chandwho.github.io/Etch_a_Sketch/'
        />
        <ProjectItem
        img={calc}
        title='Calculator'
        url='https://chandwho.github.io/Calculator/'
        />
        <ProjectItem
        img={rps}
        title='Rock Paper Scissor'
        url='https://adorable-cactus-d851f8.netlify.app'
        />
      </div>
      </>
}
    </motion.div>
  )
}
