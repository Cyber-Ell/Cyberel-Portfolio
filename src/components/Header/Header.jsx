import React from 'react'

const Header = (props) => {
  return (
    <div>
        <header className="fixed top-0 left-0 right-0 bg-gray-800 shadow-md z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-indigo-400">
            Jeremiah
          </a>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => props.scrollToSection(item)}
                className={`${props.activeSection === item ? "text-indigo-400 font-medium" : "text-gray-300 hover:text-indigo-300"} capitalize transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer`}
              >
                {item}
              </button>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 focus:outline-none !rounded-button whitespace-nowrap cursor-pointer"
            onClick={props.toggleMenu}
          >
            <i
              className={`fas ${props.isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
            ></i>
          </button>
        </div>
        {/* Mobile Navigation */}
        <div
          className={`md:hidden bg-gray-800 ${props.isMenuOpen ? "block" : "hidden"} shadow-lg`}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => props.scrollToSection(item)}
                    className={`${props.activeSection === item ? "text-indigo-400 font-medium" : "text-gray-300"} capitalize py-2 !rounded-button whitespace-nowrap cursor-pointer`}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header