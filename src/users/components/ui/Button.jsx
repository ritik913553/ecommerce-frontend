import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    secondary: 'bg-gray-800 hover:bg-gray-900 text-white',
    outline: 'bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white',
  };
  
  const sizes = {
    sm: 'py-1.5 px-4 text-sm',
    md: 'py-2 px-6',
    lg: 'py-3 px-8 text-lg',
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`rounded-full font-medium transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;