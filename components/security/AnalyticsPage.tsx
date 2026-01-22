// src/app/components/AnalyticsPage.tsx
'use client';

import React from 'react';
import { ArrowLeft, BarChart3, FileText, Download } from 'lucide-react';
import { BasePageProps, Stat, ZoneData } from '@/app/types';

const AnalyticsPage: React.FC<BasePageProps> = ({ setCurrentPage, darkMode }) => {
  const cardBgClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
  const mutedTextClass = darkMode ? 'text-gray-400' : 'text-gray-600';

  const stats: Stat[] = [
    { label: 'Total Slots', value: '35', color: 'bg-green-500' },
    { label: 'Entered', value: '127', color: 'bg-emerald-500' },
    { label: 'Exited', value: '115', color: 'bg-teal-500' },
    { label: 'Parked', value: '20', color: 'bg-lime-500' },
  ];

  const zoneData: ZoneData[] = [
    { zone: 'Zone A', total: 20, filled: 12, occupancy: 60 },
    { zone: 'Zone B', total: 15, filled: 8, occupancy: 53 },
  ];

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
          <h2 className={`text-xl md:text-3xl font-bold ${textClass}`}>Analytics</h2>
          <p className={`text-sm ${mutedTextClass}`}>View parking statistics</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {stats.map((stat, idx) => (
          <div 
            key={idx}
            style={{ animationDelay: `${idx * 100}ms` }}
            className={`${cardBgClass} p-4 md:p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-green-200 dark:hover:border-green-700 transition-all duration-300 animate-scale-in hover:shadow-xl transform hover:scale-105`}
          >
            <div className={`bg-gradient-to-br from-green-400 to-green-600 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-2 md:mb-3 shadow-md`}>
              <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <p className={`text-xs md:text-sm ${mutedTextClass}`}>{stat.label}</p>
            <p className={`text-2xl md:text-3xl font-bold ${textClass} bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className={`${cardBgClass} p-4 md:p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-green-200 dark:hover:border-green-700 transition-all duration-300 animate-slide-up`}>
        <h3 className={`text-lg md:text-xl font-semibold mb-4 ${textClass}`}>Zone Occupancy</h3>
        <div className="space-y-4">
          {zoneData.map((zone, idx) => (
            <div 
              key={idx}
              style={{ animationDelay: `${idx * 150}ms` }}
              className="animate-slide-right"
            >
              <div className="flex justify-between mb-2">
                <div>
                  <span className={`${textClass} font-semibold text-sm md:text-base`}>{zone.zone}</span>
                  <span className={`${mutedTextClass} text-xs md:text-sm ml-2`}>
                    {zone.filled}/{zone.total} slots
                  </span>
                </div>
                <span className={`${textClass} font-bold text-sm md:text-base bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent`}>
                  {zone.occupancy}%
                </span>
              </div>
              <div className={`w-full rounded-full h-3 md:h-4 overflow-hidden shadow-inner ${
                darkMode ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <div 
                  className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 h-3 md:h-4 rounded-full transition-all duration-1000 ease-out shadow-md" 
                  style={{ 
                    width: `${zone.occupancy}%`,
                    animation: 'progress-fill 1s ease-out'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-slide-up">
        <button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 md:px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
          <FileText className="w-4 h-4 md:w-5 md:h-5" /> 
          <span className="text-sm md:text-base">CSV Report</span>
        </button>
        <button className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-4 md:px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
          <Download className="w-4 h-4 md:w-5 md:h-5" /> 
          <span className="text-sm md:text-base">Full Report</span>
        </button>
      </div>
    </div>
  );
};

export default AnalyticsPage;