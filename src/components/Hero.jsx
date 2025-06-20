import React from "react";
import HeroImage from "../assets/abdullah2.jpg";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";
import {
  FaFacebook,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaMedium,
} from "react-icons/fa";

function Hero() {
  const skills = [
    {
      name: "JavaScript",
      icon: <SiJavascript size={40} />,
      color: "bg-yellow-500",
    },
    { name: "React.js", icon: <SiReact size={40} />, color: "bg-blue-500" },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={40} />,
      color: "bg-cyan-500",
    },
    {
      name: "Bootstrap 5",
      icon: <SiBootstrap size={40} />,
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="py-16 dark:bg-black dark:text-white  mt-[55px]" id="home">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* 👤 Left Section */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-5xl font-semibold ">Abdullah</h1>
          <span className="mt-2 text-2xl font-semibold">
            FrontEnd Developer
          </span>
          <div className="flex gap-4 mt-2">
            <p className="flex items-center gap-1">
              <FaEnvelope className="text-lg" />
              iamabdulali287@gmail.com
            </p>
            <p className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-lg" />
              Islamabad, Pakistan
            </p>
          </div>
          <p className=" max-w-md mt-4 text-sm text-black dark:text-white">
            A goal-oriented Front-End Developer with experience in building
            responsive web applications using modern technologies like React.js,
            Tailwind CSS, and more. I’m passionate about creating clean,
            efficient, and user-friendly interfaces, and I’m eager to leverage
            my skills to deliver exceptional user experiences.
          </p>
          <div className="mt-8 space-x-4 flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex space-x-4">
              <a
                href="/abdullahcv.pdf"
                download
                className="flex items-center gap-2 bg-gray-400 dark:bg-white text-black dark:text-black transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-md"
              >
                <ArrowDownIcon className="h-4 w-4" />
                Resume
              </a>
              <a
                href="#"
                className=" text-xl text-black dark:text-white mt-3 hover:text-blue-600 "
              >
                <FaFacebook />
              </a>

              <a
                href="#"
                className=" text-xl text-black dark:text-white mt-3 hover:text-blue-600 "
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="text-xl text-black dark:text-white mt-3 hover:text-blue-600"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:youremail@gmail.com"
                className=" text-xl text-black dark:text-white mt-3 hover:text-blue-600"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/*  Right Section - Skill Cards with Icons */}
        <div className="grid grid-cols-2 gap-6 mt-10 md:mt-0">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Skill box with icon and name inside */}
              <div
                className={`w-32 h-32 bg-gray-300 dark:bg-gray-700 rounded-md shadow-md flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110  ${
                  skill.name === "React.js" ? "animate-updown" : ""
                }`}
              >
                {/* Icon with animation */}
                <div
                  className={`text-4xl text-black dark:text-white mb-2 ${
                    skill.name === "React.js"
                      ? "animate-rotate"
                      : "animate-float"
                  }`}
                >
                  {skill.icon}
                </div>

                {/* Skill name below icon */}
                <p className="text-sm font-medium text-black dark:text-white">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
