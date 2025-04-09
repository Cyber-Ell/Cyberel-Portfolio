import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-950 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#home" className="text-2xl font-bold text-white">
                Jeremiah A Gambo
              </a>
              <p className="mt-2 text-gray-400">Front-End Developer</p>
            </div>
           
            <div className="flex space-x-4">
              <a
                href="https://github.com/Cyber-Ell"
                className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/jeremiah-gambo-599a36242"
                className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-dribbble text-xl"></i>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Jeremiah A Gambo. All rights reserved.
            </p>
            <p className="text-gray-400 mt-4 md:mt-0">
              Last updated: April 3, 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer