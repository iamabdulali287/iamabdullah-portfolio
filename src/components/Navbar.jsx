import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.theme = darkMode ? "dark" : "light";
  }, [darkMode]);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Project", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white dark:bg-black dark:text-white text-black fixed top-0 w-full z-50 shadow-md">
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 h-16">
        {/* Logo */}
        <div className="text-2xl font-bold">Abdullah</div>

        {/* Nav Links (hidden on mobile) */}
        <div className="hidden md:flex md:space-x-4 lg:space-x-6 justify-center flex-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-gray-500 dark:hover:text-gray-300 text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Dark Mode Toggle (hidden on mobile) */}
        <div className="hidden md:block">
          <button
            onClick={toggleDarkMode}
            className="text-xl hover:scale-110 transition-transform"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-xl"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black text-center py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm hover:text-gray-500 dark:hover:text-gray-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
