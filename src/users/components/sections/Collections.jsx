// import React from 'react';
// import { motion } from 'framer-motion';
// import CollectionBanner from '../ui/CollectionBanner';

// const Collections = ({ title, ctaText }) => {
//   return (
//     <section className="py-16">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <CollectionBanner title={title} ctaText={ctaText} />
//       </motion.div>
//     </section>
//   );
// };

// export default Collections;



// src/components/sections/Collections.jsx
import React from 'react';
import { motion } from 'framer-motion';
import CollectionBanner from '../ui/CollectionBanner';

const Collections = () => {
  const collections = [
    {
      id: 'gta',
      title: "GTA Inspired T-Shirts",
      ctaText: "Explore Collection",
      categoryName: "GTA",
      description: "Show off your love for Los Santos with our exclusive designs"
    },
    {
      id: 'harrypotter',
      title: "Wizarding World Collection",
      ctaText: "Discover Magic",
      categoryName: "Harry Potter",
      description: "House pride and magical designs for true Potterheads"
    },
    {
      id: 'barbie',
      title: "Barbiecore Fashion",
      ctaText: "Shop Pink",
      categoryName: "Barbie",
      description: "Everything pink and fabulous in our Barbie collection"
    },
    {
      id: 'custom',
      title: "Create Your Own Design",
      ctaText: "Design Now",
      categoryName: "Custom T-Shirt",
      description: "Make it uniquely yours with our custom t-shirt designer",
      isCustom: true
    }
  ];

  return (
    <section>
      {collections.map((collection, index) => (
        <div key={collection.id} className="min-h-screen">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CollectionBanner 
              title={collection.title}
              ctaText={collection.ctaText}
              categoryName={collection.categoryName}
              isCustom={collection.isCustom}
            />
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Collections;