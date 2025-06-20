function Education() {
  return (
    <div className=" dark:bg-black dark:text-white  py-16 " id="education">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>

        <div className="flex items-center w-full">
          <h5 className="text-2xl font-semibold">
            Bachelor Of Computer Science
          </h5>
          <span className="ml-auto text-sm">2020-2024</span>
        </div>
        <p className="py-2" >HAZARA UNIVERSITY MANSEHRA, PAKISTAN</p>
        <p className="text-sm mb-2">
          I completed a Bachelor's degree in Computer Science from Hazara
          University, specializing in Data Structures and Algorithms, Software
          Architecture, and Software Development Fundamentals. The program
          provided a strong foundation in both theoretical concepts and
          practical skills. Key subjects studied:
        </p>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Computer Software Development</li>
          <li>Data Structures and Algorithms</li>
          <li>Web Development</li>
          <li>Communication and Research</li>
          <li>Object-Oriented Programming</li>
          <li>Database Management</li>
        </ul>

        <div className=" dark:bg-black dark:text-white mt-12 pb-20 ">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="flex items-center w-full">
            <h5 className="text-2xl font-semibold">
              FrontEnd Developer Intern
            </h5>
            <span className="ml-auto text-sm">Jan-2025 - April-2025</span>
          </div>
          <p className="py-2">HSSOLS.COM | ISLAMABAD</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Learned JavaScript, Bootstrap, Tailwind CSS, and React.js</li>
            <li>Converted Figma designs into responsive websites</li>
            <li>Improved front-end development skills during the internship</li>
          </ul>
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="px-4 py-2 border border-black dark:border-white text-sm rounded-md font-medium text-black dark:text-white hover:scale-105 transition-transform duration-300">
              JavaScript
            </span>
            <span className="px-4 py-2 border border-black dark:border-white text-sm rounded-md font-medium text-black dark:text-white hover:scale-105 transition-transform duration-300">
              Bootstrap
            </span>
            <span className="px-4 py-2 border border-black dark:border-white text-sm rounded-md font-medium text-black dark:text-white hover:scale-105 transition-transform duration-300">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 border border-black dark:border-white text-sm rounded-md font-medium text-black dark:text-white hover:scale-105 transition-transform duration-300">
              React.js
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Education;
