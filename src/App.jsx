import React from  'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import {Routes, Route, useLocation} from 'react-router-dom'
// import BounceLoader from "react-spinners/BounceLoader";
import Contact from './components/Contact'

export default function App() {

  // const [loading, setLoading] = React.useState(true);
  const [color, setColor] = React.useState("#ffffff");
  const [size, setSize] = React.useState(60);

  // React.useEffect(()=>{

  //   setTimeout(() => {
  //     setLoading(false)
  //   },1500);
  // }, [])

   return (

     <div className='relative h-full text-4xl text-white'> 
       {/* {loading? 
      <div className='absolute w-10 h-10 left-[50%] bottom-[] '>
        <BounceLoader 
          color={color}
          // loading={loading}
          size={size}
        />
      </div>
        
        : */}
        <>
      <Sidebar/>  
      <Routes>
        <Route path='/'>
          <Route index element={<Home 
          // loading={loading}
          color={color}
          size={size}
          />} />
          <Route path='/Portfolio/skills' element={<Skills
          // loading={loading}
          color={color}   
          size={size}
          />}/>
          <Route path='/Portfolio/projects' element={<Projects
          // loading={loading}
          color={color}
          size={size}
          />}/>
          <Route path='/Portfolio/contact' element={<Contact 
          // loading={loading}
          color={color}
          size={size}
          />}/>
        </Route>
      </Routes> 
      <Footer/>
      </>
    </div>
  )
}
