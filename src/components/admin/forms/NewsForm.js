'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

const NewsForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'General',
    excerpt: '',
    content: '',
    author: '',
    tags: '',
    featuredImage: null,
    published: false
  });
  
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, featuredImage: file });
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      fileReader.readAsDataURL(file);
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
          .from('news-images')
          .upload(filePath, formData.featuredImage);
        
        if (uploadError) {
          throw new Error(`Image upload failed: ${uploadError.message}`);
        }
        
        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('news-images')
          .getPublicUrl(filePath);
        
        featuredImageUrl = publicUrl;
      }
      
      // Process tags - convert comma-separated string to array
      const tagsArray = formData.tags 
        ? formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
        : [];
      
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      
      // Insert news data into Supabase
      const { data, error } = await supabase
        .from('news')
        .insert([
          {
            title: formData.title,
            category: formData.category,
            excerpt: formData.excerpt,
            content: formData.content,
            author: formData.author,
            featured_image: featuredImageUrl,
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
      setToastMessage('✅ News article created successfully!');
      setShowToast(true);
      
      // Reset form
      setFormData({
        title: '',
        category: 'General',
        excerpt: '',
        content: '',
        author: '',
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
      console.error('Error submitting news:', error);
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
          Create News Article
        </motion.h2>
        
        {/* Title */}
        <motion.div className="mb-5" variants={itemVariants}>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            News Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
            placeholder="Enter news title"
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
            <option value="Academic">Academic</option>
            <option value="Sports">Sports</option>
            <option value="Cultural">Cultural</option>
            <option value="General">General</option>
          </select>
        </motion.div>
        
        {/* Excerpt */}
        <motion.div className="mb-5" variants={itemVariants}>
          <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
            Excerpt (Short Summary)
          </label>
          <textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleInputChange}
            rows={2}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
            placeholder="Brief summary of the news (optional)"
          />
        </motion.div>
        
        {/* Content */}
        <motion.div className="mb-5" variants={itemVariants}>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            News Content *
          </label>
          <textarea
            id="content"
            name="content"
            required
            value={formData.content}
            onChange={handleInputChange}
            rows={8}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
            placeholder="Write your news content here..."
          />
        </motion.div>
        
        {/* Author */}
        <motion.div className="mb-5" variants={itemVariants}>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
            Author *
          </label>
          <input
            type="text"
            id="author"
            name="author"
            required
            value={formData.author}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-black"
            placeholder="Enter author name"
          />
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
            placeholder="Enter tags separated by commas"
          />
          <p className="mt-1 text-xs text-gray-500">Separate tags with commas (e.g., &ldquo;education, muhasso, students&rdquo;)</p>
        </motion.div>
        
        {/* Featured Image */}
        <motion.div className="mb-7" variants={itemVariants}>
          <label htmlFor="featuredImage" className="block text-sm font-medium text-gray-700 mb-1">
            Featured Image *
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
            <div className="space-y-1 text-center">
              {imagePreview ? (
                <div className="mb-3">
                  <div className="relative w-full h-48 mx-auto">
                    <Image
                      src={imagePreview}
                      alt="Featured image preview"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-md"
                    />
                  </div>
                  <button 
                    type="button"
                    onClick={() => {
                      setImagePreview(null);
                      setFormData({...formData, featuredImage: null});
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
                <label htmlFor="featuredImage" className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500">
                  <span>Upload a file</span>
                  <input 
                    id="featuredImage" 
                    name="featuredImage" 
                    type="file" 
                    className="sr-only"
                    accept="image/*"
                    onChange={handleImageChange}
                    required={!imagePreview}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
            </div>
          </div>
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
              onChange={(e) => setFormData({...formData, published: e.target.checked})}
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
              formData.published ? 'Publish News' : 'Save as Draft'
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

export default NewsForm;
