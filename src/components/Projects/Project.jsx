import React from 'react'

const Project = () => {
  return (
    <div>
       <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4 mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work and the technologies I've used.
            </p>
          </div>
          <div className="mb-8 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm">
              <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-l-lg hover:bg-indigo-700 focus:outline-none !rounded-button whitespace-nowrap cursor-pointer">
                All Projects
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 border border-gray-600 hover:bg-gray-600 focus:outline-none !rounded-button whitespace-nowrap cursor-pointer">
                React
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 border border-gray-600 hover:bg-gray-600 focus:outline-none !rounded-button whitespace-nowrap cursor-pointer">
                JavaScript
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 border border-gray-600 rounded-r-lg hover:bg-gray-600 focus:outline-none !rounded-button whitespace-nowrap cursor-pointer">
                HTML/CSS
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Dashboard",
                description:
                  "A responsive admin dashboard for e-commerce platforms with real-time analytics and inventory management.",
                image:
                  "https://public.readdy.ai/ai/img_res/5bf31b85573f95fd9848ccdc33c60f87.jpg",
                tech: ["React", "Redux", "Tailwind CSS", "Chart.js"],
                demo: "#",
                github: "#",
              },
              {
                title: "Travel Booking App",
                description:
                  "A travel booking application with interactive maps, destination search, and personalized recommendations.",
                image:
                  "https://public.readdy.ai/ai/img_res/7d630ef9c9dd1719848877558a3219a2.jpg",
                tech: ["JavaScript", "HTML5", "CSS3", "APIs"],
                demo: "#",
                github: "#",
              },
              {
                title: "Fitness Tracker",
                description:
                  "A fitness tracking application that allows users to log workouts, track progress, and set personal goals.",
                image:
                  "https://public.readdy.ai/ai/img_res/7b8ea6ae885840766db41deaf8ce6647.jpg",
                tech: ["React", "Node.js", "MongoDB", "Express"],
                demo: "#",
                github: "#",
              },
              {
                title: "Weather Application",
                description:
                  "A weather forecast application with location-based services, interactive maps, and detailed weather data.",
                image:
                  "https://public.readdy.ai/ai/img_res/59a10d6c34ed545beaf03cb4839dc060.jpg",
                tech: ["JavaScript", "APIs", "CSS3", "HTML5"],
                demo: "#",
                github: "#",
              },
              {
                title: "Task Management Tool",
                description:
                  "A collaborative task management tool with drag-and-drop functionality, team assignments, and deadline tracking.",
                image:
                  "https://public.readdy.ai/ai/img_res/d2c86583029d942dcc5493acdc202f6d.jpg",
                tech: ["React", "Firebase", "Material UI"],
                demo: "#",
                github: "#",
              },
              {
                title: "Portfolio Website",
                description:
                  "A responsive portfolio website template for creative professionals with customizable sections and animations.",
                image:
                  "https://public.readdy.ai/ai/img_res/6341baf61dbba80026191ca29d7785d8.jpg",
                tech: ["HTML5", "CSS3", "JavaScript"],
                demo: "#",
                github: "#",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-indigo-900 text-indigo-200 text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.demo}
                      className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center cursor-pointer"
                    >
                      <i className="fas fa-external-link-alt mr-1"></i> Live
                      Demo
                    </a>
                    <a
                      href={project.github}
                      className="text-gray-300 hover:text-gray-100 font-medium flex items-center cursor-pointer"
                    >
                      <i className="fab fa-github mr-1"></i> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project