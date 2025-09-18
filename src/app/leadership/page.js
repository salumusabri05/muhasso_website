'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { Users, Mail, PhoneCall, Briefcase, Award } from 'lucide-react';

export default function Leadership() {
  // Mock leadership data - this would ideally come from a database
  const leadershipTeam = [
    {
      name: "Emmanuel Makundi",
      position: "President",
      department: "Doctor of Medicine",
      year: "Final Year",
      email: "emmanuel.makundi@muhasso.org",
      phone: "+255 XXX XXX XXX",
      image: "/asscociation_details/muhasso_logo.png" // Placeholder image
    },
    {
      name: "Halima Rashid",
      position: "Vice President",
      department: "Pharmacy",
      year: "Fourth Year",
      email: "halima.rashid@muhasso.org",
      phone: "+255 XXX XXX XXX",
      image: "/asscociation_details/muhasso_logo.png" // Placeholder image
    },
    {
      name: "Benjamin Mwakasege",
      position: "Secretary General",
      department: "Nursing",
      year: "Third Year",
      email: "benjamin.mwakasege@muhasso.org",
      phone: "+255 XXX XXX XXX",
      image: "/asscociation_details/muhasso_logo.png" // Placeholder image
    },
    {
      name: "Grace Mushi",
      position: "Treasurer",
      department: "Dentistry",
      year: "Fourth Year",
      email: "grace.mushi@muhasso.org",
      phone: "+255 XXX XXX XXX",
      image: "/asscociation_details/muhasso_logo.png" // Placeholder image
    }
  ];

  // Committee data
  const committees = [
    {
      name: "Academic Affairs Committee",
      description: "Oversees academic matters, examination concerns, and educational quality issues.",
      members: ["John Masanja (Chair)", "Aisha Mohammed", "Peter Nyerere", "Juliana Kavishe"]
    },
    {
      name: "Welfare Committee",
      description: "Addresses student accommodation, health services, and overall welfare concerns.",
      members: ["Amina Ibrahim (Chair)", "James Kileo", "Fatima Hassan", "George Munuo"]
    },
    {
      name: "Sports and Recreation Committee",
      description: "Organizes sports events, recreational activities, and wellness programs.",
      members: ["David Mtui (Chair)", "Shamira Ahmed", "Joseph Kiwanga", "Neema Temba"]
    },
    {
      name: "Finance and Planning Committee",
      description: "Manages the organization's budget, fundraising activities, and financial planning.",
      members: ["Grace Mushi (Chair)", "Simon Pallangyo", "Joyce Mwakitalima", "Baraka Kimaro"]
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <div className="flex-grow container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Animated page title */}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 opacity-0 animate-fade-in-up">
            Leadership & Committees
          </h1>
          
          {/* Hero Section with slide-in animation */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 mb-12 shadow-lg opacity-0 animate-fade-in-up animation-delay-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="relative w-40 h-40 mx-auto transform hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/asscociation_details/muhasso_logo.png" 
                    alt="MUHASSO Leadership"
                    fill
                    className="object-contain animate-pulse"
                  />
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h2 className="text-xl font-semibold text-blue-900 mb-4 animate-fade-in-right animation-delay-400">
                  Student Leadership
                </h2>
                <p className="text-gray-700 leading-relaxed animate-fade-in-right animation-delay-600">
                  MUHASSO leadership is elected annually by the student body. Our leaders represent diverse 
                  health science disciplines and work tirelessly to address student concerns and improve 
                  the university experience. The executive team works closely with various committees to 
                  ensure comprehensive representation of student interests.
                </p>
              </div>
            </div>
          </div>
          
          {/* Executive Team */}
          <section className="mb-12 opacity-0 animate-fade-in-up animation-delay-800">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <Users className="w-6 h-6 mr-2 animate-bounce-gentle" />
              Executive Team 2024/2025
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {leadershipTeam.map((leader, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 opacity-0 animate-fade-in-up animation-delay-${1000 + (index * 200)} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/3 p-4 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                      <div className="relative w-24 h-24 group-hover:scale-110 transition-transform duration-300">
                        <Image 
                          src={leader.image} 
                          alt={leader.name}
                          fill
                          className="object-cover rounded-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="sm:w-2/3 p-4">
                      <h3 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                        {leader.name}
                      </h3>
                      <p className="text-blue-700 font-medium mb-2">{leader.position}</p>
                      
                      <div className="text-sm text-gray-600 space-y-1">
                        <p className="flex items-center group-hover:text-gray-700 transition-colors duration-300">
                          <Briefcase className="w-4 h-4 mr-2 text-blue-500" />
                          {leader.department}, {leader.year}
                        </p>
                        <p className="flex items-center group-hover:text-gray-700 transition-colors duration-300">
                          <Mail className="w-4 h-4 mr-2 text-green-500" />
                          {leader.email}
                        </p>
                        <p className="flex items-center group-hover:text-gray-700 transition-colors duration-300">
                          <PhoneCall className="w-4 h-4 mr-2 text-purple-500" />
                          {leader.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Committees */}
          <section className="mb-12 opacity-0 animate-fade-in-up animation-delay-2000">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <Award className="w-6 h-6 mr-2 animate-bounce-gentle animation-delay-200" />
              Committees
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {committees.map((committee, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 opacity-0 animate-fade-in-up animation-delay-${2200 + (index * 150)} hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 group`}
                >
                  <h3 className="text-lg font-semibold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {committee.name}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {committee.description}
                  </p>
                  
                  <h4 className="text-blue-700 font-medium text-sm mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    Committee Members:
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {committee.members.map((member, idx) => (
                      <li 
                        key={idx} 
                        className="group-hover:text-gray-700 transition-colors duration-300 hover:text-blue-600 cursor-default"
                      >
                        • {member}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          
          {/* Faculty Advisors */}
          <section className="opacity-0 animate-fade-in-up animation-delay-3000">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Faculty Advisors</h2>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-700 mb-4 leading-relaxed">
                MUHASSO works closely with faculty advisors who provide guidance and support to student 
                leadership. These advisors help ensure continuity in student governance and serve as liaisons 
                between the student organization and university administration.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-white rounded-lg hover:shadow-md transition-all duration-300 border border-blue-100">
                  <h3 className="font-semibold text-blue-900 hover:text-blue-700 transition-colors duration-300">
                    Dr. Elizabeth Kweka
                  </h3>
                  <p className="text-gray-600 text-sm">Dean of Students</p>
                  <p className="text-blue-600 text-sm hover:text-blue-500 transition-colors duration-300">
                    elizabeth.kweka@muhas.ac.tz
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-white rounded-lg hover:shadow-md transition-all duration-300 border border-purple-100">
                  <h3 className="font-semibold text-blue-900 hover:text-blue-700 transition-colors duration-300">
                    Prof. James Mbatia
                  </h3>
                  <p className="text-gray-600 text-sm">Faculty Advisor</p>
                  <p className="text-blue-600 text-sm hover:text-blue-500 transition-colors duration-300">
                    james.mbatia@muhas.ac.tz
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes bounceGentle {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-5px);
          }
          60% {
            transform: translateY(-3px);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-bounce-gentle {
          animation: bounceGentle 2s infinite;
        }
        
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-1000 { animation-delay: 1.0s; }
        .animation-delay-1200 { animation-delay: 1.2s; }
        .animation-delay-1400 { animation-delay: 1.4s; }
        .animation-delay-1600 { animation-delay: 1.6s; }
        .animation-delay-1800 { animation-delay: 1.8s; }
        .animation-delay-2000 { animation-delay: 2.0s; }
        .animation-delay-2200 { animation-delay: 2.2s; }
        .animation-delay-2350 { animation-delay: 2.35s; }
        .animation-delay-2500 { animation-delay: 2.5s; }
        .animation-delay-2650 { animation-delay: 2.65s; }
        .animation-delay-3000 { animation-delay: 3.0s; }
      `}</style>
    </main>
  );
}