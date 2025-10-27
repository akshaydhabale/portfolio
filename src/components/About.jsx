import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { aboutMe } from '../data/portfolioData';

const About = () => {
  return (
    <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          About Me
        </motion.h2>
        <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          {aboutMe.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.3 }}
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
