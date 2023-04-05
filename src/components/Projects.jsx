import React from 'react'
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
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
      >
      <>
      <h1 className='text-4xl md:text-6xl font-semibold  mb-16'>Projects</h1>
      <div className='grid auto-rows-fr gap-10 md:grid-cols-2 lg:grid-cols-3'>
        <ProjectItem
        img={weatherapp}
        title='Weather App'
        url='https://chandwho.github.io/Weather_App/'
        tech='JavaScript'
        />
        <ProjectItem
        img={codepen}
        title='Codepen'
        url='https://gleeful-maamoul-64f2c4.netlify.app'
        tech='ReactJS'
        />
        <ProjectItem
        img={tenzies}
        title='Tenzies'
        url='https://chandwho.github.io/Tenzies_game/'
        tech='ReactJS'
        />
        <ProjectItem
        img={etchsketch}
        title='Etch-a-Sketch'
        url='https://chandwho.github.io/Etch_a_Sketch/'
        tech='JavaScript'
        />
        <ProjectItem
        img={calc}
        title='Calculator'
        url='https://chandwho.github.io/Calculator/'
        tech='JavaScript'
        />
        <ProjectItem
        img={rps}
        title='Rock Paper Scissor'
        url='https://adorable-cactus-d851f8.netlify.app'
        tech='JavaScript'
        />
      </div>
      </>
    </motion.div>
  )
}
