'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import EventCard from '../../../components/EventCard';
import LeaderCard from '../../../components/LeaderCard';
import CalendarView from '../../../components/CalendarView';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const Anglican = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div 
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About Anglican Students Association</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The Anglican Students Association at Muhimbili University is a vibrant religious community serving students who follow the Anglican faith. The association provides spiritual guidance, fellowship, and support to Anglican students as they navigate their academic journey.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our mission is to foster spiritual growth, provide a supportive community, and help members balance their faith with their academic and professional pursuits in healthcare.
              </p>

              <div className="mt-6">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Meeting Schedule:</h4>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  <li>Sunday Service: 9:00 AM - 11:30 AM at the University Chapel</li>
                  <li>Wednesday Bible Study: 5:00 PM - 6:30 PM at Room 105, Block B</li>
                  <li>Friday Fellowship: 7:00 PM - 9:00 PM at the Student Center</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Activities and Ministries</h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Prayer and intercession groups</li>
                <li>Community outreach and medical missions</li>
                <li>Bible study and theological discussions</li>
                <li>Choir and worship team</li>
                <li>Annual retreat and spiritual camps</li>
                <li>Mentorship programs for new students</li>
              </ul>
            </div>
          </motion.div>
        );
      
      case 'events':
        const events = [
          {
            id: 1,
            title: 'Easter Service & Celebration',
            date: 'April 9, 2023',
            time: '9:00 AM - 1:00 PM',
            location: 'University Chapel',
            description: 'Join us for a special Easter service followed by a celebration lunch and fellowship. All students are welcome to attend and celebrate this important day in the Christian calendar.',
            image: '/images/easter-service.jpg'
          },
          {
            id: 2,
            title: 'Community Medical Outreach',
            date: 'May 20, 2023',
            time: '8:00 AM - 4:00 PM',
            location: 'Kibamba Community',
            description: 'Anglican students will be providing basic medical services and health education to the Kibamba community. This is part of our mission to serve others while applying our healthcare knowledge.',
            image: '/images/medical-outreach.jpg'
          },
          {
            id: 3,
            title: 'Annual Anglican Retreat',
            date: 'June 15-17, 2023',
            time: 'All day event',
            location: 'Bagamoyo Retreat Center',
            description: 'A three-day spiritual retreat for all Anglican students featuring guest speakers, worship sessions, prayer, and fellowship activities. Transportation will be provided.',
            image: '/images/retreat.jpg'
          }
        ];
  
        return (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {events.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </motion.div>
        );
  
      case 'leadership':
        const leaders = [
          {
            id: 1,
            name: 'Rev. Thomas Mwakasege',
            role: 'Chaplain',
            bio: 'Rev. Thomas has served as the Anglican Chaplain at Muhimbili University for the past 5 years. He provides spiritual guidance to students and leads the weekly services.',
            image: '/images/chaplain.jpg'
          },
          {
            id: 2,
            name: 'Sarah Njau',
            role: 'Chairperson',
            bio: 'Sarah is a final year medical student who has been active in the Anglican Students Association since her first year. She coordinates all association activities and represents Anglican students in university forums.',
            image: '/images/chairperson.jpg'
          },
          {
            id: 3,
            name: 'Daniel Masanja',
            role: 'Secretary',
            bio: 'Daniel is responsible for communication, record-keeping, and organizing the association\'s meetings and events. He is currently pursuing a degree in Pharmacy.',
            image: '/images/secretary.jpg'
          },
          {
            id: 4,
            name: 'Grace Mkindi',
            role: 'Treasurer',
            bio: 'Grace manages the association\'s finances, including membership dues and fundraising activities. She is a third-year nursing student with a background in accounting.',
            image: '/images/treasurer.jpg'
          }
        ];
  
        return (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {leaders.map(leader => (
              <LeaderCard key={leader.id} leader={leader} />
            ))}
          </motion.div>
        );
      
      case 'calendar':
        const calendarEvents = [
          {
            title: 'Sunday Service',
            start: new Date(2023, 3, 2, 9, 0),
            end: new Date(2023, 3, 2, 11, 30),
            recurringDays: [0], // Sunday
            recurringInterval: 'weekly',
          },
          {
            title: 'Bible Study',
            start: new Date(2023, 3, 5, 17, 0),
            end: new Date(2023, 3, 5, 18, 30),
            recurringDays: [3], // Wednesday
            recurringInterval: 'weekly',
          },
          {
            title: 'Fellowship Night',
            start: new Date(2023, 3, 7, 19, 0),
            end: new Date(2023, 3, 7, 21, 0),
            recurringDays: [5], // Friday
            recurringInterval: 'weekly',
          },
          {
            title: 'Easter Service & Celebration',
            start: new Date(2023, 3, 9, 9, 0),
            end: new Date(2023, 3, 9, 13, 0),
          },
          {
            title: 'Committee Meeting',
            start: new Date(2023, 3, 15, 16, 0),
            end: new Date(2023, 3, 15, 17, 30),
          },
          {
            title: 'Community Medical Outreach',
            start: new Date(2023, 4, 20, 8, 0),
            end: new Date(2023, 4, 20, 16, 0),
          },
          {
            title: 'Annual Anglican Retreat',
            start: new Date(2023, 5, 15),
            end: new Date(2023, 5, 17),
            allDay: true,
          }
        ];
  
        return (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
          >
            <CalendarView events={calendarEvents} />
          </motion.div>
        );
  
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
            <div className="w-40 h-40 relative">
              <div className="w-full h-full rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-4xl font-bold text-blue-600 dark:text-blue-300">
                ASA
              </div>
            </div>
          </div>
          <div className="md:w-3/4 md:pl-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Anglican Students Association</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 italic mb-4">&ldquo;Growing in Faith, Serving in Love&rdquo;</p>
            <p className="text-gray-700 dark:text-gray-300">
              The Anglican Students Association provides spiritual nurturing and fellowship for Anglican students at Muhimbili University. We focus on spiritual growth, community service, and creating a supportive family away from home for students.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="mb-6">
        <div className="flex overflow-x-auto space-x-4 p-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-md whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-4 py-2 rounded-md whitespace-nowrap ${
              activeTab === 'events'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            Events
          </button>
          <button
            onClick={() => setActiveTab('leadership')}
            className={`px-4 py-2 rounded-md whitespace-nowrap ${
              activeTab === 'leadership'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            Leadership
          </button>
          <button
            onClick={() => setActiveTab('calendar')}
            className={`px-4 py-2 rounded-md whitespace-nowrap ${
              activeTab === 'calendar'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            Calendar
          </button>
        </div>
      </div>

      <div className="mb-8">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Anglican;
