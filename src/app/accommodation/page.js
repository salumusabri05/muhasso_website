'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { Home, MapPin, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';

export default function Accommodation() {
  // Mock hostel data - this would ideally come from a database
  const hostels = [
    {
      id: 1,
      name: "MUHAS Main Campus Hostel",
      description: "On-campus accommodation located at the heart of Muhimbili University main campus.",
      location: "Main Campus, MUHAS, Dar es Salaam",
      distance: "On campus",
      roomTypes: ["Single (Limited)", "Shared (2 students)", "Shared (4 students)"],
      facilities: ["Shared bathrooms", "Common study areas", "Wi-Fi", "Cafeteria access", "24-hour security"],
      priority: ["First year students", "Students with special needs", "International students"],
      contact: {
        office: "Hostel Administration Office, Ground Floor, Student Center",
        phone: "+255 XXX XXX XXX",
        email: "hostels@muhas.ac.tz"
      },
      applicationPeriod: "May - July (for the upcoming academic year)",
      image: "/asscociation_details/muhasso_logo.png" // Placeholder image
    },
    {
      id: 2,
      name: "Mabibo Hostel Complex",
      description: "University-managed hostel located approximately 5 kilometers from the main campus.",
      location: "Mabibo Area, Kinondoni, Dar es Salaam",
      distance: "5km from campus",
      roomTypes: ["Single", "Shared (2 students)"],
      facilities: ["Private bathrooms", "Kitchenette", "Study rooms", "Wi-Fi", "Laundry facilities", "Security"],
      priority: ["Senior students", "Postgraduate students"],
      contact: {
        office: "Mabibo Hostel Administration, Block A",
        phone: "+255 XXX XXX XXX",
        email: "mabibo.hostel@muhas.ac.tz"
      },
      applicationPeriod: "May - July (for the upcoming academic year)",
      image: "/asscociation_details/muhasso_logo.png" // Placeholder image
    }
  ];

  // Mock private accommodation information
  const privateAccommodationAreas = [
    {
      name: "Ubungo",
      distance: "3-4 km",
      costRange: "150,000 - 300,000 TZS/month",
      notes: "Popular area with many students, good transport connections"
    },
    {
      name: "Mikocheni",
      distance: "6-8 km",
      costRange: "250,000 - 450,000 TZS/month",
      notes: "Quieter area, better quality accommodation, transport available"
    },
    {
      name: "Mwenge",
      distance: "5-7 km",
      costRange: "200,000 - 400,000 TZS/month",
      notes: "Shopping areas nearby, good transport links"
    },
    {
      name: "Sinza",
      distance: "4-6 km",
      costRange: "180,000 - 350,000 TZS/month",
      notes: "Mix of accommodation options, popular with students"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <div className="flex-grow container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Animated page title */}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 opacity-0 animate-fade-in-up">
            Accommodation & Hostel Information
          </h1>
          
          {/* Hero Section with slide-in animation */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 mb-12 flex flex-col md:flex-row items-center shadow-lg opacity-0 animate-fade-in-up animation-delay-200 hover:shadow-xl transition-shadow duration-300">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="relative w-40 h-40 mx-auto transform hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/asscociation_details/muhasso_logo.png" 
                  alt="MUHASSO Accommodation"
                  fill
                  className="object-contain animate-pulse"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-xl font-semibold text-blue-900 mb-4 animate-fade-in-right animation-delay-400">
                Student Housing Options
              </h2>
              <p className="text-gray-700 leading-relaxed animate-fade-in-right animation-delay-600">
                MUHASSO works closely with the university administration to help students find suitable 
                accommodation options. Whether you&apos;re looking for on-campus housing or private 
                accommodation near the university, this guide provides essential information to help 
                you make an informed decision.
              </p>
            </div>
          </div>
          
          {/* University Hostels Section */}
          <section className="mb-12 opacity-0 animate-fade-in-up animation-delay-800">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <Home className="w-6 h-6 mr-2 animate-bounce-gentle" />
              University Hostels
            </h2>
            
            <p className="text-gray-700 mb-8 leading-relaxed animate-fade-in animation-delay-1000">
              Muhimbili University offers limited on-campus and university-managed accommodation 
              facilities. These accommodations are allocated based on specific criteria, with priority 
              given to first-year students, international students, and students with special needs. 
              Due to high demand, not all students can be accommodated in university hostels.
            </p>
            
            <div className="space-y-8">
              {hostels.map((hostel, index) => (
                <div 
                  key={hostel.id} 
                  className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 opacity-0 animate-fade-in-up animation-delay-${1200 + (index * 400)} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 p-6 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center border-r border-gray-100">
                      <div className="relative w-full h-48 group-hover:scale-105 transition-transform duration-300">
                        <Image 
                          src={hostel.image} 
                          alt={hostel.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-semibold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                        {hostel.name}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">{hostel.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                          <h4 className="font-semibold text-gray-900 mb-2">Location:</h4>
                          <div className="flex items-start">
                            <MapPin className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                            <div>
                              <p className="text-gray-700">{hostel.location}</p>
                              <p className="text-gray-600 text-sm">Distance: {hostel.distance}</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                          <h4 className="font-semibold text-gray-900 mb-2">Contact:</h4>
                          <div className="space-y-1 text-gray-700 text-sm">
                            <p>{hostel.contact.office}</p>
                            <div className="flex items-center">
                              <Phone className="w-4 h-4 mr-1 text-green-500" />
                              <span>{hostel.contact.phone}</span>
                            </div>
                            <div className="flex items-center">
                              <Mail className="w-4 h-4 mr-1 text-green-500" />
                              <span>{hostel.contact.email}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Room Types:</h4>
                          <ul className="space-y-1">
                            {hostel.roomTypes.map((room, idx) => (
                              <li key={idx} className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                {room}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Facilities:</h4>
                          <ul className="space-y-1">
                            {hostel.facilities.map((facility, idx) => (
                              <li key={idx} className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                {facility}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-6 mt-8 opacity-0 animate-fade-in-up animation-delay-2000 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 animate-bounce-gentle animation-delay-200" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Accommodation Application Process</h4>
                  <p className="text-gray-700 mb-2 leading-relaxed">
                    Applications for university accommodation are typically open from May to July for the 
                    upcoming academic year. Due to limited availability, not all applications can be accepted.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The Accommodation Office assesses applications based on priority criteria. Students will 
                    be notified of the outcome by email approximately 4 weeks before the semester begins.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Private Accommodation Section */}
          <section className="mb-12 opacity-0 animate-fade-in-up animation-delay-2200">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Private Accommodation</h2>
            
            <p className="text-gray-700 mb-8 leading-relaxed animate-fade-in animation-delay-2400">
              Many students choose to live in private accommodation around Dar es Salaam. There are 
              various options ranging from shared apartments to single rooms in different areas of the city. 
              MUHASSO provides guidance and information to help students find suitable private accommodation.
            </p>
            
            <h3 className="text-xl font-semibold text-blue-900 mb-4 animate-fade-in-left animation-delay-2600">
              Popular Areas for Student Accommodation
            </h3>
            <div className="overflow-x-auto mb-8 opacity-0 animate-fade-in-up animation-delay-2800">
              <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Area</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Distance from MUHAS</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Approximate Cost Range</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {privateAccommodationAreas.map((area, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{area.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{area.distance}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">{area.costRange}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{area.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200 opacity-0 animate-fade-in-up animation-delay-3000 hover:shadow-md transition-shadow duration-300">
              <h4 className="font-semibold text-blue-900 mb-3">Accommodation Support Services</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                MUHASSO offers support to students looking for private accommodation through:
              </p>
              <ul className="space-y-2">
                {[
                  "Accommodation database with verified listings",
                  "Roommate matching service for students who wish to share accommodation",
                  "Advice on rental agreements and tenant rights",
                  "Orientation sessions on finding accommodation in Dar es Salaam"
                ].map((service, index) => (
                  <li key={index} className="flex items-start animate-fade-in-left animation-delay-3200" style={{animationDelay: `${3.2 + (index * 0.1)}s`}}>
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Access Accommodation Database
                </button>
              </div>
            </div>
          </section>
          
          {/* Contact Section */}
          <section className="opacity-0 animate-fade-in-up animation-delay-3400">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Need Help?</h2>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-700 mb-4 leading-relaxed">
                If you need assistance with accommodation matters, please contact the MUHASSO 
                Accommodation Support Team:
              </p>
              <div className="space-y-3">
                {[
                  { icon: MapPin, text: "MUHASSO Office, 2nd Floor, Student Center, MUHAS Main Campus", color: "text-blue-600" },
                  { icon: Phone, text: "+255 XXX XXX XXX", color: "text-green-600" },
                  { icon: Mail, text: "accommodation@muhasso.org", color: "text-purple-600" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <contact.icon className={`w-5 h-5 ${contact.color} mr-3`} />
                    <span className="text-gray-700">{contact.text}</span>
                  </div>
                ))}
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
        .animation-delay-1600 { animation-delay: 1.6s; }
        .animation-delay-2000 { animation-delay: 2.0s; }
        .animation-delay-2200 { animation-delay: 2.2s; }
        .animation-delay-2400 { animation-delay: 2.4s; }
        .animation-delay-2600 { animation-delay: 2.6s; }
        .animation-delay-2800 { animation-delay: 2.8s; }
        .animation-delay-3000 { animation-delay: 3.0s; }
        .animation-delay-3200 { animation-delay: 3.2s; }
        .animation-delay-3300 { animation-delay: 3.3s; }
        .animation-delay-3400 { animation-delay: 3.4s; }
        .animation-delay-3500 { animation-delay: 3.5s; }
      `}</style>
    </main>
  );
}