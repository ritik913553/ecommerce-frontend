
import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import ProductCard from '../ui/ProductCard';

// Dummy image URLs from Unsplash (replace with your actual image paths)
const dummyImages = [
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
];

// Mock data for products by gender
const genderProducts = {
  male: [
    { id: 1, name: 'Classic Fit Tee', price: '$29.99', description: 'Premium cotton fabric' },
    { id: 2, name: 'Athletic Cut Tee', price: '$34.99', description: 'Moisture-wicking material' },
    { id: 3, name: 'Vintage Wash Tee', price: '$39.99', description: 'Distressed details' },
  ],
  female: [
    { id: 4, name: 'Slim Fit Tee', price: '$27.99', description: 'Soft stretch fabric' },
    { id: 5, name: 'Cropped Tee', price: '$31.99', description: 'Modern fit' },
    { id: 6, name: 'Oversized Tee', price: '$35.99', description: 'Comfortable relaxed fit' },
  ]
};

const GenderShop = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        {/* Male Section */}
        <div className="mb-20">
          {/* Male Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Men's T-Shirts</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Premium quality t-shirts designed for comfort and durability
            </p>
          </motion.div>
          
          {/* Male Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {genderProducts.male.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard 
                  product={product}
                  imageUrl={dummyImages[index % dummyImages.length]}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Female Section */}
        <div className="mb-20">
          {/* Female Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Women's T-Shirts</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Stylish and comfortable t-shirts for every occasion
            </p>
          </motion.div>
          
          {/* Female Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {genderProducts.female.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard 
                  product={product}
                  imageUrl={dummyImages[(index + 3) % dummyImages.length]}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <button className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
            View All Collections →
          </button>
        </motion.div>
      </Container>
    </section>
  );
};

export default GenderShop;