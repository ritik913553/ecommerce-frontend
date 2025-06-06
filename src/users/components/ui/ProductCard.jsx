// import React from 'react';
// import { motion } from 'framer-motion';

// const ProductCard = ({ product }) => {
//   return (
//     <motion.div 
//       className="group"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//     >
//       <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
//         <motion.div 
//           className="h-full w-full bg-gray-200 border-2 border-dashed rounded-xl"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.3 }}
//         />
//       </div>
//       <div className="mt-4">
//         <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
//           {product.name}
//         </h3>
//         <p className="mt-1 text-lg font-semibold text-gray-900">{product.price}</p>
//       </div>
//     </motion.div>
//   );
// };

// export default ProductCard;


import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product, imageUrl }) => {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Product Image */}
      <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
        <motion.img
          src={imageUrl}
          alt={product.name}
          className="h-full w-full object-cover rounded-xl transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        />
      </div>

      {/* Product Details */}
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 text-lg font-semibold text-gray-900">{product.price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
