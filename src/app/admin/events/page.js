'use client';

import { motion } from 'framer-motion';
import AdminLayout from '@/components/admin/AdminLayout';
import EventsForm from '@/components/admin/forms/EventsForm';

export default function EventsAdminPage() {
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
          <h1 className="text-2xl font-bold text-gray-900">Events Management</h1>
          <p className="mt-1 text-sm text-gray-600">
            Create, schedule, and manage events for MUHASSO.
          </p>
        </motion.div>

        {/* Create Event Form */}
        <motion.div variants={itemVariants}>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Create New Event</h3>
              <p className="mt-1 text-sm text-gray-500">Fill out the form below to create a new event.</p>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <EventsForm />
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="bg-white shadow rounded-lg overflow-hidden"
        >
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Upcoming Events</h3>
              <p className="mt-1 text-sm text-gray-500">All scheduled events for the organization.</p>
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filter Events
            </button>
          </div>

          <div className="bg-gray-50 border-b border-gray-200 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <label htmlFor="event-view" className="block text-sm font-medium text-gray-700 mb-1">View</label>
                <select id="event-view" className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  <option>List View</option>
                  <option>Calendar View</option>
                  <option>Timeline View</option>
                </select>
              </div>
              <div>
                <label htmlFor="event-filter" className="block text-sm font-medium text-gray-700 mb-1">Filter</label>
                <select id="event-filter" className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  <option>All Events</option>
                  <option>Academic Events</option>
                  <option>Social Events</option>
                  <option>Workshops</option>
                  <option>Conferences</option>
                </select>
              </div>
              <div>
                <label htmlFor="event-date" className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
                <select id="event-date" className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  <option>Upcoming</option>
                  <option>Past Events</option>
                  <option>This Month</option>
                  <option>Next Month</option>
                  <option>Custom Range</option>
                </select>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Events Yet</h3>
              <p className="text-gray-600 mb-6">Create your first event using the form above.</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="px-6 py-5 sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold">Need to plan a major event?</h3>
              <p className="mt-1 text-sm text-white text-opacity-90">
                Use our event planning template to organize large-scale MUHASSO events.
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <button className="inline-flex items-center px-4 py-2 border border-white border-opacity-25 rounded-md bg-white bg-opacity-10 text-sm font-medium text-white hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Template
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AdminLayout>
  );
}
