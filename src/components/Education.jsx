import React from 'react';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <div id="education" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border-l-4 ${
                edu.type === 'masters' ? 'border-indigo-600' : 'border-purple-600'
              }`}
            >
              <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
              <p className="text-gray-700">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

