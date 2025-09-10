import { Clock, Users, FileText, ChevronDown } from 'lucide-react';

const LatestNews = () => {
  const newsItems = [
    {
      id: 1,
      title: "MUHASSO's Contributions to Medical Student Leadership",
      description: "MUHASSO's Contributions to Medical Student Leadership: Championing Health Education and Student Rights. Written by: Dr. Sarah Mwalimu (MUHASSO External Affairs Assistant for...)",
      image: "climate-health",
      category: "Leadership",
      gradient: "from-green-400 to-blue-500"
    },
    {
      id: 2,
      title: "Call for MUHASSO Online Delegation to the Medical Education Conference 2025",
      description: "Dearest MUHASSO members, We are thrilled to announce the opening of the call for the Medical Education Conference 2025, which will be hybrid...",
      image: "delegation-call",
      category: "Conference",
      gradient: "from-purple-400 via-pink-400 to-blue-400"
    },
    {
      id: 3,
      title: "Public Statement on Medical Student Rights at Muhimbili",
      description: "It has come to our attention that medical students at Muhimbili University are facing challenges regarding academic rights. We would...",
      image: "public-statement",
      category: "Statement",
      gradient: "from-blue-600 to-blue-800"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Latest News
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image/Card Header */}
              <div className={`h-64 bg-gradient-to-br ${item.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                {/* Category Badge */}
                <div className="flex justify-between items-start">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                    {item.category}
                  </span>
                  {index === 0 && (
                    <div className="bg-blue-600 p-2 rounded-full">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>

                {/* Title Overlay */}
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 text-lg leading-tight">
                    {item.title.split(':')[0]}
                  </h3>
                  {item.title.includes(':') && (
                    <p className="text-gray-700 text-sm mt-1">
                      {item.title.split(':')[1]}
                    </p>
                  )}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-20">
                  {index === 0 && <Users className="w-8 h-8 text-white" />}
                  {index === 1 && <FileText className="w-8 h-8 text-white" />}
                  {index === 2 && <FileText className="w-8 h-8 text-white" />}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-xl mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {item.description}
                </p>
                
                {/* Read More Button */}
                <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center">
          <button className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-8 rounded-full border border-gray-200 shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2">
            Load More
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* MUHASSO Logo/Badge */}
        <div className="fixed bottom-6 left-6">
          <div className="bg-blue-600 p-3 rounded-full shadow-lg">
            <Users className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;