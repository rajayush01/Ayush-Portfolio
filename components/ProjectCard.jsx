import Image from "next/image";
import React from "react";

const ProjectCard = ({ src, title, description, link }) => {
  const handleOpenProject = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Button clicked! Link:', link); // Debug log
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] m-4">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-60 object-cover"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        
        {link && (
          <div className="mt-4 relative z-50 flex justify-center">
            <button
              onClick={handleOpenProject}
              className="px-6 py-2 border  text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer relative z-50 pointer-events-auto"
              type="button"
              style={{ position: 'relative', zIndex: 9999 }}
            >
              View Project
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
