'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const EventsPage = () => {

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block w-24 h-1 bg-blue-600 mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about our latest events, conferences, and activities happening across the community.
            </p>
          </div>
          
          {/* Events Content - Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-blue-100 relative">
                <div className="absolute bottom-0 left-0 bg-blue-600 text-white px-4 py-2">
                  <div className="font-bold text-xl">25</div>
                  <div className="text-sm">June</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Annual Medical Conference</h3>
                <p className="text-gray-700 mb-4">Join us for the largest medical student conference in East Africa, featuring keynote speakers and workshops.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Dar es Salaam, Tanzania</span>
                </div>
              </div>
            </div>
            
            {/* Event Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-purple-100 relative">
                <div className="absolute bottom-0 left-0 bg-purple-600 text-white px-4 py-2">
                  <div className="font-bold text-xl">12</div>
                  <div className="text-sm">July</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Research Workshop Series</h3>
                <p className="text-gray-700 mb-4">Learn essential research methodologies and publishing strategies from experienced researchers.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Virtual Event</span>
                </div>
              </div>
            </div>
            
            {/* Event Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-green-100 relative">
                <div className="absolute bottom-0 left-0 bg-green-600 text-white px-4 py-2">
                  <div className="font-bold text-xl">30</div>
                  <div className="text-sm">July</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Community Health Outreach</h3>
                <p className="text-gray-700 mb-4">Join our community health initiative providing basic healthcare services to underserved communities.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Morogoro, Tanzania</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* More Events Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200">
              View All Events
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default EventsPage;
