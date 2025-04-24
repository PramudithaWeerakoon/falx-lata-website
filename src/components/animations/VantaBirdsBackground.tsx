import React, { useEffect, useRef } from 'react';

interface VantaBirdsBackgroundProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: number;
  color1?: number;
  color2?: number;
  colorMode?: string;
  quantity?: number;
  birdSize?: number;
  wingSpan?: number;
  speedLimit?: number;
  separation?: number;
  alignment?: number;
  cohesion?: number;
}

declare global {
  interface Window {
    VANTA: {
      BIRDS: (config: any) => any;
      CLOUDS: (config: any) => any;
    };
  }
}

const VantaBirdsBackground: React.FC<VantaBirdsBackgroundProps> = ({
  children,
  className = '',
  backgroundColor = 0x1a365d, // primary-900 equivalent
  color1 = 0x3672f8, // neon-blue equivalent
  color2 = 0xb537f2, // neon-purple equivalent
  colorMode = 'variance',
  quantity = 3.0,
  birdSize = 1.5,
  wingSpan = 30.0,
  speedLimit = 5.0,
  separation = 20.0,
  alignment = 20.0,
  cohesion = 20.0
}) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaRef.current) return;
    
    // Make sure VANTA is available
    if (typeof window.VANTA !== 'undefined') {
      // Clean up previous effect
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
      
      // Initialize birds effect
      vantaEffect.current = window.VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor,
        color1,
        color2,
        colorMode,
        quantity,
        birdSize,
        wingSpan,
        speedLimit,
        separation,
        alignment,
        cohesion
      });
    }
    
    // Clean up
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, [
    backgroundColor, 
    color1, 
    color2, 
    colorMode, 
    quantity, 
    birdSize, 
    wingSpan, 
    speedLimit, 
    separation, 
    alignment, 
    cohesion
  ]);

  return (
    <div ref={vantaRef} className={`relative ${className}`}>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default VantaBirdsBackground;