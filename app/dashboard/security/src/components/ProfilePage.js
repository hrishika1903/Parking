'use client';
import { useState } from 'react';
import { ArrowLeft, Phone, Mail, User, Upload } from 'lucide-react';

export default function ProfilePage({ setCurrentPage, darkMode }) {
  const [isEditing, setIsEditing] = useState(false);
  const cardBgClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
  const mutedTextClass = darkMode ? 'text-gray-400' : 'text-gray-600';

  if (isEditing) {
    return (
      <div className="space-y-6">
        <div className={`${cardBgClass} p-6 rounded-xl shadow-lg max-w-2xl mx-auto`}>
          <h2 className={`text-2xl font-bold mb-6 ${textClass}`}>Edit Profile</h2>
          <div className="space-y-4">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center text-white text-4xl font-bold">
                  SO
                </div>
                <button className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full">
                  <Upload className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div>
              <label className={`block text-sm ${mutedTextClass} mb-2`}>Name</label>
              <input 
                type="text" 
                defaultValue="Security Officer" 
                className={`w-full px-4 py-3 rounded-lg border ${
                  darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                }`} 
              />
            </div>
            <div>
              <label className={`block text-sm ${mutedTextClass} mb-2`}>Phone</label>
              <div className="flex gap-2">
                <input 
                  type="tel" 
                  defaultValue="+91 9876543210" 
                  className={`flex-1 px-4 py-3 rounded-lg border ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                  }`} 
                />
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                  Verify
                </button>
              </div>
            </div>
            <div>
              <label className={`block text-sm ${mutedTextClass} mb-2`}>Email</label>
              <input 
                type="email" 
                defaultValue="security@parking.com" 
                className={`w-full px-4 py-3 rounded-lg border ${
                  darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                }`} 
              />
            </div>
            <div>
              <label className={`block text-sm ${mutedTextClass} mb-2`}>Address</label>
              <textarea 
                defaultValue="123 Security Lane, City" 
                className={`w-full px-4 py-3 rounded-lg border ${
                  darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                } h-24`} 
              />
            </div>
            <button 
              onClick={() => setIsEditing(false)} 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className={`${cardBgClass} p-6 rounded-xl shadow-lg max-w-2xl mx-auto`}>
        <h2 className={`text-2xl font-bold mb-6 ${textClass}`}>Profile</h2>
        <div className="flex flex-col items-center mb-6">
          <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center text-white text-4xl font-bold mb-4">
            SO
          </div>
          <h3 className={`text-xl font-bold ${textClass}`}>Security Officer</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Phone className={`w-5 h-5 ${mutedTextClass}`} />
            <div>
              <p className={`text-sm ${mutedTextClass}`}>Phone</p>
              <p className={textClass}>+91 9876543210</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className={`w-5 h-5 ${mutedTextClass}`} />
            <div>
              <p className={`text-sm ${mutedTextClass}`}>Email</p>
              <p className={textClass}>security@parking.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <User className={`w-5 h-5 ${mutedTextClass}`} />
            <div>
              <p className={`text-sm ${mutedTextClass}`}>Address</p>
              <p className={textClass}>123 Security Lane, City</p>
            </div>
          </div>
        </div>
        <button 
          onClick={() => setIsEditing(true)} 
          className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Edit Profile
        </button>
      </div>
      <button 
        onClick={() => setCurrentPage('dashboard')} 
        className={`flex items-center gap-2 ${mutedTextClass} hover:text-gray-900 dark:hover:text-white transition-colors mx-auto block`}
      >
        <ArrowLeft className="w-4 h-4" /> Go Back
      </button>
    </div>
  );
}