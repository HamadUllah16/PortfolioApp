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
                <article className={`rounded-4 ${state.bgColor} ${state.border} col col-sm col-md col-lg pt-3`}>
                    <ul>
                        <p className={`${state.textColor} hammerFont`}>Languages</p>
                        <li className={`${state.textColor} ralewayFont`}>JavaScript ES6 & Nodejs</li>
                        <li className={`${state.textColor} ralewayFont`}>TypeScript</li>
                        <li className={`${state.textColor} ralewayFont`}>Java</li>
                        <li className={`${state.textColor} ralewayFont`}>HTML</li>
                        <li className={`${state.textColor} ralewayFont`}>CSS</li>
                    </ul>
                </article>
                <article className={`rounded-4 ${state.bgColor} ${state.border} col col-sm col-md col-lg pt-3`}>
                    <ul>
                        <p className={`${state.textColor} hammerFont`}>Libraries & Frameworks</p>
                        <li className={`${state.textColor} ralewayFont`}>Next</li>
                        <li className={`${state.textColor} ralewayFont`}>React</li>
                        <li className={`${state.textColor} ralewayFont`}>TailwindCSS</li>
                        <li className={`${state.textColor} ralewayFont`}>Bootstrap5</li>
                        <li className={`${state.textColor} ralewayFont`}>ExpressJs</li>
                    </ul>
                </article>
                <article className={`rounded-4 ${state.bgColor} ${state.border} col col-sm col-md col-lg pt-3`}>
                    <ul>
                        <p className={`${state.textColor} hammerFont`}>Tools</p>
                        <li className={`${state.textColor} ralewayFont ralewayFont`}>Git & GitHub</li>
                        <li className={`${state.textColor} ralewayFont ralewayFont`}>Postman</li>
                        <li className={`${state.textColor} ralewayFont ralewayFont`}>VSCode</li>
                        <li className={`${state.textColor} ralewayFont ralewayFont`}>Android Studio</li>
                    </ul>
                </article>
                <article className={`rounded-4 ${state.bgColor} ${state.border} col col-sm col-md col-lg pt-3`}>
                    <ul>
                        <p className={`${state.textColor} hammerFont`}>Design</p>
                        <li className={`${state.textColor} ralewayFont ralewayFont`}>Figma</li>
                        <li className={`${state.textColor} ralewayFont ralewayFont`}>Wireframes</li>
                        <li className={`${state.textColor} ralewayFont ralewayFont`}>High-Fidelity Design</li>
                    </ul>
                </article>
            </section>
            <hr className={`${state.textColor} ralewayFont`}></hr>
            <p className={`${state.textColor} ralewayFont text-center m-0 py-2`}>All rights reserved - Hamad {date.getFullYear()} </p>
        </section>
    )
}

export default Footer
