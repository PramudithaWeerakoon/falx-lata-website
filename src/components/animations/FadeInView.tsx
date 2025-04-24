import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInViewProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  staggerChildren?: boolean;
  staggerDelay?: number;
  blur?: boolean;
  glassEffect?: boolean;
}

const FadeInView: React.FC<FadeInViewProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  direction = 'up',
  distance = 50,
  staggerChildren = false,
  staggerDelay = 0.1,
  blur = false,
  glassEffect = false
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getDirectionVariants = () => {
    switch (direction) {
      case 'up': return { y: distance };
      case 'down': return { y: -distance };
      case 'left': return { x: distance };
      case 'right': return { x: -distance };
      case 'none': return {};
      default: return { y: distance };
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...getDirectionVariants(),
      filter: blur ? 'blur(10px)' : undefined
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        delay,
        ease: [0.43, 0.13, 0.23, 0.96],
        when: staggerChildren ? "beforeChildren" : undefined,
        staggerChildren: staggerChildren ? staggerDelay : undefined
      }
    }
  };

  const childVariants = staggerChildren ? {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  } : undefined;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={`${className} ${glassEffect ? 'backdrop-blur-sm bg-white/10 backdrop-saturate-150' : ''}`}
      style={glassEffect ? {
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.3)'
      } : undefined}
    >
      {staggerChildren ? (
        React.Children.map(children, (child, index) => (
          <motion.div key={index} variants={childVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        children
      )}
    </motion.div>
  );
};

export default FadeInView;