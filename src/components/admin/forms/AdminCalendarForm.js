'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const ASSOCIATIONS = [
  'CASEFETA',
  'MSAMU',
  'Anglican Students Association',
  'Catholic Students Association',
  'Other'
];

export default function AdminCalendarForm({ onEventCreated, events }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    association: '',
    event_date: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { data, error } = await supabase
      .from('calendar_events')
      .insert([form])
      .select();
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setForm({ title: '', description: '', association: '', event_date: '' });
      if (onEventCreated) onEventCreated(data[0]);
    }
  };

  // Fix: Ensure events is always an array to prevent .map error
  const safeEvents = Array.isArray(events) ? events : [];

  const calendarEvents = safeEvents.map(event => ({
    title: event.title,
    start: new Date(event.event_date),
    end: new Date(event.event_date),
    allDay: true,
    resource: event
  }));

  return (
    <div>
      <form
        className="mb-8 p-6 bg-white rounded-lg shadow-lg border border-gray-200"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-6 text-purple-800">Add Calendar Event</h2>
        {error && <div className="text-red-500 mb-2 font-semibold">{error}</div>}
        <div className="mb-5">
          <label className="block mb-2 font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 font-medium text-gray-700">Association</label>
          <select
            name="association"
            value={form.association}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="" disabled>Select association</option>
            {ASSOCIATIONS.map((assoc) => (
              <option key={assoc} value={assoc}>{assoc}</option>
            ))}
          </select>
        </div>
        <div className="mb-5">
          <label className="block mb-2 font-medium text-gray-700">Event Date</label>
          <input
            type="date"
            name="event_date"
            value={form.event_date}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded font-bold hover:from-purple-700 hover:to-blue-700 transition"
        >
          {loading ? 'Saving...' : 'Create Event'}
        </button>
      </form>
      <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-purple-800">Calendar</h2>
        <Calendar
          localizer={localizer}
          events={calendarEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
}