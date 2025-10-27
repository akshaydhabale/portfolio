import React from 'react';
import { ChevronDown, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { experiences } from '../data/portfolioData';

const Experience = () => {
  return (
    <div id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Professional Experience</h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="relative pl-16"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-4 top-0 w-5 h-5 bg-white dark:bg-gray-800 border-4 border-indigo-600 dark:border-indigo-400 rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 + 0.2, type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-indigo-600 dark:bg-indigo-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 0, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Company icon */}
                <motion.div 
                  className="absolute left-0 top-8 w-13 h-13 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Briefcase className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl border-l-4 border-indigo-600 dark:border-indigo-400 hover:shadow-xl transition-shadow"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                      <p className="text-xl text-indigo-600 dark:text-indigo-400 font-semibold">{exp.role}</p>
                    </div>
                    <motion.span 
                      className="inline-block mt-2 md:mt-0 px-4 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      {exp.period}
                    </motion.span>
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <motion.li 
                        key={hIdx} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 + hIdx * 0.1 }}
                      >
                        <ChevronDown className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
