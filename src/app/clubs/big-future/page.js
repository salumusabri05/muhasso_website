'use client';

import React from 'react';
import { Lightbulb, Calendar, Users, Mail, User, Rocket, TrendingUp, Code, Palette, DollarSign, Target, Star, ArrowRight, Heart, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BigFutureClubPage() {
  const skillAreas = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design",
      description: "Master Adobe Creative Suite, Canva, and modern design principles"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Entrepreneurship",
      description: "Learn business planning, startup strategies, and innovation mindset"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Social media strategy, SEO, content marketing, and analytics"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "HTML, CSS, JavaScript, and modern web frameworks"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Business Innovation",
      description: "Strategic thinking, problem-solving, and market analysis"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Professional Skills",
      description: "Leadership, communication, project management, and networking"
    }
  ];

  const upcomingWorkshops = [
    {
      title: "UI/UX Design Fundamentals",
      date: "March 15, 2025",
      time: "2:00 PM - 5:00 PM",
      instructor: "Sarah Mwangi",
      type: "Hands-on Workshop"
    },
    {
      title: "Starting Your First Business",
      date: "March 22, 2025",
      time: "2:00 PM - 4:30 PM",
      instructor: "James Kimani",
      type: "Entrepreneurship"
    },
    {
      title: "Social Media Marketing Masterclass",
      date: "March 29, 2025",
      time: "2:00 PM - 5:00 PM",
      instructor: "Grace Ndege",
      type: "Digital Marketing"
    }
  ];

  const achievements = [
    "15+ successful student startups launched",
    "200+ students trained in digital skills",
    "50+ freelance projects completed",
    "10+ industry partnerships established",
    "Award-winning innovation projects"
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Icon/Logo */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Lightbulb className="w-16 h-16 text-white" strokeWidth={2} />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
                Skills Development & Innovation
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                BIG FUTURE Club
              </h1>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Empowering young minds with essential modern skills including graphic design, entrepreneurship, digital marketing, web development, and business innovation to prepare them for the future economy.
              </p>
              
              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="w-5 h-5 text-orange-600" />
                  <span className="font-semibold">85+ Members</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="w-5 h-5 text-orange-600" />
                  <span className="font-semibold">Founded 2020</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Rocket className="w-5 h-5 text-orange-600" />
                  <span className="font-semibold">15+ Startups Launched</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  BIG FUTURE Club is dedicated to bridging the gap between traditional education and the rapidly evolving demands of the modern economy. We believe that medical students should have the opportunity to develop diverse skill sets that complement their clinical training.
                </p>
                <p>
                  Through hands-on workshops, mentorship programs, and real-world projects, we equip our members with practical skills in design, technology, marketing, and entrepreneurship. Our goal is to foster innovation, creativity, and business acumen among future healthcare professionals.
                </p>
                <p>
                  Whether you&apos;re looking to start a health tech venture, build a personal brand, or simply acquire valuable digital skills, BIG FUTURE Club provides the resources, community, and guidance to help you succeed.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Star className="w-6 h-6 text-orange-600" />
                Our Achievements
              </h3>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Areas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You&apos;ll Learn
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive training in essential modern skills to prepare you for the future economy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillAreas.map((skill, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-orange-500"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-4 text-orange-600">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Workshops
            </h2>
            <p className="text-gray-600">
              Join our weekly Saturday sessions and build your skills
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingWorkshops.map((workshop, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-block px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-semibold mb-4">
                  {workshop.type}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {workshop.title}
                </h3>
                <div className="space-y-2 text-gray-700 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-600" />
                    <span className="text-sm">{workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{workshop.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-orange-600" />
                    <span className="text-sm">Instructor: {workshop.instructor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Info & Contact */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Meeting Schedule */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Weekly Sessions</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 mb-2">Regular Workshops</p>
                  <p className="text-lg font-semibold text-gray-900">
                    Every Saturday
                  </p>
                  <p className="text-gray-700">2:00 PM - 5:00 PM</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600 mb-2">Workshop Format</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Hands-on practical training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Industry expert speakers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Real-world projects and assignments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Mentorship and networking opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Portfolio building support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Join Us Today</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-600 mb-2">Email</p>
                  <a 
                    href="mailto:bigfuture@muhasso.org"
                    className="text-lg text-orange-600 hover:text-orange-700 font-semibold"
                  >
                    bigfuture@muhasso.org
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">Club President</p>
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-orange-600" />
                    <p className="text-lg font-semibold text-gray-900">Amina Rashid</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">Faculty Advisor</p>
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-orange-600" />
                    <p className="text-lg font-semibold text-gray-900">Dr. Michael Temba</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    <Rocket className="w-5 h-5" />
                    Start Your Future Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
