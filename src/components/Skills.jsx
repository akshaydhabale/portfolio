import React, { useState } from 'react';
import { Code, Database, Brain, BarChart3 } from 'lucide-react';
import { skills } from '../data/portfolioData';

const iconMap = {
  cloud: <Code className="w-8 h-8" />,
  data: <Database className="w-8 h-8" />,
  ai: <Brain className="w-8 h-8" />,
  analytics: <BarChart3 className="w-8 h-8" />
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('cloud');

  return (
    <div id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Core Competencies</h2>
        
        {/* Skill Category Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {Object.entries(skills).map(([key, skill]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`p-6 rounded-xl transition-all transform hover:scale-105 ${
                selectedCategory === key
                  ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-xl'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="flex flex-col items-center gap-3">
                {iconMap[key]}
                <span className="font-semibold text-sm text-center">{skill.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Skill Details */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            {iconMap[selectedCategory]}
            {skills[selectedCategory].title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills[selectedCategory].items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow-sm transform transition-all hover:scale-105 hover:shadow-md"
              >
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

