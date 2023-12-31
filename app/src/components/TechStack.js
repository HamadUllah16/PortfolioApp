import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faReact, faJs, faBootstrap, faGithub, faNodeJs, faPython, faJava, faFigma, faAndroid, faGit, faWordpress } from '@fortawesome/free-brands-svg-icons'
import express from "../misc/express.png"
import { motion } from 'framer-motion'
const techStack = [
  { name: "React", icon: faReact, custom: false, color: "#5ed3f3" },
  { name: "Bootstrap5", icon: faBootstrap, custom: false, color: "#7719f7" },
  { name: "NodeJs", icon: faNodeJs, custom: false, color: "#87cf30" },
  { name: "Express", icon: express, custom: true, color: "#9fa5ab" },
  { name: "Javascript", icon: faJs, custom: false, color: "#f0dc54" },
  { name: "Figma", icon: faFigma, custom: false, color: "#f35424" },
  { name: "React Native", icon: faReact, custom: false, color: "#5ed3f3" },
  { name: "HTML5", icon: faHtml5, custom: false, color: "#e5532d" },
  { name: "CSS3", icon: faCss3, custom: false, color: "#2d53e5" },
  { name: "Python", icon: faPython, custom: false, color: "#ffd840" },
  { name: "Java", icon: faJava, custom: false, color: "#0c7a93" },
  { name: "Java Android", icon: faAndroid, custom: false, color: "#44db8a" },
  { name: "GitHub", icon: faGithub, custom: false, color: "gray" },
  { name: "Git", icon: faGit, custom: false, color: "#f05639" },
  { name: "WordPress", icon: faWordpress, custom: false, color: "#28799e" }
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
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className='navText fs-4'>Some technologies I've worked with:</motion.p>
        <motion.article variants={container} initial={"hidden"} animate={"visible"} className='row gap-3 m-1'>
          {techStack.map((item, index) => {
            return (
              <motion.div variants={cards} whileHover={{ backgroundColor: item.color}} className='cardBox col-3 col-sm-3 col-lg-2 col-md-3'>
                <article  className='skillBox ' key={index}>
                  <article className='p-1'>
                    {item.custom ? <img src={item.icon} alt='skill' style={{ maxWidth: "60px" }} /> : <FontAwesomeIcon icon={item.icon} size="4x" />}
                  </article>
                </article>
                <article className='mt-1 itemTextBox'>
                  <p className='m-0 p-0 text-center ralewayFont skillTitle' >{item.name}</p>
                </article>
              </motion.div>
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
