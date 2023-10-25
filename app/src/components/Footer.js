import React from 'react'
const logo = "/logoMain.png"
function Footer() {
  return (
    <footer className='container'>
        <section className='row'>
            <article className='col-12 col-lg-3 col-md-3 d-flex align-items-center justify-content-center'>
                <img className='img img-fluid footerLogo' src={logo} alt='logo' />
            </article>
            <article className='col-4 col-lg-3 col-md-3 mt-5'>
                <ul>
                    <p className='navText'>Projects</p>
                    <li>Little Lemon</li>
                    <li>Yelp Camps</li>
                </ul>
            </article>
            <article className='col-4 col-lg-3 col-md-3 mt-5'>
                <ul>
                    <p className='navText'>Services</p>
                    <li>SPA Development</li>
                    <li>Web App Development</li>
                    <li>UI/UX</li>
                </ul>
            </article>
            <article className='col-4 col-lg-3 col-md-3 mt-5'>
                <ul>
                    <p className='navText'>Hire</p>
                    <li>Upwork</li>
                    <li>Freelancer</li>
                </ul>
            </article>
        </section>
    </footer>
  )
}

export default Footer
