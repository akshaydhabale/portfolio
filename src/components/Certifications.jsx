import React from 'react';
import { Award } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const Certifications = () => {
  return (
    <div id="certifications" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Award className="w-6 h-6 text-white" />
          </div>
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-xl text-white text-center transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              <Award className="w-12 h-12 mx-auto mb-4" />
              <p className="font-semibold">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;

