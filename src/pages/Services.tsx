import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CtaSection from '../components/home/CtaSection';
import AnimatedShapes from '../components/animations/AnimatedShapes';
import { servicesData } from '../data/services';

const Services: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-50 relative overflow-hidden">
        <AnimatedShapes className="opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Comprehensive HR solutions tailored to address your specific business challenges and opportunities.
            </motion.p>
          </div>
        </div>
        
        {/* Wave Line */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: "100px" }}>
          <svg
            className="absolute bottom-0 w-full animate-wave"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            {/* First wave layer */}
            <path 
              d="M0,40 C150,80 350,0 500,50 C650,100 800,30 1200,10 L1200,120 L0,120 Z" 
              fill="rgba(255, 255, 255, 0.7)" 
              className="animate-wave-slow"
            />
            {/* Second wave layer */}
            <path 
              d="M0,70 C250,40 400,120 550,50 C700,0 900,80 1200,20 L1200,120 L0,120 Z" 
              fill="rgba(255, 255, 255, 0.85)" 
              className="animate-wave-medium"
            />
            {/* Third wave layer */}
            <path 
              d="M0,60 C370,100 550,20 720,80 C900,30 1050,70 1200,40 L1200,120 L0,120 Z" 
              fill="white" 
              className="animate-wave-fast"
            />
          </svg>
        </div>
      </section>

      {/* Services List */}
      <section className="section relative">
        
        {/* Top wave separator */}
        <div className="absolute top-0 left-0 w-full overflow-hidden transform rotate-180" style={{ height: "70px" }}>
          <svg
            className="absolute top-0 w-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              fill="rgba(243, 244, 246, 0.3)"
            />
          </svg>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 gap-16">
            {servicesData.map((service, index) => (
              <React.Fragment key={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                    />
                  </div>
                  <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="mb-4">{service.icon}</div>
                    <h2 className="mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    <div className="mb-6">
                      <h3 className="text-lg font-bold mb-3">Key Features:</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="inline-block w-5 text-primary-600 font-bold">•</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link to={`/services/${service.id}`} className="btn btn-primary inline-flex items-center">
                      Learn More <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </div>
                </motion.div>
                
                {/* Wavy separator between service items (except after the last one) */}
                {index < servicesData.length - 1 && (
                  <div className="wave-separator relative h-24 my-4 overflow-hidden w-full opacity-30">
                    <svg className="absolute w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
                      <path 
                        d={`M0,${40 + index * 5} C${300 + index * 50},${70 - index * 10} ${600 - index * 30},${30 + index * 5} ${900 + index * 40},${50 - index * 3} C${1050 - index * 20},${20 + index * 8} ${1150},${45} 1200,${35 + index * 3} V120 H0 Z`} 
                        fill={`rgba(${index % 2 === 0 ? '243, 244, 246' : '249, 250, 251'}, 0.8)`} 
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        {/* Bottom wavy separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: "80px" }}>
          <svg
            className="absolute bottom-0 w-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0 C150,120 350,50 600,100 C850,50 1050,120 1200,20 L1200,120 L0,120 Z" 
              fill="rgb(243, 244, 246)"
            />
          </svg>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section bg-gray-50 relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Custom Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Don't see exactly what you need? We create tailored HR solutions to address your unique requirements.
            </motion.p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Customized HR Services</h3>
                <p className="text-gray-600 mb-6">
                  Every business has unique challenges and opportunities. Our team works closely with you to understand your specific needs and develop customized solutions that drive results.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="h-6 w-6 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-2">✓</span>
                    <span>Targeted solutions for your industry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-2">✓</span>
                    <span>Flexible engagement models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-2">✓</span>
                    <span>Scalable solutions that grow with your business</span>
                  </li>
                </ul>
                <Link to="/contact" className="btn btn-primary">
                  Discuss Your Needs
                </Link>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Custom HR Solutions" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Line at the bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: "60px" }}>
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
      </section>

      {/* Call to Action */}
      <CtaSection />
    </>
  );
};

export default Services;