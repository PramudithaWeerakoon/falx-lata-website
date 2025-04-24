import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, BarChart, CheckCircle, Clock, Target } from 'lucide-react';
import AnimatedShapes from '../components/animations/AnimatedShapes';
import FadeInView from '../components/animations/FadeInView';
import CtaSection from '../components/home/CtaSection';

const About: React.FC = () => {
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
              About FALX LATA
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              We are a fully-fledged HR solution provider committed to excellence and tailored services that meet your specific needs.
            </motion.p>
          </div>
        </div>
        
        {/* Wave Line */}
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

      {/* Company Overview */}
      <section className="section relative">
        {/* Blue blob shape */}
        <img 
          src="/floating_image_05.png" 
          alt="" 
          className="absolute top-20 right-0 w-[250px] h-auto opacity-40 z-0 animate-float-reverse"
        />
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2023, FALX LATA was established with passion and responsibility to support organizations that need timely expert assistance with their HR functions.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our name, FALX LATA, represents our commitment to being a strong and broad support for businesses, allowing them to focus on their core operations while we handle all aspects of human resources.
              </p>
              <p className="text-lg text-gray-600">
                We are a fast-growing company with highly qualified and experienced staff and consultants who specialize in all HR functions, from recruitment and policy development to training and payroll management.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="FALX LATA Team" 
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section bg-gray-50 relative">
        {/* Purple gradient blob */}
        <img 
          src="/floating_image_04-1.png" 
          alt="" 
          className="absolute bottom-10 left-0 w-[350px] h-auto opacity-40 z-0 animate-float-slow"
        />
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="p-3 bg-primary-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Target className="text-primary-600" size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional HR solutions that empower businesses to optimize their human capital and achieve their strategic objectives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="p-3 bg-secondary-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Award className="text-secondary-600" size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading HR solutions provider in the region, recognized for our excellence, integrity, and innovative approaches to human resource management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="p-3 bg-accent-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Users className="text-accent-600" size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Excellence in service delivery</li>
                <li>• Integrity and ethical practices</li>
                <li>• Client-centered approach</li>
                <li>• Innovation and continuous improvement</li>
                <li>• Respect for diversity and inclusion</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Our experienced professionals are dedicated to delivering exceptional HR solutions
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Anusha Perera",
                position: "Founder & CEO",
                bio: "With over 15 years of experience in HR management, Anusha leads our team with vision and expertise.",
                image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Rajiv Mendis",
                position: "Head of Recruitment",
                bio: "Rajiv specializes in executive search and has successfully placed hundreds of professionals across various industries.",
                image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Priya Sharma",
                position: "HR Consultant",
                bio: "Priya brings innovative solutions to complex HR challenges with her background in organizational psychology.",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-secondary-600 mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-primary-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Why Choose FALX LATA
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            >
              What sets us apart from other HR service providers
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Our consultants have extensive experience in HR management across various industries.",
                icon: <Users className="text-primary-600" size={30} />
              },
              {
                title: "Tailored Solutions",
                description: "We customize our services to meet the specific needs and objectives of your business.",
                icon: <Target className="text-primary-600" size={30} />
              },
              {
                title: "Comprehensive Services",
                description: "From recruitment to payroll, we offer a complete range of HR solutions under one roof.",
                icon: <Award className="text-primary-600" size={30} />
              },
              {
                title: "Responsive Support",
                description: "We're committed to providing timely assistance and addressing your concerns promptly.",
                icon: <Clock className="text-primary-600" size={30} />
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex p-6 bg-white rounded-lg shadow-md"
              >
                <div className="mr-4 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CtaSection />
    </>
  );
};

export default About;