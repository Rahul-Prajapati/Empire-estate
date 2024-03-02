import React from 'react'
import Header from '../src/components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Signup from './pages/Signup'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/about' element={<About />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  </BrowserRouter>
    
  )
}

export default App