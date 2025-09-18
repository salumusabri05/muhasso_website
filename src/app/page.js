'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/Hero';
import StatsSection from '../components/stats';
import PartnersSection from '../components/Partners';
import UpcomingEventsSection from '../components/Events';
import LatestNews from '../components/News';
import KnowMoreAboutUs from '../components/AboutUs';
import AssociationsComponent from '../components/AssociationsComponent';
import SocialMediaPresence from '../components/SocialMedia';

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex-grow">
        <HeroSection />
        <StatsSection />
        <AssociationsComponent />
        <KnowMoreAboutUs />
        <UpcomingEventsSection />
        <LatestNews />
        <PartnersSection />
        <SocialMediaPresence />
      </div>
      
      <Footer />
    </main>
  );
};

export default HomePage;
