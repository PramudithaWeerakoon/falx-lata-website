import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 min-h-[50vh] relative bg-gradient-to-br from-primary-800 to-primary-900 overflow-hidden">
      {/* Subtle glow effect in background */}
      <motion.div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2/3 h-32 rounded-full opacity-20 blur-3xl"
        animate={{
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          background: "radial-gradient(circle, rgba(54, 114, 248, 0.8), rgba(26, 118, 242, 0.3))"
        }}
      />
      
      {/* Wavy bottom edge */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: "150px" }}>
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,32 C220,70 440,100 660,70 C880,40 1100,10 1200,0 L1200,120 L0,120 Z" 
            fill="white" 
          />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.span 
              className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur-md border border-white/20 mb-6"
              animate={{
                boxShadow: [
                  '0 0 0px rgba(255,255,255,0.0)',
                  '0 0 10px rgba(255,255,255,0.3)',
                  '0 0 0px rgba(255,255,255,0.0)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            >
              Ready to Transform Your HR?
            </motion.span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Start Your Journey With{' '}
            <motion.span 
              className="relative inline-block text-neon-yellow"
              animate={{
                textShadow: [
                  '0 0 2px rgba(255, 222, 18, 0.3)',
                  '0 0 8px rgba(255, 222, 18, 0.6)',
                  '0 0 2px rgba(255, 222, 18, 0.3)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              FALX LATA
            </motion.span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-200 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Contact us today to discuss how our professional HR solutions can drive your business forward.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link 
              to="/contact"
              className="btn bg-white text-primary-800 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                Get Started <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            
            <Link 
              to="/services"
              className="btn border-2 border-white/30 text-white backdrop-blur-md hover:bg-white/10 transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Explore Our Services</span>
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20"
                style={{
                  background: "linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)",
                  backgroundSize: "200% 200%"
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;