import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ParticleBackgroundProps {
  children: React.ReactNode;
  className?: string;
  particleColor?: string;
  particleCount?: number;
  particleSpeed?: number;
  hasGlow?: boolean;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  children,
  className = '',
  particleColor = 'rgba(255, 255, 255, 0.3)',
  particleCount = 50,
  particleSpeed = 1,
  hasGlow = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Resize canvas to fill parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create particles
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
    }> = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * particleSpeed,
        speedY: (Math.random() - 0.5) * particleSpeed
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (const particle of particles) {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX *= -1;
        }
        
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY *= -1;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
        
        // Connect particles that are close to each other
        for (const other of particles) {
          const distance = Math.sqrt(
            Math.pow(particle.x - other.x, 2) + 
            Math.pow(particle.y - other.y, 2)
          );
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 - distance/500})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [particleColor, particleCount, particleSpeed]);
  
  return (
    <motion.div 
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
        style={{ filter: hasGlow ? 'blur(1px)' : 'none' }}
      />
      
      {/* Main gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/95 to-primary-700/95 z-0"
        animate={{
          background: [
            'linear-gradient(135deg, rgba(23, 67, 141, 0.95), rgba(23, 96, 224, 0.95), rgba(18, 96, 224, 0.95))',
            'linear-gradient(135deg, rgba(18, 96, 224, 0.95), rgba(23, 67, 141, 0.95), rgba(23, 96, 224, 0.95))',
            'linear-gradient(135deg, rgba(23, 96, 224, 0.95), rgba(18, 96, 224, 0.95), rgba(23, 67, 141, 0.95))'
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
      
      {/* Moving gradient orbs */}
      <motion.div 
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-30 blur-3xl z-0"
        animate={{
          background: [
            'radial-gradient(circle, rgba(181, 55, 242, 0.6), rgba(54, 114, 248, 0.3))',
            'radial-gradient(circle, rgba(54, 114, 248, 0.6), rgba(12, 214, 168, 0.3))',
            'radial-gradient(circle, rgba(12, 214, 168, 0.6), rgba(181, 55, 242, 0.3))'
          ],
          x: [0, 100, 0],
          y: [0, 50, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-20 w-80 h-80 rounded-full opacity-30 blur-3xl z-0"
        animate={{
          background: [
            'radial-gradient(circle, rgba(12, 214, 168, 0.6), rgba(54, 114, 248, 0.3))',
            'radial-gradient(circle, rgba(254, 97, 216, 0.6), rgba(12, 214, 168, 0.3))',
            'radial-gradient(circle, rgba(54, 114, 248, 0.6), rgba(254, 97, 216, 0.3))'
          ],
          x: [0, -80, 0],
          y: [0, -40, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default ParticleBackground;