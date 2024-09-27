
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../App'
import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faFile, faHouse, faBriefcase } from '@fortawesome/free-solid-svg-icons'

const navLinks = [
    { name: "Home", icon: faHouse, link: "/" },
    { name: "Projects", icon: faBriefcase, link: "/projects" },
    { name: "About", icon: faFile, link: "/about" },
    { name: "Technology Stack", icon: faCode, link: "/techstack" },
    // { name: "Experience", link: "/experience" }
]

function Nav() {
    const { state } = useContext(ThemeContext);


    return (
        <>
            <motion.div className="d-flex flex-column container navMain p-0 ">
                <section className='container-fluid p-0 d-flex align-items-center justify-content-center' style={{ height: "100%" }}>
                    <article className='navBtnBox d-flex flex-row flex-md-column flex-lg-column flex-sm-row justify-content-around align-items-center gap-3'>
                        {navLinks.map((item, index) => {
                            return (
                                <NavLink key={index} to={item.link} className={`btnNav `} style={{ color: state.darkMode ? "white" : "black" }}>
                                    <FontAwesomeIcon icon={item.icon} size='xl' className={`${state.textColor}`} />
                                    {/* <p className={`${theme} mb-0 hammerFont text-center`}>{item.name}</p> */}
                                </NavLink>
                            )
                        })}
                    </article>
                </section>
            </motion.div>
        </>
    )
}

export default Nav
