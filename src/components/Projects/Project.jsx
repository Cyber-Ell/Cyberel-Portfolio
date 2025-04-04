import React from 'react'
import { projects } from '../../Projects'

const Project = () => {

  const [projectDisplay, SetProjectDisplay] = React.useState(projects)
  const [activeFilter, setActiveFilter] = React.useState("All Projects"); 

  const filteredProjects = (language) => {
    const filtered = projects.filter((project) =>
      project.tech.includes(language)
    )
    SetProjectDisplay(filtered)
  }

  console.log("this is the projectDisplay", projectDisplay)



  const projectList = projectDisplay.map((project, index) => (
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
  ))

  

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
              <button
                onClick={() => {
                  SetProjectDisplay(projects);
                  setActiveFilter("All Projects");
                }}
                className={`px-4 py-2 text-sm font-medium ${
                  activeFilter === "All Projects"
                    ? "bg-indigo-700 text-white"
                    : "bg-gray-700 text-gray-300"
                } rounded-l-lg border border-gray-600 hover:bg-indigo-700 focus:outline-none whitespace-nowrap cursor-pointer`}
              >
                All Projects
              </button>
              <button
                onClick={() => {
                  filteredProjects("React");
                  setActiveFilter("React");
                }}
                className={`px-4 py-2 text-sm font-medium ${
                  activeFilter === "React"
                    ? "bg-indigo-700 text-white"
                    : "bg-gray-700 text-gray-300"
                } border border-gray-600 hover:bg-indigo-700 focus:outline-none whitespace-nowrap cursor-pointer`}
              >
                React
              </button>
              <button
                onClick={() => {
                  filteredProjects("JavaScript");
                  setActiveFilter("JavaScript");
                }}
                className={`px-4 py-2 text-sm font-medium ${
                  activeFilter === "JavaScript"
                    ? "bg-indigo-700 text-white"
                    : "bg-gray-700 text-gray-300"
                } border border-gray-600 hover:bg-indigo-700 focus:outline-none whitespace-nowrap cursor-pointer`}
              >
                JavaScript
              </button>
              <button
                onClick={() => {
                  filteredProjects("HTML5");
                  setActiveFilter("HTML5");
                }}
                className={`px-4 py-2 text-sm font-medium ${
                  activeFilter === "HTML5"
                    ? "bg-indigo-700 text-white"
                    : "bg-gray-700 text-gray-300"
                } rounded-r-lg border border-gray-600 hover:bg-indigo-700 focus:outline-none whitespace-nowrap cursor-pointer`}
              >
                HTML/CSS
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectList}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project