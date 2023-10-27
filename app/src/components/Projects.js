import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const projects = [
  { name: "Little Lemon Restaurant", description: "Little Lemon a Mediterranean restaurant, focused on traditional receipes served with modern twist.", image: "/LittleLemonHome.png", gif: "/LittleLemon.gif", github: "https://github.com/HamadUllah16/LittleLemon-Reservations", live: "https://littlelemonchicago.vercel.app", technologies: ["React", "Bootstrap5", "CSS"] }
]


function Projects() {
  const [gif, setGif] = useState('/LittleLemonHome.png')
  return (
    <section className='d-flex align-items-center'>
      {projects.map((item, index) => {
        return (
          <div key={item.index} className="card shadow cardSize">
            <img src={gif} alt='project-cover' className="card-img-top projectImage" onMouseEnter={() => setGif(item.gif)} onMouseLeave={() => setGif(item.image)} />
            <div className="card-body">
              <h5 className="card-title navText">{item.name}</h5>
              <p className="card-text ralewayFont">{item.description}</p>
              <div className='d-flex gap-3'>
                <a href={item.github}><p className='signikaFont'>GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xs' /></p></a>
                <a href={item.live}><p className='signikaFont'>Live <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xs' /></p></a>
              </div>
              <article className='d-flex gap-2 flex-wrap align-items-center'>
                <div className='techBox'><p className='px-2 text-center m-0'>{item.technologies[0]}</p></div>
                <div className='techBox'><p className='px-2 text-center m-0'>{item.technologies[1]}</p></div>
                <div className='techBox'><p className='px-2 text-center m-0'>{item.technologies[2]}</p></div>
              </article>
            </div>
          </div>
        )
      })}

    </section>
  )
}

export default Projects
