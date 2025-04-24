import { useEffect, useRef, useState } from 'react';

interface VantaNetBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

const VantaNetBackground = ({ className, children }: VantaNetBackgroundProps) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      // Load scripts dynamically
      const loadScripts = async () => {
        if (!vantaEffect && vantaRef.current) {
          // Load THREE.js
          const threeScript = document.createElement('script');
          threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
          document.head.appendChild(threeScript);
          
          threeScript.onload = () => {
            // Load VANTA.GLOBE after THREE.js is loaded
            const vantaScript = document.createElement('script');
            vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js';
            document.head.appendChild(vantaScript);
            
            vantaScript.onload = () => {
              // Initialize VANTA effect after scripts are loaded
              if (window.VANTA) {
                const effect = window.VANTA.GLOBE({
                  el: vantaRef.current,
                  mouseControls: true,
                  touchControls: true,
                  gyroControls: false,
                  minHeight: 200.00,
                  minWidth: 200.00,
                  scale: 1.00,
                  scaleMobile: 0.5,       // Reduced scale for mobile
                  color: 0x3aa2b6,
                  color2: 0x38aa9,
                  size: 2.00,
                  sizeAuto: false,        // Disable auto sizing
                  backgroundColor: 0xffffff
                });
                
                setVantaEffect(effect);
              }
            };
          };
        }
      };
      
      loadScripts();
    }
    
    // Cleanup
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className={className}>
      {children}
    </div>
  );
};

export default VantaNetBackground;