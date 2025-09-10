import { Plane, Plus, Shield, FileText, Megaphone, Users, Clock } from 'lucide-react';

const KnowMoreAboutUs = () => {
  const sections = [
    {
      id: 1,
      title: "Student Exchange",
      description: "Over 15,000 medical students begin their journeys every year to explore health care delivery and health systems in various cultural and social settings.",
      icon: <Plane className="w-6 h-6" />,
      buttonText: "Read more",
      buttonStyle: "bg-white text-blue-700 hover:bg-gray-50",
      gradient: "from-blue-600/80 to-purple-600/80",
      image: "students-group"
    },
    {
      id: 2,
      title: "Join Us",
      description: "This section provides a comprehensive guide on how to join the Muhimbili University Students Organization (MUHASSO) and become part of our community.",
      icon: <Plus className="w-6 h-6" />,
      buttonText: "Join MUHASSO",
      buttonStyle: "bg-white text-green-700 hover:bg-gray-50",
      gradient: "from-green-600/80 to-teal-600/80",
      image: "students-meeting"
    },
    {
      id: 3,
      title: "Policy & Advocacy",
      description: "We are in an optimal position to influence decisions at all levels, collaborating with organizations ranging from global reach to local implementation.",
      icon: <Shield className="w-6 h-6" />,
      buttonText: "Read more",
      buttonStyle: "bg-white text-red-700 hover:bg-gray-50",
      gradient: "from-red-600/80 to-pink-600/80",
      image: "advocacy-meeting"
    },
    {
      id: 4,
      title: "Press Release",
      description: "Stay updated with official announcements, statements, and press releases from MUHASSO regarding important developments and initiatives.",
      icon: <FileText className="w-6 h-6" />,
      buttonText: "View Releases",
      buttonStyle: "bg-white text-indigo-700 hover:bg-gray-50",
      gradient: "from-indigo-600/80 to-blue-600/80",
      image: "press-conference"
    },
    {
      id: 5,
      title: "Media Center",
      description: "Access our comprehensive media resources including photos, videos, and multimedia content documenting MUHASSO's activities and achievements.",
      icon: <Megaphone className="w-6 h-6" />,
      buttonText: "Explore Media",
      buttonStyle: "bg-white text-purple-700 hover:bg-gray-50",
      gradient: "from-purple-600/80 to-pink-600/80",
      image: "media-center"
    },
    {
      id: 6,
      title: "Leadership",
      description: "Meet our dedicated leadership team and learn about the structure and governance of MUHASSO and our commitment to student representation.",
      icon: <Users className="w-6 h-6" />,
      buttonText: "Meet Leaders",
      buttonStyle: "bg-white text-teal-700 hover:bg-gray-50",
      gradient: "from-teal-600/80 to-green-600/80",
      image: "leadership-team"
    }
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="w-24 h-1 bg-blue-600 mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Know More About Us
          </h2>
        </div>

        {/* Main Grid - First 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sections.slice(0, 3).map((section) => (
            <div 
              key={section.id}
              className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Background with gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient}`}>
                {/* Simulated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-black/10"></div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-96 flex flex-col justify-between text-white">
                {/* Icon */}
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                  {section.icon}
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {section.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {section.description}
                  </p>
                </div>

                {/* Button */}
                <button className={`${section.buttonStyle} font-semibold py-3 px-6 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105`}>
                  {section.buttonText}
                </button>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="w-32 h-32 border border-white/30 rounded-full"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="w-24 h-24 border border-white/30 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.slice(3).map((section) => (
            <div 
              key={section.id}
              className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Background with gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient}`}>
                {/* Simulated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-black/10"></div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-96 flex flex-col justify-between text-white">
                {/* Icon */}
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                  {section.icon}
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {section.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {section.description}
                  </p>
                </div>

                {/* Button */}
                <button className={`${section.buttonStyle} font-semibold py-3 px-6 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105`}>
                  {section.buttonText}
                </button>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="w-32 h-32 border border-white/30 rounded-full"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="w-24 h-24 border border-white/30 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* MUHASSO Logo/Badge */}
        <div className="fixed bottom-6 left-6">
          <div className="bg-blue-600 p-3 rounded-full shadow-lg">
            <Clock className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowMoreAboutUs;