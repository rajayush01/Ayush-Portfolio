"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react';

const transitionVariants = {
    initial: {
        x: '100%',
        width: '100%',
    },
    animate: {
        x: '0%',
        width: '0%',
    },
    exit: {
        x: ['0%', '100%'],
        width: ['0%', '100%'],
    },
};

const Transition = ({ children }) => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname} // Ensure the key changes with pathname to trigger animation
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#203b64]'
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
            />
            <motion.div
                key={pathname} // Ensure the key changes with pathname to trigger animation
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#254a82]'
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
            />
            <motion.div
                key={pathname} // Ensure the key changes with pathname to trigger animation
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#2c5ba0]'
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
            />
            {children}
        </AnimatePresence>
    );
};

export default Transition;
