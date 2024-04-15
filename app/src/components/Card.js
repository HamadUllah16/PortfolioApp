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
    return (
        <motion.a variants={cards} whileHover={{ scale: 1.05 }}
            href={item.live} key={index} target='_blank' rel='noreferrer' style={{ overflow: "hidden" }} className={`${state.border} rounded shadow-lg cardSize my-2 mx-1 p-0 col-12 col-md-12 col-lg-6`}>
            <img src={item.image} alt='project-cover' className=" card-img-top bg-light rounded-2 projectImage" />
            <div className={`${state.bgColor} card-body p-2`} >
                <div className={`${state.textColor} card-title navText d-flex justify-content-between align-items-center gap-2`}><p className='fs-6 p-0 m-0'>{item.name}</p>
                    <div className='d-flex align-items-center gap-2'>
                        {item.github ?
                            <a href={item.github} className={`${state.textColor} signikaFont m-0`}><FontAwesomeIcon icon={faGithub} /></a>
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
                <p className={`${state.textColor} card-text ralewayFont description`}>{item.description}</p>
                <article className='d-flex flex-wrap align-items-center'>
                    {item.technologies.map((item, index) => {
                        return (
                            <div key={index} className={`${state.textColor} ${state.darkMode ? "techBoxBlack" : "techBox"}`}><p className='px-2 text-center m-0'>{item}</p></div>
                        )
                    })}
                </article>
            </div>
        </motion.a>
    )
}

export default Card
