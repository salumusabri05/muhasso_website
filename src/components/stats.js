import React from 'react';
import { Users, Flag, Plane, Clock } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "5,000+",
      title: "Medical Students",
      subtitle: "Across Tanzania"
    },
    {
      icon: Flag,
      number: "25+",
      title: "Regional Member",
      subtitle: "Organizations"
    },
    {
      icon: Plane,
      number: "500+",
      title: "Annual Student",
      subtitle: "Exchanges"
    },
    {
      icon: Clock,
      number: "Est. 2010",
      title: "Empowering Medical",
      subtitle: "Students Since 2010"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-300 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Large background number */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <span className="text-white text-[20rem] font-bold leading-none">MUHASSO</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center group-hover:bg-blue-800 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Number */}
                <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                  {stat.number}
                </h3>

                {/* Title and Subtitle */}
                <div className="text-gray-600">
                  <p className="font-semibold text-lg mb-1">
                    {stat.title}
                  </p>
                  <p className="text-sm">
                    {stat.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full opacity-50"></div>
      <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-purple-300 rounded-full opacity-40"></div>
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-blue-200 rounded-full opacity-30"></div>
    </section>
  );
};

export default StatsSection;