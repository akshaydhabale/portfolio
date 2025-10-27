import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = ({ scrollToSection }) => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-16 text-center transform transition-all hover:scale-105">
          <div className="mb-6">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-br from-indigo-500 to-purple-600 shadow-xl ring-4 ring-indigo-100">
              <img 
                src={personalInfo.profileImage}
                alt={`${personalInfo.name} - ${personalInfo.title}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            {personalInfo.name}
          </h1>
          
          <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold mb-6">
            {personalInfo.title}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            <span className="flex items-center gap-2">
              <span className="text-gray-500">📍</span>
              {personalInfo.location}
            </span>
            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <Phone className="w-5 h-5" />
              {personalInfo.phone}
            </a>
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <Mail className="w-5 h-5" />
              {personalInfo.email}
            </a>
          </div>
          
          <div className="mt-8 flex justify-center gap-4">
            <a 
              href={personalInfo.resumePDF}
              download="Akshay_Dhabale_Resume.pdf"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all inline-block"
            >
              Download Resume
            </a>
            <button 
              onClick={() => scrollToSection('experience')}
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-all"
            >
              View Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

