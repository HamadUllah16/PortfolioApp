import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { ThemeContext } from '../App';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";


const certifications = [
    { image: "https://images.credly.com/size/680x680/images/e91ed0b0-842b-417f-8d2f-b07535febdda/image.png", credly: "https://www.credly.com/badges/b619179c-b71c-4909-a414-f29ac0f34bc7/public_url" },
    { image: "https://images.credly.com/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png", credly: "https://www.credly.com/badges/5e995f35-9c5f-47a4-978b-e38d60753b36/public_url" }
]

function Certificate() {
    const { state } = useContext(ThemeContext);
    return (
        certifications.map((cert, index) => {
            return (
                <motion.div key={index} whileHover={{ backgroundColor: state.darkMode ? "#121212" : "white" }} className="projectLink experience p-3" >
                    <a href={cert.credly} className="certificate d-flex justify-content-end pb-1">
                        <FontAwesomeIcon className={`${state.textColor} linkIcon `} size="xs" icon={faArrowUpRightFromSquare} />
                    </a>
                    <div style={{ maxWidth: "100px" }}>
                        <a href={cert.credly} target="_blank" rel="noreferrer">
                            <img src={cert.image} className="certificate" alt='certificate' /><br></br>
                        </a>
                        <a href={cert.credly} target='_blank' rel="noreferrer" className='verify'>
                            <p className={`btn-light text-center ralewayFont`}>Verify</p>
                        </a>
                    </div>
                </motion.div>
            )
        })
    )
}

export default Certificate
