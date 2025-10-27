import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <div id="education" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              className={`bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl border-l-4 ${
                edu.type === 'masters' ? 'border-indigo-600 dark:border-indigo-400' : 'border-purple-600 dark:border-purple-400'
              }`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ x: 5, shadow: "xl" }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-1">{edu.institution}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
