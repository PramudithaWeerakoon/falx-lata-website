import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface VantaCloudsBackgroundProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: number;
  skyColor?: number;
  cloudColor?: number;
  cloudShadowColor?: number;
  speed?: number;
  sunColor?: number;
  sunGlareColor?: number;
  sunlightColor?: number;
  showWaveBottom?: boolean;
  waveHeight?: number;
  waveColor?: string;
}

declare global {
  interface Window {
    VANTA: {
      CLOUDS: (config: any) => any;
    };
  }
}

const VantaCloudsBackground: React.FC<VantaCloudsBackgroundProps> = ({
  children,
  className = '',
  backgroundColor = 0x1a365d, // primary-900 equivalent
  skyColor = 0x68b0d8,
  cloudColor = 0xc8d9ed,
  cloudShadowColor = 0x5b789e,
  speed = 1.40,
  sunColor = 0xff9919,
  sunGlareColor = 0xff6633,
  sunlightColor = 0xffffff,
  showWaveBottom = true,
  waveHeight = 120,
  waveColor = 'white'
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
      
      // Initialize clouds effect
      vantaEffect.current = window.VANTA.CLOUDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        speed: speed,
        backgroundColor: backgroundColor,
        skyColor: skyColor,
        cloudColor: cloudColor,
        cloudShadowColor: cloudShadowColor,
        sunColor: sunColor,
        sunGlareColor: sunGlareColor,
        sunlightColor: sunlightColor
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
    skyColor, 
    cloudColor, 
    cloudShadowColor, 
    speed, 
    sunColor, 
    sunGlareColor, 
    sunlightColor
  ]);

  return (
    <div ref={vantaRef} className={`relative ${className}`}>
      <div className="relative z-10">{children}</div>
      
      {showWaveBottom && (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: `${waveHeight}px`, zIndex: 5 }}>
          <motion.svg
            className="absolute bottom-0 w-full"
            style={{ filter: 'drop-shadow(0px -2px 2px rgba(0, 0, 0, 0.1))' }}
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            animate={{
              d: [
                "M0,32 C220,70 440,100 660,70 C880,40 1100,10 1200,0 L1200,120 L0,120 Z",
                "M0,10 C180,50 460,120 720,80 C980,40 1080,10 1200,24 L1200,120 L0,120 Z",
                "M0,24 C320,60 520,40 720,60 C920,80 1040,50 1200,30 L1200,120 L0,120 Z",
                "M0,32 C220,70 440,100 660,70 C880,40 1100,10 1200,0 L1200,120 L0,120 Z"
              ]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 20,
              ease: "easeInOut"
            }}
          >
            <path 
              d="M0,32 C220,70 440,100 660,70 C880,40 1100,10 1200,0 L1200,120 L0,120 Z" 
              fill={waveColor} 
            />
          </motion.svg>
        </div>
      )}
    </div>
  );
};

export default VantaCloudsBackground;