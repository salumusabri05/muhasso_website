'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AssociationsComponent from '../../components/AssociationsComponent';
import { motion } from 'framer-motion';

const AssociationsPage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <motion.div 
        className="flex-grow"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Hero Banner */}
        <motion.div 
          className="bg-gradient-to-r from-blue-500 to-blue-700 py-16 px-6"
          variants={fadeIn}
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Student Associations
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Explore the diverse student associations at MUHAS that provide opportunities for professional growth, 
              leadership development, and community engagement.
            </motion.p>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div variants={fadeIn}>
          <AssociationsComponent />
        </motion.div>

        {/* Benefits Section */}
        <motion.section 
          className="py-16 px-6 bg-gray-50"
          variants={fadeIn}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Benefits of Joining Associations
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md border-2 border-blue-200">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  Professional Networking
                </h3>
                <p className="text-gray-600 text-center">
                  Connect with like-minded students, faculty mentors, and industry professionals to build your professional network.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md border-2 border-blue-200">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  Leadership Development
                </h3>
                <p className="text-gray-600 text-center">
                  Gain valuable leadership experience by organizing events, managing projects, and representing student interests.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md border-2 border-blue-200">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  Skill Enhancement
                </h3>
                <p className="text-gray-600 text-center">
                  Develop practical skills through workshops, training sessions, and hands-on experience that complement your academic learning.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section 
          className="py-16 px-6"
          variants={fadeIn}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  How do I join a student association?
                </h3>
                <p className="text-gray-600">
                  Most associations have open registration periods at the beginning of each semester. 
                  Contact the association directly through their email or visit their office for application details.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Are there membership fees?
                </h3>
                <p className="text-gray-600">
                  Many associations have annual membership fees that vary by organization. These fees help fund 
                  activities, events, and resources for members. Some associations offer fee waivers for students with financial need.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Can I join multiple associations?
                </h3>
                <p className="text-gray-600">
                  Yes, students are welcome to join multiple associations based on their interests and availability. 
                  However, we recommend being selective to ensure you can actively participate in each organization&apos;s activities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  How can I start a new student association?
                </h3>
                <p className="text-gray-600">
                  To start a new association, you&apos;ll need to submit a proposal to the MUHASSO leadership, gather at least 
                  15 interested students, draft a constitution, and identify a faculty advisor. Contact the MUHASSO office for detailed guidelines.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.div>
      
      <Footer />
    </main>
  );
};

export default AssociationsPage;
