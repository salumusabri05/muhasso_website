'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [currentSlide, setCurrentSlide] = useState(0);

  // Gallery images for carousel
  const carouselImages = [
    '/tabesa/As the event drew to a close, participants gathered for group photos and received their Certificate of Recognition for participation from ESUCMA MUHASO and Muhimbili University of Health and Allied Sciences, marking the successful conclusion of the first BME Connect Summit 2025.webp',
    '/tabesa/As the event drew to a close, participants gathered for group photos and received their Certificate of Recognition for participation from ESUCMA MUHASO and Muhimbili University of Health and Allied Sciences, marking the successful conclusion of the first BME Connect Summit 2025_1.webp',
    '/tabesa/As the event drew to a close, participants gathered for group photos and received their Certificate of Recognition for participation from ESUCMA MUHASO and Muhimbili University of Health and Allied Sciences, marking the successful conclusion of the first BME Connect Summit 2025_2.webp',
    '/tabesa/As the event drew to a close, participants gathered for group photos and received their Certificate of Recognition for participation from ESUCMA MUHASO and Muhimbili University of Health and Allied Sciences, marking the successful conclusion of the first BME Connect Summit 2025_3.webp',
    '/tabesa/🔥 The wait is almost over__The 1st BME Connect Summit 2025 is happening on January 31st, 2025, at Dar es Salaam (MUHASO), Tanzania_ This summit is designed exclusively for Biomedical Engineers and s.jpg',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

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
                TABESA was founded in 2015 when the Biomedical Engineering program was established at MUHAS. The association was created to address the unique challenges faced by students in this interdisciplinary field that bridges engineering and healthcare. Since its inception, TABESA has grown significantly and has established partnerships with local hospitals and international engineering societies.
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
              src="/asscociation_details/tabesa/logo.png" 
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
        
        {/* Image Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl overflow-hidden shadow-xl"
        >
          <div className="p-6 md:p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
              Gallery & Events
            </h2>
            
            <div className="relative">
              {/* Main Carousel */}
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden bg-gray-900">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={carouselImages[currentSlide]}
                      alt={`TABESA Event ${currentSlide + 1}`}
                      fill
                      className="object-contain"
                      priority={currentSlide === 0}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-blue-900" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-blue-900" />
                </button>

                {/* Slide Counter */}
                <div className="absolute bottom-4 right-4 px-4 py-2 bg-black/70 text-white rounded-full text-sm font-medium z-10">
                  {currentSlide + 1} / {carouselImages.length}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
                {carouselImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                      currentSlide === index
                        ? 'ring-4 ring-blue-600 scale-105'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Auto-play Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? 'w-8 bg-blue-600'
                        : 'w-2 bg-blue-300 hover:bg-blue-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
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

export default TABESAPage;
