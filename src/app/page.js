'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/Hero';
import PartnersSection from '../components/Partners';
import UpcomingEventsSection from '../components/Events';
import LatestNews from '../components/News';
import AssociationsComponent from '../components/AssociationsComponent';


const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex-grow">
        <HeroSection />
        <AssociationsComponent />
        <UpcomingEventsSection />
        <LatestNews />
        <PartnersSection />
      </div>
      
      <Footer />
    </main>
  );
};

export default HomePage;
