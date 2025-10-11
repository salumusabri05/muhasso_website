'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const EventCard = ({ event }) => {
  const [imageError, setImageError] = useState(false);

  // Format date if it's a string
  const formatDate = (dateStr) => {
    if (!dateStr) return 'Date TBA';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  // Format time
  const formatTime = (timeStr) => {
    if (!timeStr) return 'Time TBA';
    return timeStr;
  };

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 w-full">
        {event.featured_image && !imageError ? (
          <Image 
            src={event.featured_image} 
            alt={event.title}
            fill
            style={{objectFit: 'cover'}} 
            className="transition-transform duration-300 hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Calendar className="h-12 w-12 text-white" />
          </div>
        )}
        
        {/* Event Status Badge */}
        {event.status && (
          <div className="absolute top-3 right-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              event.status === 'upcoming' ? 'bg-green-500 text-white' :
              event.status === 'ongoing' ? 'bg-blue-500 text-white' :
              'bg-gray-500 text-white'
            }`}>
              {event.status.toUpperCase()}
            </span>
          </div>
        )}

        {/* Registration Badge */}
        {event.registration_required && event.registration_open && (
          <div className="absolute top-3 left-3">
            <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
              Registration Open
            </span>
          </div>
        )}
      </div>
      
      <div className="p-5">
        {/* Event Type */}
        {event.event_type && (
          <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full mb-2">
            {event.event_type}
          </span>
        )}

        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {event.title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Calendar className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0" />
            <span>{formatDate(event.event_date || event.date)}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Clock className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0" />
            <span>{formatTime(event.event_time || event.time)}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <MapPin className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0" />
            <span className="line-clamp-1">{event.location || 'Location TBA'}</span>
          </div>

          {event.max_attendees && (
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <Users className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0" />
              <span>Max {event.max_attendees} attendees</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
          {event.description || 'Event details coming soon...'}
        </p>

        {/* Tags */}
        {event.tags && event.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {event.tags.slice(0, 3).map((tag, i) => (
              <span 
                key={i}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="mt-4 flex gap-2">
          <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 text-sm font-medium">
            View Details
          </button>
          {event.registration_required && event.registration_open && (
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300 text-sm font-medium">
              Register
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;

