"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white hidden sm:flex">
      <div className="container mx-auto flex justify-between items-center font-primary ">
       
      
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row xl:flex justify-end px-20 w-full z-[20] font-jetbrains"
            >
            <a href="https://github.com/rajayush01" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-5xl text-white mx-[120px] sm:mx-[10px] md:mx-[110px]" />
            </a>
          <Link href="/contact" className="md:mx-[-100px]">
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="py-2 px-4 button-primary text-center text-white cursor-pointer border rounded-lg max-w-[400px] w-full hidden sm:flex"
            >
              Hire me
            </motion.div>
          </Link>
          <a href="https://github.com/rajayush01" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-5xl text-white xl:mx-[-110px] sm:mx-[-202px] md:mx-[-100px] lg:mx-[-110px]" />
            </a>
          </motion.div>

        {/* mobile nav */}
      </div>
    </header>
  );
};

export default Header;
