'use client';

import { useState, useEffect } from 'react';
import { Clock, Users, FileText, ChevronDown, ArrowRight, Calendar, Tag } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import Link from 'next/link';

const LatestNews = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Gradient options for cards
    const gradients = [
      "from-green-400 to-blue-500",
      "from-purple-400 via-pink-400 to-blue-400",
      "from-blue-600 to-blue-800",
      "from-indigo-500 to-purple-600",
      "from-pink-500 to-rose-600",
      "from-cyan-500 to-blue-600"
    ];

    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data, error } = await supabase
          .from('news')
          .select('*')
          .eq('published', true)
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching news:', error);
          setError(error.message || 'Failed to fetch news');
          setNewsItems([]);
          return;
        }

        // Map data to component format with gradients
        const formattedNews = data.map((item, index) => ({
          id: item.id,
          title: item.title,
          description: item.excerpt || item.content?.substring(0, 150) + '...',
          image: item.featured_image,
          category: item.category || 'News',
          gradient: gradients[index % gradients.length],
          created_at: item.created_at,
          tags: item.tags || []
        }));

        setNewsItems(formattedNews);
      } catch (error) {
        console.error('Error fetching news:', error);
        setError(error.message || 'Failed to connect to database');
        setNewsItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Modern Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              Latest Updates
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Articles</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay informed with the latest news, updates, and stories from MUHASSO
          </p>
        </div>

        {/* News Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg animate-pulse">
                <div className="h-64 bg-gray-300"></div>
                <div className="p-6 space-y-3">
                  <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                  <div className="h-10 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        ) : newsItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl shadow-lg">
            <FileText className="mx-auto h-20 w-20 text-gray-400 mb-4" />
            <p className="text-gray-600 text-xl font-semibold mb-2">
              {error ? 'Unable to Load News' : 'No news available at the moment.'}
            </p>
            <p className="text-gray-400 text-sm mt-2 mb-4">
              {error 
                ? `There was a problem connecting to the database: ${error}` 
                : 'Check back soon for updates!'
              }
            </p>
            {error && (
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
                Try Again
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {newsItems.slice(0, visibleCount).map((item, index) => (
                <div 
                  key={item.id} 
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                        <FileText className="w-16 h-16 text-white opacity-50" />
                      </div>
                    )}
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-gray-900 shadow-lg">
                        {item.category}
                      </span>
                    </div>

                    {/* Date Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-blue-600 text-white p-2 rounded-full shadow-lg">
                        <Calendar className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <Clock className="w-4 h-4" />
                      <span>{formatDate(item.created_at)}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-gray-900 text-xl mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.slice(0, 3).map((tag, i) => (
                          <span 
                            key={i}
                            className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {/* Read More Button */}
                    <Link href={`/news/${item.id}`}>
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < newsItems.length && (
              <div className="flex justify-center">
                <button 
                  onClick={loadMore}
                  className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-10 rounded-full border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group"
                >
                  Load More Articles
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LatestNews;
