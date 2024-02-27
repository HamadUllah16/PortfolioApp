import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import littleLemon from "../misc/LittleLemonHome.jpg";
import littleLemonGif from "../misc/LittleLemon.gif";
import kensTree from "../misc/Ken's Discount Tree.jpg"
import demolition from "../misc/demolition.jpg"
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion"
import { useContext } from 'react';
import { ThemeContext } from '../App';
const projects = [
  { name: "Little Lemon Restaurant", description: "Little Lemon a Mediterranean restaurant, focused on traditional receipes served with modern twist.", image: littleLemon, gif: littleLemonGif, github: "https://github.com/HamadUllah16/LittleLemon-Reservations", live: "https://littlelemonchicago.vercel.app", technologies: ["React", "Bootstrap5", "CSS", "UI/UX"] },

  { name: "Ken's Discount Tree", description: "Affordable tree services in Atlanta.", image: kensTree, gif: null, github: null, live: "https://www.kensdiscounttreeservice.com", technologies: ["WordPress", "WordPress Customization"] },
  { name: "Demolition & Hauling", description: "Family owned and operated, demolition and hauling for less has earned the reputation for providing top quality residential and commercial building demolition services to clients throughout Atlanta.", image: demolition, gif: null, github: null, live: "https://www.demolitionandhaulingforless.com", technologies: ["WordPress", "WordPress Customization"] },
  { name: "Yelp Camps", description: "A MERN Stack App with CRUD functionalities", image: "", gif: null, github: "https://yelpcamps-client.vercel.app", live: "https://yelpcamps-client.vercel.app", technologies: ["React", "Express", "NodeJs", "MongoDB", "Bootstrap5"] }
]


function Projects() {
  const { state } = useContext(ThemeContext);
  const theme = state.darkMode ? "lightText" : "darkText"
  const boxColor = state.darkMode ? "bgDarkBox" : "bg-light";
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
    <>
      <section className='mainContainer d-flex flex-column'>
        {/* <Toolbar /> */}
        <motion.section key={"projects"} variants={container} exit={"hidden"} initial={"hidden"} animate={"visible"} className=' projectRow row p-3 justify-content-sm-center justify-content-lg-start justify-content-center gap-3'>
          {projects.map((item, index) => {
            return (
              <motion.a variants={cards} whileHover={{ scale: 1.05 }}
                href={item.live} key={index} target='_blank' rel='noreferrer' style={{ border: `2px solid ${state.darkMode ? "#818181" : "white"}` }} className="card cardSize p-0 m-0 col-12 col-md-12 col-lg-6">
                <img src={item.image} alt='project-cover' className="card-img-top projectImage"
                />
                <div className={`${boxColor} card-body`} style={{ borderRadius: 3 }}>
                  <div className={`${theme} card-title navText d-flex justify-content-between align-items-center gap-2`}><p className='fs-6 p-0 m-0'>{item.name}</p>
                    <div className='d-flex align-items-center gap-2'>
                      {item.github ?
                        <a href={item.github} className={`${theme} signikaFont m-0`}><FontAwesomeIcon icon={faGithub} /></a>
                        :
                        ""
                      }
                      {item.live ?
                        <p className='signikaFont m-0'><FontAwesomeIcon className='linkIcon' icon={faArrowUpRightFromSquare} size='xs' /></p>
                        :
                        ""
                      }
                    </div>
                  </div>
                  <p className={`${theme} card-text ralewayFont description`}>{item.description}</p>
                  <article className='d-flex flex-wrap align-items-center'>
                    {item.technologies.map((item, index) => {
                      return (
                        <div key={index} className={`${theme} ${state.darkMode ? "techBoxBlack" : "techBox"}`}><p className='px-2 text-center m-0'>{item}</p></div>
                      )
                    })}
                  </article>
                </div>
              </motion.a>
            )
          })}

        </motion.section>
      </section>
    </>
  )
}

export default Projects
