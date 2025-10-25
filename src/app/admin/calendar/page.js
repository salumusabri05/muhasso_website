'use client';

import { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import AdminCalendarForm from '@/components/admin/forms/AdminCalendarForm';
import { supabase } from '@/lib/supabase';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export default function CalendarPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch events from Supabase
  const fetchEvents = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('calendar_events')
      .select('*')
      .order('event_date', { ascending: true });
    if (error) {
      setEvents([]);
    } else {
      setEvents(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Delete event from Supabase
  const handleDelete = async (id) => {
    await supabase.from('calendar_events').delete().eq('id', id);
    fetchEvents();
  };

  // Prepare events for react-big-calendar
  const calendarEvents = Array.isArray(events)
    ? events.map(event => ({
        title: `${event.title} (${event.association})`,
        start: new Date(event.event_date),
        end: new Date(event.event_date),
        allDay: true,
        resource: event
      }))
    : [];

  // Custom event style for better visibility
  const eventStyleGetter = () => ({
    style: {
      backgroundColor: '#7c3aed',
      color: 'white',
      borderRadius: '6px',
      border: 'none',
      fontWeight: 'bold',
      fontSize: '1rem',
      padding: '4px'
    }
  });

  return (
    <AdminLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4 text-purple-800">Calendar</h1>
        <p className="text-gray-600 mb-8">
          Manage events and schedules for associations.
        </p>
        <AdminCalendarForm onEventCreated={fetchEvents} events={events} />
        <div className="rounded-lg border bg-white p-6 shadow mt-8">
          <h2 className="text-lg font-semibold mb-4 text-blue-800">Calendar View</h2>
          <div className="mb-8">
            <Calendar
              localizer={localizer}
              events={calendarEvents}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500, backgroundColor: '#f3f4f6', fontSize: '1rem' }}
              eventPropGetter={eventStyleGetter}
              popup
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}