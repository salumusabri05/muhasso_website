'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, Calendar, MapPin, Clock, User, Phone, Mail, Instagram, Facebook, Twitter, ArrowLeft } from 'lucide-react';
import EventCard from '../../../components/religion-clubs/EventCard';
import LeaderCard from '../../../components/religion-clubs/LeaderCard';
import CalendarView from '../../../components/religion-clubs/CalendarView';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function MedicalStudentsClub() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Dummy data for Medical Students Club
  const organization = {
    name: 'MUHAS Medical Students Club',
    fullName: 'Muhimbili University Medical Students Club',
    motto: 'Healing Hands, Caring Hearts',
    logo: '/file.svg', // Replace with actual logo path
    description: `
      The Muhimbili University Medical Students Club (MUMSC) is a vibrant community of future healthcare professionals dedicated to enhancing medical education, promoting professional development, and engaging in health advocacy at Muhimbili University of Health and Allied Sciences.
      
      Our club serves as a platform for medical students to expand their knowledge beyond the classroom through workshops, seminars, clinical skills sessions, and research activities. We also organize community health outreach programs, awareness campaigns, and collaborate with other healthcare institutions to provide holistic learning experiences.
      
      Since our establishment in 2005, MUMSC has been at the forefront of complementing medical education with practical experiences, leadership opportunities, and community service.
    `,
    meetingSchedule: [
      { day: 'Last Saturday of every month', time: '2:00 PM - 4:00 PM', activity: 'General Meetings', location: 'Lecture Theatre 2' },
      { day: 'Every Tuesday', time: '5:00 PM - 7:00 PM', activity: 'Clinical Skills Practice', location: 'Skills Lab' },
      { day: 'Biweekly on Thursdays', time: '4:00 PM - 6:00 PM', activity: 'Research Club', location: 'Seminar Room A' },
      { day: 'First Friday of every month', time: '3:00 PM - 5:00 PM', activity: 'Journal Club', location: 'Library Conference Room' },
      { day: 'Biweekly on Wednesdays', time: '4:00 PM - 5:30 PM', activity: 'Community Outreach Planning', location: 'Seminar Room B' }
    ],
    contactInfo: {
      email: 'mumsc@muhas.ac.tz',
      phone: '+255 765 432 109',
      socialMedia: {
        facebook: 'MUHAS.MedicalStudentsClub',
        twitter: '@MUMSC_Official',
        instagram: '@mumsc_official'
      }
    },
    history: `
      Founded in 2005, the Muhimbili University Medical Students Club began as a small group of dedicated medical students seeking to complement their classroom education with practical experiences. What started with just 15 members has grown into one of the most active and influential student organizations at MUHAS, now boasting over 600 members across all years of medical study.
      
      The club has evolved from focusing solely on clinical skills practice to encompassing research, community outreach, medical ethics discussions, global health initiatives, and professional development. Throughout our history, we have maintained a commitment to excellence in medical education and service to the community.
      
      Key milestones include the establishment of our annual Medical Students Conference in 2008, the launch of our Rural Health Outreach Program in 2012, and our affiliation with the International Federation of Medical Students' Associations (IFMSA) in 2015, which opened doors for international exchanges and collaborations.
    `,
    achievements: [
      'Organized over 50 successful community health camps serving more than 15,000 patients',
      'Published 25+ research papers in peer-reviewed medical journals',
      'Won the "Best Student Organization" award at MUHAS for 5 consecutive years (2018-2022)',
      'Successfully hosted the East African Medical Students Conference in 2019',
      'Established a mentorship program connecting 200+ junior students with senior students and faculty',
      'Developed a clinical skills handbook that is now used as a supplementary resource in the medical curriculum',
      'Raised funds to equip the student skills laboratory with modern simulation equipment'
    ],
    programs: [
      {
        name: 'Clinical Skills Enhancement',
        description: 'Regular workshops and practice sessions focused on developing hands-on clinical skills beyond the standard curriculum'
      },
      {
        name: 'Research Mentorship',
        description: 'Guidance and support for students interested in medical research, including methodology training and publication assistance'
      },
      {
        name: 'Community Health Outreach',
        description: 'Regular health camps, screening programs, and educational initiatives in underserved communities around Dar es Salaam'
      },
      {
        name: 'Medical Ethics Forum',
        description: 'Regular discussions on ethical dilemmas in medicine, patient rights, and professional responsibilities'
      },
      {
        name: 'Career Development',
        description: 'Workshops, seminars, and networking events to prepare students for residency applications and career planning'
      }
    ]
  };

  // Leadership data
  const leadershipData = [
    {
      name: 'Dr. Sarah Makani',
      role: 'Faculty Advisor',
      image: '/file.svg',
      bio: 'Associate Professor of Medicine with special interest in medical education and student mentorship.',
      contact: 'smakani@muhas.ac.tz'
    },
    {
      name: 'James Mwakasege',
      role: 'President',
      image: '/file.svg',
      bio: 'Final year medical student with passion for medical education and healthcare policy.',
      contact: 'j.mwakasege@students.muhas.ac.tz'
    },
    {
      name: 'Grace Nyambo',
      role: 'Vice President',
      image: '/file.svg',
      bio: '4th year medical student specializing in research methodology and community health.',
      contact: 'g.nyambo@students.muhas.ac.tz'
    },
    {
      name: 'Emmanuel Kweka',
      role: 'Secretary General',
      image: '/file.svg',
      bio: '3rd year medical student with excellent organizational skills and interest in global health.',
      contact: 'e.kweka@students.muhas.ac.tz'
    },
    {
      name: 'Fatma Hussein',
      role: 'Treasurer',
      image: '/file.svg',
      bio: '4th year medical student with background in finance and project management.',
      contact: 'f.hussein@students.muhas.ac.tz'
    },
    {
      name: 'Daniel Macha',
      role: 'Academic Coordinator',
      image: '/file.svg',
      bio: '5th year medical student with special interest in medical education innovations.',
      contact: 'd.macha@students.muhas.ac.tz'
    },
    {
      name: 'Irene Paulo',
      role: 'Outreach Coordinator',
      image: '/file.svg',
      bio: '3rd year medical student passionate about rural health and community medicine.',
      contact: 'i.paulo@students.muhas.ac.tz'
    },
    {
      name: 'Joshua Mwanza',
      role: 'Research Coordinator',
      image: '/file.svg',
      bio: '4th year medical student with publications in tropical medicine research.',
      contact: 'j.mwanza@students.muhas.ac.tz'
    }
  ];

  // Events data
  const eventsData = [
    {
      title: 'Annual Medical Students Conference',
      date: 'March 15-17, 2024',
      location: 'MUHAS Main Auditorium',
      description: 'A three-day conference featuring keynote speakers, research presentations, workshops, and networking opportunities for medical students across Tanzania.',
      image: '/file.svg'
    },
    {
      title: 'Clinical Skills Competition',
      date: 'April 22, 2024',
      location: 'Skills Laboratory',
      description: 'An inter-class competition testing diagnostic reasoning, procedural skills, and patient communication in simulated clinical scenarios.',
      image: '/file.svg'
    },
    {
      title: 'Community Health Camp - Mbagala',
      date: 'May 7, 2024',
      location: 'Mbagala Health Center',
      description: 'A comprehensive health camp offering free screenings, consultations, and health education to the Mbagala community.',
      image: '/file.svg'
    },
    {
      title: 'Research Methodology Workshop',
      date: 'June 5-6, 2024',
      location: 'MUHAS Library Conference Room',
      description: 'An intensive workshop covering study design, data collection methods, statistical analysis, and research paper writing.',
      image: '/file.svg'
    },
    {
      title: 'Medical Ethics Symposium',
      date: 'July 18, 2024',
      location: 'Lecture Theatre 3',
      description: 'A symposium addressing ethical challenges in modern medicine with case discussions and expert panels.',
      image: '/file.svg'
    },
    {
      title: 'Career Guidance Seminar',
      date: 'August 25, 2024',
      location: 'MUHAS Conference Center',
      description: 'A seminar featuring specialists from various medical fields discussing career paths, specialization options, and residency preparation.',
      image: '/file.svg'
    }
  ];

  // Calendar data - events spanning several months
  const calendarEvents = [
    { date: '2024-01-25', title: 'General Meeting', type: 'meeting' },
    { date: '2024-01-30', title: 'Clinical Skills Workshop - Basic Suturing', type: 'workshop' },
    { date: '2024-02-06', title: 'Research Club Meeting', type: 'meeting' },
    { date: '2024-02-14', title: "Valentine's Blood Donation Drive", type: 'outreach' },
    { date: '2024-02-22', title: 'Journal Club - Recent Advances in Cardiology', type: 'academic' },
    { date: '2024-02-29', title: 'General Meeting', type: 'meeting' },
    { date: '2024-03-07', title: 'Residency Application Seminar', type: 'career' },
    { date: '2024-03-15', title: 'Annual Medical Students Conference - Day 1', type: 'conference' },
    { date: '2024-03-16', title: 'Annual Medical Students Conference - Day 2', type: 'conference' },
    { date: '2024-03-17', title: 'Annual Medical Students Conference - Day 3', type: 'conference' },
    { date: '2024-03-28', title: 'General Meeting', type: 'meeting' },
    { date: '2024-04-05', title: 'Journal Club - Infectious Disease Updates', type: 'academic' },
    { date: '2024-04-12', title: 'Clinical Skills Workshop - Advanced Life Support', type: 'workshop' },
    { date: '2024-04-18', title: 'Research Club Meeting', type: 'meeting' },
    { date: '2024-04-22', title: 'Clinical Skills Competition', type: 'competition' },
    { date: '2024-04-26', title: 'General Meeting', type: 'meeting' },
    { date: '2024-05-07', title: 'Community Health Camp - Mbagala', type: 'outreach' },
    { date: '2024-05-14', title: 'OSCE Preparation Workshop', type: 'workshop' },
    { date: '2024-05-20', title: 'Research Club Meeting', type: 'meeting' },
    { date: '2024-05-31', title: 'General Meeting', type: 'meeting' }
  ];

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
            <div className="bg-white border-l-4 border-blue-500 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About {organization.fullName}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {organization.description}
              </p>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Our History</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {organization.history}
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Programs</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {organization.programs.map((program, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                      <h5 className="font-medium text-gray-900 dark:text-white">{program.name}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{program.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Meeting Schedule</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Activity</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Day</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Time</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Location</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                      {organization.meetingSchedule.map((meeting, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{meeting.activity}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{meeting.day}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{meeting.time}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{meeting.location}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Achievements</h4>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                  {organization.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h4>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-500 mr-2" />
                    <span>{organization.contactInfo.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-500 mr-2" />
                    <span>{organization.contactInfo.phone}</span>
                  </div>
                  <div className="flex space-x-4 mt-2">
                    <a href={`https://facebook.com/${organization.contactInfo.socialMedia.facebook}`} className="text-blue-600 hover:text-blue-800">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href={`https://twitter.com/${organization.contactInfo.socialMedia.twitter}`} className="text-blue-400 hover:text-blue-600">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href={`https://instagram.com/${organization.contactInfo.socialMedia.instagram}`} className="text-pink-600 hover:text-pink-800">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'events':
        return (
          <motion.div 
            className="space-y-6" 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Upcoming Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventsData.map((event, index) => (
                <motion.div key={index} variants={slideUp}>
                  <EventCard
                    title={event.title}
                    date={event.date}
                    location={event.location}
                    description={event.description}
                    image={event.image}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      case 'leadership':
        return (
          <motion.div 
            className="space-y-6" 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Our Leadership</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {leadershipData.map((leader, index) => (
                <motion.div key={index} variants={slideUp}>
                  <LeaderCard
                    name={leader.name}
                    role={leader.role}
                    image={leader.image}
                    bio={leader.bio}
                    contact={leader.contact}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      case 'calendar':
        return (
          <motion.div 
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Event Calendar</h3>
            <div className="bg-white border-l-4 border-blue-500 rounded-lg shadow-md p-6">
              <CalendarView events={calendarEvents} />
            </div>
            <div className="mt-4 bg-white border-l-4 border-blue-500 rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Event Categories</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm">Meeting</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Workshop</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                  <span className="text-sm">Outreach</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-sm">Academic</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                  <span className="text-sm">Competition</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-pink-500 mr-2"></div>
                  <span className="text-sm">Conference</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-indigo-500 mr-2"></div>
                  <span className="text-sm">Career</span>
                </div>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-6">
          <Link href="/religion-clubs" className="flex items-center text-blue-600 hover:text-blue-800">
            <ChevronLeft className="h-4 w-4 mr-1" />
            <span>Back to Clubs & Organizations</span>
          </Link>
        </div>

        <div className="bg-white border-l-4 border-blue-500 rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="mr-4">
                <Image 
                  src={organization.logo} 
                  alt={organization.name} 
                  width={80} 
                  height={80} 
                  className="rounded-full border-2 border-blue-500"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{organization.fullName}</h2>
                <p className="text-blue-600 italic">{organization.motto}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Join Club</button>
              <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition">Contact Us</button>
            </div>
          </div>
        </div>

        <div className="mb-6 overflow-x-auto scrollbar-hide">
          <nav className="flex space-x-1 sm:space-x-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md transition ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md transition ${
                activeTab === 'events'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Events
            </button>
            <button
              onClick={() => setActiveTab('leadership')}
              className={`px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md transition ${
                activeTab === 'leadership'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Leadership
            </button>
            <button
              onClick={() => setActiveTab('calendar')}
              className={`px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md transition ${
                activeTab === 'calendar'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Calendar
            </button>
          </nav>
        </div>

        <div>
          {renderTabContent()}
        </div>
      </div>

      <Footer />
    </main>
  );
}
