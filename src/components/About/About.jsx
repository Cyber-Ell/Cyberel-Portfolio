import React from 'react'

const About = () => {
  return (
    <div>
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
              About Me
            </h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4 mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Get to know more about my journey and passion for creating
              exceptional web experiences.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://public.readdy.ai/ai/img_res/a2414facef7db822760c5aa8ade718fe.jpg"
                alt="Jeremiah A GAmbo- Front-End Developer"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-100 mb-4">
                Front-End Developer with a Passion for Crafting Digital
                Experiences
              </h3>
              <p className="text-gray-300 mb-4">
                With over 2 years of experience in front-end development, I
                specialize in building responsive and scalable websites that
                deliver exceptional user experiences. My journey began with a
                fascination for how design and technology intersect to create
                meaningful digital solutions.
              </p>
              <p className="text-gray-300 mb-4">
                I approach each project with a focus on clean code, performance
                optimization, and intuitive user interfaces. My expertise in
                HTML5, CSS, JavaScript, and React allows me to transform complex
                requirements into elegant, functional websites.
              </p>
              <p className="text-gray-300 mb-6">
                When I'm not coding, you can find me exploring new web
                technologies, Gaming, Gyming or engaging in community events.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Cyber-Ell"
                  className="text-indigo-400 hover:text-indigo-300 flex items-center cursor-pointer"
                >
                  <i className="fab fa-github mr-2"></i> GitHub
                </a>
                <a
                  href="www.linkedin.com/in/jeremiah-gambo-599a36242"
                  className="text-indigo-400 hover:text-indigo-300 flex items-center cursor-pointer"
                >
                  <i className="fab fa-linkedin mr-2"></i> LinkedIn
                </a>
                <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 flex items-center cursor-pointer"
                >
                  <i className="fab fa-twitter mr-2"></i> Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About