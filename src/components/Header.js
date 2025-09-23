'use client';

import React, { useState, useEffect } from 'react';
import { Search, Menu, ChevronDown, X, Globe } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('English');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  
  // Get active item based on current path
  const getActiveItem = (path) => {
    if (path === '/') return 'Home';
    if (path === '/associations') return 'Associations';
    if (path === '/religion-clubs') return 'Religion & Clubs';
    if (path === '/news') return 'News & Events';

    if (path === '/contact') return 'Contact & Support';
    if (path.startsWith('/associations/')) return 'Associations'; // For association details pages
    if (path.startsWith('/religion-clubs/')) return 'Religion & Clubs'; // For religion & clubs details pages
    return 'Home'; // Default to Home
  };
  
  const [activeItem, setActiveItem] = useState(getActiveItem(pathname));
  
  // Remove any body styles manipulation to avoid blank page issues
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('#nav-menu') && !event.target.closest('.nav-toggle')) {
        setIsOpen(false);
      }
      
      if (showLanguageDropdown && !event.target.closest('#language-dropdown')) {
        setShowLanguageDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, showLanguageDropdown]);
  
  // Effect to update active item when pathname changes
  useEffect(() => {
    setActiveItem(getActiveItem(pathname));
  }, [pathname]);

  // Navigation items in both languages
  const navItemsData = {
    English: [
      { name: 'Home', href: '/' },
      { name: 'Associations', href: '/associations' },
      { name: 'Religion & Clubs', href: '/religion-clubs' },
      { name: 'News & Events', href: '/news' },
      { name: 'Contact & Support', href: '/contact' },
    ],
    Swahili: [
      { name: 'Mwanzo', href: '/' },
      { name: 'Vyama', href: '/associations' },
      { name: 'Dini & Vilabu', href: '/religion-clubs' },
      { name: 'Habari na Matukio', href: '/news' },
      { name: 'Mawasiliano na Msaada', href: '/contact' },
    ]
  };
  
  const navItems = navItemsData[language];

  return (
    <header className="w-full bg-gray-100 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative w-12 h-12">
            <Image 
              src="/asscociation_details/muhasso_logo.png" 
              alt="MUHASSO Logo" 
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-blue-900 font-bold text-xl">MUHASSO</span>
            <span className="text-blue-900 text-xs leading-tight">
              Muhimbili University<br />
              Students Organization
            </span>
          </div>
        </Link>

        {/* Search Bar - Hide on mobile */}
        <div className="hidden md:block flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Language Selector - Hide on mobile */}
          <div 
            id="language-dropdown"
            className="hidden sm:block relative"
          >
            <div 
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)} 
              className="flex items-center space-x-1 cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors duration-200"
            >
              <Globe className="w-4 h-4 mr-1 text-blue-900" />
              <span className="text-gray-700 font-medium">{language}</span>
              <ChevronDown className="w-4 h-4 text-gray-700" />
            </div>
            
            {showLanguageDropdown && (
              <div className="absolute top-full right-0 mt-1 bg-white shadow-lg rounded-lg overflow-hidden z-50 w-32 py-1 border border-gray-200">
                <button 
                  onClick={() => {
                    setLanguage('English');
                    setShowLanguageDropdown(false);
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${language === 'English' ? 'bg-blue-50 text-blue-900' : ''}`}
                >
                  English
                </button>
                <button 
                  onClick={() => {
                    setLanguage('Swahili');
                    setShowLanguageDropdown(false);
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${language === 'Swahili' ? 'bg-blue-50 text-blue-900' : ''}`}
                >
                  Swahili
                </button>
              </div>
            )}
          </div>

          {/* Mobile nav toggle link instead of button */}
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
            className="nav-toggle md:hidden flex items-center px-3 py-2 text-blue-900 hover:text-blue-700 transition-colors"
          >
            <span className="mr-2 text-sm font-medium">
              {language === 'English' ? 'Menu' : 'Menyu'}
            </span>
            <ChevronDown 
              className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
            />
          </a>
        </div>
      </div>

      {/* Desktop Navigation Links - only visible on desktop */}
      <div className="hidden md:flex absolute top-full left-0 right-0 bg-blue-50 shadow-md z-20">
        <div className="container mx-auto px-6 py-1">
          <nav className="flex justify-center">
            {navItems.map((item, index) => (
              <Link 
                key={item.name}
                href={item.href}
                className={`px-5 py-3 mx-1 font-medium transition-colors duration-200 border-b-2 ${
                  activeItem === item.name 
                    ? 'border-blue-600 text-blue-900' 
                    : 'border-transparent text-gray-700 hover:text-blue-900 hover:border-blue-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Push-down navigation instead of overlay */}
      <div 
        id="nav-menu"
        className="w-full bg-white shadow-md"
        style={{
          height: isOpen ? 'auto' : '0',
          overflow: 'hidden',
          transition: 'height 0.3s ease'
        }}
      >
        {/* Mobile Menu Contents - only shown on smaller screens */}
        <div className="md:hidden p-4">
          {/* Navigation Items */}
          <nav className="grid gap-2">
            {navItems.map((item, index) => (
              <Link 
                key={item.name}
                href={item.href} 
                className={`block py-3 px-4 rounded-lg transition-colors ${
                  activeItem === item.name 
                    ? 'bg-blue-100 text-blue-900 font-medium' 
                    : 'bg-gray-50 text-gray-700 hover:bg-blue-50'
                }`}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile-only Search */}
          <div className="mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={language === 'English' ? 'Search' : 'Tafuta'}
                className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
          </div>
          
          {/* Mobile Language Selector */}
          <div className="mt-4 border-t pt-4">
            <p className="text-sm text-gray-500 mb-2">
              {language === 'English' ? 'Change Language' : 'Badilisha Lugha'}
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => setLanguage('English')} 
                className={`px-4 py-2 rounded-md text-center ${
                  language === 'English' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                English
              </button>
              <button 
                onClick={() => setLanguage('Swahili')} 
                className={`px-4 py-2 rounded-md text-center ${
                  language === 'Swahili' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Swahili
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;