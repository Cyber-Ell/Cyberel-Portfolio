import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen  bg-gray-900 text-gray-200 font-sans">
      {/* Header/Navigation */}
      <Header activeSection={activeSection} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} scrollToSection={scrollToSection}/>
      {/* Hero Section */}
      <Hero scrollToSection={scrollToSection}/>

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills/>
      {/* Projects Section */}
      <Project/>

      {/* Contact Section */}
      <Contact/>

      {/* Footer */}
      <Footer/>
      {/* Back to Top Button */}
      <button
        onClick={() => scrollToSection("home")}
        className="fixed bottom-6 right-6 bg-indigo-500 hover:bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-1 z-50 !rounded-button whitespace-nowrap cursor-pointer"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};
export default App;
