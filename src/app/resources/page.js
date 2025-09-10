'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

const ResourcesPage = () => {

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block w-24 h-1 bg-blue-600 mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Resource Center
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access a wide range of educational resources, research papers, and tools to support your academic journey.
            </p>
          </div>
          
          {/* Resource Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <a href="#academic" className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Academic Resources</h3>
              <p className="text-gray-600 text-sm">Textbooks, lecture notes, study materials, and more</p>
            </a>
            
            <a href="#research" className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-violet-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Research Tools</h3>
              <p className="text-gray-600 text-sm">Journals, papers, databases, and research methodologies</p>
            </a>
            
            <a href="#clinical" className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Clinical Resources</h3>
              <p className="text-gray-600 text-sm">Clinical guidelines, protocols, and practice materials</p>
            </a>
            
            <a href="#career" className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Career Development</h3>
              <p className="text-gray-600 text-sm">CV templates, interview tips, and career guidance</p>
            </a>
          </div>
          
          {/* Featured Resources */}
          <section id="academic" className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-2">Academic Resources</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Resource 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-3 bg-blue-600"></div>
                <div className="p-6">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">Textbook</span>
                  <h4 className="text-lg font-bold text-gray-900 mt-3 mb-2">Introduction to Clinical Medicine</h4>
                  <p className="text-gray-600 text-sm mb-4">Comprehensive textbook covering the basics of clinical practice for medical students.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">PDF • 25MB</span>
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Download</a>
                  </div>
                </div>
              </div>
              
              {/* Resource 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-3 bg-blue-600"></div>
                <div className="p-6">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">Study Guide</span>
                  <h4 className="text-lg font-bold text-gray-900 mt-3 mb-2">Anatomy Quick Reference</h4>
                  <p className="text-gray-600 text-sm mb-4">Quick reference guide with key anatomical structures and their functions.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">PDF • 12MB</span>
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Download</a>
                  </div>
                </div>
              </div>
              
              {/* Resource 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-3 bg-blue-600"></div>
                <div className="p-6">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">Video Series</span>
                  <h4 className="text-lg font-bold text-gray-900 mt-3 mb-2">Clinical Skills Workshop</h4>
                  <p className="text-gray-600 text-sm mb-4">Video series demonstrating essential clinical skills for medical practice.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">MP4 • 8 Videos</span>
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Access</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Research Resources */}
          <section id="research" className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-2">Research Tools</h3>
            
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h4 className="font-bold text-lg text-gray-900 mb-4">Journal Access Portal</h4>
              <p className="text-gray-600 mb-6">
                MUHASSO provides access to leading medical journals and research databases. Login with your student credentials to access full text articles.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <a href="#" className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors text-center">
                  <div className="h-8 w-auto mx-auto mb-2 text-blue-700 font-bold">PubMed</div>
                  <span className="text-sm font-medium text-gray-700">PubMed</span>
                </a>
                <a href="#" className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors text-center">
                  <div className="h-8 w-auto mx-auto mb-2 text-blue-700 font-bold">NEJM</div>
                  <span className="text-sm font-medium text-gray-700">NEJM</span>
                </a>
                <a href="#" className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors text-center">
                  <div className="h-8 w-auto mx-auto mb-2 text-blue-700 font-bold">Lancet</div>
                  <span className="text-sm font-medium text-gray-700">The Lancet</span>
                </a>
                <a href="#" className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors text-center">
                  <div className="h-8 w-auto mx-auto mb-2 text-blue-700 font-bold">BMJ</div>
                  <span className="text-sm font-medium text-gray-700">BMJ</span>
                </a>
              </div>
              <div className="mt-6 text-center">
                <a href="#" className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Access Journal Portal
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ResourcesPage;
