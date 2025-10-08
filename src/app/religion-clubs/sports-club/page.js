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

const SportsClub = () => {
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About Muhimbili Sports Club</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Muhimbili Sports Club (MSC) promotes physical fitness, mental wellbeing, and team spirit among students through various sporting activities. We believe that maintaining a healthy balance between academics and physical activity is crucial for healthcare professionals.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Founded in 2008, our club has grown to include multiple sports disciplines including soccer, basketball, volleyball, athletics, swimming, and table tennis. We organize inter-faculty tournaments, participate in inter-university competitions, and coordinate fitness sessions for all students.
              </p>

              <div className="mt-6">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Training Schedule:</h4>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  <li>Soccer: Monday & Thursday, 4:00 PM - 6:00 PM at the University Field</li>
                  <li>Basketball: Tuesday & Friday, 5:00 PM - 7:00 PM at the Basketball Court</li>
                  <li>Volleyball: Wednesday & Saturday, 4:00 PM - 6:00 PM at the Volleyball Court</li>
                  <li>Table Tennis: Daily, 6:00 PM - 8:00 PM at the Recreation Center</li>
                  <li>Fitness Sessions: Monday to Friday, 6:00 AM - 7:00 AM at the University Gym</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Club Facilities and Activities</h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Modern gymnasium with weight training equipment</li>
                <li>Soccer field with standard dimensions</li>
                <li>Basketball and volleyball courts</li>
                <li>Table tennis facility with four tables</li>
                <li>Annual Inter-Faculty Sports Tournament</li>
                <li>Participation in National University Games</li>
                <li>Sports Medicine Workshops</li>
                <li>Fitness and Nutrition Seminars</li>
                <li>Weekend hiking and outdoor activities</li>
                <li>Monthly Fitness Challenges</li>
              </ul>
            </div>
          </motion.div>
        );
      
      case 'events':
        const events = [
          {
            id: 1,
            title: 'Inter-Faculty Football Tournament',
            date: 'April 8-22, 2023',
            time: '3:00 PM onwards',
            location: 'University Football Field',
            description: 'The annual football tournament between faculties at Muhimbili University. Teams from Medicine, Dentistry, Pharmacy, Nursing, and Allied Health Sciences will compete for the championship trophy.',
            image: '/images/football-tournament.jpg'
          },
          {
            id: 2,
            title: 'Sports Day & Fitness Challenge',
            date: 'May 13, 2023',
            time: '8:00 AM - 5:00 PM',
            location: 'Main Sports Complex',
            description: 'A full day of sports competitions, fitness challenges, and fun activities for all students and staff. Events include 100m sprint, long jump, relay races, tug-of-war, and obstacle courses.',
            image: '/images/sports-day.jpg'
          },
          {
            id: 3,
            title: 'Basketball Championship',
            date: 'June 3-4, 2023',
            time: '2:00 PM - 6:00 PM',
            location: 'University Basketball Court',
            description: 'A two-day basketball tournament featuring men\'s and women\'s teams from Muhimbili competing against teams from other universities in Dar es Salaam.',
            image: '/images/basketball-championship.jpg'
          },
          {
            id: 4,
            title: 'Sports Medicine Workshop',
            date: 'July 8, 2023',
            time: '10:00 AM - 1:00 PM',
            location: 'Lecture Hall 2',
            description: 'A workshop on common sports injuries, prevention strategies, and basic treatment techniques. Led by specialists from the Department of Orthopedics and Rehabilitation Medicine.',
            image: '/images/sports-medicine.jpg'
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
            name: 'Dr. David Mrisho',
            role: 'Faculty Advisor',
            bio: 'Dr. Mrisho from the Department of Physical Education and Sports Medicine provides guidance to the club and helps secure facilities and resources for sports activities.',
            image: '/images/sports-advisor.jpg'
          },
          {
            id: 2,
            name: 'Hassan Kimathi',
            role: 'Chairperson',
            bio: 'Hassan is a fourth-year medical student who oversees all club activities and represents MSC in university forums. He is a former national youth team basketball player.',
            image: '/images/sports-chair.jpg'
          },
          {
            id: 3,
            name: 'Joyce Mwanza',
            role: 'Vice Chairperson',
            bio: 'Joyce assists the chairperson and leads the women\'s sports initiatives. She is a third-year nursing student and captain of the women\'s volleyball team.',
            image: '/images/sports-vicechair.jpg'
          },
          {
            id: 4,
            name: 'Emmanuel Kileo',
            role: 'Secretary',
            bio: 'Emmanuel manages all club communications, event planning, and documentation. He is a second-year pharmacy student and active member of the track team.',
            image: '/images/sports-secretary.jpg'
          },
          {
            id: 5,
            name: 'Amina Said',
            role: 'Treasurer',
            bio: 'Amina handles the financial affairs of the club, including budgeting for equipment, tournaments, and travel. She is a fourth-year dental student.',
            image: '/images/sports-treasurer.jpg'
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
            title: 'Soccer Training',
            start: new Date(2023, 3, 3, 16, 0),
            end: new Date(2023, 3, 3, 18, 0),
            recurringDays: [1, 4], // Monday and Thursday
            recurringInterval: 'weekly',
          },
          {
            title: 'Basketball Training',
            start: new Date(2023, 3, 4, 17, 0),
            end: new Date(2023, 3, 4, 19, 0),
            recurringDays: [2, 5], // Tuesday and Friday
            recurringInterval: 'weekly',
          },
          {
            title: 'Volleyball Training',
            start: new Date(2023, 3, 5, 16, 0),
            end: new Date(2023, 3, 5, 18, 0),
            recurringDays: [3, 6], // Wednesday and Saturday
            recurringInterval: 'weekly',
          },
          {
            title: 'Morning Fitness',
            start: new Date(2023, 3, 3, 6, 0),
            end: new Date(2023, 3, 3, 7, 0),
            recurringDays: [1, 2, 3, 4, 5], // Monday to Friday
            recurringInterval: 'weekly',
          },
          {
            title: 'Inter-Faculty Football Tournament',
            start: new Date(2023, 3, 8, 15, 0),
            end: new Date(2023, 3, 22, 19, 0),
          },
          {
            title: 'Sports Day & Fitness Challenge',
            start: new Date(2023, 4, 13, 8, 0),
            end: new Date(2023, 4, 13, 17, 0),
          },
          {
            title: 'Basketball Championship',
            start: new Date(2023, 5, 3, 14, 0),
            end: new Date(2023, 5, 4, 18, 0),
          },
          {
            title: 'Sports Medicine Workshop',
            start: new Date(2023, 6, 8, 10, 0),
            end: new Date(2023, 6, 8, 13, 0),
          },
          {
            title: 'Team Captains Meeting',
            start: new Date(2023, 3, 10, 16, 0),
            end: new Date(2023, 3, 10, 17, 30),
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
              <div className="w-full h-full rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-4xl font-bold text-purple-600 dark:text-purple-300">
                MSC
              </div>
            </div>
          </div>
          <div className="md:w-3/4 md:pl-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Muhimbili Sports Club</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 italic mb-4">&ldquo;Healthy Body, Healthy Mind&rdquo;</p>
            <p className="text-gray-700 dark:text-gray-300">
              Muhimbili Sports Club promotes physical fitness and mental wellbeing among health sciences students through various sporting activities, competitions, and fitness programs that complement the academic rigor of healthcare education.
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
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-4 py-2 rounded-md whitespace-nowrap ${
              activeTab === 'events'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            Events
          </button>
          <button
            onClick={() => setActiveTab('leadership')}
            className={`px-4 py-2 rounded-md whitespace-nowrap ${
              activeTab === 'leadership'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            Leadership
          </button>
          <button
            onClick={() => setActiveTab('calendar')}
            className={`px-4 py-2 rounded-md whitespace-nowrap ${
              activeTab === 'calendar'
                ? 'bg-purple-600 text-white'
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

export default SportsClub;
