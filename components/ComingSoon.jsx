"use client"
import { motion } from 'framer-motion';
import Moon from './Moon';

const ComingSoon = () => {
  return (
    <div className="relative flex items-center justify-center h-screen ">
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
          Coming Soon
        </motion.h1>
        <motion.p
          className="text-xl mt-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          Stay tuned for something amazing!
        </motion.p>
        <motion.div
          className="w-12 h-12 border-4 border-t-white border-opacity-30 rounded-full mt-8 mx-auto"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
};

export default ComingSoon;
