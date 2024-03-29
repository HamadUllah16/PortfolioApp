import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { ThemeContext } from '../App'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowCircleDown, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const pfp = '/pfp.jpg'

const socialList = [
    { name: "GitHub", link: "https://github.com/HamadUllah16/", icon: faGithub },
    { name: "Linkedin", link: "https://www.linkedin.com/in/hamadullah16/", icon: faLinkedin },
    { name: "Email", link: "mailto:hamadullah16@gmail.com", icon: faEnvelope },
    // { name: "Upwork", link: "https://www.upwork.com/freelancers/~019b0b1b1406a889c6", icon: faUpwork },
    // { name: "Freelancer", link: "https://www.freelancer.com/u/HamadUllah18", icon: faFreelancer }
]
function Header() {
    const { darkMode } = useContext(ThemeContext);
    const textColor = darkMode ? "lightText" : "darkText";
    const boxColor = darkMode ? "bgDarkBox border border-dark" : "bg-light border";

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
        <header className='d-flex align-items-end container-md p-0' style={{ height: "auto" }} >
            <div className={`container-fluid p-2 ${boxColor} rounded-4 `}>
                <section className='d-flex flex-column justify-content-center align-items-center'>
                    <div className='headerPfp'>
                        <img className='img img-fluid shadow' src={pfp} alt='' />
                    </div>
                    <div className=' d-flex flex-column justify-content-around align-items-center' style={{ width: "100%" }}>
                        <div className='text-center mt-4'>
                            <p className={`${textColor} headerName mb-0`}>Hamad Ullah</p>
                            <p className={`${textColor} navText `}>Software Engineer</p>
                        </div>
                        <div className='d-flex flex-wrap justify-content-center pt-1'>
                            {mapSocials}
                        </div>
                    </div>
                    <a target='_blank' rel='noreferrer' href={"https://drive.google.com/file/d/11DT1DB8Gt6gICzkeKliw5NdEY1Zj64DY/view?usp=sharing"} className='hireBtn d-flex justify-content-center align-items-center m-2'><FontAwesomeIcon icon={faArrowCircleDown} style={{ color: textColor }} size='lg' /> Resume</a>

                </section>
            </div>
        </header>
    )
}

export default Header
