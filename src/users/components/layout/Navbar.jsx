import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-2xl font-bold text-indigo-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            BrandLogo
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8">
                {['Home', 'Shop', 'Collections', 'About', 'Contact'].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ y: -2 }}
                    className="font-medium text-gray-700 hover:text-indigo-600 cursor-pointer"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </nav>
            
            <div className="flex items-center space-x-4">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                className="text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.1 }}
                className="text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </motion.button>
              
              <Button variant="primary">Sign In</Button>
            </div>
          </div>
          
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden mt-4 py-4 border-t"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav>
                <ul className="space-y-4">
                  {['Home', 'Shop', 'Collections', 'About', 'Contact'].map((item) => (
                    <motion.li 
                      key={item}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="font-medium text-gray-700 hover:text-indigo-600 cursor-pointer"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </nav>
              
              <div className="mt-6 flex flex-col space-y-4">
                <Button variant="primary">Sign In</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;