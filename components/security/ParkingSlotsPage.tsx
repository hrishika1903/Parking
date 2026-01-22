// src/app/components/ParkingSlotsPage.tsx
'use client';

import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { BasePageProps, ParkingSlot, Vehicle } from '@/app/types';

const ParkingSlotsPage: React.FC<BasePageProps> = ({ setCurrentPage, darkMode }) => {
  const [selectedZone, setSelectedZone] = useState<string>('Zone A');
  const [selectedSlot, setSelectedSlot] = useState<ParkingSlot | null>(null);
  
  const cardBgClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
  const mutedTextClass = darkMode ? 'text-gray-400' : 'text-gray-600';

  const mockVehicles: Vehicle[] = [
    { number: 'KA01AB1234', userName: 'John Doe', type: '4-wheeler' },
    { number: 'KA02CD5678', userName: 'Jane Smith', type: '2-wheeler' },
  ];

  const generateSlots = (zone: string, count: number, occupiedCount: number): ParkingSlot[] => {
    return Array.from({ length: count }, (_, i) => ({ 
      id: `${zone}-${i + 1}`, 
      occupied: i < occupiedCount, 
      vehicle: i < occupiedCount ? mockVehicles[i % mockVehicles.length] : null
    }));
  };

  const mockSlots: Record<string, ParkingSlot[]> = {
    'Zone A': generateSlots('A', 20, 12),
    'Zone B': generateSlots('B', 15, 8),
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
          <h2 className={`text-xl md:text-3xl font-bold ${textClass}`}>Parking Slots</h2>
          <p className={`text-sm ${mutedTextClass}`}>View slot availability</p>
        </div>
      </div>

      <div className={`${cardBgClass} p-4 md:p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-green-200 dark:hover:border-green-700 transition-all duration-300 animate-slide-up`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <select
            value={selectedZone}
            onChange={(e) => setSelectedZone(e.target.value)}
            className={`px-3 md:px-4 py-2 md:py-3 rounded-lg border-2 transition-all duration-300 ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                : 'bg-white border-gray-300 focus:border-green-500'
            } focus:outline-none focus:ring-2 focus:ring-green-200 font-semibold`}
          >
            <option value="Zone A">Zone A</option>
            <option value="Zone B">Zone B</option>
          </select>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-br from-green-400 to-green-600 rounded shadow-sm"></div>
              <span className={`text-xs md:text-sm ${textClass} font-medium`}>Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-br from-red-400 to-red-600 rounded shadow-sm"></div>
              <span className={`text-xs md:text-sm ${textClass} font-medium`}>Occupied</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 md:gap-3">
          {mockSlots[selectedZone].map((slot, index) => (
            <button
              key={slot.id}
              onClick={() => slot.occupied && setSelectedSlot(slot)}
              style={{ animationDelay: `${index * 20}ms` }}
              className={`aspect-square rounded-lg font-semibold text-xs md:text-sm transition-all duration-300 animate-scale-in shadow-md ${
                slot.occupied
                  ? 'bg-gradient-to-br from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white cursor-pointer hover:scale-110 hover:shadow-lg'
                  : 'bg-gradient-to-br from-green-400 to-green-600 text-white cursor-default'
              } transform active:scale-95`}
              disabled={!slot.occupied}
            >
              {slot.id}
            </button>
          ))}
        </div>
      </div>

      {selectedSlot && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in backdrop-blur-sm" 
          onClick={() => setSelectedSlot(null)}
        >
          <div 
            className={`${cardBgClass} p-4 md:p-6 rounded-xl max-w-md w-full border-2 border-green-400 shadow-2xl animate-scale-in`} 
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className={`text-lg md:text-xl font-semibold mb-4 ${textClass} flex items-center gap-2`}>
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm">
                {selectedSlot.id.split('-')[1]}
              </div>
              Slot {selectedSlot.id} Details
            </h3>
            <div className="space-y-3">
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
                <p className={`text-xs md:text-sm ${mutedTextClass}`}>Vehicle Number</p>
                <p className={`font-semibold ${textClass} text-sm md:text-base`}>{selectedSlot.vehicle?.number || 'N/A'}</p>
              </div>
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
                <p className={`text-xs md:text-sm ${mutedTextClass}`}>Owner</p>
                <p className={`font-semibold ${textClass} text-sm md:text-base`}>{selectedSlot.vehicle?.userName || 'N/A'}</p>
              </div>
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
                <p className={`text-xs md:text-sm ${mutedTextClass}`}>Vehicle Type</p>
                <p className={`font-semibold ${textClass} text-sm md:text-base`}>{selectedSlot.vehicle?.type || 'N/A'}</p>
              </div>
              <button 
                onClick={() => setSelectedSlot(null)} 
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParkingSlotsPage;