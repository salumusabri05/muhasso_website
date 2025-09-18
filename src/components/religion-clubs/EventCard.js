'use client';

import React from 'react';
import { Calendar } from 'lucide-react';
import Link from 'next/link';

const EventCard = ({ event }) => {
  const { title, date, time, venue, description, type } = event;
  
  const getBgColor = () => {
    switch (type) {
      case 'prayer':
        return 'bg-blue-50';
      case 'meeting':
        return 'bg-green-50';
      case 'social':
        return 'bg-purple-50';
      case 'service':
        return 'bg-amber-50';
      default:
        return 'bg-gray-50';
    }
  };
  
  const getTextColor = () => {
    switch (type) {
      case 'prayer':
        return 'text-blue-700';
      case 'meeting':
        return 'text-green-700';
      case 'social':
        return 'text-purple-700';
      case 'service':
        return 'text-amber-700';
      default:
        return 'text-gray-700';
    }
  };
  
  const getBorderColor = () => {
    switch (type) {
      case 'prayer':
        return 'border-blue-200';
      case 'meeting':
        return 'border-green-200';
      case 'social':
        return 'border-purple-200';
      case 'service':
        return 'border-amber-200';
      default:
        return 'border-gray-200';
    }
  };
  
  return (
    <div className={`border rounded-lg overflow-hidden ${getBgColor()} ${getBorderColor()}`}>
      <div className="p-4">
        <div className="flex items-start">
          <div className="shrink-0 mr-4">
            <Calendar className={`w-8 h-8 ${getTextColor()}`} />
          </div>
          <div>
            <h3 className={`font-medium text-lg ${getTextColor()}`}>{title}</h3>
            <div className="mt-2 space-y-1">
              <p className="text-gray-700 text-sm">
                <span className="font-medium">Date:</span> {date}
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-medium">Time:</span> {time}
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-medium">Venue:</span> {venue}
              </p>
            </div>
            {description && (
              <p className="mt-3 text-gray-600 text-sm">{description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
