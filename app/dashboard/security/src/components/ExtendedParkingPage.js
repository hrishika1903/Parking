'use client';
import { useState } from 'react';
import { ArrowLeft, Check, X } from 'lucide-react';

const initialRequests = [
  { id: 1, slotNo: 'A-12', vehicleNo: 'KA01AB1234', fromTime: '2:00 PM', toTime: '6:00 PM', status: 'pending' },
  { id: 2, slotNo: 'B-05', vehicleNo: 'KA02CD5678', fromTime: '3:00 PM', toTime: '5:00 PM', status: 'pending' },
];

export default function ExtendedParkingPage({ setCurrentPage, darkMode }) {
  const [extendedRequests, setExtendedRequests] = useState(initialRequests);
  const cardBgClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
  const mutedTextClass = darkMode ? 'text-gray-400' : 'text-gray-600';

  const handleApprove = (id) => {
    setExtendedRequests(prev => 
      prev.map(req => req.id === id ? { ...req, status: 'approved' } : req)
    );
  };

  const handleReject = (id) => {
    setExtendedRequests(prev => 
      prev.map(req => req.id === id ? { ...req, status: 'rejected' } : req)
    );
  };

  return (
    <div className="space-y-6">
      <div className={`${cardBgClass} p-6 rounded-xl shadow-lg`}>
        <h2 className={`text-2xl font-bold mb-6 ${textClass}`}>Extended Parking Requests</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <tr>
                <th className={`px-4 py-3 text-left ${textClass}`}>Slot No</th>
                <th className={`px-4 py-3 text-left ${textClass}`}>Vehicle No</th>
                <th className={`px-4 py-3 text-left ${textClass}`}>From Time</th>
                <th className={`px-4 py-3 text-left ${textClass}`}>To Time</th>
                <th className={`px-4 py-3 text-left ${textClass}`}>Action</th>
              </tr>
            </thead>
            <tbody>
              {extendedRequests.filter(r => r.status === 'pending').map((req) => (
                <tr key={req.id} className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <td className={`px-4 py-3 ${textClass}`}>{req.slotNo}</td>
                  <td className={`px-4 py-3 ${textClass}`}>{req.vehicleNo}</td>
                  <td className={`px-4 py-3 ${textClass}`}>{req.fromTime}</td>
                  <td className={`px-4 py-3 ${textClass}`}>{req.toTime}</td>
                  <td className={`px-4 py-3`}>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleApprove(req.id)} 
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-lg transition-colors flex items-center gap-1"
                      >
                        <Check className="w-4 h-4" /> Approve
                      </button>
                      <button 
                        onClick={() => handleReject(req.id)} 
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg transition-colors flex items-center gap-1"
                      >
                        <X className="w-4 h-4" /> Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`${cardBgClass} p-6 rounded-xl shadow-lg`}>
        <h3 className={`text-xl font-semibold mb-4 ${textClass}`}>Approved Requests</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <tr>
                <th className={`px-4 py-3 text-left ${textClass}`}>Slot No</th>
                <th className={`px-4 py-3 text-left ${textClass}`}>Vehicle No</th>
                <th className={`px-4 py-3 text-left ${textClass}`}>From Time</th>
                <th className={`px-4 py-3 text-left ${textClass}`}>To Time</th>
              </tr>
            </thead>
            <tbody>
              {extendedRequests.filter(r => r.status === 'approved').map((req) => (
                <tr key={req.id} className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <td className={`px-4 py-3 ${textClass}`}>{req.slotNo}</td>
                  <td className={`px-4 py-3 ${textClass}`}>{req.vehicleNo}</td>
                  <td className={`px-4 py-3 ${textClass}`}>{req.fromTime}</td>
                  <td className={`px-4 py-3 ${textClass}`}>{req.toTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
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