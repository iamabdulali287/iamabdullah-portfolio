import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn, FaMedium } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" dark:bg-black dark:text-white py-8 ">
      <div className=" container mx-auto px-8 md:px-16 lg:px-24">
        <div className=" flex flex-col md:flex-row  md:space-x-12 items-center mb-4">
          <div className=" flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Abdullah</h3>
            <p className="text-black  dark:text-white text-sm">
             Front-End Developer passionate about crafting clean and responsive web experiences.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full p-2 rounded-1-lg   bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 text-white"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-4 items-center flex flex-col md:flex-row justify-between">
          <p className="text-black  dark:text-white">
            &copy; {new Date().getFullYear()} Abdullah , All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a
              href="#"
              className="text-black dark:text-white mt-3 hover:text-blue-600 dark:hover:text-green-400"
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              className="text-black dark:text-white mt-3 hover:text-blue-600 dark:hover:text-green-400"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="text-black dark:text-white mt-3 hover:text-blue-600 dark:hover:text-green-400"
            >
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="" className="text-black  dark:text-white hover:text-white">
              Privacy
            </a>
            <a href="" className="text-black  dark:text-white hover:text-white">
              Terms of Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
