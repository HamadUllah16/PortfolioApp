import React, { useContext } from 'react'
import { ThemeContext } from '../App';
const date = new Date();
function Footer() {
    const { state } = useContext(ThemeContext);

    return (
        <section className='footerMain container-md'>
            <section className={`row gap-3 m-0 `}>
                {/* <article className={`rounded-4 ${boxColor} col-3 col-lg-2 col-md-3 d-flex align-items-center justify-content-center logoBox`}>
                    <img className='img img-fluid footerLogo' src={state.darkMode ? logoDark : logo} alt='logo' />
                </article> */}
                <article className={`rounded-4 ${state.bgColor} ${state.border} col pt-3`}>
                    <ul>
                        <p className={`${state.textColor} hammerFont`}>Projects</p>
                        <li className={`${state.textColor} ralewayFont`}>Little Lemon</li>
                        <li className={`${state.textColor} ralewayFont`}>Yelp Camps</li>
                    </ul>
                </article>
                <article className={`rounded-4 ${state.bgColor} ${state.border} col pt-3`}>
                    <ul>
                        <p className={`${state.textColor} hammerFont`}>Services</p>
                        <li className={`${state.textColor} ralewayFont`}>SPA Development</li>
                        <li className={`${state.textColor} ralewayFont`}>Web App Development</li>
                        <li className={`${state.textColor} ralewayFont`}>UI/UX</li>
                    </ul>
                </article>
                <article className={`rounded-4 ${state.bgColor} ${state.border} col pt-3`}>
                    <ul>
                        <p className={`${state.textColor} hammerFont`}>Hire</p>
                        <li className={`${state.textColor} ralewayFont ralewayFont`}>Upwork</li>
                        <li className={`${state.textColor} ralewayFont ralewayFont`}>Freelancer</li>
                        <li className={`${state.textColor} ralewayFont ralewayFont`}>Linkedin</li>
                    </ul>
                </article>
            </section>
            <hr className={`${state.textColor} ralewayFont`}></hr>
            <p className={`${state.textColor} ralewayFont text-center m-0 py-2`}>All rights reserved - Hamad {date.getFullYear()} </p>
        </section>
    )
}

export default Footer
