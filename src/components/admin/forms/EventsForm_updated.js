'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

const EventsForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    event_type: 'Workshop',
    description: '',
    location: '',
    start_date: '',
    end_date: '',
    start_time: '',
    end_time: '',
    organizer: '',
    contact_email: '',
    contact_phone: '',
    registration_required: false,
    registration_link: '',
    max_participants: '',
    tags: '',
    featuredImage: null,
    published: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const [imagePreview, setImagePreview] = useState(null);
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };
  
  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, featuredImage: file });
      
      // Create image preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      let featuredImageUrl = null;
      
      // Upload image to Supabase Storage if provided
      if (formData.featuredImage) {
        const fileExt = formData.featuredImage.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('event-images')
          .upload(filePath, formData.featuredImage);
        
        if (uploadError) {
          throw new Error(`Image upload failed: ${uploadError.message}`);
        }
        
        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('event-images')
          .getPublicUrl(filePath);
        
        featuredImageUrl = publicUrl;
      }
      
      // Process tags - convert comma-separated string to array
      const tagsArray = formData.tags 
        ? formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
        : [];
      
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      
      // Combine date and time for database
      const startDateTime = formData.start_time 
        ? `${formData.start_date}T${formData.start_time}:00` 
        : `${formData.start_date}T00:00:00`;
      
      const endDateTime = formData.end_date && formData.end_time
        ? `${formData.end_date}T${formData.end_time}:00`
        : formData.end_date
        ? `${formData.end_date}T23:59:59`
        : startDateTime;
      
      // Insert event data into Supabase
      const { data, error } = await supabase
        .from('events')
        .insert([
          {
            title: formData.title,
            event_type: formData.event_type,
            description: formData.description,
            location: formData.location,
            start_date: startDateTime,
            end_date: endDateTime,
            start_time: formData.start_time || null,
            end_time: formData.end_time || null,
            organizer: formData.organizer,
            contact_email: formData.contact_email || null,
            contact_phone: formData.contact_phone || null,
            featured_image: featuredImageUrl,
            registration_required: formData.registration_required,
            registration_link: formData.registration_link || null,
            max_participants: formData.max_participants ? parseInt(formData.max_participants) : null,
            tags: tagsArray,
            published: formData.published,
            created_by: user?.id || null,
            updated_by: user?.id || null
          }
        ])
        .select();
      
      if (error) {
        throw new Error(`Database error: ${error.message}`);
      }
      
      // Success!
      setToastType('success');
      setToastMessage('✅ Event created successfully!');
      setShowToast(true);
      
      // Reset form
      setFormData({
        title: '',
        event_type: 'Workshop',
        description: '',
        location: '',
        start_date: '',
        end_date: '',
        start_time: '',
        end_time: '',
        organizer: '',
        contact_email: '',
        contact_phone: '',
        registration_required: false,
        registration_link: '',
        max_participants: '',
        tags: '',
        featuredImage: null,
        published: false
      });
      setImagePreview(null);
      
      // Hide toast after 3 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting event:', error);
      setToastType('error');
      setToastMessage(`❌ Error: ${error.message}`);
      setShowToast(true);
      
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <>
      <motion.form 
        className="bg-white rounded-lg shadow-md p-6 mx-auto max-w-3xl"
        onSubmit={handleSubmit}
        initial="hidden"
        animate="visible"
        variants={formVariants}
      >
        <motion.h2 
          className="text-2xl font-semibold text-gray-800 mb-6" 
          variants={itemVariants}
        >
          Create New Event
        </motion.h2>
        
        {/* Event Title */}
        <motion.div className="mb-5" variants={itemVariants}>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Event Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
            placeholder="Enter event title"
          />
        </motion.div>
        
        {/* Event Type */}
        <motion.div className="mb-5" variants={itemVariants}>
          <label htmlFor="event_type" className="block text-sm font-medium text-gray-700 mb-1">
            Event Type *
          </label>
          <select
            id="event_type"
            name="event_type"
            required
            value={formData.event_type}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
          >
            <option value="Workshop">Workshop</option>
            <option value="Seminar">Seminar</option>
            <option value="Conference">Conference</option>
            <option value="Social">Social</option>
            <option value="Sports">Sports</option>
            <option value="Cultural">Cultural</option>
            <option value="Academic">Academic</option>
            <option value="Other">Other</option>
          </select>
        </motion.div>

        {/* Date and Time Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          {/* Start Date */}
          <motion.div variants={itemVariants}>
            <label htmlFor="start_date" className="block text-sm font-medium text-gray-700 mb-1">
              Start Date *
            </label>
            <input
              type="date"
              id="start_date"
              name="start_date"
              required
              value={formData.start_date}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
            />
          </motion.div>

          {/* Start Time */}
          <motion.div variants={itemVariants}>
            <label htmlFor="start_time" className="block text-sm font-medium text-gray-700 mb-1">
              Start Time
            </label>
            <input
              type="time"
              id="start_time"
              name="start_time"
              value={formData.start_time}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
            />
          </motion.div>

          {/* End Date */}
          <motion.div variants={itemVariants}>
            <label htmlFor="end_date" className="block text-sm font-medium text-gray-700 mb-1">
              End Date *
            </label>
            <input
              type="date"
              id="end_date"
              name="end_date"
              required
              value={formData.end_date}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
            />
          </motion.div>

          {/* End Time */}
          <motion.div variants={itemVariants}>
            <label htmlFor="end_time" className="block text-sm font-medium text-gray-700 mb-1">
              End Time
            </label>
            <input
              type="time"
              id="end_time"
              name="end_time"
              value={formData.end_time}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
            />
          </motion.div>
        </div>
        
        {/* Location */}
        <motion.div className="mb-5" variants={itemVariants}>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location *
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            value={formData.location}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
            placeholder="Enter event location"
          />
        </motion.div>
        
        {/* Description */}
        <motion.div className="mb-5" variants={itemVariants}>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description *
          </label>
          <textarea
            id="description"
            name="description"
            required
            value={formData.description}
            onChange={handleInputChange}
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
            placeholder="Describe the event..."
          />
        </motion.div>
        
        {/* Organizer */}
        <motion.div className="mb-5" variants={itemVariants}>
          <label htmlFor="organizer" className="block text-sm font-medium text-gray-700 mb-1">
            Organizer *
          </label>
          <input
            type="text"
            id="organizer"
            name="organizer"
            required
            value={formData.organizer}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
            placeholder="Enter organizer name"
          />
        </motion.div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <motion.div variants={itemVariants}>
            <label htmlFor="contact_email" className="block text-sm font-medium text-gray-700 mb-1">
              Contact Email
            </label>
            <input
              type="email"
              id="contact_email"
              name="contact_email"
              value={formData.contact_email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
              placeholder="contact@example.com"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="contact_phone" className="block text-sm font-medium text-gray-700 mb-1">
              Contact Phone
            </label>
            <input
              type="tel"
              id="contact_phone"
              name="contact_phone"
              value={formData.contact_phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
              placeholder="+255..."
            />
          </motion.div>
        </div>

        {/* Registration Details */}
        <motion.div className="mb-5 space-y-4" variants={itemVariants}>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="registration_required"
              name="registration_required"
              checked={formData.registration_required}
              onChange={handleInputChange}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="registration_required" className="ml-2 block text-sm text-gray-700">
              Registration Required
            </label>
          </div>

          {formData.registration_required && (
            <>
              <div>
                <label htmlFor="registration_link" className="block text-sm font-medium text-gray-700 mb-1">
                  Registration Link
                </label>
                <input
                  type="url"
                  id="registration_link"
                  name="registration_link"
                  value={formData.registration_link}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label htmlFor="max_participants" className="block text-sm font-medium text-gray-700 mb-1">
                  Maximum Participants
                </label>
                <input
                  type="number"
                  id="max_participants"
                  name="max_participants"
                  value={formData.max_participants}
                  onChange={handleInputChange}
                  min="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
                  placeholder="Enter max number"
                />
              </div>
            </>
          )}
        </motion.div>

        {/* Tags */}
        <motion.div className="mb-5" variants={itemVariants}>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
            Tags
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
            placeholder="workshop, networking, technology"
          />
          <p className="mt-1 text-xs text-gray-500">Separate tags with commas</p>
        </motion.div>
        
        {/* Image Upload */}
        <motion.div className="mb-5" variants={itemVariants}>
          <label htmlFor="featuredImage" className="block text-sm font-medium text-gray-700 mb-1">
            Event Image
          </label>
          <input
            type="file"
            id="featuredImage"
            name="featuredImage"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
          />
          {imagePreview && (
            <div className="mt-2 relative h-40 w-full">
              <Image 
                src={imagePreview} 
                alt="Image preview" 
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
          )}
        </motion.div>
        
        {/* Submit Button */}
        <motion.div className="space-y-3" variants={itemVariants}>
          {/* Publish checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="published"
              name="published"
              checked={formData.published}
              onChange={handleInputChange}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="published" className="ml-2 block text-sm text-gray-700">
              Publish immediately (uncheck to save as draft)
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-medium py-2.5 px-4 rounded-lg shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </div>
            ) : (
              formData.published ? 'Publish Event' : 'Save as Draft'
            )}
          </button>
        </motion.div>
      </motion.form>
      
      {/* Toast notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-4 right-4 ${toastType === 'success' ? 'bg-green-600' : 'bg-red-600'} text-white px-6 py-3 rounded-lg shadow-lg flex items-center z-50`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            {toastType === 'success' ? (
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            ) : (
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            )}
          </svg>
          <span>{toastMessage}</span>
        </motion.div>
      )}
    </>
  );
};

export default EventsForm;
