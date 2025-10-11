'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Events from '@/components/Events';
import News from '@/components/News';
import MembershipForm from '@/components/MembershipForm';

// Animation variants
const fadeIn = (direction, delay) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const TABESAPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Gallery images
  const carouselImages = [
    '/tabesa/1.jpg',
    '/tabesa/2.webp',
    '/tabesa/3.webp',
    '/tabesa/4.webp',
  ];

  // Mock data - replace with actual data later
  const events = [
    {
      id: 1,
      title: 'Biomedical Engineering Symposium',
      date: '2023-10-25',
      description: 'Annual gathering of biomedical engineering students featuring presentations on innovative research and development.',
      image: '/asscociation_details/tabesa/event1.jpg',
    },
    {
      id: 2,
      title: 'Medical Equipment Workshop',
      date: '2023-11-15',
      description: 'Hands-on workshop on maintenance and troubleshooting of essential medical equipment.',
      image: '/asscociation_details/tabesa/event2.jpg',
    },
  ];

  const leadershipTeam = [
    {
      id: 1,
      name: 'Ibrahim Mohamed',
      position: 'Chairperson',
      image: '/asscociation_details/tabesa/leader1.jpg',
      bio: 'Final year biomedical engineering student specializing in medical imaging technologies.',
    },
    {
      id: 2,
      name: 'Sarah Mwakasege',
      position: 'Secretary',
      image: '/asscociation_details/tabesa/leader2.jpg',
      bio: '3rd year student focusing on healthcare technology management systems.',
    },
  ];

  const calendarEvents = [
    {
      id: 1,
      title: 'Monthly General Meeting',
      date: '2023-12-12',
      time: '16:00 - 18:00',
      location: 'MUHAS Engineering Block, Room 201',
    },
    {
      id: 2,
      title: 'Hospital Equipment Maintenance Project',
      date: '2023-12-19',
      time: '10:00 - 15:00',
      location: 'Muhimbili National Hospital',
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <motion.div variants={fadeIn('up', 0.2)}>
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">About TABESA</h3>
              <p className="text-gray-700">
                The Tanzania Biomedical Engineering Students Association (TABESA) at MUHAS unites students in biomedical engineering programs to foster academic excellence and professional development. The association focuses on promoting innovation, research, and practical skills in biomedical engineering.
              </p>
            </motion.div>

            <motion.div variants={fadeIn('up', 0.4)}>
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">Mission & Vision</h3>
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-200">
                <div className="mb-4">
                  <h4 className="font-semibold text-blue-700">Vision</h4>
                  <p className="text-gray-700">To become the leading biomedical engineering student body that fosters innovation and excellence in healthcare technology in Tanzania.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700">Mission</h4>
                  <p className="text-gray-700">To empower biomedical engineering students through skill development, research opportunities, and industry connections to address healthcare challenges through technological solutions.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn('up', 0.6)}>
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">Objectives</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Enhance practical skills and technical knowledge among biomedical engineering students</li>
                <li>Facilitate research and innovation in healthcare technology</li>
                <li>Organize workshops, seminars, and hands-on training sessions</li>
                <li>Create networking opportunities with industry professionals</li>
                <li>Advocate for the role of biomedical engineers in healthcare systems</li>
                <li>Participate in community service projects focused on healthcare technology access</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeIn('up', 0.8)}>
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">History</h3>
              <p className="text-gray-700">
                TABESA was founded in 2023 when the Biomedical Engineering program was established at MUHAS. The association was created to address the unique challenges faced by students in this interdisciplinary field that bridges engineering and healthcare. Since its inception, TABESA has grown significantly and has established partnerships with local hospitals and international engineering societies.
              </p>
            </motion.div>
          </motion.div>
        );
      
      case 'events':
        return (
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h3 
              variants={fadeIn('up', 0.2)}
              className="text-2xl font-semibold text-blue-800 mb-6"
            >
              TABESA Events
            </motion.h3>
            
            {/* Use real Events component filtered by TABESA association */}
            <Events association="TABESA" showAll={true} />
          </motion.div>
        );
        
      case 'leadership':
        return (
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h3 
              variants={fadeIn('up', 0.2)}
              className="text-2xl font-semibold text-blue-800 mb-6"
            >
              Leadership Team
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {leadershipTeam.map((leader) => (
                <motion.div 
                  key={leader.id}
                  variants={fadeIn('up', 0.3 + leader.id * 0.1)}
                  className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col sm:flex-row border-2 border-blue-200"
                >
                  <div className="relative sm:w-1/3 h-48 sm:h-auto">
                    <Image
                      src={leader.image || '/asscociation_details/profile-placeholder.jpg'}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 sm:w-2/3">
                    <h4 className="font-semibold text-lg text-blue-800">{leader.name}</h4>
                    <div className="text-blue-600 font-medium mb-2">{leader.position}</div>
                    <p className="text-gray-700">{leader.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
        
      case 'calendar':
        return (
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h3 
              variants={fadeIn('up', 0.2)}
              className="text-2xl font-semibold text-blue-800 mb-6"
            >
              Event Calendar
            </motion.h3>
            
            <motion.div 
              variants={fadeIn('up', 0.4)}
              className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-blue-200"
            >
              <div className="border-b bg-blue-50 px-6 py-4">
                <h4 className="font-semibold text-blue-800">Upcoming Events</h4>
              </div>
              <div className="divide-y">
                {calendarEvents.map((event) => (
                  <div key={event.id} className="px-6 py-4">
                    <h5 className="font-medium text-lg text-blue-800">{event.title}</h5>
                    <div className="flex flex-wrap gap-x-6 text-sm mt-2">
                      <div className="flex items-center text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <time dateTime={event.date}>
                          {new Date(event.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {event.time}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn('up', 0.6)}
              className="mt-8 text-center"
            >
              <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors">
                View Full Calendar
              </button>
            </motion.div>
          </motion.div>
        );
        
      case 'membership':
        return (
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h3 
              variants={fadeIn('up', 0.2)}
              className="text-2xl font-semibold text-blue-800 mb-6"
            >
              Join TABESA
            </motion.h3>
            
            <motion.div variants={fadeIn('up', 0.4)}>
              <MembershipForm associationName="TABESA" />
            </motion.div>
          </motion.div>
        );
        
      default:
        return <div>Content not available</div>;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="container mx-auto px-6 py-8 pt-28">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 mb-10"
        >
          <div className="relative w-40 h-40 mb-6 md:mb-0">
            <Image 
              src="/asscociation_details/tabesa-logo.png" 
              alt="TABESA Logo"
              fill
              className="object-contain"
            />
          </div>
          
          <div className="text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-3xl lg:text-4xl font-bold text-blue-900 mb-3"
            >
              Tanzania Biomedical Engineering Students Association
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-blue-700 mb-4"
            >
              TABESA - MUHAS Chapter
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-gray-600 max-w-3xl"
            >
              Uniting biomedical engineering students at MUHAS to promote innovation, technical excellence, and the application of engineering solutions to healthcare challenges.
            </motion.p>
          </div>
        </motion.div>
        
        <div className="mb-8 border-b">
          <div className="flex overflow-x-auto scrollbar-hide space-x-2">
            {['overview', 'events', 'leadership', 'calendar', 'membership'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 whitespace-nowrap font-medium transition-colors duration-200 border-b-2 ${
                  activeTab === tab 
                    ? 'border-blue-600 text-blue-900' 
                    : 'border-transparent text-gray-600 hover:text-blue-700 hover:border-blue-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="min-h-[400px]">
          {renderTabContent()}
        </div>

        {/* TABESA News Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 mb-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              TABESA News & Updates
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Latest news and announcements from the Biomedical Engineering Students Association
            </p>
          </div>
          
          {/* Use real News component filtered by TABESA association */}
          <News association="TABESA" showAll={false} />
        </motion.div>

        {/* Image Gallery Section - Before Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 mb-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Event Gallery
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Highlights from BME Connect Summit 2025 and TABESA events
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {carouselImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-72 bg-gray-200">
                  <Image
                    src={image}
                    alt={`TABESA Gallery Image ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center justify-between text-white">
                        <span className="text-sm font-semibold">
                          {index === 0 ? 'BME Connect Summit 2025' : 'Certificate Recognition'}
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-xs">Event Highlights</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TABESAPage;
