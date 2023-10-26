import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from './Projects'
import About from './About'
import TechStack from './TechStack'
import Services from './Services'

function MainContainer() {
  return (
    <section className='container'>
        <section className='mainContainer border border-top-0 pt-3 rounded-bottom'>
            <Routes>
                <Route path='/projects' element={<Projects />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/techstack' element={<TechStack />}/>
                <Route path='/services' element={<Services />}/>
            </Routes>
        </section>
    </section>
  )
}

export default MainContainer
