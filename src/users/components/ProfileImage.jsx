import React from 'react';

const ProfileImage = ({ imageUrl, name = 'User'}) => {

  const initials = name ? name.charAt(0).toUpperCase() : 'U';

  return (
    <div className={`relative w-10 h-10 `}>
      {/* Gradient border circle */}
      <div className="absolute inset-0 rounded-full p-0.5 bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-500">
        {/* Inner circle */}
        <div className="relative w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
          {/* Show image if available, otherwise show initials */}
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="font-bold text-gray-700 dark:text-gray-300">
              {initials}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;