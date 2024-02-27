
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../App'
import { useContext } from 'react'

const navLinks = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "About Me", link: "/about" },
    { name: "Tech Stack", link: "/techstack" },
    // { name: "Experience", link: "/experience" }
]

function Nav() {
    const { state } = useContext(ThemeContext);

    const theme = state.darkMode ? "lightText" : "darkText"
    const boxColor = state.darkMode ? "bgDarkBox" : "bg-light border-top border-left border-right";

    return (
        <>
            <motion.div className="container navbar navbar-expand-lg navPadding mt-2 ">
                <div className="container-fluid p-0">
                    <button className="navbar-toggler bgLight mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className={` navbar-toggler-icon `}></span>
                    </button>
                    <div className={`collapse ${boxColor} rounded-top-4 navbar-collapse`} id="navbarNav">
                        <section className='mx-0 row container-fluid p-0'>
                            {navLinks.map((item, index) => {
                                return (
                                    <NavLink key={index} to={item.link} className='btnNav col-12 col-sm-12 col-lg col-md d-flex justify-content-center align-items-center '>
                                        <p className={`${theme} mb-0 hammerFont text-center`}>{item.name}</p>
                                    </NavLink>
                                )
                            })}
                        </section>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Nav
