import React from 'react'
import { ThemeContext } from '../App';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useContext } from 'react';

const cards = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}

function Card({ item, index }) {

    const { state } = useContext(ThemeContext);
    const theme = state.darkMode ? "lightText" : "darkText"
    const boxColor = state.darkMode ? "bgDarkBox" : "bg-light";
    return (
        <motion.a variants={cards} whileHover={{ scale: 1.05 }}
            href={item.live} key={index} target='_blank' rel='noreferrer' style={state.darkMode ? { border: "1px solid #e2e2e2", overflow: "hidden" } : { overflow: "hidden" }} className="card cardSize m-0 p-0 col-12 col-md-12 col-lg-6">
            <img src={item.image} alt='project-cover' className="card-img-top projectImage" />
            <div className={`${boxColor} card-body`} >
                <div className={`${theme} card-title navText d-flex justify-content-between align-items-center gap-2`}><p className='fs-6 p-0 m-0'>{item.name}</p>
                    <div className='d-flex align-items-center gap-2'>
                        {item.github ?
                            <a href={item.github} className={`${theme} signikaFont m-0`}><FontAwesomeIcon icon={faGithub} /></a>
                            :
                            ""
                        }
                        {item.live ?
                            <p className='signikaFont m-0'><FontAwesomeIcon className='linkIcon' icon={faArrowUpRightFromSquare} size='xs' /></p>
                            :
                            ""
                        }
                    </div>
                </div>
                <p className={`${theme} card-text ralewayFont description`}>{item.description}</p>
                <article className='d-flex flex-wrap align-items-center'>
                    {item.technologies.map((item, index) => {
                        return (
                            <div key={index} className={`${theme} ${state.darkMode ? "techBoxBlack" : "techBox"}`}><p className='px-2 text-center m-0'>{item}</p></div>
                        )
                    })}
                </article>
            </div>
        </motion.a>
    )
}

export default Card
