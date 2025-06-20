import React, { useState } from "react";
import emailjs from "emailjs-com";

import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g231mbu",
        "template_okpxczk",
        e.target,
        "F0ID-MaBqXHtkLzwB"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFullName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <div className=" dark:bg-black dark:text-white" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              let's Talk
            </h3>
            <p className="text-sm">
              I'm open to opportunities and collaborations — let's get in touch!
            </p>
            <div className="mb-4 mt-8 ">
              <FaEnvelope className="inline-block text-green-400 mr-2">
                <a
                  href="mailto:youremail@example.com"
                  className="hover:underline"
                ></a>
              </FaEnvelope>
              iamabdulali287@example.com
            </div>
            <div className="mb-4 mt-8 ">
              <FaPhone className="inline-block text-green-400 mr-2"></FaPhone>
              <span>+923165249453</span>
            </div>
            <div className="mb-4 mt-8 ">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt>
              <span>Islamabad, Pakistan </span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    name="user_name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    type="text"
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <input
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                  rows="5"
                  placeholder="Enter your message"
                  required
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-semibold rounded-md w-full shadow-lg hover:scale-105 transform transition-transform duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
