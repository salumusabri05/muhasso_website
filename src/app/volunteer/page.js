'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { Calendar, Clock, MapPin, Heart, Handshake, Globe, Users, School, Accessibility, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Volunteer() {
  // Mock volunteer opportunities
  const volunteerPrograms = [
    {
      id: 1,
      title: "Community Health Education",
      description: "Educate local communities on important health topics including disease prevention, nutrition, and hygiene practices.",
      commitment: "4-6 hours per month",
      location: "Various communities around Dar es Salaam",
      skills: ["Communication", "Basic health knowledge", "Teaching"],
      icon: <Heart className="w-10 h-10" />,
      color: "text-red-600",
      bgColor: "bg-red-50",
      impact: "Reached over 5,000 community members in the past year"
    },
    {
      id: 2,
      title: "Medical Outreach Clinics",
      description: "Assist healthcare professionals in providing basic medical services to underserved communities through mobile clinics.",
      commitment: "1 weekend per month (Saturday or Sunday)",
      location: "Rural communities within 100km of Dar es Salaam",
      skills: ["Basic clinical skills", "Compassion", "Organization"],
      icon: <Users className="w-10 h-10" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      impact: "Provided care to over 2,800 patients last year"
    },
    {
      id: 3,
      title: "Health Research Assistance",
      description: "Support ongoing health research projects by collecting data, conducting interviews, or analyzing information.",
      commitment: "Flexible, 5-10 hours per week",
      location: "MUHAS Campus and partner institutions",
      skills: ["Research methods", "Data analysis", "Attention to detail"],
      icon: <School className="w-10 h-10" />,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      impact: "Contributed to 12 published research papers in the past year"
    },
    {
      id: 4,
      title: "Disability Support Services",
      description: "Provide assistance to fellow students with disabilities, including note-taking, mobility support, and academic assistance.",
      commitment: "2-4 hours per week during semester",
      location: "MUHAS Campus",
      skills: ["Patience", "Empathy", "Adaptability"],
      icon: <Accessibility className="w-10 h-10" />,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      impact: "Supported 35 students with disabilities during the last academic year"
    },
    {
      id: 5,
      title: "International Medical Missions",
      description: "Join teams of healthcare providers traveling to neighboring countries to provide medical services in areas of need.",
      commitment: "1-2 weeks during semester breaks",
      location: "Various countries in East Africa",
      skills: ["Clinical skills", "Cultural sensitivity", "Teamwork"],
      icon: <Globe className="w-10 h-10" />,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      impact: "Completed 8 missions serving over 4,000 patients across East Africa"
    },
    {
      id: 6,
      title: "Health Mentorship Program",
      description: "Mentor high school students interested in healthcare careers through regular sessions and activities.",
      commitment: "2 hours per week during school year",
      location: "Partner high schools in Dar es Salaam",
      skills: ["Mentoring", "Leadership", "Communication"],
      icon: <Handshake className="w-10 h-10" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      impact: "Mentored 150 students, with 85% pursuing health sciences education"
    }
  ];

  // Benefits of volunteering
  const benefits = [
    {
      title: "Professional Development",
      description: "Gain practical experience in healthcare settings and develop valuable skills that enhance your resume and career prospects.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Personal Growth",
      description: "Build confidence, develop empathy, and discover new perspectives through meaningful service to others.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Community Impact",
      description: "Make a tangible difference in the lives of individuals and communities facing health challenges.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Networking",
      description: "Connect with healthcare professionals, community leaders, and fellow students who share your passion for service.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Academic Recognition",
      description: "Earn service-learning credits and recognition through MUHASSO's volunteer certification program.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Global Perspective",
      description: "Develop a broader understanding of global health issues and how they affect diverse communities.",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Volunteer Opportunities</h1>
          
          {/* Hero Section */}
          <div className="bg-blue-50 rounded-xl p-6 mb-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="relative w-40 h-40 mx-auto">
                <Image 
                  src="/asscociation_details/muhasso_logo.png" 
                  alt="MUHASSO Volunteer Programs"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">Make a Difference Through Service</h2>
              <p className="text-gray-700">
                MUHASSO is committed to community service and provides numerous volunteer opportunities 
                for students to apply their knowledge and skills while making a positive impact on society. 
                Our volunteer programs focus on health education, clinical outreach, research assistance, 
                and support for vulnerable populations.
              </p>
            </div>
          </div>
          
          {/* Impact Stats */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-12">
            <h2 className="text-xl font-semibold text-blue-900 mb-6 text-center">Our Collective Impact</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">1,200+</div>
                <p className="text-gray-600 text-sm">Student volunteers annually</p>
              </div>
              
              <div className="p-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">15,000+</div>
                <p className="text-gray-600 text-sm">Community members served</p>
              </div>
              
              <div className="p-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">25</div>
                <p className="text-gray-600 text-sm">Active volunteer programs</p>
              </div>
              
              <div className="p-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">45,000+</div>
                <p className="text-gray-600 text-sm">Volunteer hours contributed</p>
              </div>
            </div>
          </div>
          
          {/* Volunteer Programs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Featured Volunteer Opportunities</h2>
            
            <div className="grid grid-cols-1 gap-6">
              {volunteerPrograms.map((program) => (
                <div 
                  key={program.id} 
                  className={`${program.bgColor} border border-${program.color.replace('text-', '')} rounded-xl overflow-hidden`}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/5 p-6 flex justify-center items-center">
                      <div className={`w-20 h-20 rounded-full ${program.bgColor} border ${program.borderColor || 'border-gray-200'} flex items-center justify-center ${program.color}`}>
                        {program.icon}
                      </div>
                    </div>
                    <div className="md:w-4/5 p-6 bg-white">
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">{program.title}</h3>
                      <p className="text-gray-700 mb-4">{program.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 text-gray-500 mr-2" />
                          <span className="text-gray-700">{program.commitment}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                          <span className="text-gray-700">{program.location}</span>
                        </div>
                        <div className="flex items-start">
                          <Heart className="w-5 h-5 text-gray-500 mr-2 mt-1" />
                          <span className="text-gray-700">{program.impact}</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Skills Needed:</h4>
                        <div className="flex flex-wrap gap-2">
                          {program.skills.map((skill, index) => (
                            <span 
                              key={index} 
                              className={`px-3 py-1 rounded-full text-sm ${program.bgColor} ${program.color}`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <Link 
                          href={`/volunteer/${program.id}`} 
                          className={`inline-flex items-center ${program.color} font-medium`}
                        >
                          Apply for this opportunity
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Benefits of Volunteering */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Benefits of Volunteering</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6 flex">
                  <div className="text-blue-600 mr-4">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* How to Get Involved */}
          <section className="mb-12 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">How to Get Involved</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-blue-900 mb-1">Explore Opportunities</h3>
                  <p className="text-gray-700">
                    Browse our volunteer database to find opportunities that match your interests, skills, 
                    and availability. You can filter by cause area, time commitment, and location.
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
                  <h3 className="font-medium text-blue-900 mb-1">Attend an Orientation</h3>
                  <p className="text-gray-700">
                    Sign up for a volunteer orientation session to learn more about MUHASSO&apos;s volunteer 
                    program, expectations, and available support. Orientations are held monthly.
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
                  <h3 className="font-medium text-blue-900 mb-1">Complete Training</h3>
                  <p className="text-gray-700">
                    Participate in required training sessions for your chosen volunteer program. These may 
                    include general volunteer training and program-specific preparation.
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
                  <h3 className="font-medium text-blue-900 mb-1">Start Making an Impact</h3>
                  <p className="text-gray-700">
                    Begin your volunteer service according to the program schedule. Our volunteer coordinators 
                    will provide ongoing support and guidance throughout your service.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="/volunteer/register" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Register as a Volunteer
              </Link>
            </div>
          </section>
          
          {/* Upcoming Volunteer Events */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Upcoming Volunteer Events</h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <div className="bg-blue-50 text-blue-600 p-4 rounded-lg text-center">
                      <Calendar className="w-8 h-8 mx-auto mb-2" />
                      <p className="font-bold text-lg">OCT 20</p>
                      <p className="text-sm">2023</p>
                    </div>
                  </div>
                  <div className="md:w-3/4 md:pl-6">
                    <h3 className="font-semibold text-blue-900 mb-2">World Health Day Community Fair</h3>
                    <p className="text-gray-700 mb-4">
                      Join us for a day of health education, screenings, and activities for community 
                      members. Volunteers will assist with booth management, health screenings, 
                      and interactive demonstrations.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600">
                      <div className="flex items-center mr-6 mb-2 sm:mb-0">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>8:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex items-center mr-6 mb-2 sm:mb-0">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>Mnazi Mmoja Grounds</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>30 volunteers needed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <div className="bg-blue-50 text-blue-600 p-4 rounded-lg text-center">
                      <Calendar className="w-8 h-8 mx-auto mb-2" />
                      <p className="font-bold text-lg">NOV 5</p>
                      <p className="text-sm">2023</p>
                    </div>
                  </div>
                  <div className="md:w-3/4 md:pl-6">
                    <h3 className="font-semibold text-blue-900 mb-2">Rural Medical Outreach</h3>
                    <p className="text-gray-700 mb-4">
                      Travel to Kisarawe District to provide basic health services to rural communities. 
                      Activities include health screenings, medication distribution, and health education.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600">
                      <div className="flex items-center mr-6 mb-2 sm:mb-0">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>Weekend Trip (Sat-Sun)</span>
                      </div>
                      <div className="flex items-center mr-6 mb-2 sm:mb-0">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>Kisarawe District</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>15 volunteers needed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <div className="bg-blue-50 text-blue-600 p-4 rounded-lg text-center">
                      <Calendar className="w-8 h-8 mx-auto mb-2" />
                      <p className="font-bold text-lg">NOV 18</p>
                      <p className="text-sm">2023</p>
                    </div>
                  </div>
                  <div className="md:w-3/4 md:pl-6">
                    <h3 className="font-semibold text-blue-900 mb-2">Children&apos;s Hospital Visit</h3>
                    <p className="text-gray-700 mb-4">
                      Spend time with children at Muhimbili Children&apos;s Hospital, providing comfort, 
                      entertainment, and support to young patients and their families.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600">
                      <div className="flex items-center mr-6 mb-2 sm:mb-0">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>1:00 PM - 5:00 PM</span>
                      </div>
                      <div className="flex items-center mr-6 mb-2 sm:mb-0">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>Muhimbili Children&apos;s Hospital</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>20 volunteers needed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link 
                href="/volunteer/events" 
                className="inline-flex items-center text-blue-600 font-medium"
              >
                View all upcoming volunteer events
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </section>
          
          {/* Contact Section */}
          <section className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact Volunteer Services</h2>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <p className="text-gray-700 mb-6">
                  Have questions about our volunteer programs or need assistance? 
                  Contact our Volunteer Coordinator for more information.
                </p>
                
                <div className="space-y-3">
                  <p className="flex items-center">
                    <Heart className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">volunteer@muhasso.org</span>
                  </p>
                  <p className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">
                      Office Hours:<br />
                      Monday-Friday: 9:00 AM - 4:00 PM
                    </span>
                  </p>
                  <p className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">
                      Student Activities Center<br />
                      MUHAS Campus, Room 205
                    </span>
                  </p>
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-6 md:border-l md:border-blue-200">
                <h3 className="font-medium text-blue-900 mb-4">Propose a Volunteer Project</h3>
                <p className="text-gray-700 mb-4">
                  Have an idea for a new volunteer initiative? We welcome student-led volunteer projects 
                  that address community health needs. Submit your proposal for consideration.
                </p>
                <Link 
                  href="/volunteer/propose" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Submit a Proposal
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
