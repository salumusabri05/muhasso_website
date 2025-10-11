'use client';

import { useState, useEffect } from 'react';
import { Calendar, Users, MapPin, Clock, ArrowRight, Stethoscope, BookOpen, Tag } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import Link from 'next/link';

const UpcomingEventsSection = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleEvents, setVisibleEvents] = useState(6);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('published', true)
        .order('start_date', { ascending: true });

      if (error) {
        console.error('Error fetching events:', error);
        setError(error.message || 'Failed to fetch events');
        // Set empty array on error so component still renders
        setEvents([]);
        return;
      }
      
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
      setError(error.message || 'Failed to connect to database');
      // Set empty array on error so component still renders
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  const getEventTypeColor = (type) => {
    const colors = {
      'conference': 'bg-blue-100 text-blue-700',
      'workshop': 'bg-purple-100 text-purple-700',
      'summit': 'bg-green-100 text-green-700',
      'meeting': 'bg-indigo-100 text-indigo-700',
      'assembly': 'bg-pink-100 text-pink-700',
      'webinar': 'bg-orange-100 text-orange-700',
      'seminar': 'bg-teal-100 text-teal-700',
    };
    return colors[type?.toLowerCase()] || 'bg-gray-100 text-gray-700';
  };

  const getEventTypeIcon = (type) => {
    const icons = {
      'conference': Users,
      'workshop': BookOpen,
      'summit': Stethoscope,
      'meeting': Users,
      'assembly': Users,
      'default': Calendar
    };
    return icons[type?.toLowerCase()] || icons.default;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const loadMore = () => {
    setVisibleEvents(prev => prev + 6);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl mb-6 shadow-lg">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for conferences, workshops, and summits that bring together medical students across Uganda
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
                <div className="h-64 bg-gray-300"></div>
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-20 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : events.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
              <Calendar className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {error ? 'Unable to Load Events' : 'No Events Yet'}
            </h3>
            <p className="text-gray-600 max-w-md mx-auto mb-4">
              {error 
                ? `There was a problem connecting to the database: ${error}` 
                : "Check back soon for upcoming events and activities. We're always planning something exciting!"
              }
            </p>
            {error && (
              <button
                onClick={fetchEvents}
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
                Try Again
              </button>
            )}
          </div>
        ) : (
          <>
            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.slice(0, visibleEvents).map((event) => {
                const EventIcon = getEventTypeIcon(event.event_type);
                
                return (
                  <Link
                    key={event.id}
                    href={`/events/${event.id}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-600">
                      {event.featured_image ? (
                        <Image
                          src={event.featured_image}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <EventIcon className="w-24 h-24 text-white opacity-50" />
                        </div>
                      )}
                      
                      {/* Category Badge */}
                      {event.event_type && (
                        <div className="absolute top-4 left-4">
                          <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm bg-white/90 ${getEventTypeColor(event.event_type)}`}>
                            <EventIcon className="w-4 h-4 mr-2" />
                            {event.event_type}
                          </span>
                        </div>
                      )}
                      
                      {/* Status Badge */}
                      {event.status && (
                        <div className="absolute top-4 right-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                            event.status === 'upcoming' 
                              ? 'bg-green-100 text-green-700' 
                              : event.status === 'ongoing'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {event.status}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Date & Location */}
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(event.start_date)}</span>
                        </div>
                        {event.start_time && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{event.start_time.substring(0, 5)}</span>
                          </div>
                        )}
                      </div>

                      {event.location && (
                        <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          <span className="line-clamp-1">{event.location}</span>
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {event.description}
                      </p>

                      {/* Tags */}
                      {event.tags && event.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {event.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium"
                            >
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Registration Badge */}
                      {event.registration_required && event.registration_link && (
                        <div className="mb-4">
                          <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                            ✓ Registration Available
                          </span>
                        </div>
                      )}

                      {/* Read More Button */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                          Learn More
                        </span>
                        <ArrowRight className="w-5 h-5 text-purple-600 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Load More Button */}
            {visibleEvents < events.length && (
              <div className="text-center mt-12">
                <button
                  onClick={loadMore}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Load More Events
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default UpcomingEventsSection;