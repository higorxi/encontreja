import React from 'react';

interface DynamicCircleProps {
  diameter?: number; 
  color?: string;   
}

const DynamicCircle: React.FC<DynamicCircleProps> = ({ 
  diameter = 50, 
  color = '#3498db' 
}) => {
  const circleStyle: React.CSSProperties = {
    width: `${diameter}px`,
    height: `${diameter}px`,
    backgroundColor: color,
    borderRadius: '50%',
    display: 'inline-block',
  };

  return <div style={circleStyle}></div>;
};

export default DynamicCircle;
