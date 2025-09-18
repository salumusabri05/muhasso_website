'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { Heart, Calendar, Phone, Clock, MapPin, AlertCircle, Stethoscope, Pill, Brain, UserPlus, Users, Activity } from 'lucide-react';
import Link from 'next/link';

export default function Health() {
  // Mock health services data
  const healthServices = [
    {
      id: 1,
      title: "Primary Healthcare",
      description: "Comprehensive primary care services for all MUHAS students, including routine check-ups, treatment for common illnesses, and preventive care.",
      icon: <Stethoscope className="w-10 h-10" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      services: [
        "General medical consultations",
        "Basic laboratory services",
        "Immunizations",
        "Health screenings"
      ]
    },
    {
      id: 2,
      title: "Mental Health Support",
      description: "Confidential counseling and psychological services to support students' mental well-being and help manage stress, anxiety, and other mental health concerns.",
      icon: <Brain className="w-10 h-10" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      services: [
        "Individual counseling",
        "Group therapy sessions",
        "Stress management workshops",
        "Crisis intervention"
      ]
    },
    {
      id: 3,
      title: "Pharmacy Services",
      description: "Access to essential medications and pharmaceutical consultations for students with prescriptions.",
      icon: <Pill className="w-10 h-10" />,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      services: [
        "Prescription fulfillment",
        "Over-the-counter medications",
        "Medication counseling",
        "Health supplies"
      ]
    },
    {
      id: 4,
      title: "Specialist Referrals",
      description: "Coordination with specialized healthcare providers for students requiring advanced medical care beyond what's available on campus.",
      icon: <UserPlus className="w-10 h-10" />,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      services: [
        "Specialist appointment scheduling",
        "Medical records transfer",
        "Follow-up care coordination",
        "Insurance assistance"
      ]
    },
    {
      id: 5,
      title: "Health Education",
      description: "Educational programs and resources to promote healthy lifestyles, disease prevention, and overall wellness among students.",
      icon: <Users className="w-10 h-10" />,
      color: "text-red-600",
      bgColor: "bg-red-50",
      services: [
        "Health awareness campaigns",
        "Nutrition counseling",
        "Sexual health education",
        "First aid training"
      ]
    },
    {
      id: 6,
      title: "Wellness Programs",
      description: "Holistic wellness initiatives focusing on physical, mental, and social well-being through activities, workshops, and support groups.",
      icon: <Activity className="w-10 h-10" />,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      services: [
        "Fitness classes",
        "Meditation sessions",
        "Work-life balance workshops",
        "Peer support groups"
      ]
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Student Health Services</h1>
          
          {/* Hero Section */}
          <div className="bg-blue-50 rounded-xl p-6 mb-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="relative w-40 h-40 mx-auto">
                <Image 
                  src="/asscociation_details/muhasso_logo.png" 
                  alt="MUHASSO Health Services"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">Caring for Your Health & Well-being</h2>
              <p className="text-gray-700">
                MUHASSO is committed to supporting the health and well-being of all students through our 
                comprehensive health services. We understand that maintaining good health is essential for 
                academic success. Our health center offers a range of services to address both physical and 
                mental health needs, ensuring that you can focus on your studies with peace of mind.
              </p>
            </div>
          </div>
          
          {/* Emergency Information */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
            <div className="flex items-start">
              <AlertCircle className="w-8 h-8 text-red-600 mr-4 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-red-700 mb-4">Emergency Services</h2>
                <p className="text-gray-700 mb-4">
                  For medical emergencies, please call our 24/7 emergency line or visit the nearest emergency room. 
                  The MUHAS Health Center is equipped to handle urgent care during regular hours, but serious 
                  emergencies should be directed to the main hospital.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-medium text-red-700 mb-2">Emergency Contacts:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Phone className="w-5 h-5 text-red-600 mr-3" />
                        <span className="text-gray-700">Campus Emergency: 7777</span>
                      </li>
                      <li className="flex items-center">
                        <Phone className="w-5 h-5 text-red-600 mr-3" />
                        <span className="text-gray-700">Ambulance: 0800-123-4567</span>
                      </li>
                      <li className="flex items-center">
                        <Phone className="w-5 h-5 text-red-600 mr-3" />
                        <span className="text-gray-700">National Emergency: 112</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-medium text-red-700 mb-2">Nearest Hospital:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <MapPin className="w-5 h-5 text-red-600 mr-3" />
                        <span className="text-gray-700">Muhimbili National Hospital</span>
                      </li>
                      <li className="flex items-center">
                        <Phone className="w-5 h-5 text-red-600 mr-3" />
                        <span className="text-gray-700">+255 22 215 1376</span>
                      </li>
                      <li className="flex items-center">
                        <Clock className="w-5 h-5 text-red-600 mr-3" />
                        <span className="text-gray-700">Emergency Room: 24/7</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Health Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Available Health Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {healthServices.map((service) => (
                <div 
                  key={service.id} 
                  className={`${service.bgColor} border border-${service.color.replace('text-', '')} rounded-xl overflow-hidden h-full`}
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className={`${service.color} mr-4`}>
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    
                    <div className="mb-6 flex-grow">
                      <h4 className="font-medium text-blue-900 mb-2">Services offered:</h4>
                      <ul className="space-y-2">
                        {service.services.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className={`${service.color} mr-2`}>•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* How to Access Services */}
          <section className="mb-12 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">How to Access Health Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-blue-900 mb-4">Making Appointments</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4 shrink-0">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                        1
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        Log in to the MUHASSO Student Portal and navigate to the Health Services section
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4 shrink-0">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                        2
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        Select the type of service you need and your preferred date/time
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4 shrink-0">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                        3
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        Complete the pre-appointment questionnaire (if applicable)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4 shrink-0">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                        4
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        Receive a confirmation email with your appointment details
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-blue-900 mb-4">Walk-in Services</h3>
                
                <p className="text-gray-700 mb-4">
                  Some services are available on a walk-in basis during regular hours. Priority is given to urgent cases.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Walk-in Hours:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Clock className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-gray-700">Monday-Friday: 8:00 AM - 4:30 PM</span>
                    </li>
                    <li className="flex items-center">
                      <Clock className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-gray-700">Saturday: 9:00 AM - 12:00 PM</span>
                    </li>
                    <li className="flex items-center">
                      <AlertCircle className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-gray-700">Closed on Sundays and public holidays</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Insurance Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Health Insurance Information</h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-gray-700 mb-6">
                All registered MUHAS students are required to have health insurance coverage. The university 
                accepts various insurance providers, including the National Health Insurance Fund (NHIF) and 
                other approved private insurance plans.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-blue-900 mb-4">Student Health Insurance Plan</h3>
                  <p className="text-gray-700 mb-4">
                    MUHASSO offers a Student Health Insurance Plan for those who do not have existing coverage. 
                    This plan provides comprehensive coverage for most services offered at the Health Center 
                    and approved external providers.
                  </p>
                  <Link 
                    href="#" 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Learn More About Insurance Options
                  </Link>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-blue-900 mb-4">Insurance Verification</h3>
                  <p className="text-gray-700 mb-4">
                    Please bring your insurance card to all appointments. If you&apos;re unsure about coverage for 
                    a specific service, our administrative staff can help verify your benefits.
                  </p>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">Insurance Helpline: +255 22 123 4567</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Health Resources */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Health Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-medium text-blue-900 mb-4">Health Guides</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-blue-600 hover:underline flex items-center">
                      <Heart className="w-4 h-4 mr-2" />
                      <span>Staying Healthy During Exams</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-blue-600 hover:underline flex items-center">
                      <Heart className="w-4 h-4 mr-2" />
                      <span>Nutrition for Medical Students</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-blue-600 hover:underline flex items-center">
                      <Heart className="w-4 h-4 mr-2" />
                      <span>Mental Health Self-Care</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-blue-600 hover:underline flex items-center">
                      <Heart className="w-4 h-4 mr-2" />
                      <span>Sleep Hygiene Tips</span>
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-medium text-blue-900 mb-4">Upcoming Health Events</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Calendar className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Blood Donation Drive</p>
                      <p className="text-sm text-gray-600">October 15, 9 AM - 3 PM</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Mental Health Awareness Week</p>
                      <p className="text-sm text-gray-600">November 1-7, Various Locations</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Free Dental Check-ups</p>
                      <p className="text-sm text-gray-600">November 20, 10 AM - 2 PM</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-medium text-blue-900 mb-4">Health Apps</h3>
                <p className="text-gray-700 mb-4">
                  Download the MUHASSO Health app for easy access to services:
                </p>
                <ul className="space-y-3">
                  <li className="text-gray-700">
                    • Schedule appointments
                  </li>
                  <li className="text-gray-700">
                    • View medical records
                  </li>
                  <li className="text-gray-700">
                    • Receive health reminders
                  </li>
                  <li className="text-gray-700">
                    • Access health resources
                  </li>
                </ul>
                <div className="mt-4">
                  <Link 
                    href="#" 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Download App
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          {/* Contact Section */}
          <section className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact Health Services</h2>
            
            <div className="flex flex-col md:flex-row items-start">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                <h3 className="font-medium text-blue-900 mb-4">Get in Touch</h3>
                
                <div className="space-y-3">
                  <p className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+255 22 123 4567</span>
                  </p>
                  <p className="flex items-center">
                    <Heart className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">health@muhasso.org</span>
                  </p>
                  <p className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">
                      Office Hours:<br />
                      Monday-Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 12:00 PM
                    </span>
                  </p>
                  <p className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">
                      Student Health Center<br />
                      MUHAS Campus, Building C<br />
                      Ground Floor
                    </span>
                  </p>
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-6 md:border-l md:border-blue-200">
                <h3 className="font-medium text-blue-900 mb-4">Feedback</h3>
                <p className="text-gray-700 mb-4">
                  We value your feedback on our health services. Please share your experience or suggestions 
                  to help us improve the quality of care we provide to all students.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Submit Feedback
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
