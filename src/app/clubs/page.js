'use client';

import React from 'react';
import { Users, Heart, Book, Music, Globe, Dumbbell, Microscope, ChevronRight, Mail, Calendar, Lightbulb, Palette } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Clubs() {
  // Mock clubs data - this would ideally come from a database
  const clubsData = [
    {
      id: 1,
      name: "BIG FUTURE Club",
      description: "Empowering young minds with essential modern skills including graphic design, entrepreneurship, digital marketing, web development, and business innovation to prepare them for the future economy.",
      category: "Skills Development",
      members: "85+",
      founded: "2020",
      meetings: "Weekly workshops on Saturdays, 2:00 PM",
      contact: {
        email: "bigfuture@muhasso.org",
        president: "Amina Rashid",
        advisor: "Dr. Michael Temba"
      },
      icon: <Lightbulb className="w-10 h-10" />,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      id: 2,
      name: "MUHAS Book Club",
      description: "A vibrant literary community for book lovers exploring diverse genres from contemporary fiction to academic publications, fostering critical thinking and intellectual discussions among students.",
      category: "Cultural",
      members: "65+",
      founded: "2015",
      meetings: "Monthly book discussions on first Sunday, 3:00 PM",
      contact: {
        email: "bookclub@muhasso.org",
        president: "Fatuma Juma",
        advisor: "Prof. Sarah Mwalimu"
      },
      icon: <Book className="w-10 h-10" />,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
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
    <main className="min-h-screen bg-white">
      <Header />
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-purple-100/30 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-emerald-100/20 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-red-100/30 rounded-full blur-2xl animate-float"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 animate-fade-in">
            Clubs & Societies Directory
          </h1>
          
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 mb-12 flex flex-col md:flex-row items-center animate-fade-in animation-delay-300 hover:shadow-lg transition-all duration-300">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="relative w-40 h-40 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg animate-spin-slow">
                <Users className="w-20 h-20 text-blue-600" />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-xl font-semibold text-blue-900 mb-4 animate-slide-right">
                Enhance Your University Experience
              </h2>
              <p className="text-gray-700 animate-slide-right animation-delay-200">
                MUHASSO supports a diverse range of student-led clubs and societies that enhance the 
                university experience beyond academics. These groups provide opportunities for leadership 
                development, community service, cultural expression, and recreational activities. 
                Explore the various clubs below and find the perfect fit for your interests and passions.
              </p>
            </div>
          </div>
          
          {/* Register Club CTA */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-12 animate-fade-in animation-delay-500 hover:shadow-xl transition-all duration-300 border border-blue-100">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-3/4 mb-6 md:mb-0">
                <h3 className="text-xl font-semibold text-blue-900 mb-2 animate-slide-up">Start Your Own Club</h3>
                <p className="text-gray-700 animate-slide-up animation-delay-200">
                  Have an idea for a new student club? MUHASSO supports student initiatives and provides 
                  resources to help you establish and grow your club. Download the registration form and 
                  submit your proposal to the Student Activities Office.
                </p>
              </div>
              <div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 animate-button-bounce shadow-lg hover:shadow-xl">
                  Download Registration Form
                </button>
              </div>
            </div>
          </div>
          
          {/* Clubs by Category */}
          {categories.map((category, categoryIndex) => (
            <section key={category} className="mb-12">
              <h2 className={`text-2xl font-bold text-blue-900 mb-6 animate-fade-in animation-delay-${(categoryIndex + 1) * 200}`}>
                {category} Clubs
              </h2>
              
              <div className="grid grid-cols-1 gap-6">
                {groupedClubs[category].map((club, clubIndex) => (
                  <div 
                    key={club.id} 
                    className={`${club.bgColor} ${club.borderColor} border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-500 hover:scale-102 animate-slide-up animation-delay-${(categoryIndex * 300) + (clubIndex * 100)}`}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/5 p-6 flex justify-center items-center">
                        <div className={`w-20 h-20 rounded-full bg-white border-2 ${club.borderColor} flex items-center justify-center ${club.color} animate-pulse-gentle hover:animate-bounce-gentle transition-all duration-300`}>
                          {club.icon}
                        </div>
                      </div>
                      <div className="md:w-4/5 p-6 bg-white">
                        <h3 className="text-xl font-semibold text-blue-900 mb-2 hover:text-blue-700 transition-colors">
                          {club.name}
                        </h3>
                        <p className="text-gray-700 mb-4">{club.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div className="flex items-center hover:text-blue-600 transition-colors">
                            <Users className="w-5 h-5 text-gray-500 mr-2" />
                            <span className="text-gray-700">{club.members} members</span>
                          </div>
                          <div className="flex items-center hover:text-blue-600 transition-colors">
                            <Calendar className="w-5 h-5 text-gray-500 mr-2" />
                            <span className="text-gray-700">Founded: {club.founded}</span>
                          </div>
                          <div className="flex items-center hover:text-blue-600 transition-colors">
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
                          <a 
                            href={`/clubs/${club.id}`} 
                            className={`inline-flex items-center ${club.color} font-medium hover:underline transition-all duration-300 hover:translate-x-2`}
                          >
                            View Club Details
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
          
          {/* FAQ Section */}
          <section className="animate-fade-in animation-delay-1200">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "How do I join a club?",
                  answer: "Most clubs accept new members at the beginning of each semester. Visit the Clubs Fair during orientation week or contact the club directly via their email address. Some clubs may require membership fees or have specific eligibility requirements."
                },
                {
                  question: "Do clubs receive funding from MUHASSO?",
                  answer: "Yes, registered student clubs and societies are eligible for funding from MUHASSO. Funds are allocated based on submitted activity plans and budgets at the beginning of each academic year. Clubs must submit regular reports on their activities and financial statements."
                },
                {
                  question: "Can I participate in multiple clubs?",
                  answer: "Absolutely! Students are encouraged to participate in multiple clubs based on their interests and availability. However, we recommend managing your time effectively to balance club activities with your academic responsibilities."
                },
                {
                  question: "How can I start a new club?",
                  answer: "To start a new club, you'll need to submit a proposal to the MUHASSO Student Activities Office. Your proposal should include the club's purpose, planned activities, potential membership base, and a faculty advisor. New clubs must have at least 10 founding members and a constitution outlining the club's structure and governance."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-300 border border-gray-100 animate-slide-up animation-delay-${1400 + (index * 100)}`}
                >
                  <h3 className="text-lg font-semibold text-blue-900 mb-2 hover:text-blue-700 transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-15px) translateX(10px);
          }
          66% {
            transform: translateY(-10px) translateX(-5px);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes button-bounce {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        
        @keyframes pulse-gentle {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-slide-right {
          animation: slide-right 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        
        .animate-button-bounce {
          animation: button-bounce 2s ease-in-out infinite;
        }
        
        .animate-pulse-gentle {
          animation: pulse-gentle 3s ease-in-out infinite;
        }
        
        .animate-bounce-gentle:hover {
          animation: bounce-gentle 0.6s ease-in-out;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
        
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-900 { animation-delay: 0.9s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1100 { animation-delay: 1.1s; }
        .animation-delay-1200 { animation-delay: 1.2s; }
        .animation-delay-1300 { animation-delay: 1.3s; }
        .animation-delay-1400 { animation-delay: 1.4s; }
        .animation-delay-1500 { animation-delay: 1.5s; }
        .animation-delay-1600 { animation-delay: 1.6s; }
        .animation-delay-1700 { animation-delay: 1.7s; }
      `}</style>
      <Footer />
    </main>
  );
}