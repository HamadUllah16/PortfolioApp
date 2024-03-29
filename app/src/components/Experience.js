import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ThemeContext } from '../App';


function Experience({ item, index, linkIcon }) {
  const { state } = useContext(ThemeContext);
  const theme = state.darkMode ? "lightText" : "darkText"
  return (
    <motion.a href={item.url} key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 2.5 }} target='_blank' className='row'>
      <motion.section whileHover={{ backgroundColor: state.darkMode ? "#121212" : "white" }} className='p-3 projectLink experience'>
        <section className='row'>
          <section className='d-flex gap-2 mx-1 py-1'>
            <article className='col-3'>
              <p className={`${theme} ralewayFont fs-6 p-0`}>{item.duration}</p>
            </article>
            <article className='col'>
              <img src={item.logo} className={`${theme} upworkIcon mb-1`} alt='company' />
            </article>
            <article className='linkIconBox col text-end'>
              <FontAwesomeIcon className={`${theme} linkIcon`} size="xs" icon={linkIcon} />
            </article>
          </section>
        </section>
        <section className='row'>
          <article className=''>
            <p className={`${theme} hammerFont`}>
              {item.description}
            </p>
          </article>
          <article className='d-flex flex-wrap gap-2'>
            {item.technologies.map((item, index) => {
              return (
                <div className={`${state.darkMode ? "techBoxBlack" : "techBox"}`}>
                  <p className={`${theme} text-center px-2 py-0`} key={index}>{item}</p>
                </div>
              )
            })}
          </article>
        </section>
      </motion.section>
    </motion.a >
  )
}

export default Experience
