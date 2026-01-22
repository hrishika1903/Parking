// src/app/components/IdentifyVehiclePage.tsx
'use client';

import React, { useState } from 'react';
import { ArrowLeft, Search, Upload, Phone } from 'lucide-react';
import { BasePageProps, Vehicle } from '@/app/types';

const IdentifyVehiclePage: React.FC<BasePageProps> = ({ setCurrentPage, darkMode }) => {
  const [vehicleSearch, setVehicleSearch] = useState<string>('');
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | 'not-found' | null>(null);
  
  const cardBgClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
  const mutedTextClass = darkMode ? 'text-gray-400' : 'text-gray-600';

  const mockVehicles: Vehicle[] = [
    { 
      id: 1, 
      number: 'KA01AB1234', 
      type: '4-wheeler', 
      color: 'Red', 
      fuel: 'Petrol', 
      userName: 'John Doe', 
      phone: '+91 9876543210', 
      email: 'john@example.com', 
      role: 'Student' 
    },
  ];

  const handleSearch = () => {
    const vehicle = mockVehicles.find(v => 
      v.number.toLowerCase().includes(vehicleSearch.toLowerCase())
    );
    setSelectedVehicle(vehicle || 'not-found');
  };

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
          <h2 className={`text-xl md:text-3xl font-bold ${textClass}`}>Identify Vehicle</h2>
          <p className={`text-sm ${mutedTextClass}`}>Search vehicle details</p>
        </div>
      </div>

      <div className={`${cardBgClass} p-4 md:p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-green-200 dark:hover:border-green-700 transition-all duration-300 animate-slide-up`}>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter Vehicle Number"
              value={vehicleSearch}
              onChange={(e) => setVehicleSearch(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className={`flex-1 px-3 md:px-4 py-2 md:py-3 rounded-lg border-2 transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                  : 'bg-white border-gray-300 focus:border-green-500'
              } focus:outline-none focus:ring-2 focus:ring-green-200`}
            />
            <button 
              onClick={handleSearch} 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <Search className="w-4 h-4 md:w-5 md:h-5" /> Search
            </button>
          </div>
          
          <div className={`border-2 border-dashed rounded-lg p-6 md:p-8 text-center transition-all duration-300 cursor-pointer ${
            darkMode 
              ? 'border-gray-600 hover:border-green-500 hover:bg-gray-700' 
              : 'border-gray-300 hover:border-green-500 hover:bg-green-50'
          }`}>
            <Upload className={`w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 ${mutedTextClass} animate-bounce-slow`} />
            <p className={`${mutedTextClass} text-sm md:text-base mb-2`}>Upload vehicle image for OCR</p>
            <button className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-semibold text-sm md:text-base transition-colors">
              Browse Files
            </button>
          </div>
        </div>
      </div>

      {selectedVehicle && selectedVehicle !== 'not-found' && (
        <div className={`${cardBgClass} p-4 md:p-6 rounded-xl shadow-lg border-2 border-green-200 dark:border-green-700 transition-all duration-300 animate-scale-in`}>
          <h3 className={`text-lg md:text-xl font-semibold mb-4 ${textClass}`}>Vehicle Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {[
              { label: 'Vehicle Number', value: selectedVehicle.number },
              { label: 'Type', value: selectedVehicle.type },
              { label: 'Color', value: selectedVehicle.color },
              { label: 'Fuel Type', value: selectedVehicle.fuel },
              { label: 'User Name', value: selectedVehicle.userName },
              { label: 'Role', value: selectedVehicle.role },
              { label: 'Phone', value: selectedVehicle.phone },
              { label: 'Email', value: selectedVehicle.email },
            ].map((item, idx) => (
              <div 
                key={idx}
                style={{ animationDelay: `${idx * 50}ms` }}
                className={`p-3 rounded-lg animate-slide-up ${
                  darkMode ? 'bg-gray-700' : 'bg-green-50'
                }`}
              >
                <p className={`text-xs md:text-sm ${mutedTextClass}`}>{item.label}</p>
                <p className={`font-semibold ${textClass} text-sm md:text-base truncate`}>{item.value}</p>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 md:px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
            <Phone className="w-4 h-4" /> Call User
          </button>
        </div>
      )}

      {selectedVehicle === 'not-found' && (
        <div className={`${cardBgClass} p-4 md:p-6 rounded-xl shadow-lg border-2 border-red-500 animate-shake`}>
          <p className="text-red-500 font-semibold text-center">✗ Vehicle not found</p>
        </div>
      )}
    </div>
  );
};

export default IdentifyVehiclePage;