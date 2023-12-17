import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from './Projects'
import About from './About'
import TechStack from './TechStack'
import Services from './Services'
import Home from './Home'
import {motion } from 'framer-motion'

function MainContainer() {
  return (
    <motion.section layout className='container'>

        <motion.section layout className={`mainContainer border shadow border-top-0 rounded-bottom d-flex p-2 align-items-center `}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='/techstack' element={<TechStack />} />
            <Route path='/services' element={<Services />} />
          </Routes>
        </motion.section>
      </motion.section>
  )
}

export default MainContainer
