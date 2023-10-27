import React from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
    { name: "Home", link: "/"},
    { name: "Projects", link: "/projects"},
    { name: "About Me", link: "/about"},
    { name: "Tech Stack", link: "/techstack"},
    { name: "Services", link: "/services"}
]

function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg p-0 container mt-2">
                <div className="container-fluid">
                    <button className="navbar-toggler mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="row collapse navbar-collapse" id="navbarNav">
                        <section className='ps-4 row justify-content-evenly p-0'>
                            {navLinks.map((item, index) => {
                                return (
                                    <NavLink key={index} to={item.link} className='btnNav d-flex justify-content-center align-items-center col col-sm-12 col-lg col-md '>
                                        <p className='mb-0 hammerFont d-flex'>{item.name}</p>
                                    </NavLink>
                                )
                            })}
                        </section>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Nav
