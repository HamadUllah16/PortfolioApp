// Preloader.js
import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <div className="preloader-container">
            <motion.div
                className="preloader-text"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: 'easeInOut' }} // Adjust duration and easing as needed
            >
                Hamad
            </motion.div>
        </div>
    );
};

export default Preloader;
