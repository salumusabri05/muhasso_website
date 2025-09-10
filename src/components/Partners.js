import React from 'react';
import { Users, Heart, Globe, Stethoscope, Building2, BookOpen, Shield, UserCheck } from 'lucide-react';

const PartnersSection = () => {
  const partners = [
    {
      name: "UNAIDS",
      icon: Heart,
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      name: "WFPHA",
      subtitle: "World Federation of Public Health Associations",
      icon: Globe,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      name: "World Health Organization",
      icon: Globe,
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      name: "W.H.S.A",
      subtitle: "World Health Students' Alliance",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      name: "ESCMID",
      icon: Stethoscope,
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      name: "INCISION",
      subtitle: "International Student Surgical Network",
      icon: UserCheck,
      color: "text-blue-700",
      bgColor: "bg-blue-50"
    },
    {
      name: "SheDecides",
      icon: Heart,
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      name: "Youth Voices Count",
      icon: Users,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Content */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Partners
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              MUHASSO partners with global organizations to advance health, empower 
              medical students, and address key health challenges through collaboration 
              and advocacy.
            </p>
          </div>

          {/* Right Partners Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partners.map((partner, index) => {
                const Icon = partner.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group border border-gray-100"
                  >
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <div className={`${partner.bgColor} ${partner.color} w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                          {partner.name}
                        </h3>
                        {partner.subtitle && (
                          <p className="text-sm text-gray-500">
                            {partner.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional partnerships note */}
            <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="flex items-start space-x-3">
                <Building2 className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">
                    National & Regional Partnerships
                  </h4>
                  <p className="text-blue-700 text-sm">
                    MUHASSO also collaborates with the Tanzania Ministry of Health, 
                    Regional Medical Universities, and local healthcare organizations 
                    to strengthen medical education and healthcare delivery in Tanzania.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;