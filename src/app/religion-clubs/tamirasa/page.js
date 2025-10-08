'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// ==========================================
// Animation Variants
// ==========================================

const fadeIn = (direction, delay) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0
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

// ==========================================
// Mock Data
// ==========================================

// TAMIRASA events data
const events = [
  {
    id: 1,
    title: 'TAMIRASA Annual Medical Conference',
    date: '2025-11-15',
    description: 'A conference bringing together medical students and professionals to discuss current trends and innovations in healthcare.',
    image: '/asscociation_details/tamirasa/conference.jpg',
  },
  {
    id: 2,
    title: 'Healthcare Outreach Program',
    date: '2025-12-05',
    description: 'Community outreach initiative providing basic healthcare services and education to underserved communities in Dar es Salaam.',
    image: '/asscociation_details/tamirasa/outreach.jpg',
  },
  {
    id: 3,
    title: 'Clinical Skills Workshop',
    date: '2026-01-22',
    description: 'Hands-on workshop for medical students to develop and refine essential clinical examination and diagnostic skills.',
    image: '/asscociation_details/tamirasa/workshop.jpg',
  },
  {
    id: 4,
    title: 'Research Methodology Seminar',
    date: '2026-02-10',
    description: 'Intensive seminar on medical research methodologies, ethics, and publication strategies for aspiring medical researchers.',
    image: '/asscociation_details/tamirasa/research.jpg',
  },
];

const leadershipTeam = [
  {
    id: 1,
    name: 'Dr. Amani Rashid',
    position: 'Chairperson',
    image: '/asscociation_details/tamirasa/leader1.jpg',
    bio: 'Final year medical student with focus on public health interventions and medical education.',
  },
  {
    id: 2,
    name: 'Sarah Kimaro',
    position: 'Vice Chairperson',
    image: '/asscociation_details/tamirasa/leader2.jpg',
    bio: '4th year medical student specializing in medical research and community health initiatives.',
  },
  {
    id: 3,
    name: 'Emmanuel Mushi',
    position: 'Secretary General',
    image: '/asscociation_details/tamirasa/leader3.jpg',
    bio: '3rd year medical student with interest in medical ethics and healthcare policy.',
  },
  {
    id: 4,
    name: 'Grace Mkwawa',
    position: 'Treasurer',
    image: '/asscociation_details/tamirasa/leader4.jpg',
    bio: '3rd year medical student focused on healthcare finance and resource management.',
  },
  {
    id: 5,
    name: 'Dr. Hassan Ally',
    position: 'Faculty Advisor',
    image: '/asscociation_details/tamirasa/advisor.jpg',
    bio: 'Associate Professor of Medicine with extensive experience in medical education and student mentorship.',
  }
];

const calendarEvents = [
  {
    id: 1,
    title: 'General Assembly',
    date: '2025-10-25',
    time: '15:00 - 17:00',
    location: 'MUHAS Main Campus, Lecture Hall A',
  },
  {
    id: 2,
    title: 'Executive Committee Meeting',
    date: '2025-11-05',
    time: '10:00 - 12:00',
    location: 'Medical School Board Room',
  },
  {
    id: 3,
    title: 'TAMIRASA Annual Medical Conference',
    date: '2025-11-15',
    time: '08:00 - 17:00',
    location: 'MUHAS Conference Center',
  },
  {
    id: 4,
    title: 'Healthcare Outreach Program',
    date: '2025-12-05',
    time: '07:30 - 16:00',
    location: 'Mbagala Community Center',
  },
];

// ==========================================
// TamirasaPage Component
// ==========================================

const TamirasaPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // ==========================================
  // Tab Content Rendering
  // ==========================================
  
  const renderTabContent = () => {    switch (activeTab) {      case 'overview':        return (          <motion.div            variants={staggerContainer}            initial="hidden"            animate="show"            className="space-y-6"          >            <motion.div variants={fadeIn('up', 0.2)}>              <h3 className="text-2xl font-semibold text-red-800 mb-3">About TAMIRASA</h3>              <p className="text-gray-700">                The Tanzania Medical Students Association (TAMIRASA) is the official representative body for medical students at Muhimbili University of Health and Allied Sciences. TAMIRASA serves as a platform for medical students to enhance their academic, clinical, and leadership skills while advocating for health equity and medical education quality improvement.              </p>              <p className="mt-3 text-gray-700">                As a member organization of the International Federation of Medical Students&apos; Associations (IFMSA), TAMIRASA connects Tanzanian medical students with their peers globally, facilitating international exchanges and collaborations.              </p>            </motion.div>            <motion.div variants={fadeIn('up', 0.4)}>              <h3 className="text-2xl font-semibold text-red-800 mb-3">Mission & Vision</h3>              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-red-200">                <div className="mb-4">                  <h4 className="font-semibold text-red-700">Vision</h4>                  <p className="text-gray-700">To develop future healthcare leaders committed to excellence in medical practice, innovation in healthcare delivery, and advancement of equitable healthcare systems in Tanzania.</p>                </div>                <div>                  <h4 className="font-semibold text-red-700">Mission</h4>                  <p className="text-gray-700">To foster the academic, professional, and personal development of medical students through education, advocacy, research, and community engagement that advances healthcare quality and accessibility in Tanzania.</p>                </div>              </div>            </motion.div>            <motion.div variants={fadeIn('up', 0.6)}>              <h3 className="text-2xl font-semibold text-red-800 mb-3">Key Focus Areas</h3>              <div className="grid md:grid-cols-2 gap-4">                <div className="bg-red-50 p-4 rounded-lg">                  <h4 className="font-semibold text-red-700 mb-2">Medical Education</h4>                  <ul className="list-disc list-inside text-gray-700 space-y-1">                    <li>Supplement formal curriculum with peer-led tutorials</li>                    <li>Organize clinical skills workshops</li>                    <li>Facilitate access to learning resources</li>                    <li>Advocate for curriculum improvements</li>                  </ul>                </div>                <div className="bg-red-50 p-4 rounded-lg">                  <h4 className="font-semibold text-red-700 mb-2">Research & Innovation</h4>                  <ul className="list-disc list-inside text-gray-700 space-y-1">                    <li>Promote student research initiatives</li>                    <li>Organize research methodology trainings</li>                    <li>Support participation in scientific conferences</li>                    <li>Connect students with research mentors</li>                  </ul>                </div>                <div className="bg-red-50 p-4 rounded-lg">                  <h4 className="font-semibold text-red-700 mb-2">Public Health & Advocacy</h4>                  <ul className="list-disc list-inside text-gray-700 space-y-1">                    <li>Conduct health education campaigns</li>                    <li>Organize community health screenings</li>                    <li>Advocate for health policy improvements</li>                    <li>Address social determinants of health</li>                  </ul>                </div>                <div className="bg-red-50 p-4 rounded-lg">                  <h4 className="font-semibold text-red-700 mb-2">Global Health</h4>                  <ul className="list-disc list-inside text-gray-700 space-y-1">                    <li>Facilitate international student exchanges</li>                    <li>Participate in global health initiatives</li>                    <li>Collaborate with international partners</li>                    <li>Share best practices across borders</li>                  </ul>                </div>              </div>            </motion.div>            <motion.div variants={fadeIn('up', 0.8)}>              <h3 className="text-2xl font-semibold text-red-800 mb-3">History</h3>              <p className="text-gray-700">                TAMIRASA was established in 1998 by a group of forward-thinking medical students at Muhimbili University College of Health Sciences (now MUHAS). Since its inception, the association has grown significantly in both membership and impact, becoming a vital component of medical education in Tanzania. Throughout its history, TAMIRASA has been instrumental in advocating for improvements in medical education, organizing community health initiatives, and providing a unified voice for medical students on national health issues.              </p>              <p className="mt-3 text-gray-700">                In 2002, TAMIRASA became an official member of the International Federation of Medical Students&apos; Associations (IFMSA), opening doors for international collaborations and exchange programs. Today, the association stands as one of the most active student organizations at MUHAS, with a rich legacy of leadership development and community service.              </p>            </motion.div>          </motion.div>        );            case 'events':        return (          <motion.div             variants={staggerContainer}            initial="hidden"            animate="show"          >            <motion.h3               variants={fadeIn('up', 0.2)}              className="text-2xl font-semibold text-red-800 mb-6"            >              Upcoming & Past Events            </motion.h3>                        <div className="grid md:grid-cols-2 gap-6">              {events.map((event) => (                <motion.div                   key={event.id}                   variants={fadeIn('up', 0.3 + event.id * 0.1)}                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border-2 border-red-200"                >                  <div className="relative h-48 w-full">                    <Image                      src={event.image || '/asscociation_details/event-placeholder.jpg'}                      alt={event.title}                      fill                      className="object-cover"                    />                    <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 m-2 rounded-full text-xs font-medium">                      Medical Event                    </div>                  </div>                  <div className="p-5">                    <h4 className="font-semibold text-lg text-red-800 mb-2">{event.title}</h4>                    <div className="text-sm text-red-600 mb-3 flex items-center">                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />                      </svg>                      <time dateTime={event.date}>                        {new Date(event.date).toLocaleDateString('en-US', {                          year: 'numeric',                          month: 'long',                          day: 'numeric',                        })}                      </time>                    </div>                    <p className="text-gray-700 mb-4">{event.description}</p>                    <button className="text-red-600 hover:text-red-800 font-medium flex items-center">                      Learn more                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />                      </svg>                    </button>                  </div>                </motion.div>              ))}            </div>                        <motion.div variants={fadeIn('up', 0.8)} className="mt-8 bg-red-50 p-6 rounded-lg shadow-sm border border-red-200">              <h4 className="font-semibold text-red-800 mb-3">Want to suggest an event?</h4>              <p className="text-gray-700 mb-4">TAMIRASA welcomes event suggestions from members. If you have an idea for a workshop, conference, or community outreach initiative, please contact our Events Coordinator.</p>              <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md text-sm transition-colors">                Submit Event Idea              </button>            </motion.div>          </motion.div>        );              case 'leadership':        return (          <motion.div             variants={staggerContainer}            initial="hidden"            animate="show"          >            <motion.h3               variants={fadeIn('up', 0.2)}              className="text-2xl font-semibold text-red-800 mb-6"            >              Leadership Team            </motion.h3>                        <div className="grid md:grid-cols-2 gap-6">              {leadershipTeam.map((leader) => (                <motion.div                   key={leader.id}                  variants={fadeIn('up', 0.3 + leader.id * 0.1)}                  className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col sm:flex-row border-2 border-red-200 hover:shadow-lg transition-shadow"                  whileHover={{ y: -5 }}                >                  <div className="relative sm:w-1/3 h-48 sm:h-auto">                    <Image                      src={leader.image || '/asscociation_details/profile-placeholder.jpg'}                      alt={leader.name}                      fill                      className="object-cover"                    />                    <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white py-1 px-2">                      <div className="text-xs font-medium truncate">{leader.position}</div>                    </div>                  </div>                  <div className="p-5 sm:w-2/3">                    <h4 className="font-semibold text-lg text-red-800">{leader.name}</h4>                    <div className="text-red-600 font-medium mb-2">{leader.position}</div>                    <p className="text-gray-700">{leader.bio}</p>                    <div className="mt-3 flex space-x-2">                      <button className="p-1 rounded bg-red-50 text-red-600 hover:bg-red-100 transition-colors">                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />                        </svg>                      </button>                      <button className="p-1 rounded bg-red-50 text-red-600 hover:bg-red-100 transition-colors">                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />                        </svg>                      </button>                    </div>                  </div>                </motion.div>              ))}            </div>                        <motion.div variants={fadeIn('up', 0.8)} className="mt-8 text-center">              <h4 className="text-lg font-medium text-red-800 mb-2">Join the TAMIRASA Leadership Team</h4>              <p className="text-gray-700 mb-4 max-w-2xl mx-auto">Elections for leadership positions are held annually. If you&apos;re interested in becoming part of the leadership team, watch for election announcements at the beginning of each academic year.</p>              <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md transition-colors">                Learn About Elections              </button>            </motion.div>          </motion.div>        );              case 'calendar':        return (          <motion.div             variants={staggerContainer}            initial="hidden"            animate="show"          >            <motion.h3               variants={fadeIn('up', 0.2)}              className="text-2xl font-semibold text-red-800 mb-6"            >              Event Calendar            </motion.h3>                        <motion.div               variants={fadeIn('up', 0.4)}              className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-red-200"            >              <div className="border-b bg-red-50 px-6 py-4 flex justify-between items-center">                <h4 className="font-semibold text-red-800">Upcoming Events</h4>                <div className="flex space-x-2">                  <button className="p-1 rounded bg-white text-red-600 hover:bg-red-100 transition-colors">                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />                    </svg>                  </button>                  <button className="p-1 rounded bg-white text-red-600 hover:bg-red-100 transition-colors">                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />                    </svg>                  </button>                </div>              </div>              <div className="divide-y">                {calendarEvents.map((event) => (                  <div key={event.id} className="px-6 py-4 hover:bg-red-50 transition-colors cursor-pointer">                    <h5 className="font-medium text-lg text-red-800">{event.title}</h5>                    <div className="flex flex-wrap gap-x-6 text-sm mt-2">                      <div className="flex items-center text-gray-600">                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />                        </svg>                        <time dateTime={event.date}>                          {new Date(event.date).toLocaleDateString('en-US', {                            year: 'numeric',                            month: 'long',                            day: 'numeric',                          })}                        </time>                      </div>                      <div className="flex items-center text-gray-600">                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />                        </svg>                        {event.time}                      </div>                      <div className="flex items-center text-gray-600">                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />                        </svg>                        {event.location}                      </div>                    </div>                    <div className="mt-2 flex justify-end">                      <button className="text-xs bg-red-100 text-red-600 py-1 px-2 rounded">Add to calendar</button>                    </div>                  </div>                ))}              </div>            </motion.div>                        <motion.div               variants={fadeIn('up', 0.6)}              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"            >              <div className="bg-red-50 p-6 rounded-lg">                <h4 className="font-medium text-red-800 mb-3 text-lg">Download TAMIRASA Calendar</h4>                <p className="text-gray-700 mb-4">Keep track of all our events by adding our calendar to your Google Calendar or other calendar applications.</p>                <button className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition-colors flex items-center mx-auto">                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />                  </svg>                  Download Full Calendar                </button>              </div>                            <div className="bg-red-50 p-6 rounded-lg">                <h4 className="font-medium text-red-800 mb-3 text-lg">Subscribe to Event Notifications</h4>                <p className="text-gray-700 mb-4">Get notified about upcoming events and never miss an important TAMIRASA activity.</p>                <button className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition-colors flex items-center mx-auto">                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />                  </svg>                  Subscribe to Notifications                </button>              </div>            </motion.div>          </motion.div>        );              default:        return <div>Content not available</div>;    }  };  // ==========================================
  // Main Component Render
  // ==========================================

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 mb-10"
        >
          <div className="relative w-40 h-40 mb-6 md:mb-0">
            <Image 
              src="/asscociation_details/tamirasa/logo.png"
              alt="TAMIRASA Logo"
              fill
              className="object-contain"
            />
          </div>
          
          <div className="text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-3xl lg:text-4xl font-bold text-red-900 mb-3"
            >
              Tanzania Medical Students Association
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-red-700 mb-4"
            >
              TAMIRASA - MUHAS Chapter
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-gray-600 max-w-3xl"
            >
              Empowering future physicians at MUHAS through academic excellence, clinical skills development, research opportunities, and community health initiatives to shape the future of healthcare in Tanzania.
            </motion.p>
          </div>
        </motion.div>
        
        {/* Tab Navigation */}
        <div className="mb-8 border-b">
          <div className="flex overflow-x-auto scrollbar-hide space-x-2">
            {['overview', 'events', 'leadership', 'calendar'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 whitespace-nowrap font-medium transition-colors duration-200 border-b-2 ${
                  activeTab === tab 
                    ? 'border-red-600 text-red-900'
                    : 'border-transparent text-gray-600 hover:text-red-700 hover:border-red-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="min-h-[400px]">
          {renderTabContent()}
        </div>
      </main>
      
      <Footer />
    </div>
  );};export default TamirasaPage;