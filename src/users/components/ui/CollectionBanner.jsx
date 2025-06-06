// import React from 'react';
// import { motion } from 'framer-motion';
// import Button from './Button';

// const CollectionBanner = ({ title, ctaText }) => {
//   return (
//     <motion.div 
//       className="relative h-96 rounded-2xl overflow-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl">
//         <div className="absolute inset-0 bg-gray-200 border-2 border-dashed rounded-2xl" />
//       </div>
      
//       <div className="absolute inset-0 flex flex-col items-start justify-center p-12">
//         <motion.h2 
//           className="text-4xl md:text-5xl font-bold text-white max-w-md"
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           {title}
//         </motion.h2>
//         <motion.div
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="mt-6"
//         >
//           <Button variant="outline" size="lg">
//             {ctaText}
//           </Button>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default CollectionBanner;





// src/components/ui/CollectionBanner.jsx
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const CollectionBanner = ({ title, ctaText, categoryName, isCustom }) => {
  // Mock background images by category
  const categoryImages = {
    gta: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    harrypotter: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    barbie: "https://images.unsplash.com/photo-1682687221248-3116ba6ab483?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    custom: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    summer: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    winter: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  };

  // State for custom t-shirt design
  const [uploadedImage, setUploadedImage] = useState(null);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
  const [previewSize, setPreviewSize] = useState(100);
  const fileInputRef = useRef(null);

  // Select background based on category name
  const backgroundKey = categoryName.toLowerCase().replace(/\s+/g, '');
  const backgroundImage = categoryImages[backgroundKey] || categoryImages.summer;

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle preview position changes
  const handleDrag = (e, info) => {
    setPreviewPosition({
      x: info.point.x,
      y: info.point.y
    });
  };

  // Handle preview size changes
  const handleSizeChange = (e) => {
    setPreviewSize(parseInt(e.target.value));
  };

  return (
    <motion.div 
      className="relative min-h-screen rounded-2xl overflow-hidden mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={`absolute inset-0 ${
          isCustom ? 'bg-gradient-to-b from-black/0 to-black/90' : 'bg-gradient-to-b from-black/20 to-black/70'
        }`} />
      </div>
      
      {/* Category Name at Bottom */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-white">
                {categoryName} Collection
              </h3>
              <p className="mt-2 text-gray-200 max-w-xl">
                {isCustom 
                  ? "Upload your image and create a custom t-shirt" 
                  : `Explore our premium selection of ${categoryName.toLowerCase()} t-shirts`}
              </p>
            </div>
            <Button variant="outline" size="lg">
              {isCustom ? "Order Now" : "Explore Collection"}
            </Button>
          </div>
        </div>
      </motion.div>
      
      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-white text-center max-w-3xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h2>
        
        {isCustom ? (
          <motion.div
            className="mt-12 w-full max-w-4xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              {/* T-Shirt Preview */}
              <div className="relative w-full max-w-md">
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl aspect-square flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* T-shirt base */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl" />
                    
                    {/* Custom design preview */}
                    {uploadedImage && (
                      <motion.div
                        className="absolute cursor-move"
                        style={{
                          width: `${previewSize}px`,
                          height: `${previewSize}px`,
                          left: previewPosition.x,
                          top: previewPosition.y,
                          transform: 'translate(-50%, -50%)',
                          zIndex: 10
                        }}
                        drag
                        dragMomentum={false}
                        onDrag={handleDrag}
                        dragConstraints={{ 
                          top: 0, 
                          left: 0, 
                          right: 400, 
                          bottom: 400 
                        }}
                      >
                        <img 
                          src={uploadedImage} 
                          alt="Custom design" 
                          className="w-full h-full object-contain shadow-lg rounded"
                        />
                      </motion.div>
                    )}
                    
                    {/* T-shirt outline */}
                    <div className="absolute inset-0 rounded-xl border-2 border-white/30" />
                  </div>
                </div>
                
                {/* Size controls */}
                {uploadedImage && (
                  <div className="mt-4">
                    <label className="text-white block mb-2">Design Size</label>
                    <input
                      type="range"
                      min="50"
                      max="200"
                      value={previewSize}
                      onChange={handleSizeChange}
                      className="w-full"
                    />
                  </div>
                )}
              </div>
              
              {/* Upload Controls */}
              <div className="text-center max-w-md">
                <div className="mb-6">
                  <p className="text-white text-lg mb-4">
                    Upload your image and see it on our premium t-shirt
                  </p>
                  
                  <input 
                    type="file" 
                    onChange={handleImageUpload}
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                  />
                  
                  <Button 
                    variant="primary" 
                    onClick={() => fileInputRef.current.click()}
                    className="w-full"
                  >
                    {uploadedImage ? "Change Image" : "Upload Image"}
                  </Button>
                  
                  {uploadedImage && (
                    <Button 
                      variant="secondary" 
                      onClick={() => setUploadedImage(null)}
                      className="w-full mt-3"
                    >
                      Remove Image
                    </Button>
                  )}
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <h4 className="text-white font-semibold mb-3">How it works</h4>
                  <ul className="text-gray-200 text-sm space-y-2">
                    <li>1. Upload your image or design</li>
                    <li>2. Position and resize it on the t-shirt</li>
                    <li>3. Choose your size and color</li>
                    <li>4. Place your order</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 mb-20"
          >
            <Button variant="primary" size="lg">
              {ctaText}
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default CollectionBanner;