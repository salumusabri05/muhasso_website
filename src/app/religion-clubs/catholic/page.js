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

const Catholic = () => {
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About Catholic Students Association</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The Catholic Students Association (MUHIMSO) at Muhimbili University provides spiritual formation, fellowship, and community service opportunities for Catholic students. We aim to nurture faith and promote Catholic values while supporting academic excellence in healthcare education.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our association creates a home away from home for Catholic students, offering regular Mass celebrations, prayer sessions, and spiritual guidance to help members integrate their faith with their professional development.
              </p>

              <div className="mt-6">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Meeting Schedule:</h4>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  <li>Sunday Mass: 10:00 AM - 12:00 PM at the University Chapel</li>
                  <li>Tuesday Rosary Prayer: 6:30 PM - 7:30 PM at the Prayer Room</li>
                  <li>Thursday Catechism: 5:00 PM - 6:30 PM at Lecture Room 3</li>
                  <li>Saturday Choir Practice: 4:00 PM - 6:00 PM at the Chapel</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Activities and Ministries</h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Weekly Mass celebrations</li>
                <li>Faith formation programs</li>
                <li>Healthcare mission trips to underserved areas</li>
                <li>Spiritual retreats and recollections</li>
                <li>Catholic social teaching discussions</li>
                <li>Volunteer opportunities at local Catholic hospitals</li>
                <li>Annual pilgrimage to holy sites</li>
                <li>Support groups for students</li>
              </ul>
            </div>
          </motion.div>
        );
      
      case 'events':
        const events = [
          {
            id: 1,
            title: 'Lenten Retreat',
            date: 'March 25, 2023',
            time: '9:00 AM - 4:00 PM',
            location: 'University Chapel',
            description: 'A day of reflection and prayer during the Lenten season. The retreat will include confession opportunities, talks by visiting priests, and communal prayer.',
            image: '/images/lenten-retreat.jpg'
          },
          {
            id: 2,
            title: 'Medical Mission to Morogoro',
            date: 'May 5-7, 2023',
            time: 'All day event',
            location: 'Morogoro Region',
            description: 'A weekend medical mission trip to rural communities in Morogoro, providing basic healthcare services, health education, and spiritual support to underserved communities.',
            image: '/images/medical-mission.jpg'
          },
          {
            id: 3,
            title: 'Feast of St. Luke (Patron of Physicians)',
            date: 'October 18, 2023',
            time: '5:30 PM - 8:30 PM',
            location: 'Main Auditorium',
            description: 'Special Mass and dinner celebration for the feast of St. Luke, patron saint of physicians. The event includes a blessing of medical instruments and a talk on integrating faith and medical practice.',
            image: '/images/st-luke-feast.jpg'
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
            name: 'Fr. Joseph Mganga',
            role: 'Chaplain',
            bio: 'Fr. Joseph serves as the Catholic Chaplain for Muhimbili University. He celebrates Mass, provides spiritual guidance, and oversees the spiritual formation of Catholic students.',
            image: '/images/catholic-chaplain.jpg'
          },
          {
            id: 2,
            name: 'Michael Ngowi',
            role: 'Chairperson',
            bio: 'Michael is a fourth-year medical student who leads the Catholic Students Association. He coordinates with university administration and other religious groups on campus.',
            image: '/images/catholic-chair.jpg'
          },
          {
            id: 3,
            name: 'Agnes Kulwa',
            role: 'Secretary',
            bio: 'Agnes manages all communication and documentation for the association. She is responsible for meeting minutes, event planning, and maintaining member records.',
            image: '/images/catholic-secretary.jpg'
          },
          {
            id: 4,
            name: 'Francis Mwakasege',
            role: 'Treasurer',
            bio: 'Francis oversees the financial affairs of the association, including fundraising initiatives, budget planning, and financial reporting for all activities.',
            image: '/images/catholic-treasurer.jpg'
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
            title: 'Sunday Mass',
            start: new Date(2023, 3, 2, 10, 0),
            end: new Date(2023, 3, 2, 12, 0),
            recurringDays: [0], // Sunday
            recurringInterval: 'weekly',
          },
          {
            title: 'Rosary Prayer',
            start: new Date(2023, 3, 4, 18, 30),
            end: new Date(2023, 3, 4, 19, 30),
            recurringDays: [2], // Tuesday
            recurringInterval: 'weekly',
          },
          {
            title: 'Catechism Class',
            start: new Date(2023, 3, 6, 17, 0),
            end: new Date(2023, 3, 6, 18, 30),
            recurringDays: [4], // Thursday
            recurringInterval: 'weekly',
          },
          {
            title: 'Choir Practice',
            start: new Date(2023, 3, 8, 16, 0),
            end: new Date(2023, 3, 8, 18, 0),
            recurringDays: [6], // Saturday
            recurringInterval: 'weekly',
          },
          {
            title: 'Lenten Retreat',
            start: new Date(2023, 2, 25, 9, 0),
            end: new Date(2023, 2, 25, 16, 0),
          },
          {
            title: 'Medical Mission to Morogoro',
            start: new Date(2023, 4, 5),
            end: new Date(2023, 4, 7),
            allDay: true,
          },
          {
            title: 'Executive Committee Meeting',
            start: new Date(2023, 3, 12, 16, 0),
            end: new Date(2023, 3, 12, 17, 30),
          },
          {
            title: 'Feast of St. Luke',
            start: new Date(2023, 9, 18, 17, 30),
            end: new Date(2023, 9, 18, 20, 30),
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
              <div className="w-full h-full rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center text-4xl font-bold text-red-600 dark:text-red-300">
                MUHIMSO
              </div>
            </div>
          </div>
          <div className="md:w-3/4 md:pl-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Catholic Students Association</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 italic mb-4">&ldquo;Faith, Service, Excellence&rdquo;</p>
            <p className="text-gray-700 dark:text-gray-300">
              MUHIMSO (Muhimbili University Health and Allied Sciences Medical Students Organization) serves Catholic students by fostering spiritual growth, promoting Catholic values, and providing opportunities for service in healthcare settings.
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
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-4 py-2 rounded-md whitespace-nowrap ${
              activeTab === 'events'
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            Events
          </button>
          <button
            onClick={() => setActiveTab('leadership')}
            className={`px-4 py-2 rounded-md whitespace-nowrap ${
              activeTab === 'leadership'
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            Leadership
          </button>
          <button
            onClick={() => setActiveTab('calendar')}
            className={`px-4 py-2 rounded-md whitespace-nowrap ${
              activeTab === 'calendar'
                ? 'bg-red-600 text-white'
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

export default Catholic;
