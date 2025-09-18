'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { BookOpen, Calendar, Users, GraduationCap, Library, Clock, FileText, Laptop, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function AcademicSupport() {
  // Mock support programs
  const supportPrograms = [
    {
      id: 1,
      title: "Peer Tutoring Program",
      description: "Connect with experienced student tutors who excel in specific subjects to receive personalized academic assistance.",
      icon: <Users className="w-10 h-10" />,
      color: "text-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      details: [
        "Free one-on-one tutoring sessions",
        "Available for all core health sciences courses",
        "Flexible scheduling options",
        "Both in-person and virtual sessions available"
      ],
      schedule: "Monday-Friday, 2:00 PM - 8:00 PM",
      location: "Learning Resource Center, 2nd Floor"
    },
    {
      id: 2,
      title: "Academic Writing Support",
      description: "Get guidance on academic writing, research papers, literature reviews, and proper citation methods.",
      icon: <FileText className="w-10 h-10" />,
      color: "text-emerald-600",
      bgColor: "bg-gradient-to-br from-emerald-50 to-emerald-100",
      borderColor: "border-emerald-200",
      details: [
        "Essay structure and organization assistance",
        "Citation style guidance (APA, Vancouver, etc.)",
        "Research methodology consultation",
        "Thesis and dissertation support"
      ],
      schedule: "Tuesday & Thursday, 10:00 AM - 4:00 PM",
      location: "Main Library, Writing Center"
    },
    {
      id: 3,
      title: "Exam Preparation Workshops",
      description: "Structured workshops focusing on effective study strategies, time management, and exam techniques.",
      icon: <Calendar className="w-10 h-10" />,
      color: "text-amber-600",
      bgColor: "bg-gradient-to-br from-amber-50 to-amber-100",
      borderColor: "border-amber-200",
      details: [
        "Test-taking strategies",
        "Memory enhancement techniques",
        "Managing exam anxiety",
        "Practice exams with feedback"
      ],
      schedule: "Two weeks before major examination periods",
      location: "Various lecture halls (check schedule)"
    },
    {
      id: 4,
      title: "Digital Learning Resources",
      description: "Access to specialized health sciences databases, e-journals, and educational software for medical and health sciences students.",
      icon: <Laptop className="w-10 h-10" />,
      color: "text-indigo-600",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      borderColor: "border-indigo-200",
      details: [
        "24/7 online access to academic resources",
        "Medical and health sciences databases",
        "E-book collections",
        "Virtual anatomy and physiology tools"
      ],
      schedule: "Available 24/7",
      location: "Online via MUHAS student portal"
    },
    {
      id: 5,
      title: "Academic Advising",
      description: "Personal academic advisors help students navigate course selection, degree requirements, and career planning.",
      icon: <GraduationCap className="w-10 h-10" />,
      color: "text-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      details: [
        "Course selection guidance",
        "Academic progress monitoring",
        "Career path exploration",
        "Graduate school application support"
      ],
      schedule: "By appointment",
      location: "Faculty offices (department-specific)"
    },
    {
      id: 6,
      title: "Study Skills Workshops",
      description: "Regular workshops on effective note-taking, time management, critical thinking, and other essential academic skills.",
      icon: <BookOpen className="w-10 h-10" />,
      color: "text-red-600",
      bgColor: "bg-gradient-to-br from-red-50 to-red-100",
      borderColor: "border-red-200",
      details: [
        "Effective note-taking methods",
        "Time management and organization",
        "Critical thinking and analysis",
        "Research skills development"
      ],
      schedule: "Monthly throughout the semester",
      location: "Learning Resource Center, Workshop Room"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <div className="flex-grow container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Animated page title */}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 opacity-0 animate-fade-in-up">
            Academic Support Services
          </h1>
          
          {/* Hero Section with slide-in animation */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 mb-12 flex flex-col md:flex-row items-center shadow-lg opacity-0 animate-fade-in-up animation-delay-200 hover:shadow-xl transition-shadow duration-300">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="relative w-40 h-40 mx-auto transform hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/asscociation_details/muhasso_logo.png" 
                  alt="MUHASSO Academic Support"
                  fill
                  className="object-contain animate-pulse"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-xl font-semibold text-blue-900 mb-4 animate-fade-in-right animation-delay-400">
                Supporting Your Academic Journey
              </h2>
              <p className="text-gray-700 leading-relaxed animate-fade-in-right animation-delay-600">
                MUHASSO is committed to supporting student success through comprehensive academic support 
                services. We understand that the health sciences curriculum is rigorous and demanding, 
                which is why we offer a variety of resources to help you excel in your studies. From 
                peer tutoring to specialized workshops, we&apos;re here to support your educational goals.
              </p>
            </div>
          </div>
          
          {/* Stats Section with staggered animation */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-12 border border-gray-100 opacity-0 animate-fade-in-up animation-delay-800 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-blue-900 mb-6 text-center">Academic Support Impact</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { stat: "85%", desc: "Students utilizing support services report improved academic performance" },
                { stat: "3,200+", desc: "Tutoring sessions conducted annually" },
                { stat: "45", desc: "Peer tutors across all health science disciplines" },
                { stat: "24/7", desc: "Access to digital learning resources" }
              ].map((item, index) => (
                <div key={index} className={`p-4 opacity-0 animate-fade-in-up animation-delay-${1000 + (index * 150)} hover:bg-blue-50 rounded-lg transition-colors duration-300`}>
                  <div className="text-3xl font-bold text-blue-600 mb-2 transform hover:scale-110 transition-transform duration-300">
                    {item.stat}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Support Programs with enhanced styling */}
          <section className="mb-12 opacity-0 animate-fade-in-up animation-delay-1600">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Available Support Programs</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportPrograms.map((program, index) => (
                <div 
                  key={program.id} 
                  className={`${program.bgColor} border ${program.borderColor} rounded-xl overflow-hidden h-full shadow-lg opacity-0 animate-fade-in-up animation-delay-${1800 + (index * 200)} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className={`${program.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        {program.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                        {program.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>
                    
                    <div className="mb-6 flex-grow">
                      <h4 className="font-medium text-blue-900 mb-2">What we offer:</h4>
                      <ul className="space-y-2">
                        {program.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className={`${program.color} mr-2 font-bold`}>•</span>
                            <span className="text-gray-700 text-sm leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-white/50">
                      <div className="flex items-center mb-2">
                        <Clock className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-700">{program.schedule}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Library className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-700">{program.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* How to Access Services with step animation */}
          <section className="mb-12 bg-white rounded-xl shadow-lg p-6 border border-gray-100 opacity-0 animate-fade-in-up animation-delay-3000">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">How to Access Support Services</h2>
            
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Register Online",
                  desc: "Log in to the MUHASSO student portal and navigate to the Academic Support section. Complete the registration form to indicate which services you're interested in."
                },
                {
                  step: "2",
                  title: "Schedule an Initial Assessment",
                  desc: "After registration, you'll be prompted to schedule an initial assessment with an academic coordinator who will help identify which support services best meet your needs."
                },
                {
                  step: "3",
                  title: "Create Your Support Plan",
                  desc: "Work with your academic coordinator to develop a personalized support plan that addresses your specific academic challenges and goals."
                },
                {
                  step: "4",
                  title: "Begin Your Sessions",
                  desc: "Start attending your scheduled tutoring sessions, workshops, or advising meetings according to your support plan. Adjust as needed throughout the semester."
                }
              ].map((item, index) => (
                <div key={index} className={`flex items-start opacity-0 animate-fade-in-left animation-delay-${3200 + (index * 200)} hover:bg-blue-50 p-3 rounded-lg transition-colors duration-300`}>
                  <div className="bg-blue-100 rounded-full p-2 mr-4 transform hover:scale-110 transition-transform duration-300">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-900 mb-1">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Contact Section with enhanced styling */}
          <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 opacity-0 animate-fade-in-up animation-delay-4000 hover:shadow-md transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Need Assistance?</h2>
            
            <div className="flex flex-col md:flex-row items-start">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                <h3 className="font-medium text-blue-900 mb-4">Contact the Academic Support Office</h3>
                
                <div className="space-y-3">
                  {[
                    { icon: MessageSquare, text: "academic.support@muhasso.org", color: "text-blue-600" },
                    { icon: Clock, text: "Monday-Friday: 8:00 AM - 5:00 PM", color: "text-green-600" },
                    { icon: Library, text: "Learning Resource Center, 1st Floor, Room 105", color: "text-purple-600" }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center p-2 rounded-lg hover:bg-white/50 transition-colors duration-200">
                      <contact.icon className={`w-5 h-5 ${contact.color} mr-3`} />
                      <span className="text-gray-700">{contact.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-6 md:border-l md:border-blue-200">
                <h3 className="font-medium text-blue-900 mb-4">Request Special Accommodations</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  If you require special accommodations due to a disability or other circumstances, 
                  please contact our Accessibility Services team. We&apos;re committed to ensuring all 
                  students have equal access to academic support resources.
                </p>
                <Link 
                  href="/accessibility" 
                  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Learn About Accessibility Services
                </Link>
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
        .animation-delay-1150 { animation-delay: 1.15s; }
        .animation-delay-1300 { animation-delay: 1.3s; }
        .animation-delay-1450 { animation-delay: 1.45s; }
        .animation-delay-1600 { animation-delay: 1.6s; }
        .animation-delay-1800 { animation-delay: 1.8s; }
        .animation-delay-2000 { animation-delay: 2.0s; }
        .animation-delay-2200 { animation-delay: 2.2s; }
        .animation-delay-2400 { animation-delay: 2.4s; }
        .animation-delay-2600 { animation-delay: 2.6s; }
        .animation-delay-2800 { animation-delay: 2.8s; }
        .animation-delay-3000 { animation-delay: 3.0s; }
        .animation-delay-3200 { animation-delay: 3.2s; }
        .animation-delay-3400 { animation-delay: 3.4s; }
        .animation-delay-3600 { animation-delay: 3.6s; }
        .animation-delay-3800 { animation-delay: 3.8s; }
        .animation-delay-4000 { animation-delay: 4.0s; }
      `}</style>
    </main>
  );
}