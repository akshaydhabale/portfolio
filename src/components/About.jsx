import React from 'react';
import { Briefcase } from 'lucide-react';
import { aboutMe } from '../data/portfolioData';

const About = () => {
  return (
    <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          About Me
        </h2>
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          {aboutMe.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

