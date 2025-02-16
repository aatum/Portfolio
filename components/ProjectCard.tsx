import React from "react";

type ProjectCardProps = {
  image: string;
  title: string;
  description: React.ReactNode;
  link: string;
  buttonLabel: string; // New prop for dynamic button text
};

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, link, buttonLabel }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="mt-2 font-bold text-gray-600">{description}</p>
        <div className="mt-auto">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-bold rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
          >
            {buttonLabel} →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
