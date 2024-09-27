import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

function Search() {
  return (
    <motion.section>
      <motion.article className='searchBox d-flex align-items-center justify-content-center'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='searchIcon' />
        <motion.input type='text' id='searchInput' className='search' />
      </motion.article>
    </motion.section>
  )
}

export default Search
