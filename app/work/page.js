"use client"
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";

const Work = () => {
  const projects = [
    {
      src: "/jobboard.png",
      title: "JobBoard",
      description:
        "JobBoard is a comprehensive job listing platform that connects job seekers with employers. Built using React, it features a user-friendly interface for browsing and applying to jobs, with real-time updates and search functionality. The application is styled with Tailwind CSS for a modern look and uses Framer Motion for smooth animations, enhancing the overall user experience.",
      showFullDescription: false,
      link: "https://job-board-mu-eight.vercel.app/"
    },
    {
      src: "/ecommercehub.png",
      title: "EcommerceHub",
      description:
        "EcommerceHub is a dynamic e-commerce platform that allows users to browse and purchase products seamlessly. Built with React, it features a responsive design using Tailwind CSS and smooth animations powered by Framer Motion. The application includes product listings, a shopping cart, and user authentication, providing a complete online shopping experience.",
      showFullDescription: false,
      link: "https://e-commerce-hub-nine.vercel.app/"
    },
    {
      src: "/codetime.png",
      title: "Codetime-Developer's Pomodoro with Ambient Coding Environments",
      description:
        "Codetime is a web application designed to enhance productivity and focus for developers. It features a Pomodoro timer to manage work sessions and breaks, while also providing ambient coding environments that simulate various coding scenarios. ",
      showFullDescription: false,
      link: "https://code-time-tau.vercel.app/"
    },
    {
      src: "/finance.png",
      title: "Finance Visualizer",
      description:
        "Finance Visualizer is a web application that provides users with an interactive platform to visualize and analyze financial data. It allows users to explore various financial metrics, trends, and insights through dynamic charts and graphs. Built with React, the application utilizes Tailwind CSS for responsive design and Framer Motion for engaging animations, ensuring a smooth user experience.",
      showFullDescription: false,
      link: "https://finance-visualizer-chi.vercel.app/"
    }, 
    {
      src: "/plant-disease.webp",
      title: "Plant Disease Detection System for Sustainable Agriculture",
      description:
        "This system leverages computer vision and machine learning to detect plant diseases from leaf images, aiding farmers in early diagnosis and treatment. Built with Python, TensorFlow, and a deep learning model trained on a diverse dataset, the system predicts plant health with high accuracy. The platform promotes sustainable agriculture by reducing crop loss and improving productivity through timely interventions.",
      showFullDescription: false,
      link: "https://github.com/rajayush01/Plant-Disease-Detection-System-for-Sustainable-Agriculture"
    },
    {
      src: "/qr.jpg",
      title: "QR-Code Authentication: Detecting Original vs. Counterfeit Prints",
      description:
        "This project uses computer vision and machine learning to verify the authenticity of printed QR codes. By analyzing pixel patterns and inconsistencies introduced during unauthorized reproductions, the system can differentiate between genuine and counterfeit prints. It enhances product security in domains like packaging, certifications, and secure tickets.",
      showFullDescription: false,
      link: "https://github.com/rajayush01/QR-Code-Authentication-Detecting-Original-vs.-Counterfeit-Prints"
    },
    {
      src: "/adas.jpg",
      title: "ADAS-ML Project",
      description:
        "An Advanced Driver Assistance System (ADAS) developed using machine learning to enhance vehicle safety. This project includes features like lane detection, object recognition, and driver alertness monitoring. Built using Python, OpenCV, and TensorFlow, it demonstrates real-time image processing and decision-making capabilities for smart transportation.",
      showFullDescription: false,
      link: "https://github.com/rajayush01/ADAS-ML-project"
    },        
    {
      src: "/resq.png",
      title: "RESQ",
      description:
        "RESQ is a disaster response and coordination platform designed to connect people in need with emergency services and volunteers. Built using React, it features real-time updates, an intuitive interface, and smooth animations powered by Framer Motion. Tailwind CSS ensures the platform is responsive and user-friendly across all devices.",
      showFullDescription: false,
      link: "https://resq-final.netlify.app/"
    },
    {
      src: "/placement-gateway.png",
      title: "Placement Gateway",
      description:
        "Placement Gateway is a centralized platform aimed at streamlining campus recruitment processes. It allows students to manage applications, view job listings, and receive real-time updates. Developed using React with React Router for seamless navigation and Framer Motion for interactive UI effects. Tailwind CSS enhances its design with a modern, responsive layout.",
      showFullDescription: false,
      link: "https://placementgateway.netlify.app/"
    }, 
    {
      src: "/devicecrmdashboard.png",
      title: "Device CRM Dashboard",
      description:
        "Device CRM Dashboard is a comprehensive customer relationship management tool designed for device manufacturers and retailers. It provides insights into customer interactions, sales data, and device performance metrics. Built with React, it features dynamic data visualization using charts and graphs, ensuring an intuitive user experience. The dashboard is styled with Tailwind CSS for a modern look and uses Framer Motion for smooth transitions.",
      showFullDescription: false,
      link: "https://device-crm-dashboard-teal.vercel.app/"
    },    
    {
      src: "/Learnopia.png",
      title: "Learnopia",
      description:
        "Learnopia is an online learning platform that offers a diverse range of courses in categories like Development, Business, Design, and Lifestyle. It uses React for the frontend, including React Router for routing and Framer Motion for animations. Tailwind CSS is used for styling, providing a responsive and visually appealing design.",
      showFullDescription: false,
      link: "https://learnopia-eight.vercel.app/"
    },
    {
      src:"/ecommerce.png",
          title:"FashionFusion",
          description:"Crafted with the artistry of HTML, CSS, and JavaScript, this visionary project unveils a captivating online FashionFusion website. Three enigmatic tabs – Men, Women, and Kids – beckon you to indulge in curated collections, where every click unveils a realm of sartorial splendor. Integrating an ingenious API, each product card breathes authenticity, from alluring imagery to tantalizing prices. With JavaScript's mastery, discounts transcend mere numbers, transforming each card into an irresistible invitation to unparalleled savings.",
      showFullDescription: false,
      link: "https://learnopia-eight.vercel.app/"
    },
    {
      src:"/GitInsight.png",
      title:"DitInsightPortal",
      description:"Explore GitHub profiles effortlessly! Discover developers, projects, and contributions in a sleek, interactive interface. HTML, CSS, JS craft an interactive hub spotlighting devs & projects. Connect with talent, explore projects, and join the vibrant developer community!",
      
      showFullDescription: false,
      link: "https://rajayush01.github.io/GitInsightPortal/"
    },
    {
      src:"/plan.png",
          title:"PlanWithMe",
          description:"PlanWithMe: Your go-to for budget-friendly trips! Browse, select, or dismiss trips effortlessly. Built with React and styled with Tailwind CSS, our site offers a seamless experience. Start planning your next adventure today!",
      showFullDescription: false,
      link: "https://plan-with-me-silk.vercel.app/"
    },
    {
      src:"/Disc_clone.png",
          title:"Discord Clone",
          description:"A Discord clone built with Tailwind CSS delivers seamless experiences, mirroring Discord's design while utilizing Tailwind's sleek design for a polished user interface, ensuring a smooth and efficient user experience",
      showFullDescription: false,
      link: "https://discord-clone-six-omega.vercel.app/"
    },
    {
      src:"/Razorpay.png",
          title:"Razorpay Clone",
          description:"A Razorpay clone built with Tailwind CSS delivers seamless experiences, mirroring Razorpay's design while utilizing Tailwind's sleek design for a polished user interface, ensuring a smooth and efficient user experience",
      showFullDescription: false,
      link: "https://razor-pay-clone-using-tailwind.vercel.app/"
    },
    {
      src:"/Designluch.png",
          title:"Designluch-Webflow Website",
          description:"Dive into the world of web design excellence with our showcase website created using the powerful Webflow platform. Witness the seamless integration of stunning animations, engaging interactions, and responsive layouts that demonstrate the full potential of Webflow. From eye-catching hero sections to dynamic content elements, every feature has been meticulously crafted to highlight the versatility and creativity achievable with Webflow. Explore the site and discover how you can elevate your own web design projects with the same level of precision and innovation.",
      showFullDescription: false,
      link: ""
    },
    {
      src:"/port.png",
      title:"Portfolio(OLD)",
      description:"This is my personal portfolio website, showcasing my skills and projects in web development. Built using HTML, CSS, and JavaScript, this website features a responsive design and interactive elements. Explore my projects, learn about my skills, and get in touch with me through this website.",
      showFullDescription: false,
      link: ""
    },
    {
      src:"/parallax.png",
          title:"Parallax Website Template",
          description:"Explore an immersive parallax webpage based on TAROT CARD theme with stunning visuals and interactive storytelling. As you scroll, experience a mesmerizing depth effect, unveiling a dynamic world. Its clean, modern design ensures seamless transitions on any device for an unforgettable journey.",
      showFullDescription: false,
      link: "https://rajayush01.github.io/Parallax-Website-Template/"
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
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
