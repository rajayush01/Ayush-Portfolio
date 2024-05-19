"use client";
import React from "react";
import { HiOutlineDocumentText } from 'react-icons/hi';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";


import Moon from "./Moon";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "./motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`flex flex-col items-center justify-center xl:mx-[-50px] px-5 w-full z-[20] font-jetbrains xl:mt-10 mt-[50px] sm:mt-[70px] lg:mt-[10px] ${window.innerWidth < 640 ? "content-shift-down" : ""
        }`}
    >
      <Moon />
      <div
        className={`flex flex-col xl:gap-20 justify-center m-auto text-start mt-10 md:flex-row md:items-center md:gap-0 md:mt-[-40px] ${window.innerWidth < 640 ? "content-shift-down" : ""
          }`}
      >
        <div className="md:w-1/2">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box w-[150px] sm:w-[200px] flex flex-row py-[5px] sm:py-[8px] px-[3px] sm:px-[5px] border border-[#7042f88b] opacity-[0.9] mt-[-60px] sm:mt-[-80px] md:py-[3px] sm:py-[3px] md:mt-[-40px]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[5px] sm:mr-[10px] h-5 w-5 sm:h-7 sm:w-7 md:h-4 md:w-4 md:mt-1" />
            <h1 className="Welcome-text text-[15px] sm:text-[20px] md:text-[15px]">
              Web Developer
            </h1>
          </motion.div>
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 text-white max-w-[500px] w-auto h-auto"
          >
            <span
              className={`font-bold ${window.innerWidth < 640
                  ? "text-xl sm:text-3xl hello "
                  : "text-5xl sm:text-6xl xl:text-[80px] lg:text-[77px] md:text-5xl"
                }`}
            >
              Hello I'm <br className="mb-[10px]" />
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ${window.innerWidth < 640
                    ? "text-2xl sm:text-4xl me"
                    : "text-6xl sm:text-7xl xl:text-[90px] lg:text-[90px] md:text-6xl"
                  }`}
              >
                {" "}
                Ayush Raj{" "}
              </span>
            </span>
          </motion.div>
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-sm sm:text-base xl:text-lg md:text-sm text-gray-400 my-5 max-w-[500px]"
          >
            I'm a digital artisan, weaving elegance and functionality into every
            pixel. With a mastery of diverse programming languages and the
            latest technologies, I turn visionary concepts into captivating web
            experiences. <br />
            Let's create something extraordinary together!
          </motion.p>
          <div className="flex flex-row gap-5">
            <Link href="/about" passHref>
              <motion.div
                variants={slideInFromLeft(1)}
                whileTap={{ scale: 0.9 }}
                className="py-2 button-primary text-center text-white cursor-pointer border rounded-lg max-w-[180px] sm:max-w-[200px] w-full px-5"
              >
                Learn More!
              </motion.div>
            </Link>
            <Link href="https://docs.google.com/document/d/1EJ3o3lmQ0EepDCQe0BW0RHFT1iNVzo8Tj2aMx0zf0uc/edit?usp=sharing" passHref>
              <motion.div
                variants={slideInFromLeft(1)}
                whileTap={{ scale: 0.9 }}
                className="py-2 px-3 button-primary text-center text-white cursor-pointer border rounded-lg max-w-[180px] sm:max-w-[200px] w-full"
              >
                Resume
                <HiOutlineDocumentText className="inline-block ml-1 text-xl" />
              </motion.div>
            </Link>
            <a href="https://github.com/rajayush01" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-4xl text-white mt-1" />
            </a>
            <a href="https://www.linkedin.com/in/ayush-raj-223414258/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-4xl text-white mt-1" />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 md:justify-center md:items-center hidden md:flex">
          <motion.div
            variants={slideInFromRight(0.8)}
            className="w-full h-full mt-10 md:mt-0"
          >
            <Image
              src="/mainIconsdark.svg"
              alt="work icons"
              height={500}
              width={500}
              className="w-full h-auto max-h-[400px] sm:max-h-[500px] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroContent;