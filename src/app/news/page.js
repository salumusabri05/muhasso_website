'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const NewsPage = () => {

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block w-24 h-1 bg-blue-600 mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              News & Updates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about the latest happenings, achievements, and announcements from MUHASSO.
            </p>
          </div>
          
          {/* News Content - Placeholder */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured News */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-64 bg-blue-200"></div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">Featured</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-500 text-sm">June 20, 2024</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">MUHASSO Receives Excellence Award for Public Health Initiative</h3>
                  <p className="text-gray-700 mb-4">
                    MUHASSO has been recognized with the prestigious National Health Excellence Award for its impactful public health campaigns across rural Tanzania. The organization&apos;s efforts in promoting vaccination and preventive healthcare have reached over 50,000 citizens.
                  </p>
                  <a href="#" className="inline-block text-blue-600 font-medium hover:text-blue-800">
                    Read Full Story →
                  </a>
                </div>
              </div>
            </div>
            
            {/* Recent News Column */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Recent Updates</h3>
              
              {/* News Item 1 */}
              <div className="bg-white rounded-lg p-5 shadow">
                <span className="text-gray-500 text-sm block mb-1">June 18, 2024</span>
                <h4 className="font-semibold text-gray-900 mb-2">New Partnership with Global Health Research Institute</h4>
                <p className="text-gray-600 text-sm mb-3">MUHASSO announces a strategic partnership to enhance research opportunities for medical students...</p>
                <a href="#" className="text-blue-600 text-sm font-medium hover:text-blue-800">Read More</a>
              </div>
              
              {/* News Item 2 */}
              <div className="bg-white rounded-lg p-5 shadow">
                <span className="text-gray-500 text-sm block mb-1">June 15, 2024</span>
                <h4 className="font-semibold text-gray-900 mb-2">Student Exchange Program Applications Now Open</h4>
                <p className="text-gray-600 text-sm mb-3">Applications are now being accepted for the 2024-2025 international student exchange program...</p>
                <a href="#" className="text-blue-600 text-sm font-medium hover:text-blue-800">Read More</a>
              </div>
              
              {/* News Item 3 */}
              <div className="bg-white rounded-lg p-5 shadow">
                <span className="text-gray-500 text-sm block mb-1">June 10, 2024</span>
                <h4 className="font-semibold text-gray-900 mb-2">MUHASSO Elects New Student Leadership</h4>
                <p className="text-gray-600 text-sm mb-3">Following a successful election, MUHASSO welcomes its new executive committee who will serve for the next academic year...</p>
                <a href="#" className="text-blue-600 text-sm font-medium hover:text-blue-800">Read More</a>
              </div>
            </div>
          </div>
          
          {/* News Categories */}
          <div className="mt-16">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700">All News</a>
                <a href="#" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700">Announcements</a>
                <a href="#" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700">Events</a>
                <a href="#" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700">Achievements</a>
                <a href="#" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700">Partnerships</a>
                <a href="#" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700">Student Life</a>
              </div>
            </div>
            
            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200">
                Load More News
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default NewsPage;
