'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';

const AnnouncementsForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    priority: 'medium',
    category: 'General',
    target_audience: 'All',
    association: '',
    expiry_date: '',
    is_pinned: false,
    attachments: [],
    is_active: true
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };
  
  // Handle file uploads
  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;
    
    try {
      const uploadPromises = files.map(async (file) => {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;
        
        const { data, error } = await supabase.storage
          .from('announcement-attachments')
          .upload(filePath, file);
        
        if (error) throw error;
        
        const { data: { publicUrl } } = supabase.storage
          .from('announcement-attachments')
          .getPublicUrl(filePath);
        
        return { name: file.name, url: publicUrl };
      });
      
      const uploadedFileUrls = await Promise.all(uploadPromises);
      setUploadedFiles([...uploadedFiles, ...uploadedFileUrls]);
      
    } catch (error) {
      console.error('File upload error:', error);
      setToastType('error');
      setToastMessage(`❌ File upload failed: ${error.message}`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };
  
  // Remove uploaded file
  const removeFile = (index) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      
      // Prepare attachment URLs
      const attachmentUrls = uploadedFiles.map(file => file.url);
      
      // Insert announcement data into Supabase
      const { data, error } = await supabase
        .from('announcements')
        .insert([
          {
            title: formData.title,
            content: formData.content,
            priority: formData.priority,
            category: formData.category,
            target_audience: formData.target_audience,
            association: formData.association || null,
            expiry_date: formData.expiry_date || null,
            is_active: formData.is_active,
            is_pinned: formData.is_pinned,
            attachments: attachmentUrls.length > 0 ? attachmentUrls : null,
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
      setToastMessage('✅ Announcement created successfully!');
      setShowToast(true);
      
      // Reset form
      setFormData({
        title: '',
        content: '',
        priority: 'medium',
        category: 'General',
        target_audience: 'All',
        association: '',
        expiry_date: '',
        is_pinned: false,
        attachments: [],
        is_active: true
      });
      setUploadedFiles([]);
      
      // Hide toast after 3 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting announcement:', error);
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
          Create New Announcement
        </motion.h2>
        
        {/* Title */}
        <motion.div className="mb-5" variants={itemVariants}>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
            placeholder="Enter announcement title"
          />
        </motion.div>
        
        {/* Content */}
        <motion.div className="mb-5" variants={itemVariants}>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            Content *
          </label>
          <textarea
            id="content"
            name="content"
            required
            value={formData.content}
            onChange={handleInputChange}
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
            placeholder="Write your announcement here..."
          />
        </motion.div>

        {/* Priority and Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          {/* Priority */}
          <motion.div variants={itemVariants}>
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
              Priority *
            </label>
            <select
              id="priority"
              name="priority"
              required
              value={formData.priority}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </motion.div>

          {/* Category */}
          <motion.div variants={itemVariants}>
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
              <option value="Academic">Academic</option>
              <option value="Administrative">Administrative</option>
              <option value="Event">Event</option>
              <option value="General">General</option>
              <option value="Emergency">Emergency</option>
            </select>
          </motion.div>
        </div>

        {/* Target Audience */}
        <motion.div className="mb-5" variants={itemVariants}>
          <label htmlFor="target_audience" className="block text-sm font-medium text-gray-700 mb-1">
            Target Audience *
          </label>
          <select
            id="target_audience"
            name="target_audience"
            required
            value={formData.target_audience}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
          >
            <option value="All">All</option>
            <option value="Students">Students</option>
            <option value="Faculty">Faculty</option>
            <option value="Staff">Staff</option>
            <option value="Alumni">Alumni</option>
          </select>
        </motion.div>

        {/* Association */}
        <motion.div className="mb-5" variants={itemVariants}>
          <label htmlFor="association" className="block text-sm font-medium text-gray-700 mb-1">
            Association (Optional)
          </label>
          <select
            id="association"
            name="association"
            value={formData.association}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
          >
            <option value="">-- Select Association --</option>
            <option value="MUHASSO">MUHASSO</option>
            <option value="TABESA">TABESA</option>
            <option value="TAMELASA">TAMELASA</option>
            <option value="TAPHSA">TAPHSA</option>
            <option value="TANMSA">TANMSA</option>
            <option value="TAMSA">TAMSA</option>
            <option value="TANDSA">TANDSA</option>
            <option value="TANSA">TANSA</option>
            <option value="Book Club">Book Club</option>
            <option value="Big Future Club">Big Future Club</option>
          </select>
          <p className="mt-1 text-xs text-gray-500">Select which association this announcement belongs to</p>
        </motion.div>

        {/* Expiry Date */}
        <motion.div className="mb-5" variants={itemVariants}>
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
          <p className="mt-1 text-xs text-gray-500">Leave blank if announcement doesn&apos;t expire</p>
        </motion.div>

        {/* File Attachments */}
        <motion.div className="mb-5" variants={itemVariants}>
          <label htmlFor="attachments" className="block text-sm font-medium text-gray-700 mb-1">
            Attachments (Optional)
          </label>
          <input
            type="file"
            id="attachments"
            name="attachments"
            multiple
            accept="image/*,.pdf,.doc,.docx"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
          />
          <p className="mt-1 text-xs text-gray-500">You can upload images, PDFs, or Word documents</p>
          
          {/* Display uploaded files */}
          {uploadedFiles.length > 0 && (
            <div className="mt-3 space-y-2">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded">
                  <span className="text-sm text-gray-700">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Checkboxes */}
        <motion.div className="mb-5 space-y-3" variants={itemVariants}>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="is_pinned"
              name="is_pinned"
              checked={formData.is_pinned}
              onChange={handleInputChange}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="is_pinned" className="ml-2 block text-sm text-gray-700">
              Pin this announcement to the top
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
                Submitting...
              </div>
            ) : (
              'Create Announcement'
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

export default AnnouncementsForm;
