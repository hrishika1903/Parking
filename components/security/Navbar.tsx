// src/app/components/Navbar.tsx
'use client';

import React from 'react';
import { Car, Moon, Sun, User, Menu, Bell } from 'lucide-react';
import { NavbarProps } from '@/app/types';

const Navbar: React.FC<NavbarProps> = ({ 
  darkMode, 
  setDarkMode, 
  setCurrentPage, 
  setMobileMenuOpen, 
  mobileMenuOpen 
}) => {
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';

  return (
    <nav className={`${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-green-200'
    } border-b px-4 md:px-6 py-3 md:py-4 sticky top-0 z-40 backdrop-blur-lg bg-opacity-90 transition-all duration-300 shadow-sm`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-green-50'
            } transform hover:scale-110 active:scale-95`}
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 md:gap-3 animate-fade-in">
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-lg shadow-lg transform transition-transform hover:rotate-12">
              <Car className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h1 className={`text-sm md:text-xl font-bold ${textClass} hidden sm:block`}>
              Parking Management - Security
            </h1>
            <h1 className={`text-sm font-bold ${textClass} sm:hidden`}>
              PMS Security
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <button className={`p-2 rounded-lg relative transition-all duration-300 ${
            darkMode ? 'hover:bg-gray-700' : 'hover:bg-green-50'
          } transform hover:scale-110 active:scale-95`}>
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300 animate-swing" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </button>
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className={`p-2 rounded-lg transition-all duration-300 ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-green-50'
            } transform hover:scale-110 active:scale-95 hover:rotate-180`}
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-green-600" />
            )}
          </button>
          <button 
            onClick={() => setCurrentPage('profile')} 
            className={`p-2 rounded-lg transition-all duration-300 ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-green-50'
            } transform hover:scale-110 active:scale-95`}
          >
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-1.5 rounded-full">
              <User className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;