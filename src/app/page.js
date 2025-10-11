'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/Hero';
import UpcomingEventsSection from '../components/Events';
import LatestNews from '../components/News';
import FeaturedAssociations from '../components/FeaturedAssociations';
import { supabase } from '@/lib/supabase';


const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex-grow">
        <HeroSection />
        <FeaturedAssociations />
        <UpcomingEventsSection carousel={true} />
        <LatestNews carousel={true} />
        {/* Supabase Example Section */}
        
      </div>
      
      <Footer />
    </main>
  );
};

export default HomePage;
