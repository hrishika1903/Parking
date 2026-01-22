// src/app/components/ComplaintsPage.tsx
'use client';

import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { BasePageProps, Complaint } from '@/app/types';

const ComplaintsPage: React.FC<BasePageProps> = ({ setCurrentPage, darkMode }) => {
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(null);
  const [replyText, setReplyText] = useState<string>('');
  const [complaints, setComplaints] = useState<Complaint[]>([
    { id: 1, userName: 'John Doe', complaint: 'Parking slot marking is not clear', replies: [] },
    { id: 2, userName: 'Jane Smith', complaint: 'Vehicle was scratched in parking', replies: ['We will investigate this matter'] },
  ]);
  
  const cardBgClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
  const mutedTextClass = darkMode ? 'text-gray-400' : 'text-gray-600';

  const handleSendReply = () => {
    if (replyText.trim() && selectedComplaint) {
      setComplaints(prev => prev.map(c => 
        c.id === selectedComplaint.id 
          ? { ...c, replies: [...c.replies, replyText] } 
          : c
      ));
      setReplyText('');
      setSelectedComplaint(null);
    }
  };

  if (selectedComplaint) {
    return (
      <div className="space-y-4 md:space-y-6 animate-fade-in">
        <div className="flex items-center gap-3 animate-slide-down">
          <button 
            onClick={() => setSelectedComplaint(null)}
            className={`p-2 rounded-lg transition-all duration-300 ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-green-50'
            } transform hover:scale-110 active:scale-95`}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className={`text-xl md:text-2xl font-bold ${textClass}`}>Complaint Details</h2>
        </div>

        <div className={`${cardBgClass} p-4 md:p-6 rounded-xl shadow-lg border-2 border-green-200 dark:border-green-700 animate-slide-up`}>
          <div className="space-y-4">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
              <p className={`text-xs md:text-sm ${mutedTextClass} mb-1`}>From</p>
              <p className={`${textClass} font-semibold text-base md:text-lg`}>{selectedComplaint.userName}</p>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
              <p className={`text-xs md:text-sm ${mutedTextClass} mb-1`}>Complaint</p>
              <p className={`${textClass} text-sm md:text-base`}>{selectedComplaint.complaint}</p>
            </div>
            {selectedComplaint.replies.length > 0 && (
              <div>
                <p className={`text-xs md:text-sm ${mutedTextClass} mb-2 font-semibold`}>Previous Replies</p>
                {selectedComplaint.replies.map((reply, idx) => (
                  <div 
                    key={idx}
                    style={{ animationDelay: `${idx * 100}ms` }}
                    className={`p-3 rounded-lg mb-2 animate-slide-left ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-100'
                    }`}
                  >
                    <p className={`${textClass} text-sm`}>{reply}</p>
                  </div>
                ))}
              </div>
            )}
            <div>
              <label className={`block text-xs md:text-sm ${mutedTextClass} mb-2 font-semibold`}>
                Your Reply
              </label>
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Type your reply..."
                className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border-2 transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                    : 'bg-white border-gray-300 focus:border-green-500'
                } h-24 md:h-32 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-200`}
              />
            </div>
            <button 
              onClick={handleSendReply} 
              disabled={!replyText.trim()}
              className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              Send Reply
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
          <h2 className={`text-xl md:text-3xl font-bold ${textClass}`}>Complaints</h2>
          <p className={`text-sm ${mutedTextClass}`}>View and respond</p>
        </div>
      </div>

      <div className={`${cardBgClass} p-4 md:p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-green-200 dark:hover:border-green-700 transition-all duration-300 animate-slide-up`}>
        <div className="space-y-3">
          {complaints.map((complaint, index) => (
            <div 
              key={complaint.id}
              style={{ animationDelay: `${index * 100}ms` }}
              className={`p-3 md:p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-md animate-scale-in ${
                darkMode 
                  ? 'border-gray-700 bg-gray-700 hover:border-green-600' 
                  : 'border-gray-200 bg-gray-50 hover:border-green-400'
              } transform hover:scale-102`}
            >
              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className={`font-semibold ${textClass} text-sm md:text-base`}>{complaint.userName}</p>
                  <p className={`text-xs md:text-sm ${mutedTextClass} truncate mt-1`}>
                    {complaint.complaint}
                  </p>
                  {complaint.replies.length > 0 && (
                    <div className="mt-2">
                      <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">
                        {complaint.replies.length} {complaint.replies.length === 1 ? 'reply' : 'replies'}
                      </span>
                    </div>
                  )}
                </div>
                <button 
                  onClick={() => setSelectedComplaint(complaint)} 
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-3 md:px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap text-sm transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplaintsPage;