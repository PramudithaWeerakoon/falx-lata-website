import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  glowColor?: string;
  hoverScale?: number;
}

const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  depth = 20,
  glowColor = 'rgba(54, 114, 248, 0.3)',
  hoverScale = 1.02
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    
    // Calculate rotation based on mouse position relative to card center
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Convert mouse position to rotation degrees (-15 to 15 degrees)
    const rotateY = ((mouseX - centerX) / (width / 2)) * 7.5;
    const rotateX = -((mouseY - centerY) / (height / 2)) * 7.5;
    
    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      whileHover={{ scale: hoverScale }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setRotateX(0);
        setRotateY(0);
        setIsHovered(false);
      }}
    >
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
        animate={{
          boxShadow: isHovered 
            ? `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 25px ${glowColor}` 
            : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        }}
      >
        {children}
        
        {/* 3D depth effect elements */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-inherit pointer-events-none"
            style={{
              transform: `translateZ(-${depth}px)`,
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 'inherit',
              boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.2)'
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default Card3D;