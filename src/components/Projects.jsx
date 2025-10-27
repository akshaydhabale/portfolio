import React from 'react';
import { Rocket, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Rocket className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 hover:shadow-xl"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full font-semibold whitespace-nowrap">
                  {project.category}
                </span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                {project.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;

