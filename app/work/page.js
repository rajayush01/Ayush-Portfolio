"use client"
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";

const Work = () => {
  const projects = [
    {
      src: "/Learnopia.png",
      title: "Learnopia",
      description:
        "Learnopia is an online learning platform that offers a diverse range of courses in categories like Development, Business, Design, and Lifestyle. It uses React for the frontend, including React Router for routing and Framer Motion for animations. Tailwind CSS is used for styling, providing a responsive and visually appealing design.",
      showFullDescription: false
    },
    {
      src:"/eenshot 2024-05-24 205500.png",
          title:"ShoppingCart",
          description:"The shopping cart application I developed includes several essential features to enhance user experience and functionality. Users can browse a catalog of products with detailed information, images, and prices, displayed in a grid layout for easy navigation. They can effortlessly add or remove items from their cart, with real-time updates reflecting these changes. The application provides a detailed cart summary, showing item names, quantities, individual prices, and the total amount to be paid. Utilizing Tailwind CSS, the design is fully responsive, ensuring a seamless experience on desktops, tablets, and mobile devices. Redux is employed for efficient state management, maintaining consistency across components. Immediate visual feedback is provided for user actions, enhancing interactivity. The application is also optimized for performance, with lazy loading of images and efficient state management practices, and it has been tested for cross-browser compatibility to ensure a consistent user experience across all major browsers.",
      showFullDescription: false
    },
    {
      src:"/GitInsight.png",
      title:"DitInsightPortal",
      description:"Explore GitHub profiles effortlessly! Discover developers, projects, and contributions in a sleek, interactive interface. HTML, CSS, JS craft an interactive hub spotlighting devs & projects. Connect with talent, explore projects, and join the vibrant developer community!",
      
      showFullDescription: false
    },
    {
      src:"/plan.png",
          title:"PlanWithMe",
          description:"PlanWithMe: Your go-to for budget-friendly trips! Browse, select, or dismiss trips effortlessly. Built with React and styled with Tailwind CSS, our site offers a seamless experience. Start planning your next adventure today!",
      showFullDescription: false
    },
    {
      src:"/Disc_clone.png",
          title:"Discord Clone",
          description:"A Discord clone built with Tailwind CSS delivers seamless experiences, mirroring Discord's design while utilizing Tailwind's sleek design for a polished user interface, ensuring a smooth and efficient user experience",
      showFullDescription: false
    },
    {
      src:"/Razorpay.png",
          title:"Razorpay Clone",
          description:"A Razorpay clone built with Tailwind CSS delivers seamless experiences, mirroring Razorpay's design while utilizing Tailwind's sleek design for a polished user interface, ensuring a smooth and efficient user experience",
      showFullDescription: false
    },
    {
      src:"/Designluch.png",
          title:"Designluch-Webflow Website",
          description:"Dive into the world of web design excellence with our showcase website created using the powerful Webflow platform. Witness the seamless integration of stunning animations, engaging interactions, and responsive layouts that demonstrate the full potential of Webflow. From eye-catching hero sections to dynamic content elements, every feature has been meticulously crafted to highlight the versatility and creativity achievable with Webflow. Explore the site and discover how you can elevate your own web design projects with the same level of precision and innovation.",
      showFullDescription: false
    },
    {
      src:"/port.png",
      title:"Portfolio(OLD)",
      description:"This is my personal portfolio website, showcasing my skills and projects in web development. Built using HTML, CSS, and JavaScript, this website features a responsive design and interactive elements. Explore my projects, learn about my skills, and get in touch with me through this website."
,
      showFullDescription: false
    },
    {
      src:"/parallax.png",
          title:"Parallax Website Template",
          description:"Explore an immersive parallax webpage based on TAROT CARD theme with stunning visuals and interactive storytelling. As you scroll, experience a mesmerizing depth effect, unveiling a dynamic world. Its clean, modern design ensures seamless transitions on any device for an unforgettable journey.",
      showFullDescription: false
    },
    
  ];

  const toggleDescription = (index) => {
    const updatedProjects = [...projects];
    updatedProjects[index].showFullDescription = !updatedProjects[index].showFullDescription;
    setProjects(updatedProjects);
  };

  return (
    <div className="flex flex-col items-center justify-center top-0" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10 mt-[-20px]">
        My Projects
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 px-10 w-full">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard
              src={project.src}
              title={project.title}
              description={
                project.showFullDescription
                  ? project.description
                  : project.description.substring(0, 300) + "..."
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
