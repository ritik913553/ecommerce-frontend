// import React from 'react';
// import { motion } from 'framer-motion';
// import Container from '../layout/Container';
// import ProductCard from '../ui/ProductCard';

// // Mock data for top picks
// const topPicks = [
//   { id: 1, name: 'Classic Denim Jacket', price: '$89.99' },
//   { id: 2, name: 'Premium Leather Watch', price: '$129.99' },
//   { id: 3, name: 'Designer Sunglasses', price: '$59.99' },
// ];

// const TopPicks = () => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <Container>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Top Picks</h2>
//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//             Our most popular items loved by customers
//           </p>
//         </motion.div>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {topPicks.map((product, index) => (
//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <ProductCard product={product} />
//             </motion.div>
//           ))}
//         </div>
        
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="mt-12 text-center"
//         >
//           <button className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors underline">
//             View all top picks
//           </button>
//         </motion.div>
//       </Container>
//     </section>
//   );
// };

// export default TopPicks;



import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import Button from '../ui/Button';

const TopPicks = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // T-shirt categories
  const categories = [
    { id: 'all', name: 'All T-Shirts' },
    { id: 'crew', name: 'Crew Neck' },
    { id: 'vneck', name: 'V-Neck' },
    { id: 'graphic', name: 'Graphic Tees' },
    { id: 'pocket', name: 'Pocket Tees' },
    { id: 'premium', name: 'Premium Cotton' },
  ];

  // T-shirt mock data
  const tshirts = [
    { 
      id: 1, 
      name: 'Classic Crew Tee', 
      price: '$29.99',
      category: 'crew',
      rating: 4.8,
      colors: 5,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      id: 2, 
      name: 'Minimalist V-Neck', 
      price: '$27.99',
      category: 'vneck',
      rating: 4.7,
      colors: 3,
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      id: 3, 
      name: 'Abstract Graphic Tee', 
      price: '$34.99',
      category: 'graphic',
      rating: 4.9,
      colors: 4,
      image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      id: 4, 
      name: 'Essential Pocket Tee', 
      price: '$32.99',
      category: 'pocket',
      rating: 4.6,
      colors: 6,
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      id: 5, 
      name: 'Premium Cotton Crew', 
      price: '$39.99',
      category: 'premium',
      rating: 4.9,
      colors: 4,
      image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      id: 6, 
      name: 'Oversized Graphic Tee', 
      price: '$36.99',
      category: 'graphic',
      rating: 4.7,
      colors: 3,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? tshirts 
    : tshirts.filter(tshirt => tshirt.category === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-indigo-50 px-3 py-1 rounded-full mb-4">
            <span className="text-indigo-600 font-medium">Customer Favorites</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Top T-Shirts</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our best-selling tees loved by thousands of customers
          </p>
        </motion.div>
        
        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((tshirt, index) => (
            <motion.div
              key={tshirt.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={tshirt.image}
                  alt={tshirt.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Quick View Button */}
                <motion.button
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                >
                  Quick View
                </motion.button>
                
                {/* Color Options */}
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 flex items-center">
                  <span className="text-xs font-medium mr-1">{tshirt.colors}</span>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                    <div className="w-3 h-3 rounded-full bg-white border border-gray-300"></div>
                  </div>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-5 border-t-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {tshirt.name}
                    </h3>
                    <p className="mt-1 text-lg font-bold text-gray-900">{tshirt.price}</p>
                  </div>
                  
                  <button className="text-gray-400 hover:text-red-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                
                {/* Rating */}
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-4 w-4 ${i < Math.floor(tshirt.rating) ? 'fill-current' : 'text-gray-300'}`}
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">{tshirt.rating}</span>
                  </div>
                  
                  <span className="text-xs font-medium text-gray-500">
                    {tshirt.colors} colors
                  </span>
                </div>
                
                {/* Add to Cart Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 w-full bg-gray-900 hover:bg-indigo-600 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Button variant="primary" size="lg">
            Explore All T-Shirts
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default TopPicks;