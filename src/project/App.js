import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Contact from './components/Contact'
import Footer from './Footer'
import PageNotFound from './components/PageNotFound'
import Home from './components/Home'
import About from './components/About'
import Hollywood from './components/Hollywood'
import Navbar from './components/Navbar'
import Sports from './components/Sports'
import HomePic from './components/HomePic'
import Technology from './components/Technology'
import './style.css'
import Context from './Context'
const App = () => {
  return (
    <>
     <Router>
       <Context>
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
        </Context>
     </Router>
               

    </>
  )
}

export default App