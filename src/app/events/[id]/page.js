'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Tag, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Stethoscope,
  BookOpen
} from 'lucide-react';

export default function EventDetailPage() {
  const params = useParams();
  const [event, setEvent] = useState(null);
  const [relatedEvents, setRelatedEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEvent = async () => {
    try {
      setLoading(true);
      
      // Fetch the main event
      const { data: eventData, error: eventError } = await supabase
        .from('events')
        .select('*')
        .eq('id', params.id)
        .eq('published', true)
        .single();

      if (eventError) throw eventError;
      setEvent(eventData);

      // Fetch related events (same type, excluding current)
      if (eventData) {
        const { data: relatedData, error: relatedError } = await supabase
          .from('events')
          .select('*')
          .eq('event_type', eventData.event_type)
          .eq('published', true)
          .neq('id', params.id)
          .limit(3);

        if (!relatedError) {
          setRelatedEvents(relatedData || []);
        }
      }
    } catch (error) {
      console.error('Error fetching event:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchEvent();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const getEventTypeIcon = (type) => {
    const icons = {
      'conference': Users,
      'workshop': BookOpen,
      'summit': Stethoscope,
      'meeting': Users,
      'assembly': Users,
    };
    return icons[type?.toLowerCase()] || Calendar;
  };

  const getEventTypeColor = (type) => {
    const colors = {
      'conference': 'bg-blue-100 text-blue-700',
      'workshop': 'bg-purple-100 text-purple-700',
      'summit': 'bg-green-100 text-green-700',
      'meeting': 'bg-indigo-100 text-indigo-700',
      'assembly': 'bg-pink-100 text-pink-700',
    };
    return colors[type?.toLowerCase()] || 'bg-gray-100 text-gray-700';
  };

  const shareOnSocial = (platform) => {
    const url = window.location.href;
    const text = event?.title || '';
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
                <div className="h-96 bg-gray-300"></div>
                <div className="p-8 space-y-6">
                  <div className="h-10 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!event) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center py-20">
              <Calendar className="w-24 h-24 text-gray-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Not Found</h2>
              <p className="text-gray-600 mb-8">The event you&apos;re looking for doesn&apos;t exist or has been removed.</p>
              <Link 
                href="/"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const EventIcon = getEventTypeIcon(event.event_type);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="max-w-4xl mx-auto mb-8">
            <Link 
              href="/"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Events
            </Link>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg">
            {/* Featured Image */}
            <div className="relative h-96 bg-gradient-to-br from-purple-600 to-indigo-600">
              {event.featured_image ? (
                <Image
                  src={event.featured_image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <EventIcon className="w-32 h-32 text-white opacity-50" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              {/* Category & Status Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {event.event_type && (
                  <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${getEventTypeColor(event.event_type)}`}>
                    <EventIcon className="w-4 h-4 mr-2" />
                    {event.event_type}
                  </span>
                )}
                {event.status && (
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                    event.status === 'upcoming' 
                      ? 'bg-green-100 text-green-700' 
                      : event.status === 'ongoing'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {event.status}
                  </span>
                )}
                {event.registration_required && event.registration_link && (
                  <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                    ✓ Registration Available
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {event.title}
              </h1>

              {/* Meta Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Calendar className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Date</p>
                    <p className="text-sm text-gray-900 font-semibold">
                      {formatDate(event.start_date)}
                    </p>
                  </div>
                </div>

                {event.start_time && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Clock className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium mb-1">Time</p>
                      <p className="text-sm text-gray-900 font-semibold">
                        {event.start_time.substring(0, 5)}
                        {event.end_time && ` - ${event.end_time.substring(0, 5)}`}
                      </p>
                    </div>
                  </div>
                )}

                {event.location && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium mb-1">Location</p>
                      <p className="text-sm text-gray-900 font-semibold">{event.location}</p>
                    </div>
                  </div>
                )}

                {event.max_participants && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium mb-1">Capacity</p>
                      <p className="text-sm text-gray-900 font-semibold">
                        {event.max_participants} participants
                        {event.current_participants && ` (${event.current_participants} registered)`}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {event.description}
                </p>
              </div>

              {/* Tags */}
              {event.tags && event.tags.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Tag className="w-5 h-5" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-100 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Registration Link */}
              {event.registration_link && event.registration_required && (
                <div className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Register for this Event</h3>
                  <p className="text-gray-600 mb-4">
                    {event.max_participants && event.current_participants
                      ? `${event.max_participants - event.current_participants} spots remaining out of ${event.max_participants}`
                      : 'Secure your spot now! Registration is available.'}
                  </p>
                  <a
                    href={event.registration_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    Register Now
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </div>
              )}

              {/* Share Section */}
              <div className="pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share this Event
                  </h3>
                  <div className="flex gap-3">
                    <button
                      onClick={() => shareOnSocial('facebook')}
                      className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => shareOnSocial('twitter')}
                      className="p-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => shareOnSocial('linkedin')}
                      className="p-3 bg-blue-700 hover:bg-blue-800 text-white rounded-full transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Events */}
          {relatedEvents.length > 0 && (
            <div className="max-w-4xl mx-auto mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedEvents.map((relatedEvent) => {
                  const RelatedIcon = getEventTypeIcon(relatedEvent.event_type);
                  
                  return (
                    <Link
                      key={relatedEvent.id}
                      href={`/events/${relatedEvent.id}`}
                      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="relative h-48 bg-gradient-to-br from-purple-600 to-indigo-600">
                        {relatedEvent.featured_image ? (
                          <Image
                            src={relatedEvent.featured_image}
                            alt={relatedEvent.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <RelatedIcon className="w-16 h-16 text-white opacity-50" />
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(relatedEvent.start_date)}</span>
                        </div>
                        <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-purple-600 transition-colors mb-2">
                          {relatedEvent.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                          {relatedEvent.description}
                        </p>
                        <div className="flex items-center text-purple-600 text-sm font-medium">
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
