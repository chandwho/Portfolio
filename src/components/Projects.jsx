import React from 'react'
import {motion} from 'framer-motion' 
import ProjectItem from './ProjectItem';
import weatherapp from '../assets/images/weather_app.png'
import codepen from '../assets/images/codepen.png'
import tenzies from '../assets/images/tenzies.png'
import etchsketch from '../assets/images/etchsketch.png'
import calc from '../assets/images/calc.png'
import netflix from '../assets/images/netflix.png' 


export default function Projects(props) {
  return (

    <motion.div className='md:pl-80 p-20 md:p-20 md:h-[600px] flex flex-col items-center md:items-start'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
      >
      <>
      <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold  mb-10 text-yellow-400'>Projects</h1>
      <div className='grid auto-rows-fr gap-10 md:grid-cols-2 lg:grid-cols-3 justify-center'>
        <ProjectItem
        img={netflix}
        title='Netflix'
        url='https://chandwho.github.io/Netflix_Clone/'
        tech='ReactJs'
        />
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
      </div>
      </>
    </motion.div>
  )
}
