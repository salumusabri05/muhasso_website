'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';

const AdminLayout = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default closed on mobile
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState('Admin');
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true); // Open sidebar on desktop
      } else {
        setIsSidebarOpen(false); // Close sidebar on mobile
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          router.push('/admin');
          return;
        }
        
        // Set user name if available
        if (session.user?.email) {
          setUserName(session.user.email.split('@')[0]);
        }
        
      } catch (error) {
        console.error('Error checking session:', error);
        router.push('/admin');
      } finally {
        setIsLoading(false);
      }
    };
    
    checkSession();
  }, [router]);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      router.push('/admin');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: 'News', path: '/admin/news', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
    { name: 'Events', path: '/admin/events', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { name: 'Announcements', path: '/admin/announcements', icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z' }
  ];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const sidebarVariants = {
    open: {
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    closed: {
      x: '-100%',
      transition: { duration: 0.3, ease: "easeIn" }
    }
  };

  const desktopSidebarVariants = {
    open: {
      width: '16rem',
      transition: { duration: 0.3 }
    },
    closed: {
      width: '5rem',
      transition: { duration: 0.3 }
    }
  };

  const textVariants = {
    open: {
      opacity: 1,
      x: 0,
      display: 'block',
      transition: { duration: 0.3, delay: 0.1 }
    },
    closed: {
      opacity: 0,
      x: -10,
      transitionEnd: {
        display: 'none'
      },
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm z-20 sticky top-0">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Toggle sidebar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="flex items-center ml-2 sm:ml-4">
                <Image 
                  src="/asscociation_details/muhasso_logo.png" 
                  alt="MUHASSO Logo" 
                  width={32} 
                  height={32} 
                  className="object-contain"
                />
                <h1 className="ml-2 sm:ml-3 text-lg sm:text-xl font-semibold text-gray-800 hidden sm:block">MUHASSO Admin</h1>
                <h1 className="ml-2 text-base font-semibold text-gray-800 sm:hidden">Admin</h1>
              </div>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="text-gray-600 text-xs sm:text-sm hidden md:inline">Welcome, {userName}</span>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-2 sm:px-3 py-2 border border-transparent text-xs sm:text-sm leading-4 font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1 relative">
        {/* Mobile Overlay */}
        {isMobile && isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          />
        )}

        {/* Sidebar */}
        <motion.nav 
          className={`bg-white shadow-sm overflow-hidden ${
            isMobile 
              ? 'fixed top-16 left-0 bottom-0 w-64 z-40' 
              : 'relative z-10'
          }`}
          variants={isMobile ? sidebarVariants : desktopSidebarVariants}
          initial={isMobile ? "closed" : "open"}
          animate={isSidebarOpen ? "open" : "closed"}
        >
          <div className="py-4 h-full overflow-y-auto">
            <div className={`px-4 pb-4 border-b border-gray-200 ${!isMobile && !isSidebarOpen ? 'hidden' : ''}`}>
              <p className="text-xs font-medium text-gray-500 uppercase">Navigation</p>
            </div>
            <ul className="mt-4 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      onClick={() => isMobile && setIsSidebarOpen(false)}
                      className={`flex items-center px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-purple-50 text-purple-700 border-r-4 border-purple-500'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-5 w-5 flex-shrink-0 ${isActive ? 'text-purple-500' : 'text-gray-500'}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                      {(isMobile || isSidebarOpen) && (
                        <motion.span 
                          className="ml-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {item.name}
                        </motion.span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.nav>
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
      
      {/* Footer */}
      <footer className="bg-white shadow-sm py-3 sm:py-4 mt-auto">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs sm:text-sm text-gray-500">
            &copy; {new Date().getFullYear()} MUHASSO. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AdminLayout;
