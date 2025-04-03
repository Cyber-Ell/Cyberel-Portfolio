import React from 'react'

const Skills = () => {
  return (
    <div>
       <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
              My Skills
            </h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4 mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The technologies and tools I use to bring projects to life.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "HTML5",
                icon: "fa-html5",
                color: "text-orange-500",
                description:
                  "Semantic markup, accessibility, and modern HTML features",
              },
              {
                name: "CSS3/SASS",
                icon: "fa-css3-alt",
                color: "text-blue-500",
                description:
                  "Responsive layouts, animations, and custom styling",
              },
              {
                name: "JavaScript",
                icon: "fa-js-square",
                color: "text-yellow-500",
                description:
                  "ES6+, DOM manipulation, and asynchronous programming",
              },
              {
                name: "React",
                icon: "fa-react",
                color: "text-blue-400",
                description:
                  "Component-based architecture and state management",
              },
              {
                name: "Responsive Design",
                icon: "fa-mobile-alt",
                color: "text-purple-500",
                description:
                  "Mobile-first approach and cross-device compatibility",
              },
              {
                name: "Version Control",
                icon: "fa-git-alt",
                color: "text-red-500",
                description: "Git workflow, collaboration, and code management",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex flex-col items-center">
                  <div className={`text-5xl mb-4 ${skill.color}`}>
                    <i className={`fab ${skill.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-100">
                    {skill.name}
                  </h3>
                  <p className="text-gray-300 text-center">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-100">
                Frontend Development
              </h3>
              {[
                { name: "Responsive Design", percentage: 95 },
                { name: "JavaScript/ES6+", percentage: 65 },
                { name: "React & Redux", percentage: 60 },
                { name: "CSS/SASS/Tailwind", percentage: 95 },
              ].map((skill, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-indigo-400 font-medium">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-indigo-500 h-2.5 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-100">
                Additional Skills
              </h3>
              {[
                { name: "UI/UX Principles", percentage: 70 },
                { name: "Performance Optimization", percentage: 65 },
                { name: "Testing & Debugging", percentage: 80 },
                { name: "RESTful APIs", percentage: 75 },
              ].map((skill, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-indigo-400 font-medium">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-indigo-500 h-2.5 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills