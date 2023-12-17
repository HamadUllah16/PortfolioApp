import frontEndCertificate from "../misc/meta-front-end-developer-certificate.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import upwork from "../misc/upworkGreen.png"
import linkedin from "../misc/linkedin.png"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{duration: 0.5}} className='row gap-2 mx-3'>

      <article className='col-12 col-lg-6 col-md-6 col-sm-12'>
        <h4 className='navText fs-3'>Hi I'm Hamad</h4>
        <p className='fs-5 ralewayFont mb-1'>A Software Engineer who likes to build amazing web applications using latest technologies and frameworks. I obsess over systematic and conventional way of building web applications to:</p>
        <ul className="mb-2">
          <li className='ralewayFont fs-6'>Ensure applications serves its purpose.</li>
          <li className='ralewayFont fs-6'>Emphasize on efficiency and reliability.</li>
          <li className='ralewayFont fs-6'>Provide exceptional user experiences.</li>
        </ul>

        <article>
          <p className="ralewayFont fs-6 mb-2">Want to learn more about my services? <span className="text-decoration-underline">Get in touch:</span></p>
          <div className="d-flex gap-2">
            <a href="https://www.upwork.com/freelancers/~019b0b1b1406a889c6">
              <div className="hireBtn">
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
        <hr></hr>
      </article>

      <article className='col'>
        <div>
          <h5 className="hammerFont fs-3">Education:</h5>
          <div className='row ralewayFont fs-6'>
            <div className='col'>
              <p>BS Software Engineering</p>
            </div>
            <div className='col'>
              <p className='m-0'>Abasyn University</p>
              <p>2021 - Present</p>
            </div>
          </div>
        </div>

        <div>
          <hr></hr>
          <h5 className="hammerFont fs-3
          ">Certifications:</h5>
          <div className='row ralewayFont fs-6'>
            <div className='col'>
              <a className="projectLink d-flex gap-1" target="_blank" rel="noreferrer" href="https://www.coursera.org/programs/dlsei-phase-2b-iigii/professional-certificates/meta-front-end-developer"><span>Meta Front-End Specialization</span><FontAwesomeIcon className="linkIcon" size="xs" icon={faArrowUpRightFromSquare} style={{ color: "#000000", }} /></a>
            </div>
            <div className='col'>
              <div className='row'>
                <div className='col'>
                  <p className='m-0'>Coursera</p>
                  <p>2023</p>
                </div>
                <div className='col justify-content-center'>
                  <div style={{maxWidth: "100px"}}>
                    <a href="https://www.coursera.org/account/accomplishments/professional-cert/9DHKPLDZT64B" target="_blank" rel="noreferrer">
                      <img src={frontEndCertificate} className="certificate" alt='certificate' /><br></br>
                    </a>
                    <a href='https://www.credly.com/badges/b619179c-b71c-4909-a414-f29ac0f34bc7/public_url' target='_blank' rel="noreferrer">
                      <p className='btn-light text-center ralewayFont'>Verify</p>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </article>

    </motion.section>
  )
}

export default About
