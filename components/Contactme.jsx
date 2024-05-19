"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import Moon from './Moon';

const Contactme = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen ">
      <Moon />
      <motion.div
        className="text-center text-white mt-[-250px]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.h1
          className="text-6xl font-bold"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Contact Me!
        </motion.h1>
        <motion.p
          className="text-xl mt-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          Let's transform the digital landscape with creativity and precision! 
        </motion.p>
        
      </motion.div>
      <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row xl:flex justify-center px-20 w-full z-[20] font-jetbrains mt-5"
            >
            
          <Link href="https://forms.gle/RhyfyCJteKZCXmBY7">
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="py-2 px-4 button-primary text-center text-white cursor-pointer border rounded-lg max-w-[400px] w-full"
            >
              Contact me
            </motion.div>
          </Link>
          </motion.div>
    </div>
  );
};

export default Contactme;
