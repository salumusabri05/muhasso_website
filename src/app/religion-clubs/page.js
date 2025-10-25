'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { ChevronRight, Users, Calendar, Book, Music, Heart, CrossIcon, Smile, Star, Dumbbell, MessageCircle } from 'lucide-react';

// Religious groups data
const religiousGroups = [
  {
    id: 'casefeta',
    name: 'CASEFETA',
    fullName: 'Christian Students Fellowship Tanzania',
    description: 'A vibrant Christian community fostering spiritual growth, fellowship, and service among MUHAS students through Bible study, prayer meetings, and outreach activities.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    icon: <CrossIcon className="w-10 h-10" />
  },
  {
    id: 'msamu',
    name: 'MSAMU',
    fullName: 'Muslim Students Association of Muhimbili',
    description: 'An organization dedicated to supporting Muslim students at MUHAS through Islamic education, community prayer, spiritual development, and cultural activities.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    icon: <Star className="w-10 h-10" />
  },
  {
    id: 'anglican',
    name: 'Anglican Students Association',
    fullName: 'Anglican Students Association',
    description: 'Providing spiritual support and community for Anglican students at MUHAS through worship services, Bible study, and fellowship activities aligned with Anglican traditions.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    icon: <Book className="w-10 h-10" />
  },
  {
    id: 'catholic',
    name: 'Catholic Students Association',
    fullName: 'Catholic Students Association',
    description: 'Nurturing the faith life of Catholic students at MUHAS through Mass, sacraments, spiritual formation, and service opportunities in accordance with Catholic teachings.',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    icon: <Heart className="w-10 h-10" />
  }
];

// Other clubs data
const otherClubs = [
  {
    id: 'sports',
    name: 'Sports Clubs',
    description: 'Various sports teams and recreational activities including football, basketball, volleyball, athletics, and fitness groups for physical wellness and friendly competition.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    icon: <Dumbbell className="w-10 h-10" />
  },
  {
    id: 'arts',
    name: 'Arts & Cultural Clubs',
    description: 'Creative expression through drama, dance, music, and visual arts, celebrating cultural diversity and providing artistic outlets for MUHAS students.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    icon: <Music className="w-10 h-10" />
  },
  {
    id: 'debate',
    name: 'Debate Club',
    description: 'Forum for developing critical thinking, public speaking, and argumentation skills through regular debates on healthcare, ethics, policy, and contemporary issues.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    icon: <MessageCircle className="w-10 h-10" />
  }
];

// Add clubs data (can be expanded later)
const clubsData = [
  {
    id: 'big-future',
    name: 'BIG FUTURE Club',
    description: 'Empowering students with skills in entrepreneurship, digital marketing, and innovation. Weekly workshops and networking events.',
    icon: <Star className="w-10 h-10 text-purple-600" />,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    id: 'book-club',
    name: 'MUHAS Book Club',
    description: 'A community of book lovers sharing and discussing literature, hosting reading sessions and author meetups.',
    icon: <Book className="w-10 h-10 text-blue-600" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
];

export default function ReligionClubs() {
  return (
    <main className="min-h-screen flex flex-col bg-white animate-fadeIn">
      <Header />
      
      {/* Add top padding to prevent nav overlap */}
      <div className="flex-grow container mx-auto px-6 py-12 pt-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 animate-slideDown">Religion & Clubs</h1>
          
          {/* Introduction Section */}
          <div className="bg-blue-50 rounded-xl p-6 mb-12 animate-slideUp">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Spiritual Life & Student Engagement</h2>
            <p className="text-gray-700 mb-4">
              At MUHAS, we recognize the importance of holistic student development, encompassing spiritual, 
              social, and recreational dimensions alongside academic pursuits. Our diverse religious groups 
              and student clubs provide opportunities for community building, personal growth, and 
              meaningful engagement outside the classroom.
            </p>
            <p className="text-gray-700">
              Explore the various religious organizations and clubs below to find communities that align 
              with your faith, interests, and passions. These groups welcome new members throughout the 
              academic year and offer regular activities, events, and support services.
            </p>
          </div>
          
          {/* Religious Groups Section */}
          <section className="mb-12 animate-slideUp delay-200">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Religious Organizations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {religiousGroups.map((group, index) => (
                <div 
                  key={group.id} 
                  className={`${group.bgColor} border ${group.borderColor} rounded-xl overflow-hidden h-full animate-slideInRight`}
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`${group.color} mr-4`}>
                        {group.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-blue-900">{group.name}</h3>
                        <p className="text-sm text-gray-600">{group.fullName}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{group.description}</p>
                    
                    <Link 
                      href={`/religion-clubs/${group.id}`} 
                      className={`inline-flex items-center ${group.color} font-medium transition-all hover:underline hover:translate-x-1 transform duration-200`}
                    >
                      View Details
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Other Clubs Section */}
          <section className="mb-12 animate-slideUp delay-300">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Other Clubs & Activities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherClubs.map((club, index) => (
                <div 
                  key={club.id} 
                  className={`${club.bgColor} border ${club.borderColor} rounded-xl overflow-hidden h-full animate-slideInRight`}
                  style={{ animationDelay: `${(index + 5) * 150}ms` }}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`${club.color} mr-4`}>
                        {club.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900">{club.name}</h3>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{club.description}</p>
                    
                    <Link 
                      href={`/religion-clubs/${club.id}`} 
                      className={`inline-flex items-center ${club.color} font-medium transition-all hover:underline hover:translate-x-1 transform duration-200`}
                    >
                      View Details
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Clubs Section (NEW) */}
          <section className="mb-12 animate-slideUp delay-350">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Student Clubs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clubsData.map((club, idx) => (
                <div
                  key={club.id}
                  className={`${club.bgColor} border ${club.borderColor} rounded-xl overflow-hidden h-full animate-slideInRight`}
                  style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`${club.color} mr-4`}>
                        {club.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900">{club.name}</h3>
                    </div>
                    <p className="text-gray-700 mb-6">{club.description}</p>
                    <Link
                      href={`/clubs/${club.id}`}
                      className={`inline-flex items-center ${club.color} font-medium transition-all hover:underline hover:translate-x-1 transform duration-200`}
                    >
                      Explore More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Benefits Section */}
          <section className="mb-12 animate-slideUp delay-400">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Benefits of Participation</h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex">
                  <div className="shrink-0 mr-4">
                    <Users className="w-10 h-10 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Community & Belonging</h3>
                    <p className="text-gray-700">
                      Connect with peers who share your interests and values, forming meaningful relationships that 
                      can provide support throughout your academic journey.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="shrink-0 mr-4">
                    <Heart className="w-10 h-10 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Spiritual Wellness</h3>
                    <p className="text-gray-700">
                      Nurture your spiritual life and maintain religious practices while pursuing your studies, 
                      providing balance and purpose to your university experience.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="shrink-0 mr-4">
                    <Calendar className="w-10 h-10 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Leadership Development</h3>
                    <p className="text-gray-700">
                      Take on leadership roles within groups and clubs to develop valuable skills in organization, 
                      communication, and team management.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="shrink-0 mr-4">
                    <Smile className="w-10 h-10 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Stress Relief & Wellbeing</h3>
                    <p className="text-gray-700">
                      Engage in activities that provide a healthy break from academic pressures, contributing to 
                      better mental health and overall wellbeing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* How to Join Section */}
          <section className="bg-blue-50 rounded-xl p-6 animate-slideUp delay-500">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">How to Join</h2>
            
            <p className="text-gray-700 mb-6">
              Interested in joining a religious group or club? Follow these simple steps:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-blue-900 mb-1">Explore Available Groups</h3>
                  <p className="text-gray-700">
                    Browse through the organizations listed on this page to find those that match your interests.
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
                  <h3 className="font-medium text-blue-900 mb-1">Contact Group Leaders</h3>
                  <p className="text-gray-700">
                    Reach out to the organization&apos;s leaders through the contact information provided on their detail page.
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
                  <h3 className="font-medium text-blue-900 mb-1">Attend an Introductory Meeting</h3>
                  <p className="text-gray-700">
                    Join an upcoming meeting or event to learn more about the group and meet current members.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-blue-900 mb-1">Complete Registration</h3>
                  <p className="text-gray-700">
                    Fill out any required membership forms and pay any applicable membership fees.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
