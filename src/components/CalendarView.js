'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const CalendarView = ({ events }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Navigate to previous month
  const prevMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  // Navigate to next month
  const nextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  // Get days in month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get day of week the month starts on (0 = Sunday, 6 = Saturday)
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Format date as YYYY-MM-DD for comparison
  const formatDateString = (date) => {
    return date.toISOString().split('T')[0];
  };

  // Get events for a specific day
  const getEventsForDay = (day) => {
    if (!events || !Array.isArray(events)) return [];

    const dateToCheck = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    const dateStr = formatDateString(dateToCheck);

    // Filter events that occur on this day (either directly or through recurring)
    return events.filter(event => {
      // Check if it's a direct match for the date
      const eventStart = new Date(event.start);
      const eventStartStr = formatDateString(eventStart);

      // For multi-day events, check if the date falls between start and end
      if (event.end) {
        const eventEnd = new Date(event.end);
        const isWithinRange = 
          dateToCheck >= eventStart && 
          dateToCheck <= eventEnd;
        
        if (isWithinRange) return true;
      }

      // Check for exact date match
      if (eventStartStr === dateStr) return true;

      // Check recurring events
      if (event.recurringDays && event.recurringInterval) {
        const dayOfWeek = dateToCheck.getDay();
        
        // Check if the event recurs on this day of the week
        if (event.recurringDays.includes(dayOfWeek)) {
          // Weekly recurrence
          if (event.recurringInterval === 'weekly') {
            return true;
          }
          
          // Biweekly recurrence (every 2 weeks)
          if (event.recurringInterval === 'biweekly') {
            // Calculate weeks difference between event start and date to check
            const msPerWeek = 7 * 24 * 60 * 60 * 1000;
            const weekDiff = Math.round((dateToCheck - eventStart) / msPerWeek);
            return weekDiff % 2 === 0;
          }
          
          // Monthly recurrence
          if (event.recurringInterval === 'monthly') {
            // Same day of the month
            return eventStart.getDate() === dateToCheck.getDate();
          }
        }
      }
      
      return false;
    });
  };

  // Render calendar grid
  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
    const calendarDays = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(
        <div key={`empty-${i}`} className="h-24 bg-gray-100/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"></div>
      );
    }
    
    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isToday = formatDateString(date) === formatDateString(new Date());
      const isSelected = formatDateString(date) === formatDateString(selectedDate);
      const dayEvents = getEventsForDay(day);
      
      calendarDays.push(
        <div 
          key={`day-${day}`}
          onClick={() => setSelectedDate(date)}
          className={`h-24 p-1 border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer
            ${isToday ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-white dark:bg-gray-800'} 
            ${isSelected ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''}
            hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors`}
        >
          <div className="flex justify-between items-center mb-1">
            <span className={`text-sm font-medium ${
              isToday ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
            }`}>
              {day}
            </span>
            {dayEvents.length > 0 && (
              <span className="text-xs px-1.5 py-0.5 bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 rounded-full">
                {dayEvents.length}
              </span>
            )}
          </div>
          <div className="space-y-1">
            {dayEvents.slice(0, 2).map((event, idx) => (
              <div 
                key={idx}
                className="text-xs p-1 rounded truncate bg-blue-100 dark:bg-blue-800/60 text-blue-700 dark:text-blue-200"
                title={event.title}
              >
                {event.title}
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div className="text-xs text-gray-500 dark:text-gray-400 pl-1">
                {dayEvents.length - 2} more
              </div>
            )}
          </div>
        </div>
      );
    }
    
    return calendarDays;
  };

  // Render daily events
  const renderDailyEvents = () => {
    const eventsForSelectedDate = getEventsForDay(selectedDate.getDate());
    
    if (eventsForSelectedDate.length === 0) {
      return (
        <div className="p-4 text-center text-gray-500 dark:text-gray-400">
          No events scheduled for this day
        </div>
      );
    }
    
    return (
      <div className="space-y-2 p-2">
        {eventsForSelectedDate.map((event, idx) => {
          // Format time
          let timeStr = 'All day';
          if (!event.allDay) {
            const startTime = new Date(event.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const endTime = event.end ? new Date(event.end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
            timeStr = endTime ? `${startTime} - ${endTime}` : startTime;
          }
          
          return (
            <div 
              key={idx} 
              className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-100 dark:border-gray-700"
            >
              <h4 className="font-semibold text-gray-800 dark:text-white">{event.title}</h4>
              <div className="text-sm text-gray-600 dark:text-gray-300">{timeStr}</div>
              {event.location && (
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <span className="font-medium">Location:</span> {event.location}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
      {/* Calendar Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <div className="flex space-x-2">
          <button 
            onClick={prevMonth}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>
          <button 
            onClick={nextMonth}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>
      
      {/* Calendar Grid */}
      <div className="p-4">
        {/* Day headers */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {DAYS_OF_WEEK.map(day => (
            <div key={day} className="text-center font-medium text-sm text-gray-600 dark:text-gray-300 py-1">
              {day.substring(0, 3)}
            </div>
          ))}
        </div>
        
        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-2">
          {renderCalendar()}
        </div>
      </div>
      
      {/* Daily Events */}
      <div className="mt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="p-3 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
          <h3 className="font-medium text-gray-700 dark:text-gray-300">
            Events for {selectedDate.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </h3>
        </div>
        {renderDailyEvents()}
      </div>
    </div>
  );
};

export default CalendarView;
