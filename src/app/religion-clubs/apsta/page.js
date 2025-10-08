'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

const APSTAPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - replace with actual data later
  const events = [
    {
      id: 1,
      title: 'Annual Physiotherapy Awareness Day',
      date: '2023-10-15',
      description: 'A day dedicated to raising awareness about physiotherapy services and their importance in healthcare.',
      image: '/asscociation_details/apsta/event1.jpg',
    },
    {
      id: 2,
      title: 'Rehabilitation Workshop',
      date: '2023-11-05',
      description: 'Hands-on workshop focusing on latest rehabilitation techniques for various conditions.',
      image: '/asscociation_details/apsta/event2.jpg',
    },
  ];

  const leadershipTeam = [
    {
      id: 1,
      name: 'Dr. Janet Mhina',
      position: 'Chairperson',
      image: '/asscociation_details/apsta/leader1.jpg',
      bio: 'Final year physiotherapy student passionate about neurological rehabilitation.',
    },
    {
      id: 2,
      name: 'Martin Joseph',
      position: 'Secretary',
      image: '/asscociation_details/apsta/leader2.jpg',
      bio: '3rd year student specializing in sports physiotherapy research.',
    },
  ];

  const calendarEvents = [
    {
      id: 1,
      title: 'Monthly Meeting',
      date: '2023-12-10',
      time: '14:00 - 16:00',
      location: 'MUHAS Main Campus, Room 105',
    },
    {
      id: 2,
      title: 'Community Outreach',
      date: '2023-12-17',
      time: '09:00 - 13:00',
      location: 'Mwananyamala Hospital',
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
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">About APSTA</h3>
              <p className="text-gray-700">
                The Association of Physiotherapy Students of Tanzania (APSTA) at MUHAS brings together students studying physiotherapy to enhance their academic and professional development. The association focuses on promoting physiotherapy education, research, and community service among its members.
              </p>
            </motion.div>

            <motion.div variants={fadeIn('up', 0.4)}>
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">Mission & Vision</h3>
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-200">
                <div className="mb-4">
                  <h4 className="font-semibold text-blue-700">Vision</h4>
                  <p className="text-gray-700">To become a leading student organization in promoting excellence in physiotherapy education and practice in Tanzania.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700">Mission</h4>
                  <p className="text-gray-700">To foster academic and professional growth among physiotherapy students through education, research, and community service.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn('up', 0.6)}>
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">Objectives</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Promote academic excellence among physiotherapy students</li>
                <li>Facilitate research and innovation in physiotherapy</li>
                <li>Organize workshops and seminars for professional development</li>
                <li>Advocate for the rights and welfare of physiotherapy students</li>
                <li>Engage in community service through outreach programs</li>
                <li>Collaborate with other physiotherapy associations locally and internationally</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeIn('up', 0.8)}>
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">History</h3>
              <p className="text-gray-700">
                APSTA was established in 2012 by a group of passionate physiotherapy students who recognized the need for a dedicated platform to address the unique challenges and opportunities in their field. Since then, the association has grown to include all physiotherapy students at MUHAS and has established itself as a vital part of the university&apos;s student community.
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
              Upcoming & Past Events
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {events.map((event) => (
                <motion.div 
                  key={event.id} 
                  variants={fadeIn('up', 0.3 + event.id * 0.1)}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border-2 border-blue-200"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={event.image || '/asscociation_details/event-placeholder.jpg'}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-semibold text-lg text-blue-800 mb-2">{event.title}</h4>
                    <div className="text-sm text-blue-600 mb-3">
                      <time dateTime={event.date}>
                        {new Date(event.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                      Learn more 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
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
        
      default:
        return <div>Content not available</div>;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 mb-10"
        >
          <div className="relative w-40 h-40 mb-6 md:mb-0">
            <Image 
              src="/asscociation_details/apsta/logo.png" 
              alt="APSTA Logo"
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
              Association of Physiotherapy Students of Tanzania
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-blue-700 mb-4"
            >
              APSTA - MUHAS Chapter
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-gray-600 max-w-3xl"
            >
              Uniting physiotherapy students at MUHAS to promote professional excellence, research, and community service in the field of physiotherapy.
            </motion.p>
          </div>
        </motion.div>
        
        <div className="mb-8 border-b">
          <div className="flex overflow-x-auto scrollbar-hide space-x-2">
            {['overview', 'events', 'leadership', 'calendar'].map((tab) => (
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
      </main>
      
      <Footer />
    </div>
  );
};

export default APSTAPage;
