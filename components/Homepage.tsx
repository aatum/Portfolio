import { useRef, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import SkillsSection from "./Skills";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 80, // Offset for secondary navbar height
      behavior: "smooth",
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const sectionPadding = "py-20"; // Reusable padding for sections

  const projects = [
    {
      image: "/siirtoautot.jpg",
      title: "Siirtoautot",
      description: "A cross-platform vehicle sharing app built with Next.js and Ruby on Rails.",
      link: "https://siirtoautot.com",
    },
    {
      image: "/portfoliopage.jpg",
      title: "Personal Portfolio",
      description: "A personal portfolio website built with Next.js and Tailwind CSS.",
      link: "",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="font-sans bg-gray-100">
      {/* Main Navbar */}
      <header className="fixed top-0 w-full bg-gray-800 text-white z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Aatu Marttila</h1>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/aatum"
              className="hover:text-blue-400 flex items-center"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/aatu-marttila/"
              className="hover:text-blue-400 flex items-center"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="/resume_aatu1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm font-medium"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      {/* Secondary Navbar */}
      <nav className="fixed top-16 w-full bg-gray-100 shadow-lg z-40">
        <div className="container mx-auto px-4 py-2 flex justify-center space-x-6 text-sm font-medium text-gray-800">
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="hover:text-blue-400"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(skillsRef)}
            className="hover:text-blue-400"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection(projectsRef)}
            className="hover:text-blue-400"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className="hover:text-blue-400"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center pt-24 pb-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center"
        >
          <motion.div
            variants={fadeInUp}
            className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg mb-6 md:mb-0 md:mr-8"
          >
            <img
              src="/portfoliopic.jpg"
              alt="Aatu Marttila"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h1 className="text-5xl font-extrabold text-gray-800">
              Hey there! I am Aatu Marttila,
            </h1>
            <p className="mt-4 text-lg font-extrabold text-gray-600">
              A tech enthusiast on a mission to create impactful and user-focused software.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        className={`${sectionPadding} text-center flex flex-col items-center`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-5xl font-extrabold text-gray-800">About Me</h2>
        <p className="mt-4 font-extrabold text-gray-600 max-w-2xl">
          I started studying Business Information Technology at Haaga-Helia University of Applied Sciences in 2021, and I recently graduated with a Bachelor’s degree. This portfolio showcases the skills I’ve developed and the projects I’ve worked on along the way.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        ref={skillsRef}
        className={`${sectionPadding} text-center flex flex-col items-center`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <SkillsSection />
      </motion.section>

      {/* Projects Section */}
      <motion.section
        ref={projectsRef}
        className={`${sectionPadding} text-center`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-5xl font-extrabold text-gray-800">Projects</h2>
        <div className="relative w-full max-w-3xl mx-auto mt-8">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                  style={{ width: "100%" }}
                >
                  <ProjectCard
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            ◀
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            ▶
          </button>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        className={`${sectionPadding} text-center flex flex-col items-center`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-5xl font-extrabold text-gray-800">Contact Me</h2>
        <p className="mt-4 font-extrabold text-gray-600 max-w-2xl">
          I’m currently seeking a position as a software developer. Let’s connect!
        </p>
        <div className="mt-12">
          <a
            href="mailto:aatumarttila@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded shadow hover:bg-blue-400"
          >
            Let’s connect! 🚀
          </a>
        </div>
      </motion.section>
    </div>
  );
}
