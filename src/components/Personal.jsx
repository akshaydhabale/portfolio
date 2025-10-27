import React from 'react';
import { Mail, Phone, Download, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../data/portfolioData';

const Personal = ({ scrollToSection }) => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          
          <div className="relative z-10">
            <motion.div 
              className="mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-br from-indigo-500 to-purple-600 shadow-xl ring-4 ring-indigo-100 dark:ring-indigo-900">
                <motion.img 
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} - ${personalInfo.title}`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {personalInfo.name}
            </motion.h1>
            
            <div className="text-2xl md:text-3xl font-semibold mb-6 h-20 flex items-center justify-center">
              <TypeAnimation
                sequence={[
                  'Cloud Data & AI Architect',
                  2000,
                  'AI/ML Expert',
                  2000,
                  'Data Modernization Leader',
                  2000,
                  'GenAI Specialist',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400"
                repeat={Infinity}
              />
            </div>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.span 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-gray-500">📍</span>
                {personalInfo.location}
              </motion.span>
              <motion.a 
                href={`tel:${personalInfo.phone}`} 
                className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-5 h-5" />
                {personalInfo.phone}
              </motion.a>
              <motion.a 
                href={`mailto:${personalInfo.email}`} 
                className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-5 h-5" />
                {personalInfo.email}
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a 
                href={personalInfo.resumePDF}
                download="Akshay_Dhabale_Resume.pdf"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg inline-flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
              <motion.button 
                onClick={() => scrollToSection('experience')}
                className="border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Briefcase className="w-5 h-5" />
                View Work
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Personal;

