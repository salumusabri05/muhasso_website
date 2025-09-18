'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { Users, Award, Target, Calendar, Globe } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <div className="flex-grow container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Animated page title */}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 opacity-0 animate-fade-in-up">
            About MUHASSO
          </h1>
          
          {/* Hero Section with slide-in animation */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 mb-12 flex flex-col md:flex-row items-center shadow-lg opacity-0 animate-fade-in-up animation-delay-200 hover:shadow-xl transition-shadow duration-300">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="relative w-40 h-40 mx-auto transform hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/asscociation_details/muhasso_logo.png" 
                  alt="MUHASSO Logo"
                  fill
                  className="object-contain animate-pulse"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-xl font-semibold text-blue-900 mb-4 animate-fade-in-right animation-delay-400">
                Muhimbili University Health and Allied Sciences Students&apos; Organization
              </h2>
              <p className="text-gray-700 leading-relaxed animate-fade-in-right animation-delay-600">
                MUHASSO is the official student organization representing all undergraduate and postgraduate 
                students at Muhimbili University of Health and Allied Sciences (MUHAS). As the primary voice 
                for students, we advocate for student welfare, organize academic and social events, and serve 
                as the bridge between students and university management.
              </p>
            </div>
          </div>
          
          {/* Mission & Vision with staggered animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 opacity-0 animate-fade-in-left animation-delay-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-600 mr-3 animate-bounce-gentle" />
                <h2 className="text-xl font-semibold text-blue-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To represent and advocate for the rights and welfare of all students at Muhimbili University 
                while promoting academic excellence, leadership, and community engagement in healthcare.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 opacity-0 animate-fade-in-right animation-delay-1000 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-purple-600 mr-3 animate-bounce-gentle animation-delay-200" />
                <h2 className="text-xl font-semibold text-blue-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To create an inclusive, supportive, and dynamic learning environment that empowers health 
                sciences students to become compassionate healthcare leaders for Tanzania and beyond.
              </p>
            </div>
          </div>
          
          {/* History with fade-in animation */}
          <div className="mb-12 opacity-0 animate-fade-in-up animation-delay-1200">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Our History</h2>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Calendar className="w-8 h-8 text-orange-500 mr-3 animate-bounce-gentle animation-delay-400" />
                <h3 className="text-xl font-semibold text-blue-900">Established in 2010</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed animate-fade-in animation-delay-1400">
                  MUHASSO was established in 2010 following the founding of Muhimbili University College of 
                  Health Sciences (MUCHS), which later became Muhimbili University of Health and Allied Sciences 
                  (MUHAS) in 2007. For over three decades, MUHASSO has been at the forefront of student advocacy 
                  and representation.
                </p>
                <p className="text-gray-700 leading-relaxed animate-fade-in animation-delay-1600">
                  Throughout its history, MUHASSO has evolved from a small student body to a comprehensive 
                  organization representing thousands of students across all health sciences disciplines. The 
                  organization has been instrumental in shaping student policies, improving campus facilities, 
                  and enhancing the overall student experience at MUHAS.
                </p>
                <p className="text-gray-700 leading-relaxed animate-fade-in animation-delay-1800">
                  Today, MUHASSO continues its legacy of student advocacy while adapting to meet the changing 
                  needs of health sciences education in Tanzania. The organization works closely with university 
                  management, faculty, and external stakeholders to ensure MUHAS students receive the best 
                  possible education and university experience.
                </p>
              </div>
            </div>
          </div>
          
          {/* Core Values with staggered grid animation */}
          <div className="mb-12 opacity-0 animate-fade-in-up animation-delay-2000">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Integrity", desc: "We uphold the highest ethical standards in all our actions and decisions.", delay: "animation-delay-2200" },
                { title: "Inclusivity", desc: "We embrace diversity and ensure all students' voices are heard and respected.", delay: "animation-delay-2400" },
                { title: "Excellence", desc: "We strive for the highest standards in academic and professional development.", delay: "animation-delay-2600" },
                { title: "Advocacy", desc: "We are committed to representing student interests and rights.", delay: "animation-delay-2800" },
                { title: "Innovation", desc: "We embrace creative solutions to improve student welfare and education.", delay: "animation-delay-3000" },
                { title: "Collaboration", desc: "We work together with all stakeholders to achieve common goals.", delay: "animation-delay-3200" }
              ].map((value, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 opacity-0 animate-fade-in-up ${value.delay} hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 group`}
                >
                  <h3 className="font-semibold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
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
        .animation-delay-2400 { animation-delay: 2.4s; }
        .animation-delay-2600 { animation-delay: 2.6s; }
        .animation-delay-2800 { animation-delay: 2.8s; }
        .animation-delay-3000 { animation-delay: 3.0s; }
        .animation-delay-3200 { animation-delay: 3.2s; }
      `}</style>
    </main>
  );
}