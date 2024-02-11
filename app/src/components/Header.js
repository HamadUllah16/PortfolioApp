import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Switch from './Switch'
import { useContext } from 'react'
import { ThemeContext } from '../App'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const pfp = '/pfp.jpg'

const socialList = [
    { name: "GitHub", link: "https://github.com/HamadUllah16/", icon: faGithub },
    { name: "Linkedin", link: "https://www.linkedin.com/in/hamadullah16/", icon: faLinkedin },
    { name: "Email", link: "mailto:hamadullah16@gmail.com", icon: faEnvelope }
    // { name: "Upwork", link: "https://www.upwork.com/freelancers/~019b0b1b1406a889c6", icon: faUpwork },
    // { name: "Freelancer", link: "https://www.freelancer.com/u/HamadUllah18", icon: faFreelancer }
]
function Header() {
    const { darkMode } = useContext(ThemeContext);
    const textColor = darkMode ? "lightText" : "darkText";

    const mapSocials = socialList.map((item, index) => {
        return (
            <a key={index} href={item.link} target='_blank' rel='noreferrer' >
                <div className={`signikaFont headerBtn m-0 d-flex align-items-center justify-content-center text-center`}>
                    <div className='icon d-flex align-items-center justify-content-center'>
                        <FontAwesomeIcon icon={item.icon} size='xl' className={`${darkMode ? "lightIcon" : "darkIcon"}`} />
                    </div>
                    <span className='socialName'>
                        <p className={`${textColor} navText px-1 m-0`}>{item.name}</p>
                    </span>
                </div>
            </a >
        )
    })
    return (
        <header className='container rounded-bottom p-2'>
            <div className='container-fluid pt-2'>
                <section className='row'>
                    <div className='col-12 col-lg-6 col-md-6 p-0'>
                        <div className='row'>
                            <div className='col d-flex align-items-center headerPfp'>
                                <img className='img img-fluid' src={pfp} alt='' />
                            </div>
                            <div className='col text-start mt-4'>
                                <p className={`${textColor} headerName mb-0`}>Hamad Ullah</p>
                                <p className={`${textColor} navText`}>Software Engineer</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 col-md-6 p-0'>
                        <div className=''>
                            <div className='mb-1 mt-3 p-0 d-flex justify-content-end'>
                                <Switch />
                            </div>
                        </div>
                        <div className='d-flex flex-wrap justify-content-end pt-1'>
                            {mapSocials}
                        </div>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Header
