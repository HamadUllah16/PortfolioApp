import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faReact, faJs, faBootstrap, faGithub, faNodeJs, faPython, faJava, faFigma, faAndroid, faGit, faWordpress } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Experience from '../components/Experience'
import { ThemeContext } from '../App'

const express = "/express.png"
const upwork = "/upworkGreen.png"

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

const experiences = [
  {
    name: "Upwork", url: "https://www.upwork.com/freelancers/~019b0b1b1406a889c6", description: "Design, build and deploy web applications with the help of React, Node Express and MongoDB for clients all over the world. Build, modify and rank websites with WordPress.", technologies: ["React/Next", "TailwindCSS", "Bootstrap5", "Javascript", "WordPress"], logo: upwork, duration: "2021 - Present"
  }
]

function TechStack() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
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

  const { state } = useContext(ThemeContext);
  return (
    <motion.section key={"tech-stack"} exit={{ opacity: 0 }} className='mainContainer px-lg-4'>
      <section className='row'>
        <section className='col-12 col-lg-6 col-md-12 col-sm-12 my-3'>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className={`${state.textColor} navText fs-4 mx-1`}>Some technologies I've worked with:</motion.p>
          <motion.article variants={container} initial={"hidden"} animate={"visible"} className='row gap-2 m-1'>
            {techStack.map((item, index) => {
              return (
                <motion.div variants={cards} whileHover={{ backgroundColor: item.color }} className={`${state.textColor} cardBox col-2`} key={index}>
                  <article className='skillBox '>
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
        </section>

        <section className='col-12 col-lg-6 col-md-12 col-sm-12 my-3'>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2 }} className={`${state.textColor} navText fs-4`}>
            Experience:
          </motion.p>
          {experiences.map((item, index) => {
            return (
              <Experience item={item} index={index} linkIcon={faArrowUpRightFromSquare} />
            )
          })}

        </section>
      </section>
    </motion.section>
  )
}

export default TechStack
