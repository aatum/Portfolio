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
      top: ref.current.offsetTop - 80, 
      behavior: "smooth",
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const sectionPadding = "py-20"; 

  const projects = [
    {
      image: "/siirtoautot_esim.jpg",
      title: "Siirtoautot",
      description: (
        <>
          Siirtoautot is a cross-platform vehicle-sharing application that allows users to search for rides across Finland and transfer vehicles free of charge from one location to another. The frontend is built with TypeScript and Next.js, while the backend uses Ruby on Rails and a RESTful API. The app also implements Progressive Web App (PWA) technology, and supports both Android and iOS platforms using a shared codebase. <b><br></br><span className="italic">Please note that the code for this project cannot be shared, as it is owned by the company.</span></b>
        </>
      ),
            link: "https://siirtoautot.com",
    },
    {
      image: "/portfoliopage.jpg",
      title: "Personal Portfolio",
      description: "A personal portfolio website built with Next.js and Tailwind CSS, designed to showcase my projects, skills and journey as a software developer so far. The porfolio features interactive sections to highlight my work, skills, and contact information. It is hosted on Vercel, ensuring seamless deployments and continuous integration for future updates.",
      link: "https://github.com/aatum/Portfolio",
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
              className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm font-bold"
            >
              Resume
            </a>
            <a
              href="https://www.theseus.fi/bitstream/handle/10024/871722/Marttila_Aatu.pdf?sequence=2&isAllowed=y"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm font-bold"
            >
              Thesis
            </a>
          </div>
        </nav>
      </header>

      <nav className="fixed top-16 w-full bg-gray-100 shadow-lg z-40">
        <div className="container mx-auto px-4 py-2 flex justify-center space-x-6 text-md font-bold text-gray-800">
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
          I started studying Business Information Technology at Haaga-Helia University of Applied Sciences in 2021, and I recently graduated with a Bachelor’s degree. This portfolio showcases the skills I’ve developed and the projects I’ve worked on along the way. 🌟 <br />
          <br></br>
          During my studies, I completed a six-month internship at Autolle.com, where I was part of the software development team. I worked on a multiplatform application, focusing on frontend development and gaining hands-on experience in building, testing, and publishing mobile apps for both Android and iOS platforms. This experience gave me a deeper understanding of the entire software development lifecycle and solidified my passion for creating user-friendly and functional applications. 🛠️<br></br>
          <br></br>
          Overall, I’ve been diving into full-stack development, exploring both frontend and backend to expand my skillset. Each challenge has been an opportunity to learn, and I love the process of turning ideas into creative solutions. 💡
          <br></br>
          <br></br>
          Take a look around and explore the projects I’ve worked on and the skills I’ve developed. I’m currently looking for exciting opportunities to kickstart my career as a software developer. If you’re hiring or have a project in mind, don’t hesitate to reach out—I’d love to bring my skills and passion to your team! 🤝
        </p>
      </motion.section>

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

      <motion.section
  ref={projectsRef}
  className={`${sectionPadding} text-center relative`}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <h2 className="text-5xl font-extrabold text-gray-800">Projects</h2>
  <div className="relative w-full max-w-3xl mx-auto mt-8 overflow-visible">
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
      className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded shadow-lg hover:bg-gray-700"
    >
      ◀
    </button>
    <button
      onClick={handleNext}
      className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded shadow-lg hover:bg-gray-700"
    >
      ▶
    </button>
  </div>
</motion.section>


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
        I’m currently seeking for a position as a software developer. I can do other ICT-related stuff as well. If you have any questions or would like to work together, feel free to reach out!
        </p>
        <div className="mt-12">
          <a
            href="mailto:aatumarttila@gmail.com"
            className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white text-sm font-bold rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
            >
            Let’s connect! 🚀
          </a>
        </div>
      </motion.section>
    </div>
  );
}
