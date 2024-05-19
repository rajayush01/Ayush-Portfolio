"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import React from 'react';
const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Transforming ideas into digital masterpieces, I craft immersive, responsive web experiences with cutting-edge technologies like Next js, React js, Node js, HTML, Tailwind CSS and many more. My passion lies in blending creativity with technical prowess to deliver websites that captivate and engage users on every device.',
    href: "/work"
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: 'Designing intuitive and visually stunning interfaces, I create user experiences that seamlessly blend form and function. Leveraging tools like Figma,Canva and Adobe XD, I bring a meticulous eye for detail and a passion for innovation to every project, ensuring each design is not only beautiful but also highly user-friendly',
    href: ""
  },
  {
    num: '03',
    title: 'Coder',
    description: 'Passionate about coding, I bring ideas to life through clean, efficient, and scalable code. With expertise in languages like C/C++, Java, JavaScript, and Python, I solve complex problems and build robust applications. Continuously learning and adapting, I strive for excellence in every line of code, ensuring innovative solutions that drive success.',
    href: ""
  },
  {
    num: '04',
    title: 'SEO',
    description: 'Optimizing for success, I specialize in enhancing online visibility through strategic SEO practices. By leveraging keyword research, on-page optimization, and insightful analytics, I drive organic traffic and boost search engine rankings, ensuring your digital presence stands out in a competitive landscape',
    href: ""
  }
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[90vh] text-white flex flex-col justify-center py-12 xl:py-0 mt-[-20px]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] mx-[20px] mt-[-20px]"
        >
          {services.map((service, index) => (
            <div key={index} className="flex-1 flex flex-col gap-6">
              <div className="w-full flex justify-between items-center">
                <div className="text-4xl font-extrabold text-outline text-transparent ">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex justify-center items-center"
                >
                  <BsArrowDownRight className="text-black " />
                </Link>
              </div>
              <h2 className="text-4xl font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mt-[-20px] ">
                {service.title}
              </h2>
              <p className="text-white break-words mt-[-10px]">{service.description}</p>
              <div className="border-b border-white w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;