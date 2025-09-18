import React from 'react';
import { Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 min-h-screen relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute bottom-8 left-8">
        <div className="w-16 h-16 border-4 border-blue-300 rounded-full flex items-center justify-center">
          <Users className="w-8 h-8 text-blue-300" />
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 flex flex-col justify-center items-center min-h-screen text-center">
        {/* Top badge */}
        <div className="mb-12">
          <div className="inline-block border-2 border-white/30 rounded-full px-8 py-3 backdrop-blur-sm">
            <span className="text-white text-lg font-medium">
              Muhimbili University Students Organization
            </span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-12 leading-tight">
          Student Excellence
          <br />
          <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
            Leadership
          </span>
        </h1>

        {/* Description */}
        <div className="max-w-4xl mb-12">
          <p className="text-blue-100 text-lg md:text-xl leading-relaxed">
            MUHASSO is the Muhimbili University Health and Allied Sciences Students&apos; Organization, 
            representing and uniting all health science students at Muhimbili University. 
            As the official student government, we advocate for quality education, student welfare, 
            and professional development across all health disciplines. Through leadership, community 
            service, and collaboration with national and international partners, we empower the next 
            generation of healthcare leaders in Tanzania.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          <button className="bg-white hover:bg-gray-100 text-blue-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
            Read More About Us
          </button>
          
          <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
            Join MUHASSO
          </button>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 right-32 w-24 h-24 bg-purple-300/10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default HeroSection;