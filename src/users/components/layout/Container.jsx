import React from 'react';
import { motion } from 'framer-motion';

const Container = ({ children, className = '' }) => {
  return (
    <motion.div 
      className={`container mx-auto px-4 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Container;