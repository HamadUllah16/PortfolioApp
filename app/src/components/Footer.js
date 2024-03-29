import React, { useContext } from 'react'
import { ThemeContext } from '../App';
const logo = "/logoMain.png"
const logoDark = "/logoMainDark.png"
const date = new Date();
function Footer() {
    const { state } = useContext(ThemeContext);
    const theme = state.darkMode ? "lightText" : "darkText"
    const boxColor = state.darkMode ? "bgDarkBox" : "bg-light border";
    return (
        <section className='container mt-3'>
            <section className={`row m-0 rounded-4 ${boxColor}`}>
                <article className='col-12 col-lg-3 col-md-3 d-flex align-items-center justify-content-center logoBox'>
                    <img className='img img-fluid footerLogo' src={state.darkMode ? logoDark : logo} alt='logo' />
                </article>
                <article className='col-4 col-lg-3 col-md-3 mt-3'>
                    <ul>
                        <p className={` ${theme} hammerFont`}>Projects</p>
                        <li className={`${theme} ralewayFont`}>Little Lemon</li>
                        <li className={`${theme} ralewayFont`}>Yelp Camps</li>
                    </ul>
                </article>
                <article className='col-4 col-lg-3 col-md-3 mt-3'>
                    <ul>
                        <p className={`${theme} hammerFont`}>Services</p>
                        <li className={`${theme} ralewayFont`}>SPA Development</li>
                        <li className={`${theme} ralewayFont`}>Web App Development</li>
                        <li className={`${theme} ralewayFont`}>UI/UX</li>
                    </ul>
                </article>
                <article className='col-4 col-lg-3 col-md-3 mt-3'>
                    <ul>
                        <p className={`${theme} hammerFont`}>Hire</p>
                        <li className={`${theme} ralewayFont ralewayFont`}>Upwork</li>
                        <li className={`${theme} ralewayFont ralewayFont`}>Freelancer</li>
                        <li className={`${theme} ralewayFont ralewayFont`}>Linkedin</li>
                    </ul>
                </article>
            </section>
            <hr className={`${theme} ralewayFont`}></hr>
            <p className={`${theme} ralewayFont text-center m-0`}>All rights reserved - Hamad {date.getFullYear()} </p>
        </section>
    )
}

export default Footer
