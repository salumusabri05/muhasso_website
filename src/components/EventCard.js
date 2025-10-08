'use client';

import Image from 'next/image';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const EventCard = ({ event }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 w-full">
        {event.image ? (
          <Image 
            src={event.image} 
            alt={event.title}
            fill
            style={{objectFit: 'cover'}} 
            className="transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <Calendar className="h-12 w-12 text-gray-400 dark:text-gray-500" />
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{event.title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Calendar className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
            <span>{event.date}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Clock className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <MapPin className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {event.description.length > 150 
            ? `${event.description.substring(0, 150)}...` 
            : event.description}
        </p>
        
        <div className="mt-4">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 text-sm font-medium">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
