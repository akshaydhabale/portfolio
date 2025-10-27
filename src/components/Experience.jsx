import React from 'react';
import { ChevronDown } from 'lucide-react';
import { experiences } from '../data/portfolioData';

const Experience = () => {
  return (
    <div id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="border-l-4 border-indigo-600 pl-6 py-4 hover:bg-gray-50 rounded-r-xl transition-all"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
                  <p className="text-xl text-indigo-600 font-semibold">{exp.role}</p>
                </div>
                <span className="inline-block mt-2 md:mt-0 px-4 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-semibold">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2 text-gray-700">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-3">
                    <ChevronDown className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

