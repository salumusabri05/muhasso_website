'use client';

import { motion } from 'framer-motion';
import AdminLayout from '@/components/admin/AdminLayout';
import PostersForm from '@/components/admin/forms/PostersForm';

export default function PostersAdminPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <AdminLayout>
      <motion.div
        className="space-y-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-2xl font-bold text-gray-900">Posters Management</h1>
          <p className="mt-1 text-sm text-gray-600">
            Upload, create, and manage posters for MUHASSO events and campaigns.
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* New Poster Form */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Upload New Poster</h3>
                <p className="mt-1 text-sm text-gray-500">Create a new poster for the MUHASSO website.</p>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <PostersForm />
              </div>
            </div>
          </div>

          {/* Tips and Stats */}
          <div>
            <motion.div
              className="bg-white shadow rounded-lg mb-6"
              variants={itemVariants}
            >
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Poster Design Tips</h3>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <ul className="space-y-4 text-sm">
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Use high resolution images (at least 1080px wide)</span>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Include essential event details (date, time, location)</span>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Keep text clear and readable</span>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Use MUHASSO branding colors when possible</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow rounded-lg"
              variants={itemVariants}
            >
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-white">Poster Analytics</h3>
                <div className="mt-5 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg py-4">
                    <div className="text-2xl font-bold">23</div>
                    <div className="text-xs text-white/80">Active</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg py-4">
                    <div className="text-2xl font-bold">156</div>
                    <div className="text-xs text-white/80">Total</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg py-4">
                    <div className="text-2xl font-bold">1.2K</div>
                    <div className="text-xs text-white/80">Views</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg py-4">
                    <div className="text-2xl font-bold">24%</div>
                    <div className="text-xs text-white/80">Engagement</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="bg-white shadow rounded-lg overflow-hidden"
        >
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Posters</h3>
              <p className="mt-1 text-sm text-gray-500">A gallery of recently uploaded posters.</p>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <select
                  className="appearance-none block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                >
                  <option>All Categories</option>
                  <option>Events</option>
                  <option>Campaigns</option>
                  <option>Announcements</option>
                  <option>Academic</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {Array.from({ length: 10 }).map((_, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="aspect-w-3 aspect-h-4 bg-gray-200">
                    <div className="h-full w-full flex items-center justify-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-3 text-white w-full">
                      <div className="font-medium truncate">Poster {idx + 1}</div>
                      <div className="text-xs opacity-80">{['Events', 'Campaigns', 'Academic', 'Announcements'][idx % 4]}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AdminLayout>
  );
}
