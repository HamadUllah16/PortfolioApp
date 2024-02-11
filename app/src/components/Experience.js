import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Experience({ item, index, linkIcon }) {
  return (
    <motion.a href={item.url} key={index} target='_blank' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 2.5 }} className='projectLink experience row p-2'>
      <section className='row'>
        <section className='d-flex gap-2 mx-1 py-1'>
          <article className='col-3'>
            <p className='ralewayFont fs-6 p-0'>{item.duration}</p>
          </article>
          <article className='col'>
            <img src={item.logo} className='upworkIcon mb-1' alt='company' />
          </article>
          <article className='linkIconBox col text-end'>
            <FontAwesomeIcon className="linkIcon" size="xs" icon={linkIcon} style={{ color: "#000000" }} />
          </article>
        </section>
      </section>
      <section className='row'>
        <article className=''>
          <p className='hammerFont'>
            {item.description}
          </p>
        </article>
        <article className='d-flex flex-wrap gap-2'>
          {item.technologies.map((item, index) => {
            return (
              <p className='techBox text-center px-2' key={index}>{item}</p>
            )
          })}
        </article>
      </section>
    </motion.a>
  )
}

export default Experience
