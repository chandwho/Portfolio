import React from  'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import {Routes, Route, useLocation} from 'react-router-dom'
import BounceLoader from "react-spinners/BounceLoader";

export default function App() {

  const [loading, setLoading] = React.useState(true);
  const [color, setColor] = React.useState("#ffffff");
  const [size, setSize] = React.useState(60);

  React.useEffect(()=>{

    setTimeout(() => {
      setLoading(false)
    },1500);
  }, [])

  return (

    <div className='min-h-screen text-4xl text-white relative'> 
      {loading? 
        <BounceLoader className='absolute m-auto top-1/2'
          color={color}
          loading={loading}
          size={size}
        />
        :
        <>
      <Sidebar/>  
      <Routes>
        <Route path='/'>
          <Route index element={<Home 
          loading={loading}
          color={color}
          size={size}
          />} />
          <Route path='/skills' element={<Skills
          loading={loading}
          color={color}
          size={size}
          />}/>
          <Route path='/projects' element={<Projects
          loading={loading}
          color={color}
          size={size}
          />}/>
        </Route>
      </Routes> 
      <Footer/>
      </>
        
}
    </div>
  )
}
