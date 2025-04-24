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
      const loadVanta = async () => {
        if (!vantaEffect && vantaRef.current) {
          // Dynamically import THREE and VANTA.NET
          const THREE = await import('three');
          const VANTA = (await import('vanta/dist/vanta.net.min')).default;
          
          const effect = VANTA.NET({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xa9ed,
            backgroundColor: 0x1300,
            points: 20.00,
            maxDistance: 27.00
          });
          
          setVantaEffect(effect);
        }
      };
      
      loadVanta();
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