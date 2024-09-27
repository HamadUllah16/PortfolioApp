import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../App';

const cards = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 2.5
    }
  }
}

function Experience({ item, index, linkIcon }) {
  const [accordion, setAccordion] = useState(false);
  const { state } = useContext(ThemeContext);
  return (
    <motion.div
      // href={item.url}
      key={index}
      // initial={{ opacity: 0, scale: 0.8 }}
      // animate={{ opacity: 1, scale: 1 }}
      variants={cards}
      target='_blank'
      className='row'
    >
      <motion.section
        whileHover={{ backgroundColor: state.darkMode ? "#121212" : "white" }}
        className='p-3 experience'
        animate={{ maxHeight: accordion ? "20rem" : "5rem" }}
        transition={{ duration: 0.3 }}
      >
        <section className='row'>
          <section className='col d-flex gap-2 mx-1 py-1' onClick={() => setAccordion(!accordion)}>

            <article className='col d-flex flex-column'>
              <img
                src={item.logo}
                className={`${state.textColor} upworkIcon mb-1`} alt='company'
              />
              <p className={`${state.textColor} ralewayFont fs-6 p-0`}>
                {item.duration}
              </p>
            </article>



            <article className='linkIconBox col text-end'>
              <FontAwesomeIcon icon={faAngleUp} className={`${state.textColor}`} style={{ rotate: accordion ? "180deg" : "0deg", transition: "0.2s ease" }} />
              {/* <FontAwesomeIcon className={`${state.textColor} linkIcon`} size="xs" icon={linkIcon} /> */}
            </article>

          </section>
        </section>
        <section className='row'>

          <article className='col d-flex flex-wrap'>
            <p className={`${state.textColor} hammerFont`}>
              {item.description}
            </p>
          </article>

          <article className='d-flex flex-wrap gap-2'>
            {item.technologies.map((item, index) => {
              return (
                <div className={`${state.darkMode ? "techBoxBlack" : "techBox"}`}>
                  <p className={`${state.textColor} text-center px-2 py-0`} key={index}>{item}</p>
                </div>
              )
            })}
          </article>
        </section>
      </motion.section>
    </motion.div >
  )
}

export default Experience
