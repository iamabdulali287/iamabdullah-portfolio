import {FaHtml5,FaCss3Alt,FaJs,FaReact,FaGit,FaGithub,FaFigma,} from "react-icons/fa";
import {SiTailwindcss,SiBootstrap,SiVscodium,SiVercel,} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-1xl text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-1xl text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-1xl text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-1xl text-cyan-400" /> },
    {name: "Tailwind CSS", icon: <SiTailwindcss className="text-1xl text-sky-400" />,},
    {name: "Bootstrap", icon: <SiBootstrap className="text-1xl text-purple-600" />,},
  ];
  const tools = [
    { name: "Git", icon: <FaGit className="text-1xl text-red-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-1xl text-gray-800" /> },
    {name: "VS Code", icon: <img src="/vscode.png" alt="VS Code" className="w-6 h-6" />,},
    { name: "Figma", icon: <FaFigma className="text-1xl text-pink-500" /> },
    { name: "Vercel", icon: <SiVercel className="text-1xl text-black" /> },
  ];

  return (
    <div className="dark:bg-black dark:text-white py-16" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <p className="text-sm mb-4">
          Technologies and tools I've worked with throughout my projects and
          experience
        </p>
        <h3 className="text-2xl font-semibold mb-4">Front End</h3>

        <div className="flex flex-wrap gap-4 mb-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-full bg-gray-300 dark:bg-gray-700 transition-transform duration-300 hover:scale-110">
                {skill.icon}
              </div>
              <p className="mt-1 text-sm font-medium text-black dark:text-white">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-semibold mb-4">Tools & Platforms</h3>

        <div className="flex flex-wrap gap-4">
          {tools.map((tool, index) => (
            <div key={index}>
              <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-full bg-gray-300 dark:bg-gray-700 transition-transform duration-300 hover:scale-110">
                {tool.icon}
              </div>
              <p className="mt-1 text-sm font-medium text-black dark:text-white">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
