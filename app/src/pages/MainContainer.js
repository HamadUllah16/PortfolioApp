import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from './Projects'
import About from './About'
import TechStack from './TechStack'
import Home from './Home'
import Experience from '../components/Experience'
import { ThemeContext } from '../App'
function MainContainer() {
  const { state } = useContext(ThemeContext);

  return (
    <section className='container-md p-0'>
      <section className={` ${state.bgColor} ${state.border} rounded-4 `}>
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
