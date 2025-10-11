'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

const PostersForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Event',
    event_date: '',
    expiry_date: '',
    tags: '',
    posterImage: null,
    is_featured: false,
    is_active: true
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
      setFormData({ ...formData, posterImage: file });
      
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
      let posterImageUrl = null;
      let thumbnailUrl = null;
      
      // Upload poster image to Supabase Storage
      if (formData.posterImage) {
        const fileExt = formData.posterImage.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('posters')
          .upload(filePath, formData.posterImage);
        
        if (uploadError) {
          throw new Error(`Image upload failed: ${uploadError.message}`);
        }
        
        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('posters')
          .getPublicUrl(filePath);
        
        posterImageUrl = publicUrl;
        thumbnailUrl = publicUrl; // In production, you might want to create an actual thumbnail
      }
      
      // Process tags - convert comma-separated string to array
      const tagsArray = formData.tags 
        ? formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
        : [];
      
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      
      // Insert poster data into Supabase
      const { data, error } = await supabase
        .from('posters')
        .insert([
          {
            title: formData.title,
            description: formData.description,
            category: formData.category,
            poster_image: posterImageUrl,
            thumbnail_image: thumbnailUrl,
            event_date: formData.event_date || null,
            expiry_date: formData.expiry_date || null,
            is_active: formData.is_active,
            is_featured: formData.is_featured,
            tags: tagsArray,
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
      setToastMessage('✅ Poster created successfully!');
      setShowToast(true);
      
      // Reset form
      setFormData({
        title: '',
        description: '',
        category: 'Event',
        event_date: '',
        expiry_date: '',
        tags: '',
        posterImage: null,
        is_featured: false,
        is_active: true
      });
      setImagePreview(null);
      
      // Hide toast after 3 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting poster:', error);
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
          Upload New Poster
        </motion.h2>
        
        {/* Title */}
        <motion.div className="mb-5" variants={itemVariants}>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Poster Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
            placeholder="Enter poster title"
          />
        </motion.div>
        
        {/* Description */}
        <motion.div className="mb-5" variants={itemVariants}>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
            placeholder="Describe the poster (optional)"
          />
        </motion.div>

        {/* Category */}
        <motion.div className="mb-5" variants={itemVariants}>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category *
          </label>
          <select
            id="category"
            name="category"
            required
            value={formData.category}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
          >
            <option value="Event">Event</option>
            <option value="Campaign">Campaign</option>
            <option value="Awareness">Awareness</option>
            <option value="Recruitment">Recruitment</option>
            <option value="General">General</option>
          </select>
        </motion.div>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          {/* Event Date */}
          <motion.div variants={itemVariants}>
            <label htmlFor="event_date" className="block text-sm font-medium text-gray-700 mb-1">
              Event Date (Optional)
            </label>
            <input
              type="date"
              id="event_date"
              name="event_date"
              value={formData.event_date}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
            />
          </motion.div>

          {/* Expiry Date */}
          <motion.div variants={itemVariants}>
            <label htmlFor="expiry_date" className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date (Optional)
            </label>
            <input
              type="date"
              id="expiry_date"
              name="expiry_date"
              value={formData.expiry_date}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
            />
            <p className="mt-1 text-xs text-gray-500">When should this poster be removed?</p>
          </motion.div>
        </div>

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
            placeholder="event, conference, workshop"
          />
          <p className="mt-1 text-xs text-gray-500">Separate tags with commas</p>
        </motion.div>
        
        {/* Poster Image Upload */}
        <motion.div className="mb-5" variants={itemVariants}>
          <label htmlFor="posterImage" className="block text-sm font-medium text-gray-700 mb-1">
            Poster Image *
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
            <div className="space-y-1 text-center">
              {imagePreview ? (
                <div className="mb-3">
                  <div className="relative w-full h-64 mx-auto">
                    <Image
                      src={imagePreview}
                      alt="Poster preview"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-md"
                    />
                  </div>
                  <button 
                    type="button"
                    onClick={() => {
                      setImagePreview(null);
                      setFormData({...formData, posterImage: null});
                    }}
                    className="mt-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Remove image
                  </button>
                </div>
              ) : (
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              <div className="flex text-sm text-gray-600">
                <label htmlFor="posterImage" className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500">
                  <span>Upload a file</span>
                  <input 
                    id="posterImage" 
                    name="posterImage" 
                    type="file" 
                    className="sr-only"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    required={!imagePreview}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF, PDF up to 10MB</p>
            </div>
          </div>
        </motion.div>

        {/* Checkboxes */}
        <motion.div className="mb-5 space-y-3" variants={itemVariants}>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="is_featured"
              name="is_featured"
              checked={formData.is_featured}
              onChange={handleInputChange}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="is_featured" className="ml-2 block text-sm text-gray-700">
              Feature this poster on homepage
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="is_active"
              name="is_active"
              checked={formData.is_active}
              onChange={handleInputChange}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="is_active" className="ml-2 block text-sm text-gray-700">
              Make active immediately
            </label>
          </div>
        </motion.div>
        
        {/* Submit Button */}
        <motion.div variants={itemVariants}>
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
                Uploading...
              </div>
            ) : (
              'Upload Poster'
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

export default PostersForm;
