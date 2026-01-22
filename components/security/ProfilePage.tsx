// src/app/components/ProfilePage.tsx
'use client';

import React, { useState } from 'react';
import { ArrowLeft, Phone, Mail, User, Upload } from 'lucide-react';
import { BasePageProps } from '@/app/types';

const ProfilePage: React.FC<BasePageProps> = ({ setCurrentPage, darkMode }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const cardBgClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
  const mutedTextClass = darkMode ? 'text-gray-400' : 'text-gray-600';

  if (isEditing) {
    return (
      <div className="space-y-4 md:space-y-6 animate-fade-in">
        <div className="flex items-center gap-3 animate-slide-down">
          <button 
            onClick={() => setIsEditing(false)}
            className={`p-2 rounded-lg transition-all duration-300 ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-green-50'
            } transform hover:scale-110 active:scale-95`}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className={`text-xl md:text-2xl font-bold ${textClass}`}>Edit Profile</h2>
        </div>

        <div className={`${cardBgClass} p-4 md:p-6 rounded-xl shadow-lg max-w-2xl mx-auto border-2 border-green-200 dark:border-green-700 animate-slide-up`}>
          <div className="space-y-4">
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="relative group">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-3xl md:text-4xl font-bold shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  SO
                </div>
                <button className="absolute bottom-0 right-0 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95">
                  <Upload className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>
            </div>
            
            {[
              { label: 'Name', type: 'text' as const, value: 'Security Officer', hasVerify: false },
              { label: 'Phone', type: 'tel' as const, value: '+91 9876543210', hasVerify: true },
              { label: 'Email', type: 'email' as const, value: 'security@parking.com', hasVerify: false },
            ].map((field, idx) => (
              <div 
                key={idx}
                style={{ animationDelay: `${idx * 100}ms` }}
                className="animate-slide-left"
              >
                <label className={`block text-xs md:text-sm ${mutedTextClass} mb-2 font-semibold`}>
                  {field.label}
                </label>
                <div className="flex gap-2">
                  <input 
                    type={field.type}
                    defaultValue={field.value}
                    className={`flex-1 px-3 md:px-4 py-2 md:py-3 rounded-lg border-2 text-sm md:text-base transition-all duration-300 ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                        : 'bg-white border-gray-300 focus:border-green-500'
                    } focus:outline-none focus:ring-2 focus:ring-green-200`} 
                  />
                  {field.hasVerify && (
                    <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-3 md:px-4 py-2 rounded-lg text-sm md:text-base whitespace-nowrap transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                      Verify
                    </button>
                  )}
                </div>
              </div>
            ))}
            
            <div className="animate-slide-left" style={{ animationDelay: '300ms' }}>
              <label className={`block text-xs md:text-sm ${mutedTextClass} mb-2 font-semibold`}>
                Address
              </label>
              <textarea 
                defaultValue="123 Security Lane, City" 
                className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border-2 text-sm md:text-base transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                    : 'bg-white border-gray-300 focus:border-green-500'
                } h-20 md:h-24 focus:outline-none focus:ring-2 focus:ring-green-200`} 
              />
            </div>
            
            <button 
              onClick={() => setIsEditing(false)} 
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 md:space-y-6 animate-fade-in">
      <div className="flex items-center gap-3 animate-slide-down">
        <button 
          onClick={() => setCurrentPage('dashboard')}
          className={`p-2 rounded-lg transition-all duration-300 ${
            darkMode ? 'hover:bg-gray-700' : 'hover:bg-green-50'
          } transform hover:scale-110 active:scale-95`}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className={`text-xl md:text-3xl font-bold ${textClass}`}>Profile</h2>
          <p className={`text-sm ${mutedTextClass}`}>Your account details</p>
        </div>
      </div>

      <div className={`${cardBgClass} p-4 md:p-6 rounded-xl shadow-lg max-w-2xl mx-auto border-2 border-transparent hover:border-green-200 dark:hover:border-green-700 transition-all duration-300 animate-slide-up`}>
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-3xl md:text-4xl font-bold mb-4 shadow-lg animate-scale-in">
            SO
          </div>
          <h3 className={`text-lg md:text-xl font-bold ${textClass}`}>Security Officer</h3>
          <div className="mt-2 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className={`text-sm ${mutedTextClass}`}>Active</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {[
            { icon: Phone, label: 'Phone', value: '+91 9876543210' },
            { icon: Mail, label: 'Email', value: 'security@parking.com' },
            { icon: User, label: 'Address', value: '123 Security Lane, City' },
          ].map((item, idx) => (
            <div 
              key={idx}
              style={{ animationDelay: `${idx * 100}ms` }}
              className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 animate-slide-right ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-green-50 hover:bg-green-100'
              }`}
            >
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-lg shadow-md">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-xs md:text-sm ${mutedTextClass}`}>{item.label}</p>
                <p className={`${textClass} text-sm md:text-base break-words font-medium`}>{item.value}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={() => setIsEditing(true)} 
          className="w-full mt-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;