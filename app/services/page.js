"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import React from 'react';
const services = [
  {
    num: '01',
    title: 'Software Development',
    description: 'Building reliable and scalable software solutions tailored to business needs. With strong expertise in full-stack development, I design and implement robust systems using modern technologies, ensuring high performance, maintainability, and seamless user experiences.',
    href: "/work"
  },
  {
    num: '02',
    title: 'Machine Learning',
    description: 'Turning data into intelligence, I develop ML models that learn from patterns and make accurate predictions. From data preprocessing to model deployment, I harness tools like Python, Scikit-learn, TensorFlow, and more to build solutions that automate and optimize decision-making processes.',
    href: ""
  },
  {
    num: '03',
    title: 'Data Science',
    description: 'Driven by curiosity and data, I uncover actionable insights from complex datasets. Using Python, Pandas, NumPy, and visualization tools like Matplotlib and Power BI, I help businesses make informed decisions with data-backed storytelling and deep analytics.',
    href: ""
  },
  {
    num: '04',
    title: 'Web Development',
    description: 'Transforming ideas into digital experiences, I build fast, responsive, and interactive websites using technologies like React.js, Next.js, Tailwind CSS, and Node.js. I focus on clean design and functionality that captivates users and scales effortlessly.',
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
