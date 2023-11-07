import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

function Home() {
  const {darkMode} = useContext(ThemeContext)
  return (
    <div style={{width: "100%"}}>
        <h3 className='text-center navText'>Welcome
        {darkMode ? " Dark Mode" : " Light Mode"}
        </h3>
    </div>
  )
}

export default Home
