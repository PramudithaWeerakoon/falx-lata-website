import React from 'react';
import { motion } from 'framer-motion';

interface RandomShapesProps {
  className?: string;
  count?: number;
  topHeavy?: boolean;  // New prop to concentrate more shapes at the top
}

const shapes = [
  // Circle
  (props: any) => (
    <motion.div
      className="rounded-full"
      style={{
        background: props.color,
        width: props.size,
        height: props.size,
        ...props.style
      }}
      {...props.motion}
    />
  ),
  // Square
  (props: any) => (
    <motion.div
      style={{
        background: props.color,
        width: props.size,
        height: props.size,
        ...props.style
      }}
      {...props.motion}
    />
  ),
  // Triangle
  (props: any) => (
    <motion.div
      style={{
        width: 0,
        height: 0,
        borderLeft: `${props.size / 2}px solid transparent`,
        borderRight: `${props.size / 2}px solid transparent`,
        borderBottom: `${props.size}px solid ${props.color}`,
        ...props.style
      }}
      {...props.motion}
    />
  ),
  // Pentagon
  (props: any) => (
    <motion.div
      style={{
        background: props.color,
        width: props.size,
        height: props.size,
        clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
        ...props.style
      }}
      {...props.motion}
    />
  ),
  // Hexagon
  (props: any) => (
    <motion.div
      style={{
        background: props.color,
        width: props.size,
        height: props.size * 0.866,
        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        ...props.style
      }}
      {...props.motion}
    />
  ),
  // Star
  (props: any) => (
    <motion.div
      style={{
        background: props.color,
        width: props.size,
        height: props.size,
        clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
        ...props.style
      }}
      {...props.motion}
    />
  ),
  // Custom blob 1
  (props: any) => (
    <motion.div
      style={{
        background: props.color,
        width: props.size,
        height: props.size,
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        ...props.style
      }}
      {...props.motion}
    />
  ),
  // Custom blob 2
  (props: any) => (
    <motion.div
      style={{
        background: props.color,
        width: props.size,
        height: props.size,
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        ...props.style
      }}
      {...props.motion}
    />
  )
];

const colors = [
  // Vibrant colors
  'linear-gradient(135deg, #FF416C, #FF4B2B)',
  'linear-gradient(135deg, #12D8FA, #A6FFCB)',
  'linear-gradient(135deg, #A9C9FF, #FFBBEC)',
  'linear-gradient(135deg, #8E2DE2, #4A00E0)',
  'linear-gradient(135deg, #F53844, #42378F)',
  'linear-gradient(135deg, #00F260, #0575E6)',
  'linear-gradient(135deg, #FDBB2D, #22C1C3)',
  'linear-gradient(135deg, #EECDA3, #EF629F)',
  'linear-gradient(135deg, #667EEA, #764BA2)',
  'linear-gradient(135deg, #08AEEA, #2AF598)',
  'linear-gradient(135deg, #FBAB7E, #F7CE68)',
  'linear-gradient(135deg, #85FFBD, #FFFB7D)'
];

const generateRandomShapes = (count: number, topHeavy: boolean) => {
  const generatedShapes = [];
  
  for (let i = 0; i < count; i++) {
    const randomShapeIndex = Math.floor(Math.random() * shapes.length);
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const randomSize = Math.floor(Math.random() * 80) + 20; // 20-100px
    
    // If topHeavy is true, place more shapes in the top portion
    let randomY;
    if (topHeavy && i < count * 0.6) { // 60% of shapes at the top
      randomY = Math.floor(Math.random() * 40); // 0-40% from top
    } else {
      randomY = Math.floor(Math.random() * 85); // 0-85% overall
    }
    
    const randomX = Math.floor(Math.random() * 85); // 0-85%
    const randomRotation = Math.floor(Math.random() * 360);
    const randomDelay = Math.random() * 2;
    const randomDuration = Math.floor(Math.random() * 20) + 15; // 15-35s
    
    // Adjust opacity based on position (more transparent where text might be)
    let opacity = 0.2 + Math.random() * 0.2; // Base opacity 0.2-0.4
    if (randomY < 30 && randomX > 30 && randomX < 70) {
      // This is likely the area with headings, make more transparent
      opacity = 0.1 + Math.random() * 0.1; // Reduced opacity 0.1-0.2
    }
    
    const shapeProps = {
      color: colors[randomColorIndex],
      size: randomSize,
      style: {
        position: 'absolute',
        top: `${randomY}%`,
        left: `${randomX}%`,
        opacity: opacity,
        zIndex: 0,
        filter: 'blur(0.5px)',
        transformOrigin: 'center',
      },
      motion: {
        initial: { scale: 0, opacity: 0, rotate: 0 },
        animate: { 
          scale: [0.8, 1, 0.9, 1, 0.8], 
          opacity: [opacity, opacity + 0.1, opacity], 
          rotate: [randomRotation, randomRotation + 20, randomRotation - 10, randomRotation + 10, randomRotation],
          x: [0, 20, -10, 15, 0],
          y: [0, -15, 10, -5, 0]
        },
        transition: {
          duration: randomDuration,
          delay: randomDelay,
          repeat: Infinity,
          repeatType: "reverse" as "reverse",
        }
      }
    };
    
    generatedShapes.push(
      <React.Fragment key={i}>
        {shapes[randomShapeIndex](shapeProps)}
      </React.Fragment>
    );
  }
  
  return generatedShapes;
};

const RandomShapes: React.FC<RandomShapesProps> = ({ 
  className = '',
  count = 15,
  topHeavy = false
}) => {
  // Use memo to prevent regenerating shapes on every render
  const shapesElements = React.useMemo(() => generateRandomShapes(count, topHeavy), [count, topHeavy]);
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {shapesElements}
    </div>
  );
};

export default RandomShapes;