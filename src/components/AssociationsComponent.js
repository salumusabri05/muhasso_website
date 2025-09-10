import { Globe, Users, Heart, BookOpen, Award, ExternalLink, MapPin, Calendar } from 'lucide-react';

const AssociationsComponent = () => {
  const associations = [
    {
      id: 1,
      name: "TAMSA",
      fullName: "Tanzania Medical Students' Association",
      description: "The national umbrella organization representing all medical students across Tanzania, promoting medical education excellence and student welfare.",
      type: "National",
      established: "1985",
      members: "15,000+",
      location: "Tanzania",
      focus: ["Medical Education", "Student Welfare", "Policy Advocacy", "Professional Development"],
      icon: <Heart className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-700",
      activities: [
        "Annual Medical Students Conference",
        "Research Symposiums",
        "Community Health Programs",
        "Student Rights Advocacy"
      ]
    },
    {
      id: 2,
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
      id: 3,
      name: "IFMSA",
      fullName: "International Federation of Medical Students' Associations",
      description: "The world's largest and oldest independent organization representing associations of medical students internationally, promoting global health initiatives.",
      type: "International",
      established: "1951",
      members: "1.3M+",
      location: "Global",
      focus: ["Global Health", "Medical Education", "Human Rights", "Public Health"],
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-700",
      activities: [
        "Student Exchange Programs",
        "Global Health Projects",
        "Policy Development",
        "International Conferences"
      ]
    },
    {
      id: 4,
      name: "MUHASSO",
      fullName: "Muhimbili University Health and Allied Sciences Students' Organization",
      description: "The official student organization at Muhimbili University, representing health sciences students and promoting academic excellence and student welfare.",
      type: "University",
      established: "1991",
      members: "12,000+",
      location: "Dar es Salaam, Tanzania",
      focus: ["Student Representation", "Academic Support", "Health Advocacy", "Community Service"],
      icon: <BookOpen className="w-8 h-8" />,
      gradient: "from-red-500 to-rose-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-700",
      activities: [
        "Student Government",
        "Academic Support Programs",
        "Health Awareness Campaigns",
        "Cultural Events"
      ]
    },
    {
      id: 5,
      name: "EAMSA",
      fullName: "East African Medical Students' Association",
      description: "Regional federation uniting medical student associations across East Africa to promote medical education and regional health cooperation.",
      type: "Regional",
      established: "2003",
      members: "45,000+",
      location: "East Africa",
      focus: ["Regional Cooperation", "Medical Education", "Health Policy", "Cultural Exchange"],
      icon: <Users className="w-8 h-8" />,
      gradient: "from-orange-500 to-yellow-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-700",
      activities: [
        "Regional Conferences",
        "Student Exchange Programs",
        "Research Collaborations",
        "Policy Advocacy"
      ]
    },
    {
      id: 6,
      name: "AMSA",
      fullName: "African Medical Students' Association",
      description: "Continental organization promoting African medical students' interests, pan-African health initiatives, and medical education development across Africa.",
      type: "Continental",
      established: "2008",
      members: "200,000+",
      location: "Africa",
      focus: ["Pan-African Health", "Medical Education", "Research", "Leadership Development"],
      icon: <MapPin className="w-8 h-8" />,
      gradient: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      textColor: "text-teal-700",
      activities: [
        "Continental Health Summit",
        "Medical Research Programs",
        "Leadership Training",
        "Health Policy Development"
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
            Our Associations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting with medical and professional organizations across Tanzania, East Africa, and globally to strengthen our impact and opportunities.
          </p>
        </div>

        {/* Associations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

              {/* Learn More Button */}
              <button className={`w-full bg-gradient-to-r ${association.gradient} text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group-hover:scale-105`}>
                Learn More
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Partnership Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Building Stronger Networks
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Through these partnerships, MUHASSO students gain access to international opportunities, 
              research collaborations, exchange programs, and a global network of healthcare professionals.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200">
              Join Our Network
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssociationsComponent;