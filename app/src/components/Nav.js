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
                            <button className='btnNav col-12 col-lg-3 col-md-3 text-center border border-black p-0'>
                                <NavLink to={"/projects"}>
                                    <p className='mb-0 navText'>Projects</p>
                                </NavLink>
                            </button>
                            <button className='btnNav col-12 col-lg-3 col-md-3 text-center border border-black p-0'>
                                <NavLink to={"/about"}>
                                    <p className='mb-0 navText'>About Me</p>
                                </NavLink>

                            </button>
                            <button className='btnNav col-12 col-lg-3 col-md-3 text-center border border-black p-0'>
                                <NavLink to={"/techstack"}>
                                    <p className='mb-0 navText'>Teck Stack</p>
                                </NavLink>
                            </button>
                            <button className='btnNav col-12 col-lg-3 col-md-3 text-center border border-black p-0'>
                                <NavLink to={"/services"}>
                                    <p className='mb-0 navText'>Services</p>
                                </NavLink>
                            </button>
                        </section>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Nav
