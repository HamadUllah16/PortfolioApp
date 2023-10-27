import React from 'react'
const logo = "/logoMain.png"
const date = new Date();
function Footer() {
  return (
    <footer className='container'>
        <section className='row'>
            <article className='col-12 col-lg-3 col-md-3 d-flex align-items-center justify-content-center logoBox'>
                <img className='img img-fluid footerLogo' src={logo} alt='logo' />
            </article>
            <article className='col-4 col-lg-3 col-md-3 mt-3'>
                <ul>
                    <p className='hammerFont'>Projects</p>
                    <li className='ralewayFont'>Little Lemon</li>
                    <li className='ralewayFont'>Yelp Camps</li>
                </ul>
            </article>
            <article className='col-4 col-lg-3 col-md-3 mt-3'>
                <ul>
                    <p className='hammerFont'>Services</p>
                    <li className='ralewayFont'>SPA Development</li>
                    <li className='ralewayFont'>Web App Development</li>
                    <li className='ralewayFont'>UI/UX</li>
                </ul>
            </article>
            <article className='col-4 col-lg-3 col-md-3 mt-3'>
                <ul>
                    <p className='hammerFont'>Hire</p>
                    <li className='ralewayFont'>Upwork</li>
                    <li className='ralewayFont'>Freelancer</li>
                    <li className='ralewayFont'>Linkedin</li>
                </ul>
            </article>
            <hr></hr>
            <p className='ralewayFont text-center'>All rights reserved - Hamad {date.getFullYear()} </p>
        </section>
    </footer>
  )
}

export default Footer
