'use client';

import React from 'react';
import { Book, Calendar, Users, Mail, User, BookOpen, Quote, ArrowRight, Heart, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function BookClubPage() {
  const upcomingReads = [
    {
      title: "Medical Humanities: A Bridge to Better Care",
      author: "Dr. Rita Charon",
      month: "March 2025",
      genre: "Medical Literature"
    },
    {
      title: "When Breath Becomes Air",
      author: "Paul Kalanithi",
      month: "April 2025",
      genre: "Memoir"
    },
    {
      title: "The Emperor of All Maladies",
      author: "Siddhartha Mukherjee",
      month: "May 2025",
      genre: "Medical History"
    }
  ];

  const pastReads = [
    "Being Mortal - Atul Gawande",
    "The House of God - Samuel Shem",
    "Mountains Beyond Mountains - Tracy Kidder",
    "Complications - Atul Gawande",
    "The Spirit Catches You - Anne Fadiman"
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Icon/Logo */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Book className="w-16 h-16 text-white" strokeWidth={2} />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                Cultural & Literary
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                MUHAS Book Club
              </h1>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                A vibrant literary community for book lovers exploring diverse genres from contemporary fiction to academic publications, fostering critical thinking and intellectual discussions among students.
              </p>
              
              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="w-5 h-5 text-green-600" />
                  <span className="font-semibold">65+ Members</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="w-5 h-5 text-green-600" />
                  <span className="font-semibold">Founded 2015</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Our Book Club
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The MUHAS Book Club is more than just a reading group—it&apos;s a community of curious minds who believe in the power of literature to expand perspectives, spark meaningful conversations, and provide balance to the rigorous demands of medical education.
                </p>
                <p>
                  We explore a diverse range of genres including contemporary fiction, medical humanities, memoirs, biographies, and thought-provoking non-fiction. Our discussions go beyond plot summaries to examine themes, character development, writing styles, and how the books relate to our experiences as future healthcare professionals.
                </p>
                <p>
                  Whether you&apos;re an avid reader or just getting started, our club provides a welcoming space to discover new authors, share perspectives, and connect with fellow book enthusiasts.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Quote className="w-6 h-6 text-green-600" />
                Why Join Us?
              </h3>
              <ul className="space-y-4">
                {[
                  "Expand your literary horizons beyond medical textbooks",
                  "Engage in thoughtful discussions with fellow students",
                  "Develop critical thinking and analytical skills",
                  "Discover diverse perspectives and cultures",
                  "Build a community of lifelong readers",
                  "Balance academic stress with enjoyable reading"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Reads */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Book Selections
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us as we explore these carefully selected titles in our upcoming monthly discussions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingReads.map((book, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500"
              >
                <div className="flex items-center gap-2 text-green-600 mb-4">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">{book.month}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {book.title}
                </h3>
                <p className="text-gray-600 mb-2">by {book.author}</p>
                <div className="inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                  {book.genre}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Reads */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Reading History
            </h2>
            <p className="text-gray-600">
              Some of our favorite books we&apos;ve explored together
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pastReads.map((book, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200"
              >
                <BookOpen className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{book}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Info & Contact */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Meeting Schedule */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Meeting Schedule</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 mb-2">Regular Meetings</p>
                  <p className="text-lg font-semibold text-gray-900">
                    First Sunday of every month
                  </p>
                  <p className="text-gray-700">3:00 PM - 5:00 PM</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600 mb-2">Format</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Book discussion and analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Author background and context</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Open Q&A and personal reflections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Light refreshments and networking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Get In Touch</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-600 mb-2">Email</p>
                  <a 
                    href="mailto:bookclub@muhasso.org"
                    className="text-lg text-green-600 hover:text-green-700 font-semibold"
                  >
                    bookclub@muhasso.org
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">Club President</p>
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-green-600" />
                    <p className="text-lg font-semibold text-gray-900">Fatuma Juma</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">Faculty Advisor</p>
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-green-600" />
                    <p className="text-lg font-semibold text-gray-900">Prof. Sarah Mwalimu</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5" />
                    Join Book Club
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
