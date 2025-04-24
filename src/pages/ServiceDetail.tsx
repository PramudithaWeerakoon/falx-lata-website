import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, CheckCircle } from 'lucide-react';
import CtaSection from '../components/home/CtaSection';
import AnimatedShapes from '../components/animations/AnimatedShapes';
import FadeInView from '../components/animations/FadeInView';
import { servicesData } from '../data/services';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="mb-8">The service you're looking for doesn't exist or has been moved.</p>
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section with Wave Line */}
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
              {service?.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              {service?.description}
            </motion.p>
          </div>
        </div>
        
        {/* Multi-layered Wave Line - for a more dramatic wave effect */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: "80px" }}>
          {/* Bottom wave layer */}
          <svg
            className="absolute bottom-0 w-full animate-wave-slow"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path 
              d="M0,32 C220,70 440,100 660,70 C880,40 1100,10 1200,0 L1200,120 L0,120 Z" 
              fill="rgba(255,255,255,0.7)" 
            />
          </svg>
          
          {/* Middle wave layer */}
          <svg
            className="absolute bottom-0 w-full animate-wave-medium"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ bottom: '5px' }}
          >
            <path 
              d="M0,42 C150,20 350,90 600,40 C850,0 1050,60 1200,30 L1200,120 L0,120 Z" 
              fill="rgba(255,255,255,0.85)" 
            />
          </svg>
          
          {/* Top wave layer */}
          <svg
            className="absolute bottom-0 w-full animate-wave-fast"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ bottom: '10px' }}
          >
            <path 
              d="M0,52 C120,20 180,90 360,30 C540,90 720,20 900,50 C1080,20 1140,60 1200,40 L1200,120 L0,120 Z" 
              fill="white" 
            />
          </svg>
        </div>
      </section>

      {/* Service Content */}
      <section className="section relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Approach
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            >
              How we deliver exceptional results for your business
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.approach.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-8"
              >
                <div className="text-primary-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wavy Divider - Improved with animation */}
      <div className="relative py-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ height: "60px", transform: "rotate(180deg)" }}>
          <svg
            className="absolute top-0 w-full animate-wave-medium"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0 C150,60 350,0 600,60 C850,120 1050,40 1200,80 L1200,120 L0,120 Z" 
              fill="#f3f4f6" 
            />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 py-16 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-primary-600 mb-4">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: "60px" }}>
          <svg
            className="absolute bottom-0 w-full animate-wave-slow"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0 C150,60 350,0 600,60 C850,120 1050,40 1200,80 L1200,120 L0,120 Z" 
              fill="white" 
            />
          </svg>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-white relative">
        {/* Orange blob shape */}
        <img 
          src="/floating_image_03-1.png" 
          alt="" 
          className="absolute bottom-10 right-0 w-[250px] h-auto opacity-30 z-0 animate-float"
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          
          <div className="flex flex-col space-y-8">
            {service.process.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"
              >
                <div className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>
                  {step.points && (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                      {step.points.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-block w-5 text-primary-600 font-bold">•</span>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* New Wave Divider before CTA */}
      <div className="relative h-24 overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full h-full animate-wave-medium" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.17,96.92,121.11,75.92,165,65.94c42.28-9.66,83.1-18.63,121.58-23.24C312.81,38.79,280.71,45.31,321.39,56.44Z" 
            fill="#EBF2FA" 
            fillOpacity="0.8"
          ></path>
        </svg>
        <svg 
          className="absolute bottom-0 w-full h-full animate-wave-slow" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="#EBF2FA" 
            fillOpacity="0.6"
          ></path>
        </svg>
        <svg 
          className="absolute bottom-0 w-full h-full animate-wave-fast" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39 116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            fill="#EBF2FA" 
            fillOpacity="0.4"
          ></path>
        </svg>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            {service.faqs.map((faq, index) => (
              <div key={index} className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <div className="text-gray-600">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Related Services Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Related Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.relatedServices.map((relatedId, index) => {
              const relatedService = servicesData.find(s => s.id === relatedId);
              if (!relatedService) return null;
              
              return (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                  <div className="p-6">
                    <div className="mb-4">{relatedService.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{relatedService.title}</h3>
                    <p className="text-gray-600 mb-4">{relatedService.shortDescription}</p>
                    <Link to={`/services/${relatedService.id}`} className="text-primary-600 inline-flex items-center font-medium">
                      Learn More <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <CtaSection />
    </>
  );
};

export default ServiceDetail;