import React, { useContext } from 'react'
import { ThemeContext } from '../App';
const logo = "/logoMain.png"
const date = new Date();
function Footer() {
    const {state} = useContext(ThemeContext);
    const theme = state.darkMode ? "dark" : "light"
  return (
    <footer className='container'>
        <section className='row'>
            <article className='col-12 col-lg-3 col-md-3 d-flex align-items-center justify-content-center logoBox'>
                <img className='img img-fluid footerLogo' src={logo} alt='logo' />
            </article>
            <article className='col-4 col-lg-3 col-md-3 mt-3'>
                <ul>
                    <p className={` ${theme}Text hammerFont`}>Projects</p>
                    <li className={`${theme}Text ralewayFont`}>Little Lemon</li>
                    <li className={`${theme}Text ralewayFont`}>Yelp Camps</li>
                </ul>
            </article>
            <article className='col-4 col-lg-3 col-md-3 mt-3'>
                <ul>
                    <p className={`${theme}Text hammerFont`}>Services</p>
                    <li className={`${theme}Text ralewayFont`}>SPA Development</li>
                    <li className={`${theme}Text ralewayFont`}>Web App Development</li>
                    <li className={`${theme}Text ralewayFont`}>UI/UX</li>
                </ul>
            </article>
            <article className='col-4 col-lg-3 col-md-3 mt-3'>
                <ul>
                    <p className={`${state.darkMode ? "darkText" : "lightText"} hammerFont`}>Hire</p>
                    <li className={`${state.darkMode ? "darkText" : "lightText"} ralewayFont ralewayFont`}>Upwork</li>
                    <li className={`${state.darkMode ? "darkText" : "lightText"} ralewayFont ralewayFont`}>Freelancer</li>
                    <li className={`${state.darkMode ? "darkText" : "lightText"} ralewayFont ralewayFont`}>Linkedin</li>
                </ul>
            </article>
            <hr className={`${state.darkMode ? "darkText" : "lightText"} ralewayFont`}></hr>
            <p className={`${state.darkMode ? "darkText" : "lightText"} ralewayFont text-center`}>All rights reserved - Hamad {date.getFullYear()} </p>
        </section>
    </footer>
  )
}

export default Footer
