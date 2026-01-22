// src/app/components/EntryExitPage.tsx
'use client';

import React, { useState } from 'react';
import { Car, ArrowLeft, Upload, LogIn, LogOut } from 'lucide-react';
import { BasePageProps, Activity } from '@/app/types';

const EntryExitPage: React.FC<BasePageProps> = ({ setCurrentPage, darkMode }) => {
  const [vehicleNumber, setVehicleNumber] = useState<string>('');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [actionType, setActionType] = useState<string>('');
  
  const cardBgClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
  const mutedTextClass = darkMode ? 'text-gray-400' : 'text-gray-600';

  const recentActivity: Activity[] = [
    { id: 1, slotNo: 'A-12', vehicleNo: 'MH12AB1234', userName: 'John Doe', action: 'Entered', time: '10:30 AM' },
    { id: 2, slotNo: 'B-05', vehicleNo: 'MH14CD5678', userName: 'Jane Smith', action: 'Exited', time: '10:15 AM' },
    { id: 3, slotNo: 'C-23', vehicleNo: 'MH01EF9012', userName: 'Mike Johnson', action: 'Entered', time: '09:45 AM' },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        setVehicleNumber('MH12XY7890');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAction = (type: string) => {
    setActionType(type);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setVehicleNumber('');
      setUploadedImage(null);
    }, 2000);
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
          <h2 className={`text-xl md:text-3xl font-bold ${textClass}`}>Mark Entry / Exit</h2>
          <p className={`text-sm ${mutedTextClass}`}>Record vehicle movements</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
        <div className={`${cardBgClass} rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 border-2 border-transparent hover:border-green-200 dark:hover:border-green-700 transition-all duration-300 animate-slide-left`}>
          <h3 className={`text-lg md:text-xl font-bold ${textClass} mb-4 md:mb-6 flex items-center`}>
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-lg mr-2">
              <Car className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            Vehicle Details
          </h3>

          <div className="space-y-4">
            <div>
              <label className={`block text-sm font-medium ${mutedTextClass} mb-2`}>
                Enter Vehicle Number
              </label>
              <input
                type="text"
                placeholder="e.g., MH12AB1234"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
                className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border-2 text-base md:text-lg font-mono transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                    : 'bg-white border-gray-300 focus:border-green-500'
                } focus:outline-none focus:ring-2 focus:ring-green-200`}
              />
            </div>

            <div className="flex items-center">
              <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
              <span className="px-4 text-sm text-gray-500">OR</span>
              <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
            </div>

            <div>
              <label className={`block text-sm font-medium ${mutedTextClass} mb-2`}>
                Upload Image
              </label>
              <div className={`border-2 border-dashed rounded-xl p-4 md:p-6 text-center transition-all duration-300 cursor-pointer ${
                darkMode 
                  ? 'border-gray-600 hover:border-green-500 hover:bg-gray-700' 
                  : 'border-gray-300 hover:border-green-500 hover:bg-green-50'
              }`}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  {uploadedImage ? (
                    <div className="animate-scale-in">
                      <img src={uploadedImage} alt="Uploaded" className="max-h-24 md:max-h-32 mx-auto mb-2 rounded shadow-lg" />
                      <p className="text-sm text-green-600 font-semibold">✓ Image uploaded</p>
                    </div>
                  ) : (
                    <div>
                      <Upload className={`w-8 h-8 md:w-12 md:h-12 mx-auto ${mutedTextClass} mb-2 animate-bounce-slow`} />
                      <p className={`text-sm ${mutedTextClass}`}>Click to upload</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <button
                onClick={() => handleAction('entry')}
                disabled={!vehicleNumber}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                <LogIn className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">Entry</span>
              </button>
              <button
                onClick={() => handleAction('exit')}
                disabled={!vehicleNumber}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                <LogOut className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">Exit</span>
              </button>
            </div>

            {showSuccess && (
              <div className="p-3 md:p-4 bg-green-100 dark:bg-green-900 border-2 border-green-400 rounded-lg animate-slide-up">
                <p className="text-green-800 dark:text-green-200 text-center font-medium text-sm md:text-base">
                  ✓ {vehicleNumber} marked as {actionType === 'entry' ? 'Entered' : 'Exited'}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className={`${cardBgClass} rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 border-2 border-transparent hover:border-green-200 dark:hover:border-green-700 transition-all duration-300 animate-slide-right`}>
          <h3 className={`text-lg md:text-xl font-bold ${textClass} mb-4 md:mb-6`}>Recent Activity</h3>
          <div className="space-y-3 max-h-96 md:max-h-[500px] overflow-y-auto custom-scrollbar">
            {recentActivity.map((activity, index) => (
              <div
                key={activity.id}
                style={{ animationDelay: `${index * 100}ms` }}
                className={`p-3 md:p-4 rounded-xl transition-all duration-300 hover:shadow-md animate-scale-in border-2 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 hover:border-green-600' 
                    : 'bg-gray-50 border-gray-200 hover:border-green-400'
                } transform hover:scale-102`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1 min-w-0">
                    <p className={`font-mono font-bold ${textClass} text-sm md:text-base truncate`}>
                      {activity.vehicleNo}
                    </p>
                    <p className={`text-xs md:text-sm ${mutedTextClass} truncate`}>
                      {activity.userName}
                    </p>
                  </div>
                  <span className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-2 ${
                    activity.action === 'Entered' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                      : 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
                  }`}>
                    {activity.action}
                  </span>
                </div>
                <div className={`flex justify-between text-xs md:text-sm ${mutedTextClass}`}>
                  <span>Slot: {activity.slotNo}</span>
                  <span>{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryExitPage;