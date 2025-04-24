import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedShapesProps {
  className?: string;
}

const AnimatedShapes: React.FC<AnimatedShapesProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Floating triangles */}
      <motion.div
        className="absolute top-[10%] left-[15%] w-16 h-16 opacity-60"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 15, 0],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          background: "linear-gradient(135deg, #3672f8 0%, #b537f2 100%)",
          filter: "drop-shadow(0 0 8px rgba(54, 114, 248, 0.3))",
        }}
      />
      
      {/* Spinning hexagon */}
      <motion.div
        className="absolute top-[60%] right-[10%] w-20 h-20 opacity-50"
        animate={{
          rotate: [0, 360],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{
          clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          background: "linear-gradient(135deg, #0cd6a8 0%, #3672f8 100%)",
          filter: "drop-shadow(0 0 10px rgba(12, 214, 168, 0.3))",
        }}
      />
      
      {/* Pulsing circle */}
      <motion.div
        className="absolute top-[30%] right-[25%] w-12 h-12 rounded-full opacity-60"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          background: "linear-gradient(135deg, #ff61d8 0%, #b537f2 100%)",
          filter: "drop-shadow(0 0 12px rgba(255, 97, 216, 0.4))",
        }}
      />
      
      {/* Morphing diamond */}
      <motion.div
        className="absolute bottom-[15%] left-[20%] w-14 h-14 opacity-70"
        animate={{
          borderRadius: ["0%", "50%", "10%", "50%", "0%"],
          rotate: [0, 45, 45, 45, 0],
          x: [0, 20, 40, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{
          background: "linear-gradient(135deg, #ffde12 0%, #f3a723 100%)",
          filter: "drop-shadow(0 0 15px rgba(255, 222, 18, 0.3))",
        }}
      />
      
      {/* Floating square with hole */}
      <motion.div
        className="absolute top-[45%] left-[5%] w-16 h-16 flex items-center justify-center opacity-70"
        animate={{
          y: [0, 30, 0],
          x: [0, 15, 0],
          rotate: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          background: "linear-gradient(135deg, #3672f8 0%, #0cd6a8 100%)",
          filter: "drop-shadow(0 0 10px rgba(54, 114, 248, 0.2))",
        }}
      >
        <motion.div 
          className="w-8 h-8 bg-primary-900" 
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </motion.div>
      
      {/* Thin rings */}
      <motion.div
        className="absolute top-[20%] right-[15%] w-32 h-32 rounded-full border-4 border-neon-blue opacity-30"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.1, 0.3],
          borderWidth: ["4px", "1px", "4px"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          borderColor: "#3672f8",
          filter: "drop-shadow(0 0 5px rgba(54, 114, 248, 0.5))",
        }}
      />
      
      {/* Dotted grid pattern */}
      <motion.div 
        className="absolute bottom-[10%] right-[20%] grid grid-cols-4 gap-2 opacity-50"
        animate={{
          rotate: [0, 10, 0, -10, 0],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {Array.from({ length: 16 }).map((_, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 rounded-full bg-neon-purple"
            animate={{
              scale: [1, Math.random() * 0.5 + 0.8, 1],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              filter: "drop-shadow(0 0 3px rgba(181, 55, 242, 0.8))",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedShapes;