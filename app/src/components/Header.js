import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
const pfp = '/pfp.jpg'

const socialList = [
    {name: "GitHub", link: "https://github.com/HamadUllah16/"},
    {name: "Linkedin", link: "https://www.linkedin.com/in/hamadullah16/"},
    {name: "Upwork", link: "https://www.upwork.com/freelancers/~019b0b1b1406a889c6"},
    {name: "Freelancer", link: "https://www.freelancer.com/u/HamadUllah18"}
]
const mapSocials = socialList.map((item, index)=>{
    return(
        <div key={index} className='col p-1 navText'><a href={item.link} target='_blank' rel='noreferrer'>{item.name}</a></div>
    )
})
function Header() {
    const [dark, setDark] = useState(false);
    return (
        <header className='container'>
            <div className='container-fluid pt-2'>
                <section className='row'>
                    <div className='col-12 col-lg-6 col-md-6'>
                        <div className='row'>
                            <div className='col d-flex align-items-center headerPfp'>
                                <img className='img img-fluid' src={pfp} alt='' />
                            </div>
                            <div className='col text-start mt-4'>
                                <p className='headerName mb-0'>Hamad Ullah</p>
                                <p className='navText'>Software Engineer | MERN Stack</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 col-md-6 '>
                        <div className=''>
                            <div className='mb-1 mt-3 p-0 d-flex justify-content-end'>
                                <article className={`darkMode text-${dark ? "end" : "left"} px-1`} onClick={()=>setDark(!dark)} ><FontAwesomeIcon icon={faCircle} style={{color: "#fbf650"}} /></article>
                            </div>
                        </div>
                        <div className='row text-end'>
                            {mapSocials}
                        </div>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Header
