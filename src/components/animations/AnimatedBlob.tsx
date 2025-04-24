import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedBlobProps {
  color: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width?: string;
  height?: string;
  rotate?: number;
  delay?: number;
  duration?: number;
  zIndex?: number;
  className?: string;
}

const AnimatedBlob: React.FC<AnimatedBlobProps> = ({
  color,
  top,
  left,
  right,
  bottom,
  width = '300px',
  height = '300px',
  rotate = 0,
  delay = 0,
  duration = 20,
  zIndex = -1,
  className = '',
}) => {
  const pathVariants = {
    initial: {
      d: "M50.5,14.9c9,5.4,14.5,15.7,17.4,26c2.9,10.4,3.2,20.8,0.7,31.3c-2.5,10.5-7.9,21-16.7,26.3c-8.9,5.3-21.2,5.4-31.8,0.7C9.4,94.4,0.6,84.9,0.1,74.2c-0.5-10.7,7.4-22.5,14.2-32.4C21.2,31.9,27,23.9,35.3,16C43.6,8.1,54.4,0.3,60.6,0c6.2,-0.3,7.9,7.1,-1,14.9Z"
    },
    animate1: {
      d: "M55.5,12.6c8.7,8.1,11.5,21.5,12.5,34.3c0.9,12.7,-0.1,24.9,-6.4,35.1c-6.3,10.2,-17.9,18.4,-29,19.5c-11.1,1.1,-21.6,-5,-29.9,-15c-8.4,-10,-14.5,-24,-12.5,-36.9c1.9,-12.9,12.1,-24.7,22.3,-34C22.6,6.4,32.8,-0.9,43.2,0.1c10.4,1,21,10.5,12.3,12.5Z"
    },
    animate2: {
      d: "M54.6,11.4c8.2,5.8,12.2,16.4,14.4,27.1c2.1,10.7,2.3,21.4,-1.2,31.9c-3.6,10.4,-10.9,20.5,-20.4,25.2c-9.4,4.7,-20.9,4.1,-31.1,-0.9c-10.2,-5,-19.1,-14.4,-20.8,-24.8C-6,59.4,0,48,5.7,37.4c5.7,-10.5,11,-20.2,19.9,-27.2C34.5,3.2,46.9,-0.2,54.1,0c7.3,0.2,9.3,3.9,0.5,11.4Z"
    }
  };

  return (
    <motion.div
      className={`absolute overflow-visible ${className}`}
      style={{
        top,
        left,
        right,
        bottom,
        width,
        height,
        zIndex,
        transform: `rotate(${rotate}deg)`,
        filter: 'drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.1))'
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <motion.path
          fill={color}
          initial="initial"
          animate={["animate1", "animate2", "initial"]}
          variants={pathVariants}
          transition={{
            duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </svg>
    </motion.div>
  );
};

export default AnimatedBlob;