import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../App";
import Certificate from "../components/Certificate";

const upwork = "/upworkGreen.png";
const linkedin = "/linkedin.png";

function About() {
  const { state } = useContext(ThemeContext);
  return (
    <section key={"about"} initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className='mainContainer gap-2'>
      <motion.section key={"about"} initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="row p-4">
        <article className='col-12 col-lg-6 col-md-12 col-sm-12'>
          <h4 className={`${state.textColor} navText fs-3`}>Hi I'm Hamad</h4>
          <p className={`${state.textColor} fs-5 ralewayFont mb-1`}>A Software Engineer who likes to build amazing web applications using latest technologies and frameworks. I obsess over systematic and conventional way of building web applications to:</p>
          <ul className="mb-2">
            <li className={`${state.textColor} ralewayFont fs-6`}>Ensure applications serves its purpose.</li>
            <li className={`${state.textColor} ralewayFont fs-6`}>Emphasize on efficiency and reliability.</li>
            <li className={`${state.textColor} ralewayFont fs-6`}>Provide exceptional user experiences.</li>
          </ul>

          <article>
            <p className={`${state.textColor} ralewayFont fs-6 mb-2`}>Want to learn more about my services? <span>Get in touch:</span></p>
            <div className="d-flex gap-2">
              <a href="https://www.upwork.com/freelancers/~019b0b1b1406a889c6">
                <div className={`hireBtn`}>
                  <img className="upworkIcon" src={upwork} alt="upwork logo" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/hamadullah16/">
                <div className="hireBtn">
                  <img className="linkedinIcon" src={linkedin} alt="linkedin logo" />
                </div>
              </a>
            </div>
          </article>
          <hr className={`${state.textColor}`}></hr>
        </article>

        <article className='col'>
          <div>
            <h5 className={`${state.textColor} hammerFont fs-3`}>Education:</h5>
            <div className='row ralewayFont fs-6'>
              <div className={`${state.textColor} col`}>
                <p>BS Software Engineering</p>
              </div>
              <div className='col'>
                <p className={`${state.textColor} m-0`}>Abasyn University</p>
                <p className={`${state.textColor}`} >2021 - Present</p>
              </div>
            </div>
          </div>

          <div>
            <hr className={`${state.textColor}`}></hr>
            <h5 className={`${state.textColor} hammerFont fs-3
          `}>Certifications:</h5>
            <div className='d-flex ralewayFont fs-6 p-0 gap-2 '>
              <Certificate />
            </div>
          </div>
        </article>
      </motion.section>
    </section >
  )
}

export default About
