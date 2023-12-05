import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faReact, faJs, faBootstrap, faGithub, faNodeJs, faPython, faJava, faFigma, faAndroid, faGit } from '@fortawesome/free-brands-svg-icons'

const techStack = [
  { name: "React", icon: faReact },
  { name: "Bootstrap5", icon: faBootstrap },
  { name: "NodeJs", icon: faNodeJs },
  { name: "Javascript", icon: faJs },
  { name: "Figma", icon: faFigma },
  { name: "HTML5", icon: faHtml5 },
  { name: "CSS3", icon: faCss3 },
  { name: "Python", icon: faPython },
  { name: "Java", icon: faJava },
  { name: "Android", icon: faAndroid },
  { name: "GitHub", icon: faGithub },
  { name: "Git", icon: faGit }
]

function TechStack() {
  return (
    <section className='row mx-lg-4'>
      <section className='col-12 col-lg-6 col-md-6 col-sm-12 m-3'>
        <p className='navText fs-4'>Some technologies I've worked with:</p>
        <article className='row gap-3'>
          {techStack.map((item, index) => {
            return (
              <article className='col-3 col-sm-3 col-lg-3 col-md-3 text-center' key={index}>
                <FontAwesomeIcon icon={item.icon} size="4x" />
              </article>
            )
          })}
        </article>

        <section className='col-12 col-lg-6 col-md-6 col-sm-12 m-3'>

        </section>
      </section>
    </section>
  )
}

export default TechStack
