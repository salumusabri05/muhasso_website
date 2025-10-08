'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Calendar, MapPin, Clock, User, Phone, Mail, Instagram, Facebook, Twitter, ArrowLeft } from 'lucide-react';
import EventCard from '../../../components/religion-clubs/EventCard';
import LeaderCard from '../../../components/religion-clubs/LeaderCard';
import CalendarView from '../../../components/religion-clubs/CalendarView';

export default function MsamuPage() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Add animation styles
  React.useEffect(() => {
    // This empty effect is just to ensure the component re-renders for animations
  }, []);
  
  // Dummy data for MSAMU
  const organization = {
    name: 'MSAMU',
    fullName: 'Muslim Students Association of Muhimbili',
    motto: 'Unity in Faith, Excellence in Learning',
    logo: '/file.svg', // Replace with actual logo path
    description: `
      MSAMU (Muslim Students Association of Muhimbili) is a vibrant community dedicated to supporting Muslim students at Muhimbili University of Health and Allied Sciences (MUHAS).
      
      Our mission is to provide a nurturing environment for spiritual growth, Islamic education, and community service while promoting academic excellence in healthcare studies. We aim to help Muslim students maintain their religious practices and identity while pursuing their educational goals.
      
      MSAMU offers regular prayers, Islamic study circles, social events, and charitable activities, fostering brotherhood/sisterhood among members and building bridges with the wider university community.
    `,
    meetingSchedule: [
      { day: 'Monday', time: '7:30 PM - 9:00 PM', activity: 'Qur\'an Study Circle', location: 'Prayer Room, East Campus' },
      { day: 'Wednesday', time: '7:00 PM - 8:30 PM', activity: 'Islamic Knowledge Session', location: 'Seminar Room B, Main Campus' },
      { day: 'Friday', time: '1:00 PM - 2:00 PM', activity: 'Jumu\'ah Prayer', location: 'Main Prayer Hall' }
    ],
    leaders: [
      { 
        name: 'Ahmed Ibrahim', 
        position: 'Chairman', 
        image: '/file.svg',  // Replace with actual image
        program: 'Doctor of Medicine, Year 5', 
        email: 'ahmed.ibrahim@muhas.edu.tz',
        phone: '+255 712 345 678'
      },
      { 
        name: 'Fatima Hassan', 
        position: 'Vice Chairperson', 
        image: '/file.svg',  // Replace with actual image
        program: 'BSc in Pharmacy, Year 4', 
        email: 'fatima.hassan@muhas.edu.tz',
        phone: '+255 765 432 198'
      },
      { 
        name: 'Omar Juma', 
        position: 'Secretary General', 
        image: '/file.svg',  // Replace with actual image
        program: 'BSc in Nursing, Year 3', 
        email: 'omar.juma@muhas.edu.tz',
        phone: '+255 789 123 456'
      },
      { 
        name: 'Aisha Mohamed', 
        position: 'Treasurer', 
        image: '/file.svg',  // Replace with actual image
        program: 'BSc in Laboratory Sciences, Year 3', 
        email: 'aisha.mohamed@muhas.edu.tz',
        phone: '+255 732 109 876'
      }
    ],
    events: [
      {
        id: 1,
        title: 'Annual Islamic Awareness Week',
        date: 'November 10-16, 2025',
        time: 'Various times',
        location: 'Multiple venues across campus',
        description: 'A week of lectures, exhibitions, and activities designed to promote understanding of Islamic principles and practices among the university community.',
        type: 'education'
      },
      {
        id: 2,
        title: 'Ramadan Iftar Gatherings',
        date: 'March 1-30, 2026',
        time: 'Sunset - 8:30 PM',
        location: 'MUHAS Dining Hall',
        description: 'Daily community iftar (breaking of fast) during Ramadan, open to all Muslim students and interested members of the university community.',
        type: 'social'
      },
      {
        id: 3,
        title: 'Charity Medical Camp',
        date: 'October 25, 2025',
        time: '9:00 AM - 4:00 PM',
        location: 'Mbagala Community Center',
        description: 'Volunteer-based medical camp providing free basic health services, consultations, and health education to underserved communities.',
        type: 'service'
      },
      {
        id: 4,
        title: 'Islamic Knowledge Competition',
        date: 'December 5, 2025',
        time: '2:00 PM - 5:00 PM',
        location: 'Main Auditorium',
        description: 'Annual quiz competition testing knowledge of Islamic principles, history, and practices with prizes for winning teams.',
        type: 'education'
      }
    ],
    socialMedia: {
      facebook: 'https://facebook.com/msamu.muhas',
      instagram: 'https://instagram.com/msamu_muhas',
      twitter: 'https://twitter.com/msamu_muhas'
    },
    contact: {
      email: 'msamu@muhas.edu.tz',
      phone: '+255 712 345 000'
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-white animate-fadeIn">
      <Header />
      
      <div className="flex-grow container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Navigation Breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/religion-clubs" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span>Back to Religion & Clubs</span>
            </Link>
          </div>
          
          {/* Organization Header */}
          <div className="bg-green-50 rounded-xl p-6 mb-8 animate-slideDown">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Logo */}
              <div className="shrink-0">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="relative w-24 h-24">
                    <Image 
                      src={organization.logo}
                      alt={organization.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              
              {/* Organization Info */}
              <div className="flex-grow text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-green-900">{organization.name}</h1>
                <p className="text-gray-600 mb-2">{organization.fullName}</p>
                <p className="text-green-700 italic mb-4">&quot;{organization.motto}&quot;</p>
                
                {/* Social Media Links */}
                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                  <a 
                    href={organization.socialMedia.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-700 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href={organization.socialMedia.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-700 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href={organization.socialMedia.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-700 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="shrink-0 bg-white rounded-lg shadow-sm p-4 w-full md:w-auto">
                <h3 className="text-lg font-medium text-green-900 mb-2">Contact Information</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <Mail className="w-4 h-4 mr-2 text-green-600" />
                    <a href={`mailto:${organization.contact.email}`} className="hover:underline">
                      {organization.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-4 h-4 mr-2 text-green-600" />
                    <a href={`tel:${organization.contact.phone}`} className="hover:underline">
                      {organization.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tab Navigation */}
          <div className="mb-8 border-b border-gray-200 animate-slideUp">
            <nav className="flex overflow-x-auto">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-3 font-medium whitespace-nowrap border-b-2 transition-all ${
                  activeTab === 'overview'
                    ? 'border-green-600 text-green-900'
                    : 'border-transparent text-gray-600 hover:text-green-900 hover:border-green-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`px-4 py-3 font-medium whitespace-nowrap border-b-2 transition-all ${
                  activeTab === 'events'
                    ? 'border-green-600 text-green-900'
                    : 'border-transparent text-gray-600 hover:text-green-900 hover:border-green-300'
                }`}
              >
                Events
              </button>
              <button
                onClick={() => setActiveTab('leaders')}
                className={`px-4 py-3 font-medium whitespace-nowrap border-b-2 transition-all ${
                  activeTab === 'leaders'
                    ? 'border-green-600 text-green-900'
                    : 'border-transparent text-gray-600 hover:text-green-900 hover:border-green-300'
                }`}
              >
                Leadership
              </button>
              <button
                onClick={() => setActiveTab('calendar')}
                className={`px-4 py-3 font-medium whitespace-nowrap border-b-2 transition-all ${
                  activeTab === 'calendar'
                    ? 'border-green-600 text-green-900'
                    : 'border-transparent text-gray-600 hover:text-green-900 hover:border-green-300'
                }`}
              >
                Calendar
              </button>
            </nav>
          </div>
          
          {/* Tab Content */}
          <div className="mb-12">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="animate-fadeIn">
                <section className="mb-8 animate-slideInLeft" style={{ animationDelay: '100ms' }}>
                  <h2 className="text-2xl font-bold text-green-900 mb-4">About MSAMU</h2>
                  <div className="prose max-w-none text-gray-700">
                    {organization.description.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </section>
                
                <section className="mb-8 animate-slideInLeft" style={{ animationDelay: '200ms' }}>
                  <h2 className="text-2xl font-bold text-green-900 mb-4">Regular Schedule</h2>
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <table className="min-w-full">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {organization.meetingSchedule.map((meeting, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{meeting.day}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2 text-green-600" />
                                {meeting.time}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{meeting.activity}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2 text-green-600" />
                                {meeting.location}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
                
                <section className="animate-slideInLeft" style={{ animationDelay: '300ms' }}>
                  <h2 className="text-2xl font-bold text-green-900 mb-4">Upcoming Events</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {organization.events.slice(0, 2).map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                  <div className="text-center">
                    <button 
                      onClick={() => setActiveTab('events')}
                      className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <span>View All Events</span>
                      <ChevronLeft className="w-4 h-4 ml-2 transform rotate-180" />
                    </button>
                  </div>
                </section>
              </div>
            )}
            
            {/* Events Tab */}
            {activeTab === 'events' && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-bold text-green-900 mb-6">Upcoming Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {organization.events.map((event, index) => (
                    <div key={event.id} className="animate-slideUp" style={{ animationDelay: `${index * 100}ms` }}>
                      <EventCard event={event} />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Leaders Tab */}
            {activeTab === 'leaders' && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-bold text-green-900 mb-6">Leadership Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {organization.leaders.map((leader, index) => (
                    <div key={index} className="animate-slideUp" style={{ animationDelay: `${index * 100}ms` }}>
                      <LeaderCard leader={leader} />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Calendar Tab */}
            {activeTab === 'calendar' && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-bold text-green-900 mb-6">Event Calendar</h2>
                <CalendarView events={organization.events} />
              </div>
            )}
          </div>
          
          {/* Join Section */}
          <section className="bg-green-50 rounded-xl p-6 animate-slideUp delay-300">
            <h2 className="text-2xl font-bold text-green-900 mb-4">How to Join MSAMU</h2>
            
            <p className="text-gray-700 mb-6">
              We welcome all Muslim students at MUHAS to join our community. Becoming a member is simple and offers numerous benefits including spiritual support, academic resources, and a sense of belonging.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-4">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-green-900 mb-1">Visit Us</h3>
                  <p className="text-gray-700">
                    Attend any of our regular activities or drop by our office at Room 105, Student Center Building.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-4">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-green-900 mb-1">Complete Registration</h3>
                  <p className="text-gray-700">
                    Fill out a membership form, which can be obtained from any executive member or from our office.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-4">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-green-900 mb-1">Attend New Member Orientation</h3>
                  <p className="text-gray-700">
                    Participate in a brief orientation session to learn about our activities, services, and how to get involved.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href={`mailto:${organization.contact.email}?subject=Joining MSAMU`}
                className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Contact Us to Join
              </a>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
