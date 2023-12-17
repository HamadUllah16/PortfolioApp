import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faReact, faJs, faBootstrap, faGithub, faNodeJs, faPython, faJava, faFigma, faAndroid, faGit, faWordpress } from '@fortawesome/free-brands-svg-icons'
import express from "../misc/express.png"
import { motion } from 'framer-motion'
const techStack = [
  { name: "React", icon: faReact, custom: false },
  { name: "Bootstrap5", icon: faBootstrap, custom: false },
  { name: "NodeJs", icon: faNodeJs, custom: false },
  { name: "Express", icon: express, custom: true },
  { name: "Javascript", icon: faJs, custom: false },
  { name: "Figma", icon: faFigma, custom: false },
  // { name: "React Native", icon: faReact, custom: false },
  { name: "HTML5", icon: faHtml5, custom: false },
  { name: "CSS3", icon: faCss3, custom: false },
  { name: "Python", icon: faPython, custom: false },
  { name: "Java", icon: faJava, custom: false },
  { name: "Android", icon: faAndroid, custom: false },
  { name: "GitHub", icon: faGithub, custom: false },
  { name: "Git", icon: faGit, custom: false },
  { name: "WordPress", icon: faWordpress, custom: false }
]

function TechStack() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const cards = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <section className='row mx-lg-4'>
      <section className='col-12 col-lg-6 col-md-6 col-sm-12 mt-2'>
        <motion.p initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 0.5}} className='navText fs-4'>Some technologies I've worked with:</motion.p>
        <motion.article variants={container} initial={"hidden"} animate={"visible"} className='row gap-3 m-1'>
          {techStack.map((item, index) => {
            return (
              <motion.article variants={cards} className='skillIcon col-3 col-sm-3 col-lg-2 col-md-3' key={index}>
                <article className='d-flex justify-content-center align-items-center'>
                  {item.custom ? <img src={item.icon} alt='skill' style={{ maxWidth: "60px" }} /> : <FontAwesomeIcon icon={item.icon} size="4x" />}
                </article>
                {/* <p className='text-center ralewayFont skillTitle'>{item.name}</p> */}
              </motion.article>
            )
          })}
        </motion.article>

        <section className='col-12 col-lg-6 col-md-6 col-sm-12 mt-2'>

        </section>
      </section>
    </section>
  )
}

export default TechStack
