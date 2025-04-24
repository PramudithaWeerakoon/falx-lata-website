import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  delay = 0
}) => {
  return (
    <motion.div
      className={`group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1 }}
      />
      {children}
    </motion.div>
  );
};

export default AnimatedCard;