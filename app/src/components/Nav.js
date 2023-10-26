import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg p-0 container mt-2">
                <div className="container-fluid">
                    <button className="navbar-toggler mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="row collapse navbar-collapse" id="navbarNav">
                        <section className='ps-4 row justify-content-center p-0'>
                            <NavLink to={"/projects"} className='btnNav d-flex justify-content-center align-items-center col-12 col-lg-3 col-md-3p-0'>
                                    <p className='mb-0 navText d-flex'>Projects</p>
                            </NavLink>

                            <NavLink to={"/about"} className='btnNav d-flex justify-content-center align-items-center col-12 col-lg-3 col-md-3 text-center p-0'>
                                    <p className='mb-0 navText d-flex'>About Me</p>
                            </NavLink>

                            <NavLink to={"/techstack"} className='btnNav d-flex justify-content-center align-items-center col-12 col-lg-3 col-md-3 text-center p-0'>
                                    <p className='mb-0 navText d-flex'>Teck Stack</p>
                            </NavLink>

                            <NavLink to={"/services"} className='btnNav d-flex justify-content-center align-items-center col-12 col-lg-3 col-md-3 text-center p-0'>
                                    <p className='mb-0 navText d-flex'>Services</p>
                            </NavLink>
                        </section>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Nav
