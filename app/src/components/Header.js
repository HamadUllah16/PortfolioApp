import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { ThemeContext } from '../App'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const pfp = '/pfp.jpg'

const socialList = [
    { name: "GitHub", link: "https://github.com/HamadUllah16/", icon: faGithub },
    { name: "Linkedin", link: "https://www.linkedin.com/in/hamadullah16/", icon: faLinkedin },
    { name: "Email", link: "mailto:hamadullah16@gmail.com", icon: faEnvelope },
    // { name: "Upwork", link: "https://www.upwork.com/freelancers/~019b0b1b1406a889c6", icon: faUpwork },
    // { name: "Freelancer", link: "https://www.freelancer.com/u/HamadUllah18", icon: faFreelancer }
]
function Header() {
    const { state } = useContext(ThemeContext);

    const mapSocials = socialList.map((item, index) => {
        return (
            <a key={index} href={item.link} target='_blank' rel='noreferrer' className='projectLink w-100' >
                <div className={`signikaFont p-1 border rounded-3 d-flex align-items-center justify-content-between text-center`}> {/* headerBtn class for old animation */}
                    <div className='icon d-flex align-items-center justify-content-center'>
                        <FontAwesomeIcon icon={item.icon} size='xl' className={`${state.textColor}`} />
                    </div>
                    <span className='socialName'>
                        <p className={`${state.textColor} navText px-1 m-0`}>{item.name}</p>
                    </span>
                    <span>
                        <p className={`${state.textColor} navText px-1 m-0 linkIcon`}><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xs' /></p>
                    </span>
                </div>
            </a >
        )
    })
    return (
        <header className='d-flex align-items-end container-md p-0' style={{ height: "auto" }} >
            <div className={`container-fluid p-0 ${state.bgColor} ${state.border} rounded-4 position-relative`}>
                <div className='pfpBackground w-100 position-absolute z-1 rounded-top-4' style={{ width: 100, height: 110 }}>
                </div>
                <section className='d-flex flex-column justify-content-center align-items-center p-2  z-3 position-relative'>
                    <div className='d-flex flex-column justify-content-around align-items-center' style={{ width: "100%" }}>
                        <div className='headerPfp overflow-hidden' style={{ borderRadius: "100%", border: state.darkMode ? "5px solid " : "5px solid #f8f9fa" }}>
                            <img className='img-fluid rounded-circle shadow border-4' src={pfp} alt='a profile pic' />
                        </div>
                        <div className='text-center mt-4'>
                            <p className={`${state.textColor} headerName mb-0`}>Hamad Ullah</p>
                            <p className={`${state.textColor} navText `}>Front-End Software Engineer</p>
                            <hr className={`${state.textColor}`}></hr>
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center gap-2 w-100 pt-1'>
                        {mapSocials}
                    </div>
                    <a target='_blank' rel='noreferrer' href={"https://drive.google.com/drive/folders/1qfen1IlVD3V-dI6xLf25zWJ8G16kPIeh?usp=sharing"} className={`${state.textColor} d-flex justify-content-center gap-2 align-items-center m-2 viewResume`}>
                        <p className='m-0'>Resume <FontAwesomeIcon icon={faArrowRight} size='sm' /></p>
                    </a>

                </section>
            </div>
        </header>
    )
}

export default Header
