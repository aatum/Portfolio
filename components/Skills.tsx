import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiReact,
  SiTailwindcss, 
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiRuby,
  SiPython,
  SiNextdotjs,
  SiHtml5,
  SiGit,
  SiVercel,
  SiJira
} from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { AiOutlineApi } from "react-icons/ai";
import { FaReact, FaRobot } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { AiOutlineOpenAI } from "react-icons/ai";
import { IoLogoGitlab } from "react-icons/io5";


const skillCategories = {
  frontend: [
    {
      id: 1,
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500 text-4xl" />, 
      description: "TypeScript has been the main programming language at most of the projects I've been involved with.",
    },
    {
      id: 2,
      name: "React",
      icon: <SiReact className="text-blue-400 text-4xl" />, 
      description: "I have experience building dynamic user interfaces using React.",
    },
    {
      id: 3,
      name: "Next.js",
      icon: <SiNextdotjs className="text-gray-800 text-4xl" />, 
      description: "I use Next.js for building server-rendered React applications with enhanced performance. This portfolio and Siirtoautot app were built by using Next.js.",
    },
    {
      id: 4,
      name: "HTML",
      icon: <SiHtml5 className="text-orange-500 text-4xl" />, 
      description: "I have a solid understanding of HTML for structuring web content effectively.",
    },
    {
      id: 5,
      name: "React Native",
      icon: <FaReact className="text-blue-400 text-4xl" />, 
      description: "I've used React Native to build cross-platform mobile applications.",
    },
    {
      id: 6,
      name: "Styling Libraries",
      icon: <SiTailwindcss className="text-blue-500 text-4xl" />,
      description: "I've used many different styling libraries, including Tailwind CSS and Material UI, for modern, responsive designs.",
    },
  ],
  backend: [
    {
      id: 7,
      name: "Node.js",
      icon: <FaNodeJs className="text-green-600 text-4xl" />, 
      description: "Node.js is familiar to me with creating backend services and APIs, focusing on performance and scalability.",
    },
    {
      id: 8,
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500 text-4xl" />, 
      description: "MongoDB is my preferred NoSQL database for building flexible, scalable backend systems.",
    },
    {
      id: 9,
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-600 text-4xl" />,
      description: "I used PostgreSQL at my internship and got to learn how it works.",
    },
    {
      id: 10,
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-500 text-4xl" />, 
      description: "I learned the fundamentals of Firebase at school, and built one mobile app by using Firebase as a backend service.",
    },
    {
      id: 11,
      name: "REST API",
      icon: <AiOutlineApi className="text-gray-600 text-4xl" />, 
      description: "I have experience with implementing RESTful APIs, to ensure smoot communication between the client and server.",
    },
    {
      id: 12,
      name: "Ruby on Rails",
      icon: <SiRuby className="text-red-600 text-4xl" />, 
      description: "I learned fundamentals of Ruby on Rails at my internship, where Ruby on Rails was the main programming language.",
    },
    {
      id: 13,
      name: "Python",
      icon: <SiPython className="text-blue-400 text-4xl" />, 
      description: "I did Python programming course at school, also used Python to build a Telegram bot.",
    },
  ],
  other: [
    {
      id: 14,
      name: "Figma",
      icon: <FiFigma className="text-pink-500 text-4xl" />, 
      description: "I used Figma at school and my internship as a planning tool at various projects.",
    },
    {
      id: 15,
      name: "Git",
      icon: <SiGit className="text-red-500 text-4xl" />, 
      description: "I've used Git for version control on software projects during recent years.",
    },
    {
      id: 16,
      name: "OpenAI",
      icon: <AiOutlineOpenAI className="text-purple-500 text-4xl" />,
      description: "I explore AI models like OpenAI as a tool to build intelligent and interactive applications.",
    },
    {
      id: 17,
      name: "Software Testing",
      icon: <FaRobot className="text-gray-500 text-4xl" />,
      description: "I completed software testing courses at school and applied testing techniques during projects.",
    },
    {
      id: 18,
      name: "GitLab",
      icon: <IoLogoGitlab className="text-orange-500 text-4xl" />,
      description: "I used GitLab for continuous integration and DevOps tasks during my internship.",
    },
    {
      id: 19,
      name: "Vercel",
      icon: <SiVercel className="text-black text-4xl" />, 
      description: "I use Vercel to deploy and host my projects, leveraging its seamless integration with Next.js for fast and efficient deployments.",
    },
    {
      id: 24,
      name: "Jira",
      icon: <SiJira className="text-blue-700 text-4xl" />, 
      description: "I used Jira for project management and tracking tasks during team-based projects.",
    },
    
  ],
};

export default function SkillsSection() {
  const [selectedSkillId, setSelectedSkillId] = useState<number | null>(null);

  const handleSkillClick = (skillId: number) => {
    setSelectedSkillId((prevId) => (prevId === skillId ? null : skillId)); 
  };

  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-5xl font-extrabold text-gray-800">Skills</h2>
      <p className="mt-4 font-extrabold text-gray-600 max-w-2xl mx-auto">
        Click on a skill to learn more about my experience.
      </p>

{Object.entries(skillCategories).map(([category, skills]) => (
  <div key={category} className="mt-12">
    <h3 className="text-2xl font-bold text-gray-700 capitalize">{category}</h3>

    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="flex flex-col items-center cursor-pointer h-36 relative" 
          onClick={() => handleSkillClick(skill.id)}
        >
          <div className="text-4xl z-0">{skill.icon}</div>

          <p className="mt-2 font-medium text-gray-600 z-0">{skill.name}</p>

          <div className="mt-2 w-32 text-center z-10">
            {selectedSkillId === skill.id && (
              <motion.div
                className="bg-gray-100 text-gray-500 font-bold p-2 rounded-md shadow-sm absolute z-10"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
              >
                {skill.description}
              </motion.div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
))}

    </section>
  );
}
