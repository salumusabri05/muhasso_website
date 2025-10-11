'use client';

import { useState } from 'react';
import { Clock, Users, FileText } from 'lucide-react';

const NewsCard = ({ news, index = 0, gradient = "from-blue-600 to-blue-800" }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image/Card Header */}
      <div className={`h-64 bg-gradient-to-br ${gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
        {/* If featured image exists and hasn't errored, show it as background */}
        {news.featured_image && !imageError && (
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${news.featured_image})` }}
            onError={() => setImageError(true)}
          />
        )}

        {/* Category Badge */}
        <div className="flex justify-between items-start relative z-10">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
            {news.category || 'News'}
          </span>
          {index === 0 && (
            <div className="bg-blue-600 p-2 rounded-full">
              <Clock className="w-5 h-5 text-white" />
            </div>
          )}
        </div>

        {/* Title Overlay */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 relative z-10">
          <h3 className="font-bold text-gray-900 text-lg leading-tight">
            {news.title.split(':')[0]}
          </h3>
          {news.title.includes(':') && (
            <p className="text-gray-700 text-sm mt-1">
              {news.title.split(':').slice(1).join(':')}
            </p>
          )}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 opacity-20 z-0">
          {index % 3 === 0 && <Users className="w-8 h-8 text-white" />}
          {index % 3 !== 0 && <FileText className="w-8 h-8 text-white" />}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-gray-900 text-xl mb-3 line-clamp-2">
          {news.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {news.excerpt || news.content?.substring(0, 150) + '...' || 'No description available.'}
        </p>
        
        {/* Tags */}
        {news.tags && news.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {news.tags.slice(0, 3).map((tag, i) => (
              <span 
                key={i}
                className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Read More Button */}
        <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200">
          Read More
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
