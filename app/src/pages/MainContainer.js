import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from './Projects'
import About from './About'
import TechStack from './TechStack'
import Home from './Home'
import Experience from '../components/Experience'
import { ThemeContext } from '../App'

function MainContainer() {
  const { darkMode } = useContext(ThemeContext);

  const theme = darkMode ? "bgDarkBox" : "bg-light border-right border-left border-bottom"

  return (
    <section className='container-md'>
      <section className={`${theme} rounded-bottom-4`}>
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
