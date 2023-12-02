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
            <div className="container navbar navbar-expand-lg navPadding mt-2 ">
                <div className="container-fluid p-0 ">
                    <button className="navbar-toggler bgLight mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className={` navbar-toggler-icon `}></span>
                    </button>
                    <div className="row collapse navbar-collapse" id="navbarNav">
                        <section className='ps-4 row row-cols-5 p-0'>
                            {navLinks.map((item, index) => {
                                return (
                                    <NavLink key={index} to={item.link} className='btnNav col-12 col-sm-12 col-lg-2.4 col-md d-flex justify-content-center align-items-center '>
                                        <p className='mb-0 hammerFont text-center'>{item.name}</p>
                                    </NavLink>
                                )
                            })}
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav
