import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from './Projects'
import About from './About'
import TechStack from './TechStack'
import Services from './Services'
import Home from './Home'

function MainContainer() {
  return (
    <section className='container'>
      <section className='mainContainer border border-top-0 rounded-bottom d-flex align-items-center'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/techstack' element={<TechStack />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </section>
    </section>
  )
}

export default MainContainer
