import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          © 2025 {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          <motion.a 
            href={personalInfo.linkedin}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="LinkedIn Profile"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a 
            href={personalInfo.github}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="GitHub Profile"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a 
            href={`mailto:${personalInfo.email}`}
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="Email Contact"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
