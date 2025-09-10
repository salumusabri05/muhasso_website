import React from 'react';
import { Calendar, Users, MapPin, Clock, ArrowRight, Stethoscope, BookOpen, Heart } from 'lucide-react';

const UpcomingEventsSection = () => {
  const upcomingEvents = [
    {
      title: "Annual General Assembly 2025",
      date: "March 15-17, 2025",
      location: "Dar es Salaam, Tanzania",
      description: "Join medical students from across Tanzania for our annual assembly featuring keynote speakers, workshops, and networking opportunities.",
      icon: Users,
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700"
    },
    {
      title: "Regional Health Summit",
      date: "April 22-24, 2025",
      location: "Mwanza, Tanzania",
      description: "Regional summit focusing on healthcare challenges and innovations in the Lake Zone region.",
      icon: Stethoscope,
      color: "bg-green-600",
      hoverColor: "hover:bg-green-700"
    },
    {
      title: "Medical Education Workshop",
      date: "May 10, 2025",
      location: "Virtual Event",
      description: "Interactive workshop on modern medical education techniques and digital learning tools.",
      icon: BookOpen,
      color: "bg-purple-600",
      hoverColor: "hover:bg-purple-700"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 relative">
      {/* Decorative icon in bottom left */}
      <div className="absolute bottom-8 left-8">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
          <Users className="w-8 h-8 text-white" />
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Side - Main Events Card */}
          <div className="relative">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Upcoming Events
            </h2>
            
            <div className="relative rounded-3xl overflow-hidden h-96 group cursor-pointer">
              {/* Background with overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"></div>
              <div className="absolute inset-0 bg-black/40"></div>
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='37' cy='37' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundRepeat: 'repeat'
                }}></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Title */}
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Events
                  </h3>
                  <p className="text-blue-100 text-lg leading-relaxed mb-6">
                    Get to know MUHASSO&apos;s events. Every year our students meet in different 
                    spaces to discuss topics of our organization, advocacy and more.
                  </p>
                  
                  {/* Buttons */}
                  <div className="space-y-3">
                    <button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-between group">
                      General Assemblies
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    <button className="w-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-between group">
                      Regional Meetings
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Event Cards */}
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className={`${event.color} ${event.hoverColor} w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {event.title}
                      </h4>
                      
                      {/* Date and Location */}
                      <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {event.description}
                      </p>
                      
                      {/* Learn More Link */}
                      <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1 group/link">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* View All Events Button */}
            <div className="pt-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>View All Events</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;