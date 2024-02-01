import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faReact, faJs, faBootstrap, faGithub, faNodeJs, faPython, faJava, faFigma, faAndroid, faGit, faWordpress } from '@fortawesome/free-brands-svg-icons'


const services = [
  { title: "User Interface and Experience Design", tools: [faReact, faBootstrap, faJs, faHtml5, faCss3], description: ["Journey Map", "User Personas", "Usablity Evaluation", "Wireframes", "High-Fidelity Design"] },
  { title: "User Interface and Experience Design", tools: [""], description: ["Journey Map", "User Personas", "Usablity Evaluation", "Wireframes", "High-Fidelity Design"] }
]

function Experience() {
  return (
    <motion.div className='serviceBox p-4' key={"services"} exit={{ opacity: 0 }}>
    </motion.div>
  )
}

export default Experience
