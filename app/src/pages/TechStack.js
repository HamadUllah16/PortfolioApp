import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Experience from '../components/Experience'
import { ThemeContext } from '../App'
import SkillElement from '../components/SkillElement';
import { FaFigma, FaGit } from 'react-icons/fa6';
import { RiAndroidFill, RiBootstrapFill, RiCss3Fill, RiGithubFill, RiHtml5Fill, RiJavaFill, RiJavascriptFill, RiNextjsFill, RiNodejsFill, RiReactjsFill, RiWordpressFill, } from 'react-icons/ri';
import { AiOutlinePython } from 'react-icons/ai';
import { TbBrandReactNative } from 'react-icons/tb';
import { SiExpress } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';

const upwork = "/upworkGreen.png"

const techStack = [
  { name: "React", icon: <RiReactjsFill size="3em" />, color: "#5ed3f3" },
  { name: "Typescript", icon: <BiLogoTypescript size="3em" />, color: "#2f74c0" },
  { name: "NextJs", icon: <RiNextjsFill size="3em" />, color: "black" },
  { name: "Bootstrap5", icon: <RiBootstrapFill size="3em" />, color: "#7719f7" },
  { name: "Javascript", icon: <RiJavascriptFill size="3em" />, color: "#f0dc54" },
  { name: "HTML5", icon: <RiHtml5Fill size="3em" />, color: "#e5532d" },
  { name: "CSS3", icon: <RiCss3Fill size="3em" />, color: "#2d53e5" },
  { name: "NodeJs", icon: <RiNodejsFill size="3em" />, color: "#87cf30" },
  { name: "Express", icon: <SiExpress size="3em" />, color: "#9fa5ab" },
  { name: "Java", icon: <RiJavaFill size="3em" />, color: "#0c7a93" },
  { name: "Python", icon: <AiOutlinePython size="3em" />, color: "#ffd840" },
  { name: "Figma", icon: <FaFigma size="3em" />, color: "#f35424" },
  { name: "React Native", icon: <TbBrandReactNative size="3em" />, color: "#5ed3f3" },
  { name: "Java Android", icon: <RiAndroidFill size="3em" />, color: "#44db8a" },
  { name: "GitHub", icon: <RiGithubFill size="3em" />, color: "gray" },
  { name: "Git", icon: <FaGit size="3em" />, color: "#f05639" },
  { name: "WordPress", icon: <RiWordpressFill size="3em" />, color: "#28799e" }

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
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }


  const { state } = useContext(ThemeContext);
  return (
    <motion.section key={"tech-stack"} exit={{ opacity: 0 }} className='mainContainer px-lg-4'>
      <section className='row'>
        <section className='col-12 col-lg-6 col-md-12 col-sm-12 my-3'>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className={`${state.textColor} navText fs-4 mx-1`}>Some technologies I've worked with:</motion.p>
          <motion.article className='d-flex flex-wrap align-items-center  gap-4 m-1' variants={container} initial={"hidden"} animate={"visible"}>
            {techStack.map((item, index) => {
              return (
                <SkillElement item={item} index={index} />
              )
            })}
          </motion.article>
        </section>

        <section className='col-12 col-lg-6 px-3 col-md-12 col-sm-12 my-3'>
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
