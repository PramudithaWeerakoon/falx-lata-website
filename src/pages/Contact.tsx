import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import AnimatedShapes from '../components/animations/AnimatedShapes';
import Card3D from '../components/animations/Card3D';
import FadeInView from '../components/animations/FadeInView';

const Contact: React.FC = () => {
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
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Get in touch with our team for any inquiries or to schedule a consultation
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

      {/* Contact Content */}
      <section className="section relative">
        
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-primary-700">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-12">
                Have questions or want to learn more about our services? Our team is here to help. Contact us using any of the methods below.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6">
                  <div className="bg-primary-50 p-4 rounded-full">
                    <Phone className="text-primary-600 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-900">Call Us</h4>
                    <p className="text-gray-600">+94 11 123 4567</p>
                    <p className="text-gray-600">Mon-Fri, 9am-5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-primary-50 p-4 rounded-full">
                    <Mail className="text-primary-600 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-900">Email Us</h4>
                    <p className="text-gray-600">info@falxlata.com</p>
                    <p className="text-gray-600">support@falxlata.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-primary-50 p-4 rounded-full">
                    <MapPin className="text-primary-600 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-900">Visit Us</h4>
                    <p className="text-gray-600">123 Business Park,</p>
                    <p className="text-gray-600">Colombo 03, Sri Lanka</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg border border-primary-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary-500 p-2 rounded-full">
                    <Clock className="text-white h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg text-primary-700">Business Hours</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-gray-800">Monday - Friday</p>
                    <p className="text-gray-600">9:00 AM - 5:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Saturday</p>
                    <p className="text-gray-600">9:00 AM - 1:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Sunday</p>
                    <p className="text-gray-600">Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <Card3D 
              className="rounded-2xl overflow-hidden bg-white" 
              glowColor="rgba(26, 118, 242, 0.2)"
            >
              <div className="p-8">
                <FadeInView delay={0.1}>
                  <h3 className="text-2xl font-bold mb-6 text-primary-800">Send Us a Message</h3>
                </FadeInView>
                
                <form className="space-y-6">
                  <FadeInView direction="right" delay={0.2} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </FadeInView>

                  <FadeInView direction="right" delay={0.3} className="space-y-4">
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                        placeholder="How can we help you?"
                      />
                    </div>
                  </FadeInView>

                  <FadeInView direction="up" delay={0.4}>
                    <button
                      type="submit"
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Send Message <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <motion.span 
                        className="absolute inset-0 bg-gradient-to-r from-primary-600 to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </button>
                  </FadeInView>
                </form>
              </div>
            </Card3D>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-50 py-16 relative">
        {/* Blue blob shape */}
        <img 
          src="/floating_image_05.png" 
          alt="" 
          className="absolute top-10 right-0 w-[300px] h-auto opacity-30 z-0 animate-float-reverse"
        />
        
        <div className="container mx-auto relative z-10">
          <FadeInView className="rounded-2xl overflow-hidden shadow-xl relative h-[500px]">
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900/40 z-10 pointer-events-none"
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.8231257236!2d79.8211669015625!3d6.9218373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1682337049267!5m2!1sen!2slk"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </FadeInView>
        </div>
      </section>
    </>
  );
};

export default Contact;