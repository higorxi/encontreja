import React, { useState } from 'react';

type InfoIconProps = {
  message: string; 
  title?: string; 
  color?: string; 
  opacity?: number; 
};

const InfoIcon: React.FC<InfoIconProps> = ({
  message,
  title,
  color = 'gray', 
  opacity = 0.65,
}) => {
  const [showTooltip, setShowTooltip] = useState(false); 

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setShowTooltip(true)} 
        onMouseLeave={() => setShowTooltip(false)} 
        className="flex items-center cursor-pointer"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color} 
          style={{ opacity }} 
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M12 8v.01M12 3a9 9 0 100 18 9 9 0 000-18z"
          />
        </svg>
      </div>

      {showTooltip && (
        <div className="absolute z-10 p-3 mt-1 text-sm text-white bg-gray-800 rounded-lg shadow-lg transition-opacity duration-300 opacity-95 -left-8 top-8 w-64">
          {title && <div className="font-bold mb-1">{title}</div>} 
          <div>{message}</div> 
        </div>
      )}
    </div>
  );
};

export default InfoIcon;
