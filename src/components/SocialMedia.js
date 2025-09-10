import { Instagram, Facebook, MessageCircle, Youtube } from 'lucide-react';

const SocialMediaPresence = () => {
  const socialPlatforms = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400',
      hoverColor: 'hover:from-purple-600 hover:via-pink-600 hover:to-orange-500',
      username: '@muhasso_official',
      followers: '12.5K',
      description: 'Daily updates, student life, and campus events'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-6 h-6" />,
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      username: 'MUHASSO Official',
      followers: '25.8K',
      description: 'News, announcements, and community discussions'
    },
    {
      name: 'X',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: 'bg-black',
      hoverColor: 'hover:bg-gray-800',
      username: '@MUHASSO_TZ',
      followers: '8.2K',
      description: 'Real-time updates and breaking news'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      username: 'MUHASSO Updates',
      followers: '5.1K',
      description: 'Direct communication and urgent notifications'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-6 h-6" />,
      color: 'bg-red-600',
      hoverColor: 'hover:bg-red-700',
      username: 'MUHASSO Channel',
      followers: '3.7K',
      description: 'Educational videos, events, and documentaries'
    },
    {
      name: 'TikTok',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      ),
      color: 'bg-black',
      hoverColor: 'hover:bg-gray-800',
      username: '@muhasso_tz',
      followers: '15.3K',
      description: 'Creative content, student stories, and trends'
    }
  ];

  const formatFollowers = (count) => {
    return count;
  };

  return (
    <div className="bg-white py-16 px-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Social Media Presence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Stay connected with MUHASSO across all major social media platforms. 
            Follow us for the latest updates, events, and student stories.
          </p>
        </div>

        {/* Simple Icon Row (matching your image) */}
        <div className="flex flex-wrap gap-4 mb-16">
          {socialPlatforms.map((platform, index) => (
            <a
              key={index}
              href="#"
              className={`w-16 h-16 ${platform.color} ${platform.hoverColor} text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
              title={platform.name}
            >
              {platform.icon}
            </a>
          ))}
        </div>

        {/* Detailed Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialPlatforms.map((platform, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-gray-100"
            >
              {/* Platform Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 ${platform.color} ${platform.hoverColor} text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {platform.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {platform.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {platform.username}
                  </p>
                </div>
              </div>

              {/* Followers Count */}
              <div className="mb-4">
                <div className="text-2xl font-bold text-gray-900">
                  {platform.followers}
                </div>
                <div className="text-sm text-gray-600">
                  Followers
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {platform.description}
              </p>

              {/* Follow Button */}
              <a
                href="#"
                className={`w-full inline-block text-center ${platform.color} ${platform.hoverColor} text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 hover:shadow-md`}
              >
                Follow Us
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join Our Digital Community
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Be part of the MUHASSO digital family! Follow us on your favorite platforms 
              to stay updated with the latest news, events, opportunities, and connect with 
              fellow students from Muhimbili University.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200">
                Follow All Platforms
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Share MUHASSO
              </button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900">70K+</div>
            <div className="text-gray-600">Total Followers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">500+</div>
            <div className="text-gray-600">Posts This Year</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">50+</div>
            <div className="text-gray-600">Events Covered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">24/7</div>
            <div className="text-gray-600">Community Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPresence;