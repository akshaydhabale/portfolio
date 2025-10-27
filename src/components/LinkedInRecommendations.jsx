import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const LinkedInRecommendations = () => {
  useEffect(() => {
    // Load LinkedIn Platform SDK
    if (!window.IN) {
      const script = document.createElement('script');
      script.src = 'https://platform.linkedin.com/in.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = 'lang: en_US';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Linkedin className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">LinkedIn Recommendations</h2>
        </div>

        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            View my professional recommendations directly from LinkedIn
          </p>
          
          <motion.a
            href="https://www.linkedin.com/in/akshay-dhabale-931bb59b/details/recommendations/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-6 h-6" />
            View LinkedIn Recommendations
          </motion.a>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Click to see recommendations from colleagues, managers, and clients
          </p>
        </div>

        {/* Alternative: Show LinkedIn badge/profile card */}
        <div className="mt-8 flex justify-center">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600 max-w-md">
            <script 
              src="https://platform.linkedin.com/badges/js/profile.js" 
              async 
              defer 
              type="text/javascript"
            />
            <div 
              className="badge-base LI-profile-badge" 
              data-locale="en_US" 
              data-size="large" 
              data-theme="light" 
              data-type="HORIZONTAL" 
              data-vanity="akshay-dhabale-931bb59b" 
              data-version="v1"
            >
              <a 
                className="badge-base__link LI-simple-link" 
                href="https://ca.linkedin.com/in/akshay-dhabale-931bb59b?trk=profile-badge"
                target="_blank"
                rel="noopener noreferrer"
              >
                Akshay Dhabale
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LinkedInRecommendations;

