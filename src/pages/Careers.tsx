import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, MapPin, Briefcase, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import AnimatedShapes from '../components/animations/AnimatedShapes';
import { Career } from '../@types/career';

const Careers: React.FC = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await fetch('/api/careers');
        if (!response.ok) {
          throw new Error('Failed to fetch careers');
        }
        const data = await response.json();
        setCareers(data);
      } catch (err) {
        console.error('Error fetching careers:', err);
        setError('Failed to load career opportunities. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);
  
  const toggleJob = (id: string) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  // Format requirements for display - split by newlines
  const formatRequirements = (requirements: string): string[] => {
    return requirements.split('\n').filter(item => item.trim() !== '');
  };

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
              Join Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Explore career opportunities at FALX LATA and become part of our mission to deliver exceptional HR solutions.
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

      {/* Why Join Us */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6">Why Work With Us</h2>
              <p className="text-lg text-gray-600 mb-6">
                At FALX LATA, we believe that our success is driven by our talented and dedicated team. We foster a collaborative environment where innovation, excellence, and personal growth are encouraged and rewarded.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-lg font-bold">Professional Development</h3>
                    <p className="text-gray-600">We invest in our team's growth through training, certification support, and career advancement opportunities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-lg font-bold">Collaborative Culture</h3>
                    <p className="text-gray-600">Join a supportive team that values diverse perspectives and works together to achieve exceptional results.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-lg font-bold">Work-Life Balance</h3>
                    <p className="text-gray-600">We promote a healthy balance between professional responsibilities and personal well-being.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-lg font-bold">Meaningful Work</h3>
                    <p className="text-gray-600">Make a real impact by helping organizations improve their HR practices and workplace environments.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="FALX LATA Team" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Current Openings
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Explore our available positions and find the perfect role for your skills and aspirations
            </motion.p>
          </div>
          
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
          ) : error ? (
            <div className="text-center py-8 bg-red-50 rounded-lg">
              <p className="text-red-600">{error}</p>
            </div>
          ) : careers.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-xl text-gray-600">No open positions currently available. Please check back later.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {careers.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => toggleJob(job.id)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-primary-800">{job.title}</h3>
                        <p className="text-gray-600">{job.department}</p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center mt-4 md:mt-0 space-y-2 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center text-gray-600">
                          <MapPin size={16} className="mr-1" />
                          <span className="text-sm">{job.location}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <Clock size={16} className="mr-1" />
                          <span className="text-sm">{job.type}</span>
                        </div>
                        
                        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-600 ml-2">
                          {expandedJob === job.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {expandedJob === job.id && (
                    <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                      <p className="text-gray-700 mb-6">{job.description}</p>

                      <div className="mb-6">
                        <h4 className="text-lg font-bold mb-3 text-primary-700">Requirements:</h4>
                        <ul className="space-y-2">
                          {formatRequirements(job.requirements).map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-primary-600 mr-2">•</span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {job.salary && (
                        <div className="mb-6">
                          <h4 className="text-lg font-bold mb-3 text-primary-700">Salary Range:</h4>
                          <p className="text-gray-700">{job.salary}</p>
                        </div>
                      )}
                      
                      <div className="flex items-center text-gray-600 mb-6">
                        <Clock size={16} className="mr-2" />
                        <span>
                          Posted: {new Date(job.postedAt).toLocaleDateString()}
                          {job.closingDate && ` • Closing: ${new Date(job.closingDate).toLocaleDateString()}`}
                        </span>
                      </div>
                      
                      <Link to="/contact" className="btn btn-primary">
                        Apply Now <ArrowRight size={18} className="ml-2" />
                      </Link>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Don't see a position that matches your skills? We're always looking for talented individuals to join our team.
            </p>
            <Link to="/contact" className="btn btn-outline">
              Submit Your Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Our Hiring Process */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Hiring Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            >
              What to expect when you apply for a position at FALX LATA
            </motion.p>
          </div>
          
          <div className="relative">
            {/* Connect line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-primary-100 transform -translate-x-1/2 hidden md:block"></div>
            
            {[
              {
                title: 'Application Review',
                description: 'Our HR team carefully reviews your application, resume, and cover letter to assess your qualifications and fit for the role.',
                icon: <Briefcase size={24} className="text-white" />
              },
              {
                title: 'Initial Interview',
                description: 'Selected candidates are invited for an initial interview to discuss their experience, skills, and career aspirations in relation to the position.',
                icon: <Briefcase size={24} className="text-white" />
              },
              {
                title: 'Assessment',
                description: 'Depending on the role, candidates may be asked to complete assessments to evaluate specific skills and competencies relevant to the position.',
                icon: <Briefcase size={24} className="text-white" />
              },
              {
                title: 'Final Interview',
                description: 'Shortlisted candidates meet with senior team members and potential colleagues to evaluate cultural fit and discuss role specifics in greater detail.',
                icon: <Briefcase size={24} className="text-white" />
              },
              {
                title: 'Offer and Onboarding',
                description: 'Successful candidates receive a formal offer and, upon acceptance, go through our comprehensive onboarding program to set them up for success.',
                icon: <Briefcase size={24} className="text-white" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 text-right' : 'md:pl-16 text-left'}`}>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                <div className="md:w-8 flex justify-center items-center my-6 md:my-0 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-primary-800 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-white mb-6"
            >
              Ready to Take the Next Step in Your Career?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
            >
              Join our team of HR professionals and help us deliver exceptional HR solutions to our clients.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/contact" className="btn bg-white text-primary-800 hover:bg-gray-100">
                Apply Today
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;