'use client';

import { motion } from 'framer-motion';
import AdminLayout from '@/components/admin/AdminLayout';
import AnnouncementsForm from '@/components/admin/forms/AnnouncementsForm';

export default function AnnouncementsAdminPage() {
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
          <h1 className="text-2xl font-bold text-gray-900">Announcements</h1>
          <p className="mt-1 text-sm text-gray-600">
            Create and manage important announcements for students and faculty.
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* New Announcement Form */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">New Announcement</h3>
                <p className="mt-1 text-sm text-gray-500">Create an announcement to be displayed on the website.</p>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <AnnouncementsForm />
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div>
            <motion.div
              className="bg-white shadow rounded-lg mb-6"
              variants={itemVariants}
            >
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Announcement Tips</h3>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <ul className="space-y-4 text-sm">
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Keep announcements concise and to the point</span>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Use clear and descriptive titles</span>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Include relevant dates and times</span>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Set an appropriate priority level</span>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Use formatting to highlight important information</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="bg-white shadow rounded-lg"
              variants={itemVariants}
            >
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Announcements</h3>
              </div>
              <div className="px-4 py-12 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Announcements Yet</h3>
                <p className="text-gray-600">Create your first announcement using the form above.</p>
              </div>
              <div className="px-4 py-4 sm:px-6 border-t border-gray-200">
                <a href="#" className="text-sm font-medium text-purple-600 hover:text-purple-500">
                  View all announcements <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AdminLayout>
  );
}
