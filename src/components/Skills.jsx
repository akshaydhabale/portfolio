import React, { useState } from 'react';
import { Code, Database, Brain, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
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
      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Core Competencies</h2>
        
        {/* Skill Category Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {Object.entries(skills).map(([key, skill]) => (
            <motion.button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`p-6 rounded-xl transition-all ${
                selectedCategory === key
                  ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-xl'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col items-center gap-3">
                {iconMap[key]}
                <span className="font-semibold text-sm text-center">{skill.title}</span>
                <div className="w-full bg-white/30 dark:bg-gray-900/30 rounded-full h-2">
                  <motion.div 
                    className="bg-white dark:bg-indigo-400 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: selectedCategory === key ? `${skill.proficiency}%` : '0%' }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
                <span className="text-xs font-bold">{skill.proficiency}%</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Selected Skill Details with Progress Bars */}
        <motion.div 
          key={selectedCategory}
          className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            {iconMap[selectedCategory]}
            {skills[selectedCategory].title}
          </h3>
          <div className="space-y-4">
            {skills[selectedCategory].items.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{item.name}</span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div 
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
