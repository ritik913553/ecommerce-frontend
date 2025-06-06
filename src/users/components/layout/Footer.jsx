import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BrandLogo</h3>
            <p className="text-gray-400 mb-4">
              Premium fashion for everyone. Shop our latest collections today.
            </p>
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((item) => (
                <motion.a 
                  key={item}
                  href="#"
                  whileHover={{ y: -4 }}
                  className="text-gray-400 hover:text-white"
                >
                  <div className="bg-gray-700 rounded-full w-8 h-8" />
                </motion.a>
              ))}
            </div>
          </div>
          
          {['Shop', 'Help', 'Company', 'Legal'].map((section) => (
            <div key={section}>
              <h4 className="text-lg font-semibold mb-4">{section}</h4>
              <ul className="space-y-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 5 }}
                  >
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {section} Link {i + 1}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} BrandName. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-gray-500 text-sm hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;