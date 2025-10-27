import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 text-center">
        <p className="text-gray-700 mb-4">© 2025 {personalInfo.name}. All rights reserved.</p>
        <div className="flex justify-center gap-6">
          <a 
            href={personalInfo.linkedin}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href={personalInfo.github}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="text-gray-600 hover:text-indigo-600 transition-colors"
            aria-label="Email Contact"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

