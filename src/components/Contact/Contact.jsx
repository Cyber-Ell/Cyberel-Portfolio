import React from 'react'

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault() // Prevent the default form submission behavior
    const formData = new FormData(e.target) // Create a FormData object from the form
    const name = formData.get('name') // Get the name field value
    const email = formData.get('email') // Get the email field value
    const message = formData.get('message') // Get the message field value

  }
  // Handle form submission logic here  (e.g., send data to an API, show a success message, etc.)
  const inputFields = document.querySelectorAll('input, textarea') // Select all input and textarea fields
  const resetInputFields = () => {
    inputFields.forEach((field) => {
      field.value = '' }
    )}// Reset each field value to an empty string
  // You can use libraries like Axios or Fetch API to send the data to your server  

  return (
    <div>
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4 mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities?
              I'd love to hear from you.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-sm bg-gray-800 text-gray-200"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-sm bg-gray-800 text-gray-200"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-sm bg-gray-800 text-gray-200"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  onClick={resetInputFields}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Send Message
                </button>
              </form>

            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-800 p-8 rounded-lg h-full">
                <h3 className="text-2xl font-bold mb-6 text-gray-100">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-indigo-400 mt-1 mr-4">
                      <i className="fas fa-envelope text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-100">
                        Email
                      </h4>
                      <p className="text-gray-300">Jeremiahagambo2020@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-indigo-400 mt-1 mr-4">
                      <i className="fas fa-map-marker-alt text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-100">
                        Location
                      </h4>
                      <p className="text-gray-300">Nigeria, Kaduna</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-indigo-400 mt-1 mr-4">
                      <i className="fas fa-clock text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-100">
                        Availability
                      </h4>
                      <p className="text-gray-300">
                        Available for freelance projects
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-lg font-medium text-gray-100 mb-4">
                    Connect with me
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/Cyber-Ell"
                      className="bg-gray-700 hover:bg-indigo-700 hover:text-white text-gray-300 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jeremiah-gambo-599a36242"
                      className="bg-gray-700 hover:bg-indigo-700 hover:text-white text-gray-300 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      href="#"
                      className="bg-gray-700 hover:bg-indigo-700 hover:text-white text-gray-300 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="bg-gray-700 hover:bg-indigo-700 hover:text-white text-gray-300 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
                    >
                      <i className="fab fa-dribbble"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact