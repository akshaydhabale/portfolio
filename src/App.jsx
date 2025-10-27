import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import Personal from './components/Personal';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import TestimonialsLocal from './components/TestimonialsLocal';
import Contact from './components/Contact';
import Footer from './components/Footer';

function PortfolioContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <Navigation 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      
      <ThemeToggle />
      
      <Personal scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <TestimonialsLocal />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
