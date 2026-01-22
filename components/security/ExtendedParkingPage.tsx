// src/app/components/ExtendedParkingPage.tsx
'use client';

import React, { useState } from 'react';
import { ArrowLeft, Check, X } from 'lucide-react';
import { BasePageProps, ExtendedRequest } from '@/app/types';

const ExtendedParkingPage: React.FC<BasePageProps> = ({ setCurrentPage, darkMode }) => {
  const [extendedRequests, setExtendedRequests] = useState<ExtendedRequest[]>([
    { id: 1, slotNo: 'A-12', vehicleNo: 'KA01AB1234', fromTime: '2:00 PM', toTime: '6:00 PM', status: 'pending' },
    { id: 2, slotNo: 'B-05', vehicleNo: 'KA02CD5678', fromTime: '3:00 PM', toTime: '5:00 PM', status: 'pending' },
  ]);
  
  const cardBgClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
  const mutedTextClass = darkMode ? 'text-gray-400' : 'text-gray-600';

  const handleApprove = (id: number) => {
    setExtendedRequests(prev => 
      prev.map(req => req.id === id ? { ...req, status: 'approved' as const } : req)
    );
  };

  const handleReject = (id: number) => {
    setExtendedRequests(prev => 
      prev.map(req => req.id === id ? { ...req, status: 'rejected' as const } : req)
    );
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
          <h2 className={`text-xl md:text-3xl font-bold ${textClass}`}>Extended Parking</h2>
          <p className={`text-sm ${mutedTextClass}`}>Approve or reject requests</p>
        </div>
      </div>

      <div className={`${cardBgClass} p-4 md:p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-green-200 dark:hover:border-green-700 transition-all duration-300 animate-slide-up`}>
        <h3 className={`text-lg md:text-xl font-semibold mb-4 ${textClass}`}>Pending Requests</h3>
        <div className="space-y-3">
          {extendedRequests.filter(r => r.status === 'pending').map((req, index) => (
            <div 
              key={req.id} 
              style={{ animationDelay: `${index * 100}ms` }}
              className={`p-3 md:p-4 rounded-lg border-2 transition-all duration-300 animate-scale-in ${
                darkMode 
                  ? 'border-gray-700 bg-gray-700 hover:border-green-600' 
                  : 'border-gray-200 bg-gray-50 hover:border-green-400'
              } hover:shadow-md`}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                <div>
                  <p className={`text-xs ${mutedTextClass}`}>Slot</p>
                  <p className={`font-semibold ${textClass} text-sm`}>{req.slotNo}</p>
                </div>
                <div>
                  <p className={`text-xs ${mutedTextClass}`}>Vehicle</p>
                  <p className={`font-semibold ${textClass} text-sm`}>{req.vehicleNo}</p>
                </div>
                <div>
                  <p className={`text-xs ${mutedTextClass}`}>From</p>
                  <p className={`font-semibold ${textClass} text-sm`}>{req.fromTime}</p>
                </div>
                <div>
                  <p className={`text-xs ${mutedTextClass}`}>To</p>
                  <p className={`font-semibold ${textClass} text-sm`}>{req.toTime}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleApprove(req.id)} 
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-3 py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-1 text-sm transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                >
                  <Check className="w-4 h-4" /> Approve
                </button>
                <button 
                  onClick={() => handleReject(req.id)} 
                  className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-3 py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-1 text-sm transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                >
                  <X className="w-4 h-4" /> Reject
                </button>
              </div>
            </div>
          ))}
          {extendedRequests.filter(r => r.status === 'pending').length === 0 && (
            <div className={`text-center py-8 ${mutedTextClass} animate-fade-in`}>
              <p className="text-lg">No pending requests</p>
              <p className="text-sm mt-2">All requests have been processed</p>
            </div>
          )}
        </div>
      </div>

      <div className={`${cardBgClass} p-4 md:p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-green-200 dark:hover:border-green-700 transition-all duration-300 animate-slide-up`}>
        <h3 className={`text-lg md:text-xl font-semibold mb-4 ${textClass}`}>Approved Requests</h3>
        <div className="space-y-3">
          {extendedRequests.filter(r => r.status === 'approved').map((req, index) => (
            <div 
              key={req.id} 
              style={{ animationDelay: `${index * 100}ms` }}
              className={`p-3 md:p-4 rounded-lg border-2 transition-all duration-300 animate-scale-in ${
                darkMode 
                  ? 'bg-green-900/20 border-green-700' 
                  : 'bg-green-50 border-green-200'
              }`}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div>
                  <p className={`text-xs ${mutedTextClass}`}>Slot</p>
                  <p className={`font-semibold ${textClass} text-sm`}>{req.slotNo}</p>
                </div>
                <div>
                  <p className={`text-xs ${mutedTextClass}`}>Vehicle</p>
                  <p className={`font-semibold ${textClass} text-sm`}>{req.vehicleNo}</p>
                </div>
                <div>
                  <p className={`text-xs ${mutedTextClass}`}>From</p>
                  <p className={`font-semibold ${textClass} text-sm`}>{req.fromTime}</p>
                </div>
                <div>
                  <p className={`text-xs ${mutedTextClass}`}>To</p>
                  <p className={`font-semibold ${textClass} text-sm`}>{req.toTime}</p>
                </div>
              </div>
            </div>
          ))}
          {extendedRequests.filter(r => r.status === 'approved').length === 0 && (
            <div className={`text-center py-8 ${mutedTextClass} animate-fade-in`}>
              <p className="text-lg">No approved requests</p>
              <p className="text-sm mt-2">Approved requests will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExtendedParkingPage;