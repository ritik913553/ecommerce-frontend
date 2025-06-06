// import React from 'react';
// import { motion } from 'framer-motion';
// import Container from '../layout/Container';
// import Button from '../ui/Button';

// const HeroSection = () => {
//   return (
//     <section className="relative py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
//       <Container className="relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//               Discover Your Perfect Style
//             </h1>
//             <p className="mt-6 text-lg text-gray-600 max-w-lg">
//               Explore our latest collections of premium fashion for everyone. 
//               Find the perfect pieces that express your unique style.
//             </p>
//             <div className="mt-8 flex flex-wrap gap-4">
//               <Button variant="primary" size="lg">
//                 Shop Now
//               </Button>
//               <Button variant="outline" size="lg">
//                 Explore Collections
//               </Button>
//             </div>
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="flex justify-center"
//           >
//             <div className="relative w-full max-w-lg">
//               <div className="aspect-square bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl overflow-hidden shadow-xl">
//                 <div className="bg-gray-200 border-2 border-dashed w-full h-full" />
//               </div>
              
//               <motion.div 
//                 className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg w-40"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5, duration: 0.5 }}
//               >
//                 <p className="text-sm text-gray-500">To move canvas</p>
//                 <p className="mt-1 font-medium">Hold mouse wheel or spacebar while dragging</p>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </Container>
      
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
//         <div className="absolute top-20 right-0 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
//         <div className="absolute top-40 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
//         <div className="absolute bottom-10 right-40 w-60 h-60 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import Button from '../ui/Button';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Text for typing animation
  const texts = [
    "Discover Your Perfect Style",
    "Find Your Unique Fashion",
    "Express Yourself Through Clothing"
  ];
  
  // Images for slider
  const images = [
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  ];

  // Typing animation effect
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentFullText = texts[currentTextIndex];
    
    if (!isDeleting && currentText === currentFullText) {
      // Pause at full text
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }
    
    if (isDeleting && currentText === '') {
      // Move to next text after deleting
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }
    
    const timeout = setTimeout(() => {
      setCurrentText(isDeleting 
        ? currentFullText.substring(0, currentText.length - 1) 
        : currentFullText.substring(0, currentText.length + 1)
      );
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts]);

  // Image slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight min-h-[180px] md:min-h-[220px] lg:min-h-[260px] flex items-center">
              <span className="inline-block">
                {currentText}
                <motion.span 
                  className="inline-block w-1 h-12 bg-indigo-600 ml-2 mb-1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                />
              </span>
            </h1>
            
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Explore our latest collections of premium fashion for everyone. 
              Find the perfect pieces that express your unique style.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Shop Now
              </Button>
              <Button variant="outline" size="lg">
                Explore Collections
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-xl">
              {/* Main image */}
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt="Fashion collection"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
              
              {/* Next image (preloading) */}
              <img 
                src={images[(currentImageIndex + 1) % images.length]} 
                alt="" 
                className="hidden" 
              />
              
              {/* Navigation dots */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentImageIndex === index 
                        ? 'bg-white w-6' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
              
              {/* Tag */}
              <motion.div 
                className="absolute top-6 right-6 bg-white py-2 px-4 rounded-full shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <span className="text-sm font-medium text-indigo-600">
                  New Collection
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 right-0 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 right-40 w-60 h-60 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
};

export default HeroSection;