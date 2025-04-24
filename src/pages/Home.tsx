import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, BarChart, FileText, Award, Clock, ChevronDown } from 'lucide-react';
import TestimonialSection from '../components/home/TestimonialSection';
import CtaSection from '../components/home/CtaSection';
import RandomShapes from '../components/animations/RandomShapes';
import VantaNetBackground from '../components/animations/VantaNetBackground';

const Home: React.FC = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-32 relative overflow-hidden">
        {/* VantaNetBackground covers the entire hero section */}
        <VantaNetBackground className="absolute inset-0 z-0" />
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Transform Your{' '}
                <span className="relative">
                  <motion.span 
                    className="text-accent-400"
                    animate={{ 
                      color: ['#cca743', '#e6d3a1', '#cca743'],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    HR Management
                  </motion.span>
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-accent-400"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  />
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-black mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Partner with us to streamline your HR operations and unlock your team's full potential. Expert solutions tailored to your business needs.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link 
                  to="/contact" 
                  className="btn bg-accent-600 hover:bg-accent-700 text-white transform hover:scale-105 transition-all duration-300"
                >
                  Get Started <ArrowRight size={18} className="ml-2" />
                </Link>
                <button
                  onClick={scrollToServices}
                  className="btn bg-white/10 backdrop-blur-sm text-black hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
                >
                  Explore Services <ChevronDown size={18} className="ml-2" />
                </button>
              </motion.div>

              <motion.div
                className="mt-12 flex items-center gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex -space-x-4">
                  {[
                    "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
                    "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
                    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                  ].map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="Client"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <p className="text-black text-sm">
                  Trusted by <span className="font-bold text-black">20+</span> companies
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <motion.div
                  className="absolute -top-6 -left-6 w-full h-full rounded-2xl bg-accent-400/20 backdrop-blur-sm"
                  animate={{
                    scale: [1, 1.02, 1],
                    rotate: [0, 1, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
               
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wavy, uneven bottom edge - first wave */}
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden z-10 line-height-0">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320" 
            preserveAspectRatio="none" 
            className="w-full h-[120px]"
            style={{ display: 'block' }}
          >
            <path 
              fill="#f9fafb" 
              fillOpacity="1" 
              d="M0,96L40,112C80,128,160,160,240,186.7C320,213,400,235,480,224C560,213,640,171,720,165.3C800,160,880,192,960,213.3C1040,235,1120,245,1200,218.7C1280,192,1360,128,1400,96L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
        
        {/* Second wave line in light gray, 1cm (~10px) below the first one */}
        <div className="absolute -bottom-11 left-0 w-full overflow-hidden z-9 line-height-0">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320" 
            preserveAspectRatio="none" 
            className="w-full h-[100px]"
            style={{ display: 'block' }}
          >
            <path 
              fill="#e5e7eb" 
              fillOpacity="0.7" 
              d="M0,128L60,138.7C120,149,240,171,360,165.3C480,160,600,128,720,128C840,128,960,160,1080,170.7C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Scroll Indicator - positioned above the waves */}
        <motion.div
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20"
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <ChevronDown className="text-white/60" size={32} />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-gray-50 relative overflow-hidden">
        {/* Random colored shapes in the background */}
        <RandomShapes count={25} topHeavy={true} />
        
        {/* Floating image - adjusted z-index to bring it forward */}
        <img 
          src="/floating_image_04-1.png" 
          alt="" 
          className="absolute top-20 left-0 w-[300px] h-auto opacity-40 z-10 pointer-events-none"
        />
        
        <div className="container mx-auto relative z-20">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-accent-600 font-semibold mb-4"
            >
              Our Expertise
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Professional Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Comprehensive HR solutions tailored to your business needs
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {[
              {
                title: "Recruitment & Headhunting",
                description: "Find the perfect talent for your organization with our specialized recruitment services.",
                icon: <Briefcase className="text-primary-600" size={40} />,
                link: "/services/recruitment-headhunting"
              },
              {
                title: "HR Function Setup",
                description: "Establish efficient HR systems and processes tailored to your organization's needs.",
                icon: <Briefcase className="text-primary-600" size={40} />,
                link: "/services/hr-function-setup"
              },
              {
                title: "Payroll Outsourcing",
                description: "Streamline your payroll process with our accurate and secure outsourcing services.",
                icon: <BarChart className="text-primary-600" size={40} />,
                link: "/services/payroll-outsourcing"
              },
              {
                title: "Policies & Procedures",
                description: "Develop comprehensive HR policies aligned with best practices and compliance requirements.",
                icon: <FileText className="text-primary-600" size={40} />,
                link: "/services/policies-procedures"
              },
              {
                title: "HR Consultation",
                description: "Get expert advice on HR strategy, organizational development, and employee relations.",
                icon: <Award className="text-primary-600" size={40} />,
                link: "/services/hr-consultation"
              },
              {
                title: "Training & Development",
                description: "Enhance employee skills and productivity with our customized training programs.",
                icon: <Clock className="text-primary-600" size={40} />,
                link: "/services/training-development"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }
                }}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="p-8 relative">
                  <motion.div 
                    className="mb-6 transform group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
                  >
                    Learn More 
                    <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.div
                className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-primary-100"
                animate={{
                  scale: [1, 1.02, 1],
                  rotate: [0, -1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <img 
                src="https://images.pexels.com/photos/1181433/pexels-photo-1181433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="FALX LATA Team" 
                className="rounded-2xl shadow-lg w-full h-[500px] object-cover relative z-10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.span
                className="text-accent-600 font-semibold mb-4 block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                About Us
              </motion.span>
              <h2 className="text-4xl font-bold mb-6">Transforming HR Management</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2023, FALX LATA is a fast-growing HR solution provider with highly qualified and experienced staff and consultants specializing in all HR functions.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We established FALX LATA with passion and responsibility to support organizations that need timely expert assistance in managing their human resources effectively.
              </p>

              <motion.div 
                className="grid grid-cols-2 gap-4 mb-8"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { value: "2+", label: "Years Experience", bgColor: "bg-primary-50", textColor: "text-primary-600" },
                  { value: "50+", label: "Happy Clients", bgColor: "bg-secondary-50", textColor: "text-secondary-600" },
                  { value: "100+", label: "Placements", bgColor: "bg-accent-50", textColor: "text-accent-600" },
                  { value: "10+", label: "HR Experts", bgColor: "bg-primary-50", textColor: "text-primary-600" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.6,
                          ease: "easeOut"
                        }
                      }
                    }}
                    className={`flex flex-col items-center p-6 ${stat.bgColor} rounded-xl transform transition-transform hover:scale-105`}
                  >
                    <motion.span 
                      className={`text-3xl font-bold ${stat.textColor} mb-2`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.value}
                    </motion.span>
                    <span className="text-gray-600 text-sm text-center">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/about" className="btn btn-primary inline-flex items-center">
                  Learn More About Us
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Call to Action */}
      <CtaSection />
    </>
  );
};

export default Home;