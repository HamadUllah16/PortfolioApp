import frontEndCertificate from "../misc/meta-front-end-developer-certificate.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section className='row'>

      <article className='col mx-4'>
        <h4 className='navText fs-3'>Hi I'm Hamad</h4>
        <p className='fs-5 ralewayFont'>A Software Engineer who likes to build amazing web applications using latest technologies and frameworks. I obsess over systematic and conventional way of building web applications to:</p>
        <ul>
          <li className='ralewayFont fs-6'>Ensure applications serves its purpose.</li>
          <li className='ralewayFont fs-6'>Emphasize on efficiency and reliablability.</li>
          <li className='ralewayFont fs-6'>Provide exceptional user experiences.</li>
        </ul>

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
              <a className="link" href="https://www.coursera.org/programs/dlsei-phase-2b-iigii/professional-certificates/meta-front-end-developer">Meta Front-End Specialization <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ color: "#000000", }} /></a>
            </div>
            <div className='col'>
              <div className='row'>
                <div className='col'>
                  <p className='m-0'>Coursera</p>
                  <p>2023</p>
                </div>
                <div className='col'>
                  <a href="https://www.coursera.org/account/accomplishments/professional-cert/9DHKPLDZT64B" target="_blank" rel="noreferrer">
                    <img src={frontEndCertificate} style={{ maxWidth: "100px" }} alt='certificate' /><br></br>
                  </a>
                  <a href='https://www.credly.com/badges/b619179c-b71c-4909-a414-f29ac0f34bc7/public_url' target='_blank' rel="noreferrer">
                    <button className='btn-light'>Verify</button>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>

      </article>

    </section>
  )
}

export default About
