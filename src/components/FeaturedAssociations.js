import { Users, Award, ExternalLink, MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const FeaturedAssociations = () => {
  const associations = [
    {
      id: 1,
      name: "TABESA",
      fullName: "Tanzania Biomedical Engineering Students Association",
      description: "Advancing biomedical engineering education and innovation across Tanzania, bridging the gap between engineering technology and healthcare solutions.",
      type: "National",
      established: "1998",
      members: "3,500+",
      location: "Tanzania",
      focus: ["Biomedical Engineering", "Healthcare Technology", "Innovation", "Medical Devices"],
      icon: <Award className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      activities: [
        "Medical Device Innovation Competitions",
        "Healthcare Technology Workshops",
        "Research Symposiums",
        "Industry-Academia Partnerships"
      ]
    },
    {
      id: 7,
      name: "APSTA",
      fullName: "Association of Physiotherapy Students of Tanzania",
      description: "The national association representing physiotherapy students across Tanzania, promoting excellence in physiotherapy education and professional development.",
      type: "National",
      established: "2010",
      members: "3,000+",
      location: "Tanzania",
      focus: ["Physiotherapy Education", "Clinical Skills", "Research", "Professional Advocacy"],
      icon: <div className="relative w-8 h-8"><Image src="/asscociation_details/APSTA LOGO.jpg" alt="APSTA Logo" fill className="object-contain" /></div>,
      gradient: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      textColor: "text-amber-700",
      activities: [
        "Annual Conference",
        "Clinical Skills Workshops",
        "Community Rehabilitation Programs",
        "Research Symposiums"
      ]
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'International': return 'bg-purple-100 text-purple-700';
      case 'Continental': return 'bg-teal-100 text-teal-700';
      case 'Regional': return 'bg-orange-100 text-orange-700';
      case 'National': return 'bg-blue-100 text-blue-700';
      case 'University': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block w-24 h-1 bg-blue-600 mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Associations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting with medical and professional organizations across Tanzania to strengthen our impact and opportunities.
          </p>
        </div>

        {/* Associations Grid - 2 columns centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {associations.map((association) => (
            <div
              key={association.id}
              className={`${association.bgColor} ${association.borderColor} border-2 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${association.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow`}>
                  {association.icon}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(association.type)}`}>
                  {association.type}
                </span>
              </div>

              {/* Association Name */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {association.name}
                </h3>
                <h4 className={`text-sm font-medium ${association.textColor} mb-3`}>
                  {association.fullName}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {association.description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">Est. {association.established}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">{association.members}</span>
                </div>
                <div className="flex items-center gap-2 text-sm col-span-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">{association.location}</span>
                </div>
              </div>

              {/* Focus Areas */}
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-gray-900 mb-3">Focus Areas</h5>
                <div className="flex flex-wrap gap-2">
                  {association.focus.map((area, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/70 text-gray-700 text-xs rounded-full border"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Activities */}
              <div className="mb-8">
                <h5 className="text-sm font-semibold text-gray-900 mb-3">Key Activities</h5>
                <ul className="space-y-1">
                  {association.activities.map((activity, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Explore More Button */}
              <Link href={`/religion-clubs/${association.name.toLowerCase()}`} className={`w-full bg-gradient-to-r ${association.gradient} text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group-hover:scale-105`}>
                Explore More
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedAssociations;
