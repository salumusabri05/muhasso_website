'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { Users, Heart, Book, Music, Globe, Dumbbell, Microscope, ChevronRight, Mail, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function Clubs() {
  // Mock clubs data - this would ideally come from a database
  const clubsData = [
    {
      id: 1,
      name: "MUHAS Research Club",
      description: "Promoting research skills and scientific inquiry among health sciences students through workshops, seminars, and collaborative research projects.",
      category: "Academic",
      members: "120+",
      founded: "2010",
      meetings: "Biweekly on Thursdays, 4:00 PM",
      contact: {
        email: "research.club@muhasso.org",
        president: "Ibrahim Mohammed",
        advisor: "Dr. Fatma Hassan"
      },
      icon: <Microscope className="w-10 h-10" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      name: "MUHAS Community Health Outreach",
      description: "Student-led initiative organizing health education campaigns and free medical screenings in underserved communities around Dar es Salaam.",
      category: "Community Service",
      members: "95+",
      founded: "2012",
      meetings: "Monthly planning sessions, weekend outreach activities",
      contact: {
        email: "outreach@muhasso.org",
        president: "Sarah Mwakasege",
        advisor: "Prof. John Mwambene"
      },
      icon: <Heart className="w-10 h-10" />,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      id: 3,
      name: "Health Sciences Book Club",
      description: "A literary group for health sciences students exploring medical literature, health policy books, and biographies of healthcare pioneers.",
      category: "Cultural",
      members: "45+",
      founded: "2016",
      meetings: "Every second Saturday, 2:00 PM",
      contact: {
        email: "bookclub@muhasso.org",
        president: "David Nyerere",
        advisor: "Dr. Elizabeth Kimaro"
      },
      icon: <Book className="w-10 h-10" />,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      id: 4,
      name: "MUHAS Choir",
      description: "Award-winning student choir performing at university events, national competitions, and community celebrations.",
      category: "Cultural",
      members: "60+",
      founded: "2005",
      meetings: "Practice sessions on Tuesdays and Fridays, 5:00 PM",
      contact: {
        email: "choir@muhasso.org",
        president: "Grace Mbwana",
        advisor: "Mr. Patrick Nyambo"
      },
      icon: <Music className="w-10 h-10" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      id: 5,
      name: "International Students Association",
      description: "Supporting international students at MUHAS through cultural exchange events, orientation programs, and peer mentoring.",
      category: "Cultural",
      members: "75+",
      founded: "2008",
      meetings: "Monthly general meetings, weekly executive meetings",
      contact: {
        email: "international@muhasso.org",
        president: "Ahmed Mohammed (Kenya)",
        advisor: "Dr. Maria Rodriguez"
      },
      icon: <Globe className="w-10 h-10" />,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      id: 6,
      name: "MUHAS Sports Association",
      description: "Organizing sports teams, intramural competitions, and fitness activities for students across all healthcare disciplines.",
      category: "Sports & Recreation",
      members: "200+",
      founded: "2001",
      meetings: "Different schedules for each sport team",
      contact: {
        email: "sports@muhasso.org",
        president: "Joseph Kihaule",
        advisor: "Coach Benjamin Mushi"
      },
      icon: <Dumbbell className="w-10 h-10" />,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    }
  ];

  // Group clubs by category
  const groupedClubs = clubsData.reduce((acc, club) => {
    if (!acc[club.category]) {
      acc[club.category] = [];
    }
    acc[club.category].push(club);
    return acc;
  }, {});

  // Get all categories
  const categories = Object.keys(groupedClubs);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Clubs & Societies Directory</h1>
          
          {/* Hero Section */}
          <div className="bg-blue-50 rounded-xl p-6 mb-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="relative w-40 h-40 mx-auto">
                <Image 
                  src="/asscociation_details/muhasso_logo.png" 
                  alt="MUHASSO Clubs"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">Enhance Your University Experience</h2>
              <p className="text-gray-700">
                MUHASSO supports a diverse range of student-led clubs and societies that enhance the 
                university experience beyond academics. These groups provide opportunities for leadership 
                development, community service, cultural expression, and recreational activities. 
                Explore the various clubs below and find the perfect fit for your interests and passions.
              </p>
            </div>
          </div>
          
          {/* Register Club CTA */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-3/4 mb-6 md:mb-0">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Start Your Own Club</h3>
                <p className="text-gray-700">
                  Have an idea for a new student club? MUHASSO supports student initiatives and provides 
                  resources to help you establish and grow your club. Download the registration form and 
                  submit your proposal to the Student Activities Office.
                </p>
              </div>
              <div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Download Registration Form
                </button>
              </div>
            </div>
          </div>
          
          {/* Clubs by Category */}
          {categories.map((category) => (
            <section key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">{category} Clubs</h2>
              
              <div className="grid grid-cols-1 gap-6">
                {groupedClubs[category].map((club) => (
                  <div key={club.id} className={`${club.bgColor} ${club.borderColor} border rounded-xl overflow-hidden`}>
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/5 p-6 flex justify-center items-center">
                        <div className={`w-20 h-20 rounded-full ${club.bgColor} border ${club.borderColor} flex items-center justify-center ${club.color}`}>
                          {club.icon}
                        </div>
                      </div>
                      <div className="md:w-4/5 p-6 bg-white">
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">{club.name}</h3>
                        <p className="text-gray-700 mb-4">{club.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div className="flex items-center">
                            <Users className="w-5 h-5 text-gray-500 mr-2" />
                            <span className="text-gray-700">{club.members} members</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-5 h-5 text-gray-500 mr-2" />
                            <span className="text-gray-700">Founded: {club.founded}</span>
                          </div>
                          <div className="flex items-center">
                            <Mail className="w-5 h-5 text-gray-500 mr-2" />
                            <span className="text-gray-700">{club.contact.email}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                          <div className="mb-4 sm:mb-0">
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">Meeting Schedule:</span> {club.meetings}
                            </p>
                          </div>
                          <Link 
                            href={`/clubs/${club.id}`} 
                            className={`inline-flex items-center ${club.color} font-medium`}
                          >
                            View Club Details
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
          
          {/* FAQ Section */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">How do I join a club?</h3>
                <p className="text-gray-700">
                  Most clubs accept new members at the beginning of each semester. Visit the Clubs Fair 
                  during orientation week or contact the club directly via their email address. Some clubs 
                  may require membership fees or have specific eligibility requirements.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Do clubs receive funding from MUHASSO?</h3>
                <p className="text-gray-700">
                  Yes, registered student clubs and societies are eligible for funding from MUHASSO. Funds 
                  are allocated based on submitted activity plans and budgets at the beginning of each 
                  academic year. Clubs must submit regular reports on their activities and financial statements.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Can I participate in multiple clubs?</h3>
                <p className="text-gray-700">
                  Absolutely! Students are encouraged to participate in multiple clubs based on their 
                  interests and availability. However, we recommend managing your time effectively to 
                  balance club activities with your academic responsibilities.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">How can I start a new club?</h3>
                <p className="text-gray-700">
                  To start a new club, you&apos;ll need to submit a proposal to the MUHASSO Student Activities 
                  Office. Your proposal should include the club&apos;s purpose, planned activities, potential 
                  membership base, and a faculty advisor. New clubs must have at least 10 founding members 
                  and a constitution outlining the club&apos;s structure and governance.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
