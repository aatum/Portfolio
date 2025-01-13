import React from "react";

type ProjectCardProps = {
  image: string; // Path to the project's image
  title: string; // Project title
  description: string; // Short description of the project
  link: string; // Link to GitHub or live demo
};

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      {/* Project Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-500 hover:underline"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
