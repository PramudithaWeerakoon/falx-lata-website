import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScaleInViewProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  scale?: number;
  perspective?: boolean; // Add 3D effect
  glow?: boolean; // Add glow effect
}

const ScaleInView: React.FC<ScaleInViewProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  scale = 0.8,
  perspective = false,
  glow = false
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: {
      opacity: 0,
      scale: scale,
      ...(perspective && { rotateX: 10, rotateY: -10 })
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      transition: {
        duration,
        delay,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      style={{
        transformStyle: perspective ? "preserve-3d" : "flat",
        perspective: perspective ? "1000px" : "none",
        ...(glow && inView && {
          filter: "drop-shadow(0 0 10px rgba(54, 114, 248, 0.3))"
        })
      }}
      whileHover={glow ? {
        filter: "drop-shadow(0 0 15px rgba(54, 114, 248, 0.5))",
        transition: { duration: 0.3 }
      } : undefined}
    >
      {children}
    </motion.div>
  );
};

export default ScaleInView;