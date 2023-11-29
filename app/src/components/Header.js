import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import Switch from './Switch'
import { useContext } from 'react'
import { ThemeContext } from '../App'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
const pfp = '/pfp.jpg'

const socialList = [
    { name: "GitHub", link: "https://github.com/HamadUllah16/", icon: faGithub },
    { name: "Linkedin", link: "https://www.linkedin.com/in/hamadullah16/", icon: faLinkedinIn },
    // { name: "Upwork", link: "https://www.upwork.com/freelancers/~019b0b1b1406a889c6", icon: faUpwork },
    // { name: "Freelancer", link: "https://www.freelancer.com/u/HamadUllah18", icon: faFreelancer }
]
function Header() {
    const { state } = useContext(ThemeContext);
    const mapSocials = socialList.map((item, index) => {
        return (
            <a key={index} href={item.link} target='_blank' rel='noreferrer' >
                <div className={`${state.darkMode ? "bgLight" : "bgDark"} p-3 signikaFont headerBtn m-0 d-flex align-items-center justify-content-center text-center`}>
                    <div className='icon d-flex align-items-center justify-content-center'>
                        <FontAwesomeIcon icon={item.icon} size='xl' className={`${state.darkMode ? "darkIcon" : "lightIcon"}`} />
                    </div>
                    <span className='socialName'>
                        <p className={`${state.darkMode ? "lightText" : "darkText"} navText px-1 m-0`}>{item.name}</p>
                    </span>
                </div>
            </a >
        )
    })
    return (
        <header className='container'>
            <div className='container-fluid pt-2'>
                <section className='row'>
                    <div className='col-12 col-lg-6 col-md-6 p-0'>
                        <div className='row'>
                            <div className='col d-flex align-items-center headerPfp'>
                                <img className='img img-fluid' src={pfp} alt='' />
                            </div>
                            <div className='col text-start mt-4'>
                                <p className={`${state.darkMode ? "dark" : "light"}Text headerName mb-0`}>Hamad Ullah</p>
                                <p className={`${state.darkMode ? "dark" : "light"}Text navText`}>Software Engineer | MERN Stack</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 col-md-6 p-0'>
                        <div className=''>
                            <div className='mb-1 mt-3 p-0 d-flex justify-content-end'>
                                <Switch />
                            </div>
                        </div>
                        <div className='d-flex flex-wrap justify-content-end pt-1 gap-2'>
                            {mapSocials}
                        </div>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Header
