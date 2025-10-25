'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AdminLayout from '@/components/admin/AdminLayout';
import AdminCalendarForm from '@/components/admin/forms/AdminCalendarForm';
import { supabase } from '@/lib/supabase';

export default function CalendarPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('calendar_events')
      .select('*')
      .order('event_date', { ascending: true });
    setEvents(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    await supabase.from('calendar_events').delete().eq('id', id);
    fetchEvents();
  };

  return (
    <AdminLayout>
      <motion.div
        className="p-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
      >
        <motion.h1 className="text-2xl font-bold mb-4">Calendar</motion.h1>
        <motion.p className="text-gray-600 mb-8">
          Manage events and schedules for associations.
        </motion.p>
        <AdminCalendarForm onEventCreated={fetchEvents} />
        <div className="rounded-lg border bg-white p-6 shadow">
          <h2 className="text-lg font-semibold mb-4 text-blue-800">Upcoming Events</h2>
          {loading ? (
            <div className="text-gray-500 py-12 text-center">Loading events...</div>
          ) : events.length === 0 ? (
            <div className="text-gray-500 py-12 text-center">No events found.</div>
          ) : (
            <ul>
              {events.map(event => (
                <li key={event.id} className="mb-6 border-b pb-4 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-blue-700 text-lg">{event.title}</div>
                    <div className="text-sm text-gray-700">{event.event_date}</div>
                    <div className="text-sm text-indigo-700">{event.association}</div>
                    <div className="text-gray-900">{event.description}</div>
                  </div>
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="ml-4 text-red-600 hover:underline font-semibold"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    </AdminLayout>
  );
}