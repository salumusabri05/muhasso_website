'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import Image from 'next/image';

const VideoAndPics = () => {
  // State for tracking which items are in view
  const [visibleItems, setVisibleItems] = useState({});
  // State for video controls
  const [videoStates, setVideoStates] = useState({
    'video1': { isPlaying: false, isMuted: true },
    'video2': { isPlaying: false, isMuted: true }
  });
  
  // Refs for each media item to track visibility
  const itemRefs = {
    'img1': useRef(null),
    'img2': useRef(null),
    'img3': useRef(null),
    'img4': useRef(null),
    'img5': useRef(null),
    'img6': useRef(null),
    'video1': useRef(null),
    'video2': useRef(null),
  };

  // Video element refs to control play/pause
  const videoElementRefs = {
    'video1': useRef(null),
    'video2': useRef(null),
  };

  // Function to toggle video play/pause
  const togglePlay = (videoId) => {
    const videoElement = videoElementRefs[videoId].current;
    
    if (videoElement) {
      if (videoStates[videoId].isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      
      setVideoStates(prev => ({
        ...prev,
        [videoId]: {
          ...prev[videoId],
          isPlaying: !prev[videoId].isPlaying
        }
      }));
    }
  };

  // Function to toggle video mute/unmute
  const toggleMute = (videoId) => {
    const videoElement = videoElementRefs[videoId].current;
    
    if (videoElement) {
      videoElement.muted = !videoElement.muted;
      
      setVideoStates(prev => ({
        ...prev,
        [videoId]: {
          ...prev[videoId],
          isMuted: !prev[videoId].isMuted
        }
      }));
    }
  };

  // Set up intersection observer to detect when elements come into view
  useEffect(() => {
    const observers = {};
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Item is considered in view when 50% visible
    };
    
    // Create observers for all media items
    Object.keys(itemRefs).forEach(id => {
      const element = itemRefs[id].current;
      if (element) {
        observers[id] = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            // Update visible items state when visibility changes
            setVisibleItems(prev => ({
              ...prev,
              [id]: entry.isIntersecting
            }));
            
            // Auto-play videos when they come into view
            if (id.startsWith('video') && entry.isIntersecting) {
              const videoElement = videoElementRefs[id].current;
              if (videoElement) {
                videoElement.play().catch(e => console.log('Auto-play prevented:', e));
                setVideoStates(prev => ({
                  ...prev,
                  [id]: {
                    ...prev[id],
                    isPlaying: true
                  }
                }));
              }
            } else if (id.startsWith('video') && !entry.isIntersecting) {
              // Pause videos when they go out of view
              const videoElement = videoElementRefs[id].current;
              if (videoElement) {
                videoElement.pause();
                setVideoStates(prev => ({
                  ...prev,
                  [id]: {
                    ...prev[id],
                    isPlaying: false
                  }
                }));
              }
            }
          });
        }, observerOptions);
        
        observers[id].observe(element);
      }
    });
    
    // Clean up observers when component unmounts
    return () => {
      Object.values(observers).forEach(observer => {
        observer.disconnect();
      });
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block w-24 h-1 bg-blue-600 mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Multimedia Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore MUHASSO events, activities, and memorable moments through our curated collection of images and videos.
          </p>
        </div>

        {/* Video and Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Video 1 - Large */}
          <div 
            ref={itemRefs.video1}
            className={`lg:col-span-2 rounded-xl overflow-hidden shadow-lg relative transition-transform duration-700 ${
              visibleItems.video1 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative aspect-video bg-black">
              <video 
                ref={videoElementRefs.video1}
                className="w-full h-full object-cover"
                src="/library/video 1.mp4"
                muted
                playsInline
                loop
              />
              
              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center justify-between text-white">
                  <button 
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    onClick={() => togglePlay('video1')}
                  >
                    {videoStates.video1.isPlaying ? 
                      <Pause className="w-5 h-5" /> : 
                      <Play className="w-5 h-5" />
                    }
                  </button>
                  
                  <button 
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    onClick={() => toggleMute('video1')}
                  >
                    {videoStates.video1.isMuted ? 
                      <VolumeX className="w-5 h-5" /> : 
                      <Volume2 className="w-5 h-5" />
                    }
                  </button>
                </div>
              </div>
              
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                Featured Video
              </div>
            </div>
            
            <div className="p-4 bg-white">
              <h3 className="font-bold text-lg text-gray-900">MUHASSO Annual Conference</h3>
              <p className="text-gray-600 text-sm">Highlights from our annual conference where students presented their research and networked with professionals.</p>
            </div>
          </div>
          
          {/* Image 1 */}
          <div 
            ref={itemRefs.img1}
            className={`rounded-xl overflow-hidden shadow-lg transition-transform duration-700 ${
              visibleItems.img1 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative aspect-[4/3]">
              <Image 
                src="/library/image 1.jpg"
                alt="MUHASSO Students"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-bold text-lg text-gray-900">Student Volunteer Day</h3>
              <p className="text-gray-600 text-sm">Medical students providing healthcare education in rural communities.</p>
            </div>
          </div>
          
          {/* Image 2 */}
          <div 
            ref={itemRefs.img2}
            className={`rounded-xl overflow-hidden shadow-lg transition-transform duration-700 ${
              visibleItems.img2 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative aspect-[4/3]">
              <Image 
                src="/library/image 2.jpg"
                alt="MUHASSO Leadership"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-bold text-lg text-gray-900">Leadership Summit</h3>
              <p className="text-gray-600 text-sm">MUHASSO leadership team planning initiatives for the upcoming academic year.</p>
            </div>
          </div>
          
          {/* Image 3 */}
          <div 
            ref={itemRefs.img3}
            className={`rounded-xl overflow-hidden shadow-lg transition-transform duration-700 ${
              visibleItems.img3 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative aspect-[4/3]">
              <Image 
                src="/library/image 3.jpg"
                alt="Research Symposium"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-bold text-lg text-gray-900">Research Symposium</h3>
              <p className="text-gray-600 text-sm">Students presenting their latest research findings to faculty and peers.</p>
            </div>
          </div>
          
          {/* Video 2 */}
          <div 
            ref={itemRefs.video2}
            className={`rounded-xl overflow-hidden shadow-lg relative transition-transform duration-700 ${
              visibleItems.video2 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative aspect-video bg-black">
              <video 
                ref={videoElementRefs.video2}
                className="w-full h-full object-cover"
                src="/library/video 2.mp4"
                muted
                playsInline
                loop
              />
              
              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center justify-between text-white">
                  <button 
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    onClick={() => togglePlay('video2')}
                  >
                    {videoStates.video2.isPlaying ? 
                      <Pause className="w-5 h-5" /> : 
                      <Play className="w-5 h-5" />
                    }
                  </button>
                  
                  <button 
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    onClick={() => toggleMute('video2')}
                  >
                    {videoStates.video2.isMuted ? 
                      <VolumeX className="w-5 h-5" /> : 
                      <Volume2 className="w-5 h-5" />
                    }
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-white">
              <h3 className="font-bold text-lg text-gray-900">Community Outreach</h3>
              <p className="text-gray-600 text-sm">MUHASSO members participating in a healthcare awareness campaign in local communities.</p>
            </div>
          </div>
          
          {/* Image 4 */}
          <div 
            ref={itemRefs.img4}
            className={`rounded-xl overflow-hidden shadow-lg transition-transform duration-700 ${
              visibleItems.img4 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative aspect-[4/3]">
              <Image 
                src="/library/image 4.jpg"
                alt="Cultural Event"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-bold text-lg text-gray-900">Cultural Exchange Day</h3>
              <p className="text-gray-600 text-sm">Celebrating diversity through cultural performances and exhibitions.</p>
            </div>
          </div>
          
          {/* Image 5 */}
          <div 
            ref={itemRefs.img5}
            className={`lg:col-span-2 rounded-xl overflow-hidden shadow-lg transition-transform duration-700 ${
              visibleItems.img5 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative aspect-[16/9]">
              <Image 
                src="/library/image 5.jpg"
                alt="Graduation Ceremony"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                Featured Image
              </div>
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-bold text-lg text-gray-900">2024 Graduation Ceremony</h3>
              <p className="text-gray-600 text-sm">Celebrating the achievements of MUHASSO graduates as they prepare to enter the healthcare profession.</p>
            </div>
          </div>
          
          {/* Image 6 */}
          <div 
            ref={itemRefs.img6}
            className={`rounded-xl overflow-hidden shadow-lg transition-transform duration-700 ${
              visibleItems.img6 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative aspect-[4/3]">
              <Image 
                src="/library/image 6.jpg"
                alt="International Conference"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-bold text-lg text-gray-900">International Collaboration</h3>
              <p className="text-gray-600 text-sm">MUHASSO representatives at the International Medical Students Conference.</p>
            </div>
          </div>
        </div>
        
        {/* Call-to-action */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Visit our complete gallery to see more photos and videos from our events.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoAndPics;
