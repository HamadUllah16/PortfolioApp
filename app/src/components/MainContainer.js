import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from './Projects'
import About from './About'
import TechStack from './TechStack'
import Home from './Home'
import Experience from './Experience'

function MainContainer() {
  return (
    <section className='container'>
      <section className={`shadow border-top-0 rounded-bottom `}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/techstack' element={<TechStack />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
      </section>
    </section>
  )
}

export default MainContainer
