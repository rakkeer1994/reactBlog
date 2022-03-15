import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Contact from './Contact'
import Footer from './Footer'
import PageNotFound from './PageNotFound'
import Home from './Home'
import About from './About'
import Hollywood from './Hollywood'
import Navbar from './Navbar'
import Sports from './Sports'
import HomePic from './HomePic'
import Technology from './Technology'
import './style.css'
const App = () => {
  return (
    <>
     <Router>
       <Navbar/>
        <Routes>
              <Route path='/' element =  {<Navigate to = '/home' />} />
              <Route path='/home' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/hollywood/:id' element={<Hollywood/>} />
              <Route path='/sports/:id' element={<Sports/>} />
              
              <Route path='/technology/:id' element={<Technology/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='*' element={ <PageNotFound />  } />
        </Routes>
        
     </Router>
               

    </>
  )
}

export default App