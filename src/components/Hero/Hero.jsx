import React from 'react'

const Hero = (props) => {
  return (
    <div>
        <section
        id="home"
        className="relative min-h-screen flex items-center pt-16 sm:pt-20"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://public.readdy.ai/ai/img_res/191455120dc157521d59bea2e1ee09de.jpg')`,
          }}
        >
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/30 z-10"></div>
        
        <div className="container mx-auto px-3 md:px-6 z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-100">
              Hi, I'm <span className="text-indigo-400">Jeremiah A Gambo</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-300">
              Front-End Developer
            </h2>
            <p className="text-xl mb-8 text-gray-400">
              Building responsive and scalable web experiences that combine
              creativity with technical excellence.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <button
                onClick={() =>props.scrollToSection("projects")}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 !rounded-button whitespace-nowrap cursor-pointer"
              >
                View Projects
              </button>
              <button
                onClick={() => props.scrollToSection("contact")}
                className="border-2 border-indigo-400 text-indigo-400 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-lg transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero