import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap } from "react-icons/si";
import MedicalAthletic from "../assets/ProjectsImages/MedicalAthletic.png";
import Edge360AI from "../assets/ProjectsImages/Edge360Ai.png";

function App() {
  const allSkills = {
    HTML5: { name: "HTML5", icon: <FaHtml5 className="text-1xl text-orange-600" /> },
    CSS3: { name: "CSS3", icon: <FaCss3Alt className="text-1xl text-blue-600" /> },
    Bootstrap: { name: "Bootstrap", icon: <SiBootstrap className="text-1xl text-purple-600" /> },
    JavaScript: { name: "JavaScript", icon: <FaJs className="devicon-javascript-plain text-yellow-400 text-xl" /> },
    React: { name: "React", icon: <FaReact className="devicon-react-original text-blue-400 text-xl" /> },
    Tailwind: { name: "Tailwind", icon: <SiTailwindcss className="devicon-tailwindcss-original text-cyan-400 text-xl" /> },
  };

  const projects = [
    {
      title: "Medical Athletic",
      description:
        "A responsive website for a medical athletic center built using HTML, CSS, and Bootstrap.",
      image: MedicalAthletic,
      github: "https://github.com/iamabdulali287/Medical-Athelitic",
      live: "https://iamabdulali287.github.io/Medical-Athelitic/",
      skills: ["HTML5", "CSS3", "Bootstrap"],
    },
    {
      title: "Edge360AI",
      description:
        "Edge360AI is a responsive landing page built with React.js and Tailwind CSS, designed to showcase AI services with a clean, modern layout and mobile-friendly design.",
      image: Edge360AI,
      github: "https://github.com/yourusername/",
      live: "https://react-landing-page-v2.vercel.app/",
      skills: ["JavaScript", "React", "Tailwind"],
    },
  ];

  return (
    <div className="dark:bg-black dark:text-white pb-16">
      <div className="container dark:bg-black dark:text-white px-8 md:px-16 lg:px-24 mx-auto py-16">
        <h1
          className="dark:text-white text-3xl font-bold text-center mb-10"
          id="project"
        >
          My Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-transform hover:scale-105 flex flex-col h-full"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 flex flex-col h-full">
                <div>
                  <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                  <p className="text-black text-sm mb-4">{project.description}</p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-4 mb-4">
                    {project.skills.map((skillKey, i) => {
                      const skill = allSkills[skillKey];
                      return (
                        <div key={i}>
                          <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-full bg-gray-300 dark:bg-gray-700 transition-transform duration-300 hover:scale-110">
                            {skill.icon}
                          </div>
                          <p className="mt-1 text-sm font-medium text-black dark:text-white text-center">
                            {skill.name}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-between">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white text-sm px-4 py-1 rounded hover:bg-blue-500"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
