"use client";
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "DashDots Robotics",
    role: "SDE Intern",
    duration: "June 2024 – Sept 2024",
    description: [
      "Spearheaded frontend development of an in-house project to connect international students and alumni with aspiring students, achieving a 30% increase in user engagement through an intuitive interface design.",
      "Collaborated with backend teams to integrate and optimize 15+ APIs, improving platform performance by 25% and ensuring seamless data flow across systems.",
      "Utilized Agile methodologies to reduce development cycle times by 20%, consistently meeting project deadlines and delivering high-quality features ahead of schedule."
    ],
  },
  {
    company: "Edunet Foundation (Microsoft & SAP CSR Initiative)",
    role: "AI Intern",
    duration: "Dec 2024 – Jan 2025",
    description: [
      "Developed a computer vision-based ML model for Plant Disease Detection with 90%+ accuracy to detect and classify plant diseases.",
      "Processed and analyzed 20,000+ labeled images using OpenCV, NumPy, and Pandas, ensuring efficient feature extraction and data pre-processing.",
      "Implemented predictive modeling with Scikit-learn, reducing false positives by 12% compared to baseline models."
    ],
  }
];

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      className="relative mb-12 md:mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="p-8 rounded-xl border border-gray-200 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h3 className="text-2xl font-bold text-indigo-600">{experience.role}</h3>
          <span className="text-sm font-medium px-4 py-1 rounded-full bg-indigo-100 text-indigo-800 inline-block mt-2 md:mt-0">
            {experience.duration}
          </span>
        </div>
        
        <h4 className="text-lg font-semibold text-gray-700 mb-4">{experience.company}</h4>
        
        <ul className="space-y-3">
          {experience.description.map((item, i) => (
            <li key={i} className="flex">
              <div className="mr-3 mt-1">
                <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
              </div>
              <p className="text-gray-600 -mt-2">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const page = () => {
  return (
    <div className="px-4 -mt-32">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </div>
    </div>
  );
};

export default page;