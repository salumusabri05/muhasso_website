'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AdminLayout from '@/components/admin/AdminLayout';
import { supabase } from '@/lib/supabase';

export default function DashboardPage() {
  const [stats, setStats] = useState({
    newsCount: 0,
    eventsCount: 0,
    announcementsCount: 0,
    postersCount: 0
  });
  const [recentActivities, setRecentActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      // Fetch counts from all tables
      const [newsRes, eventsRes, announcementsRes, postersRes] = await Promise.all([
        supabase.from('news').select('*', { count: 'exact', head: true }),
        supabase.from('events').select('*', { count: 'exact', head: true }),
        supabase.from('announcements').select('*', { count: 'exact', head: true }),
        supabase.from('posters').select('*', { count: 'exact', head: true })
      ]);

      setStats({
        newsCount: newsRes.count || 0,
        eventsCount: eventsRes.count || 0,
        announcementsCount: announcementsRes.count || 0,
        postersCount: postersRes.count || 0
      });

      // Fetch recent activities (latest 5 items from all tables)
      const activities = [];
      
      const { data: recentNews } = await supabase
        .from('news')
        .select('id, title, created_at')
        .order('created_at', { ascending: false })
        .limit(2);
      
      const { data: recentEvents } = await supabase
        .from('events')
        .select('id, title, created_at')
        .order('created_at', { ascending: false })
        .limit(2);
      
      const { data: recentAnnouncements } = await supabase
        .from('announcements')
        .select('id, title, created_at')
        .order('created_at', { ascending: false })
        .limit(2);

      if (recentNews) {
        recentNews.forEach(item => {
          activities.push({
            id: `news-${item.id}`,
            description: `Published: ${item.title}`,
            time: new Date(item.created_at).toLocaleDateString(),
            type: 'news'
          });
        });
      }

      if (recentEvents) {
        recentEvents.forEach(item => {
          activities.push({
            id: `event-${item.id}`,
            description: `Created event: ${item.title}`,
            time: new Date(item.created_at).toLocaleDateString(),
            type: 'event'
          });
        });
      }

      if (recentAnnouncements) {
        recentAnnouncements.forEach(item => {
          activities.push({
            id: `announcement-${item.id}`,
            description: `Posted: ${item.title}`,
            time: new Date(item.created_at).toLocaleDateString(),
            type: 'announcement'
          });
        });
      }

      // Sort by created_at and limit to 5
      setRecentActivities(activities.slice(0, 5));

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Stats display array
  const statsDisplay = [
    { name: 'Total News Articles', value: stats.newsCount, icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
    { name: 'Upcoming Events', value: stats.eventsCount, icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { name: 'Active Announcements', value: stats.announcementsCount, icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z' },
    { name: 'Total Posters', value: stats.postersCount, icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'news':
        return (
          <div className="bg-blue-100 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
        );
      case 'event':
        return (
          <div className="bg-green-100 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        );
      case 'announcement':
        return (
          <div className="bg-purple-100 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="bg-gray-100 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        );
    }
  };

  return (
    <AdminLayout>
      <motion.div
        className="space-y-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-600">
            Welcome to the MUHASSO admin dashboard. Manage your content from here.
          </p>
        </motion.div>
        
        {/* Stats Section */}
        <motion.div variants={itemVariants}>
          {loading ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white overflow-hidden shadow rounded-lg animate-pulse">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="h-12 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {statsDisplay.map((stat) => (
                <motion.div
                  key={stat.name}
                  className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-300"
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                >
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-purple-100 rounded-md p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                        </svg>
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                          <dd>
                            <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Recent Activity */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 bg-white shadow rounded-lg"
          >
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
              <p className="mt-1 text-sm text-gray-500">Latest content updates</p>
            </div>
            <div className="px-4 py-5 sm:p-6">
              {loading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-lg animate-pulse">
                      <div className="h-12 bg-gray-200 rounded"></div>
                    </div>
                  ))}
                </div>
              ) : recentActivities.length === 0 ? (
                <div className="text-center py-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <p className="mt-2 text-sm text-gray-500">No recent activity</p>
                  <p className="text-xs text-gray-400 mt-1">Start by creating news, events, or announcements</p>
                </div>
              ) : (
                <ul className="space-y-4">
                  {recentActivities.map((activity) => (
                    <motion.li 
                      key={activity.id}
                      className="bg-gray-50 p-4 rounded-lg"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center space-x-4">
                        {getActivityIcon(activity.type)}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{activity.description}</p>
                        </div>
                        <div className="inline-flex items-center text-sm text-gray-500">{activity.time}</div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
          
          {/* Quick Actions */}
          <motion.div 
            variants={itemVariants}
            className="bg-white shadow rounded-lg"
          >
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Quick Actions</h3>
              <p className="mt-1 text-sm text-gray-500">Common tasks for admins</p>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <nav className="space-y-3">
                <a href="/admin/news" className="bg-purple-50 hover:bg-purple-100 group flex items-center px-4 py-4 text-sm font-medium text-purple-700 rounded-md transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Add New Article
                </a>
                <a href="/admin/events" className="bg-blue-50 hover:bg-blue-100 group flex items-center px-4 py-4 text-sm font-medium text-blue-700 rounded-md transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Create Event
                </a>
                <a href="/admin/announcements" className="bg-green-50 hover:bg-green-100 group flex items-center px-4 py-4 text-sm font-medium text-green-700 rounded-md transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Post Announcement
                </a>
              </nav>
            </div>
          </motion.div>
        </div>
        
        {/* Welcome Message */}
        <motion.div 
          variants={itemVariants}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg overflow-hidden"
        >
          <div className="px-6 py-8 md:p-10 md:flex md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Welcome to the MUHASSO Administration Portal
              </h2>
              <p className="mt-2 text-white text-opacity-90">
                This admin section gives you control over the website content. Manage news articles, events, and announcements from a central location.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <a href="#" className="inline-flex items-center px-6 py-3 border border-white border-opacity-25 rounded-md bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm text-base font-medium text-white hover:bg-opacity-20 transition-colors">
                View User Guide
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AdminLayout>
  );
}
