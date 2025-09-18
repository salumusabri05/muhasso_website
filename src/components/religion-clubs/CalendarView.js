'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import EventCard from './EventCard';

const CalendarView = ({ events }) => {
  const currentDate = new Date();
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };
  
  const daysInMonth = getDaysInMonth(selectedYear, selectedMonth);
  const firstDayOfMonth = getFirstDayOfMonth(selectedYear, selectedMonth);
  
  const goToPreviousMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };
  
  const goToNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };
  
  // Filter events for the selected month and year
  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getMonth() === selectedMonth && eventDate.getFullYear() === selectedYear;
  });

  // Create days array
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
  // Create calendar cells including empty cells for days from previous/next month
  const calendarCells = [];
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarCells.push(null);
  }
  
  // Add cells for days in the current month
  days.forEach(day => {
    calendarCells.push(day);
  });
  
  // Group events by day
  const eventsByDay = {};
  filteredEvents.forEach(event => {
    const eventDate = new Date(event.date);
    const day = eventDate.getDate();
    if (!eventsByDay[day]) {
      eventsByDay[day] = [];
    }
    eventsByDay[day].push(event);
  });
  
  return (
    <div className="w-full">
      {/* Calendar Navigation */}
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={goToPreviousMonth}
          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          <span>Previous</span>
        </button>
        
        <h3 className="text-xl font-medium text-blue-900">
          {months[selectedMonth]} {selectedYear}
        </h3>
        
        <button 
          onClick={goToNextMonth}
          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
          <span>Next</span>
          <ChevronRight className="w-5 h-5 ml-1" />
        </button>
      </div>
      
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 mb-8">
        {/* Week day headers */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-medium text-gray-700 py-1">
            {day}
          </div>
        ))}
        
        {/* Calendar cells */}
        {calendarCells.map((day, index) => (
          <div 
            key={index}
            className={`
              border rounded-lg p-2 h-20 overflow-hidden
              ${day ? 'bg-white' : 'bg-gray-50'}
              ${day && eventsByDay[day]?.length ? 'border-blue-300' : 'border-gray-200'}
              ${day === new Date().getDate() && 
                selectedMonth === new Date().getMonth() && 
                selectedYear === new Date().getFullYear() ? 
                'ring-2 ring-blue-500' : ''}
            `}
          >
            {day && (
              <>
                <div className="text-sm font-medium text-gray-700 mb-1">
                  {day}
                </div>
                {eventsByDay[day]?.slice(0, 2).map((event, i) => (
                  <div 
                    key={i} 
                    className={`text-xs px-1 py-0.5 mb-0.5 rounded truncate
                      ${event.type === 'prayer' ? 'bg-blue-100 text-blue-700' : 
                      event.type === 'meeting' ? 'bg-green-100 text-green-700' :
                      event.type === 'social' ? 'bg-purple-100 text-purple-700' :
                      event.type === 'service' ? 'bg-amber-100 text-amber-700' : 
                      'bg-gray-100 text-gray-700'}`}
                  >
                    {event.title}
                  </div>
                ))}
                {eventsByDay[day]?.length > 2 && (
                  <div className="text-xs text-gray-600">
                    +{eventsByDay[day].length - 2} more
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
      
      {/* Events List for Selected Month */}
      <div className="mt-6">
        <h3 className="text-lg font-medium text-blue-900 mb-4">
          Upcoming Events ({filteredEvents.length})
        </h3>
        
        {filteredEvents.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No events scheduled for this month.</p>
        ) : (
          <div className="space-y-4">
            {filteredEvents
              .sort((a, b) => new Date(a.date) - new Date(b.date))
              .map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarView;
