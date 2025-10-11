'use client';

import React from 'react';
import Image from 'next/image';
import { Users } from 'lucide-react';

const HeroSection = ({ 
  title = "Discover. Connect. Celebrate Student Life at MUHAS.",
  subtitle = "Explore student associations, clubs and religious groups ",
  exploreClubsLink = "/clubs",
  seeEventsLink = "/events"
}) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden animate-fade-in">
      {/* Hero Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/muhasso-hero.png"
          alt="MUHASSO Hero Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-gray-900/75 to-blue-800/85"></div>
      
      {/* Background decorative elements */}
      <div className="absolute bottom-8 left-8 z-10">
        <div className="w-16 h-16 border-4 border-blue-300/70 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Users className="w-8 h-8 text-blue-300" />
        </div>
      </div>

      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 right-32 w-24 h-24 bg-purple-300/10 rounded-full blur-2xl"></div>
      
      {/* Main content */}
      <div className="relative z-20 container mx-auto px-6 py-16 flex flex-col justify-center items-center min-h-screen text-center">
        {/* Top badge */}
        <div className="mb-8 md:mb-12 opacity-0 animate-fade-in animation-delay-300">
          <div className="inline-block border-2 border-white/30 rounded-full px-6 py-3 md:px-8 md:py-3 backdrop-blur-sm">
            <span className="text-white text-base md:text-lg font-medium">
              Muhimbili University of Health & Allied Sciences
            </span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 leading-tight max-w-5xl opacity-0 animate-fade-in animation-delay-500">
          <span className="block mb-2">Discover. Connect.</span>
          <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
            Celebrate Student Life
          </span>
          <span className="block text-3xl md:text-5xl lg:text-6xl mt-2">at MUHAS.</span>
        </h1>

        {/* Subtitle */}
        <div className="max-w-3xl mb-10 md:mb-12 opacity-0 animate-fade-in animation-delay-700">
          <p className="text-blue-100 text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
            {subtitle}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center opacity-0 animate-fade-in animation-delay-1000">
          <a 
            href={exploreClubsLink}
            className="bg-white hover:bg-gray-100 text-blue-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-white/50 w-full sm:w-auto text-center"
            role="button"
            aria-label="Explore student clubs at MUHAS"
          >
            Explore Clubs
          </a>
          
          <a 
            href={seeEventsLink}
            className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 w-full sm:w-auto text-center"
            role="button"
            aria-label="See upcoming events at MUHAS"
          >
            See Events
          </a>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;