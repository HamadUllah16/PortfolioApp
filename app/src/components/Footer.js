import React, { useContext } from 'react'
import { ThemeContext } from '../App';
const logo = "/logoMain.png"
const date = new Date();
function Footer() {
    const {state} = useContext(ThemeContext);
  return (
    <footer className='container'>
        <section className='row'>
            <article className='col-12 col-lg-3 col-md-3 d-flex align-items-center justify-content-center logoBox'>
                <img className='img img-fluid footerLogo' src={logo} alt='logo' />
            </article>
            <article className='col-4 col-lg-3 col-md-3 mt-3'>
                <ul>
                    <p style={{color: state.textColor, transition: "0.3s"}} className='hammerFont'>Projects</p>
                    <li style={{color: state.textColor, transition: "0.3s"}} className='ralewayFont'>Little Lemon</li>
                    <li style={{color: state.textColor, transition: "0.3s"}} className='ralewayFont'>Yelp Camps</li>
                </ul>
            </article>
            <article className='col-4 col-lg-3 col-md-3 mt-3'>
                <ul>
                    <p style={{color: state.textColor, transition: "0.3s"}} className='hammerFont'>Services</p>
                    <li style={{color: state.textColor, transition: "0.3s"}} className='ralewayFont'>SPA Development</li>
                    <li style={{color: state.textColor, transition: "0.3s"}} className='ralewayFont'>Web App Development</li>
                    <li style={{color: state.textColor, transition: "0.3s"}} className='ralewayFont'>UI/UX</li>
                </ul>
            </article>
            <article className='col-4 col-lg-3 col-md-3 mt-3'>
                <ul>
                    <p style={{color: state.textColor, transition: "0.3s"}} className='hammerFont'>Hire</p>
                    <li style={{color: state.textColor, transition: "0.3s"}} className='ralewayFont'>Upwork</li>
                    <li style={{color: state.textColor, transition: "0.3s"}} className='ralewayFont'>Freelancer</li>
                    <li style={{color: state.textColor, transition: "0.3s"}} className='ralewayFont'>Linkedin</li>
                </ul>
            </article>
            <hr style={{color: state.textColor, transition: "0.3s"}}></hr>
            <p style={{color: state.textColor, transition: "0.3s"}} className='ralewayFont text-center'>All rights reserved - Hamad {date.getFullYear()} </p>
        </section>
    </footer>
  )
}

export default Footer
