// import React from 'react';
// import { motion } from 'framer-motion';
// import Container from '../layout/Container';
// import Button from '../ui/Button';

// const ShopCategories = () => {
//   const categories = [
//     { name: 'Men', image: 'bg-blue-500' },
//     { name: 'Women', image: 'bg-pink-500' },
//   ];
  
//   return (
//     <section className="py-16 md:py-24">
//       <Container>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Shop By Category</h2>
//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//             Discover our curated collections for every style and occasion
//           </p>
//         </motion.div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {categories.map((category, index) => (
//             <motion.div
//               key={category.name}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="group relative overflow-hidden rounded-2xl shadow-lg"
//             >
//               <div className={`h-96 ${category.image} bg-gray-200 border-2 border-dashed`} />
              
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
//                 <h3 className="text-3xl font-bold text-white">Shop for {category.name}</h3>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 }}
//                   className="mt-6"
//                 >
//                   <Button variant="outline" size="lg">
//                     Explore more
//                   </Button>
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default ShopCategories;




import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import Button from '../ui/Button';

const ShopCategories = () => {
  const categories = [
    { 
      name: 'Men', 
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
      description: 'Trendy t-shirts for everyday style'
    },
    { 
      name: 'Women', 
      image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1462&q=80',
      description: 'Fashionable tees for all occasions'
    },
    { 
      name: 'Unisex', 
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1515&q=80',
      description: 'Comfortable designs for everyone'
    },
    { 
      name: 'Designer', 
      image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      description: 'Premium quality with unique designs'
    },
  ];
  
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Shop T-Shirts By Category</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of premium t-shirts for every style and occasion
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="relative h-80 overflow-hidden">
                <motion.img
                  src={category.image}
                  alt={`${category.name} t-shirts`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white">Shop for {category.name}</h3>
                  <p className="mt-2 text-gray-200">{category.description}</p>
                </div>
                
                <motion.div
                  className="absolute top-4 right-4 bg-white rounded-full py-1 px-3 shadow-md"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-sm font-medium text-indigo-600">New Arrivals</span>
                </motion.div>
              </div>
              
              <div className="p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4"
                >
                  <Button variant="outline" size="md" className="w-full">
                    Explore Collection
                  </Button>
                </motion.div>
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
            View All T-Shirt Collections
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default ShopCategories;