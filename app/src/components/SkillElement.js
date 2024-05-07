import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';

const cards = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}

function SkillElement({ item, index }) {
    const { state } = useContext(ThemeContext);
    return (
        <motion.div variants={cards} whileHover={{ backgroundColor: item.color }} className={`${state.textColor} cardBox`} key={index}>
            <article className='skillBox ' style={{ maxWidth: "60px" }}>
                <article className='p-1'>
                    {item.icon}
                </article>
            </article>
            <article className='mt-1 itemTextBox'>
                <p className='m-0 p-0 text-center ralewayFont skillTitle' >{item.name}</p>
            </article>
        </motion.div>
    )
}

export default SkillElement