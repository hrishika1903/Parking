'use client';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const initialComplaints = [
  { id: 1, userName: 'John Doe', complaint: 'Parking slot marking is not clear', replies: [] },
  { id: 2, userName: 'Jane Smith', complaint: 'Vehicle was scratched in parking', replies: ['We will investigate this matter'] },
];

export default function ComplaintsPage({ setCurrentPage, darkMode }) {
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [complaints, setComplaints] = useState(initialComplaints);
  const cardBgClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
  const mutedTextClass = darkMode ? 'text-gray-400' : 'text-gray-600';

  const handleSendReply = () => {
    if (replyText.trim()) {
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
      <div className="space-y-6">
        <div className={`${cardBgClass} p-6 rounded-xl shadow-lg`}>
          <h2 className={`text-2xl font-bold mb-6 ${textClass}`}>Complaint Details</h2>
          <div className="space-y-4">
            <div>
              <p className={`text-sm ${mutedTextClass}`}>User</p>
              <p className={`font-semibold ${textClass}`}>{selectedComplaint.userName}</p>
            </div>
            <div>
              <p className={`text-sm ${mutedTextClass}`}>Complaint</p>
              <p className={textClass}>{selectedComplaint.complaint}</p>
            </div>
            {selectedComplaint.replies.length > 0 && (
              <div>
                <p className={`text-sm ${mutedTextClass} mb-2`}>Previous Replies</p>
                {selectedComplaint.replies.map((reply, idx) => (
                  <div 
                    key={idx} 
                    className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mb-2`}
                  >
                    <p className={textClass}>{reply}</p>
                  </div>
                ))}
              </div>
            )}
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Type your reply..."
              className={`w-full px-4 py-3 rounded-lg border ${
                darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
              } h-32`}
            />
            <button 
              onClick={handleSendReply} 
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Send Reply
            </button>
          </div>
        </div>
        <button 
          onClick={() => setSelectedComplaint(null)} 
          className={`flex items-center gap-2 ${mutedTextClass} hover:text-gray-900 dark:hover:text-white transition-colors`}
        >
          <ArrowLeft className="w-4 h-4" /> Back to Complaints
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className={`${cardBgClass} p-6 rounded-xl shadow-lg`}>
        <h2 className={`text-2xl font-bold mb-6 ${textClass}`}>View Complaints</h2>
        <div className="space-y-3">
          {complaints.map((complaint) => (
            <div 
              key={complaint.id} 
              className={`p-4 rounded-lg border ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              } flex justify-between items-center`}
            >
              <div>
                <p className={`font-semibold ${textClass}`}>{complaint.userName}</p>
                <p className={`text-sm ${mutedTextClass}`}>
                  {complaint.complaint.substring(0, 50)}...
                </p>
              </div>
              <button 
                onClick={() => setSelectedComplaint(complaint)} 
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                View Complaint
              </button>
            </div>
          ))}
        </div>
      </div>
      <button 
        onClick={() => setCurrentPage('dashboard')} 
        className={`flex items-center gap-2 ${mutedTextClass} hover:text-gray-900 dark:hover:text-white transition-colors`}
      >
        <ArrowLeft className="w-4 h-4" /> Go Back
      </button>
    </div>
  );
}