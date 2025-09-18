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

export default function CasefetaPage() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Add animation styles
  React.useEffect(() => {
    // This empty effect is just to ensure the component re-renders for animations
  }, []);
  
  // Dummy data for CASEFETA
  const organization = {
    name: 'CASEFETA',
    fullName: 'Christian Students Fellowship Tanzania',
    motto: 'Growing in Faith, Serving in Love',
    logo: '/file.svg', // Replace with actual logo path
    description: `
      CASEFETA (Christian Students Fellowship Tanzania) is a vibrant Christian community at Muhimbili University of Health and Allied Sciences (MUHAS). 
      Founded in 1995, we provide spiritual support, fellowship, and growth opportunities for Christian students from all denominations. 
      
      Our mission is to create a supportive community where students can grow in their faith, develop leadership skills, and serve others while navigating the demands of health science education.
      
      We welcome students of all backgrounds and academic programs who seek to deepen their relationship with God and connect with like-minded peers.
    `,
    meetingSchedule: [
      { day: 'Tuesday', time: '7:00 PM - 8:30 PM', activity: 'Bible Study', location: 'Room G45, Main Campus' },
      { day: 'Thursday', time: '6:30 PM - 8:00 PM', activity: 'Prayer Meeting', location: 'Chapel, West Wing' },
      { day: 'Sunday', time: '9:00 AM - 11:00 AM', activity: 'Worship Service', location: 'Main Auditorium' }
    ],
    leaders: [
      { 
        name: 'John Mbwambo', 
        position: 'President', 
        image: '/file.svg',  // Replace with actual image
        program: 'Doctor of Medicine, Year 4', 
        email: 'john.mbwambo@muhas.edu.tz',
        phone: '+255 765 432 109'
      },
      { 
        name: 'Sarah Mwakasege', 
        position: 'Vice President', 
        image: '/file.svg',  // Replace with actual image
        program: 'BSc in Nursing, Year 3', 
        email: 'sarah.mwakasege@muhas.edu.tz',
        phone: '+255 754 321 098'
      },
      { 
        name: 'David Nyamwihula', 
        position: 'Secretary', 
        image: '/file.svg',  // Replace with actual image
        program: 'BSc in Pharmacy, Year 3', 
        email: 'david.nyamwihula@muhas.edu.tz',
        phone: '+255 789 123 456'
      },
      { 
        name: 'Grace Mushi', 
        position: 'Treasurer', 
        image: '/file.svg',  // Replace with actual image
        program: 'BSc in Laboratory Sciences, Year 2', 
        email: 'grace.mushi@muhas.edu.tz',
        phone: '+255 732 109 876'
      }
    ],
    events: [
      {
        id: 1,
        title: 'Annual Retreat',
        date: 'October 12-14, 2025',
        time: '3:00 PM - Sunday 2:00 PM',
        location: 'Bagamoyo Beach Resort',
        description: 'A weekend of worship, fellowship, and spiritual renewal with guest speakers, workshops, and team-building activities.',
        type: 'retreat'
      },
      {
        id: 2,
        title: 'Community Outreach: Hospital Visit',
        date: 'September 28, 2025',
        time: '9:00 AM - 1:00 PM',
        location: 'Muhimbili National Hospital, Pediatric Ward',
        description: 'Bringing comfort and support to children in the hospital through games, storytelling, and gift distribution.',
        type: 'outreach'
      },
      {
        id: 3,
        title: 'Worship Night',
        date: 'September 20, 2025',
        time: '7:00 PM - 9:30 PM',
        location: 'Main Auditorium',
        description: 'An evening of praise and worship music, prayer, and fellowship open to the entire MUHAS community.',
        type: 'worship'
      },
      {
        id: 4,
        title: 'Bible Study Series: Faith in Healthcare',
        date: 'Weekly, Starting September 25, 2025',
        time: '7:00 PM - 8:30 PM',
        location: 'Room G45, Main Campus',
        description: 'A six-week study examining the intersection of Christian faith and healthcare practice, with discussions on ethics, compassion, and vocation.',
        type: 'study'
      }
    ],
    socialMedia: {
      facebook: 'https://facebook.com/muhas.casefeta',
      instagram: 'https://instagram.com/casefeta_muhas',
      twitter: 'https://twitter.com/casefeta_muhas'
    },
    contact: {
      email: 'casefeta@muhas.edu.tz',
      phone: '+255 765 432 100'
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
          <div className="bg-blue-50 rounded-xl p-6 mb-8 animate-slideDown">
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
                <h1 className="text-3xl md:text-4xl font-bold text-blue-900">{organization.name}</h1>
                <p className="text-gray-600 mb-2">{organization.fullName}</p>
                <p className="text-blue-700 italic mb-4">&quot;{organization.motto}&quot;</p>
                
                {/* Social Media Links */}
                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                  <a 
                    href={organization.socialMedia.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-700 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href={organization.socialMedia.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-700 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href={organization.socialMedia.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-700 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="shrink-0 bg-white rounded-lg shadow-sm p-4 w-full md:w-auto">
                <h3 className="text-lg font-medium text-blue-900 mb-2">Contact Information</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <Mail className="w-4 h-4 mr-2 text-blue-600" />
                    <a href={`mailto:${organization.contact.email}`} className="hover:underline">
                      {organization.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-4 h-4 mr-2 text-blue-600" />
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
                    ? 'border-blue-600 text-blue-900'
                    : 'border-transparent text-gray-600 hover:text-blue-900 hover:border-blue-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`px-4 py-3 font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === 'events'
                    ? 'border-blue-600 text-blue-900'
                    : 'border-transparent text-gray-600 hover:text-blue-900 hover:border-blue-300'
                }`}
              >
                Events
              </button>
              <button
                onClick={() => setActiveTab('leaders')}
                className={`px-4 py-3 font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === 'leaders'
                    ? 'border-blue-600 text-blue-900'
                    : 'border-transparent text-gray-600 hover:text-blue-900 hover:border-blue-300'
                }`}
              >
                Leadership
              </button>
              <button
                onClick={() => setActiveTab('calendar')}
                className={`px-4 py-3 font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === 'calendar'
                    ? 'border-blue-600 text-blue-900'
                    : 'border-transparent text-gray-600 hover:text-blue-900 hover:border-blue-300'
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
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">About CASEFETA</h2>
                  <div className="prose max-w-none text-gray-700">
                    {organization.description.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </section>
                
                <section className="mb-8 animate-slideInLeft" style={{ animationDelay: '200ms' }}>
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">Regular Schedule</h2>
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
                                <Clock className="w-4 h-4 mr-2 text-blue-600" />
                                {meeting.time}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{meeting.activity}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2 text-blue-600" />
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
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">Upcoming Events</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {organization.events.slice(0, 2).map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                  <div className="text-center">
                    <button 
                      onClick={() => setActiveTab('events')}
                      className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Upcoming Events</h2>
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
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Leadership Team</h2>
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
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Event Calendar</h2>
                <CalendarView events={organization.events} />
              </div>
            )}
          </div>
          
          {/* Join Section */}
          <section className="bg-blue-50 rounded-xl p-6 animate-slideUp delay-300">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">How to Join CASEFETA</h2>
            
            <p className="text-gray-700 mb-6">
              Interested in joining our community? We welcome students from all backgrounds who wish to grow in their Christian faith and connect with like-minded peers.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-blue-900 mb-1">Attend a Meeting</h3>
                  <p className="text-gray-700">
                    Visit any of our regular meetings or events. No prior registration required!
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-blue-900 mb-1">Complete Membership Form</h3>
                  <p className="text-gray-700">
                    Fill out a simple membership form available at any of our meetings or from any leader.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-blue-900 mb-1">Attend Orientation</h3>
                  <p className="text-gray-700">
                    New members are invited to an orientation session to learn more about our organization and how to get involved.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="mailto:casefeta@muhas.edu.tz"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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
