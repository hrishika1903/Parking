'use client';
import { useState } from 'react';
import { ArrowLeft, Search, Upload, Phone } from 'lucide-react';

const mockVehicles = [
  { id: 1, number: 'KA01AB1234', type: '4-wheeler', color: 'Red', fuel: 'Petrol', userName: 'John Doe', phone: '+91 9876543210', email: 'john@example.com', role: 'Student' },
  { id: 2, number: 'KA02CD5678', type: '2-wheeler', color: 'Black', fuel: 'Electric', userName: 'Jane Smith', phone: '+91 9876543211', email: 'jane@example.com', role: 'Staff' },
];

export default function IdentifyVehiclePage({ setCurrentPage, darkMode }) {
  const [vehicleSearch, setVehicleSearch] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const cardBgClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
  const mutedTextClass = darkMode ? 'text-gray-400' : 'text-gray-600';

  const handleSearch = () => {
    const vehicle = mockVehicles.find(v => 
      v.number.toLowerCase().includes(vehicleSearch.toLowerCase())
    );
    setSelectedVehicle(vehicle || 'not-found');
  };

  return (
    <div className="space-y-6">
      <div className={`${cardBgClass} p-6 rounded-xl shadow-lg`}>
        <h2 className={`text-2xl font-bold mb-6 ${textClass}`}>Identify Vehicle</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter Vehicle Number"
              value={vehicleSearch}
              onChange={(e) => setVehicleSearch(e.target.value)}
              className={`flex-1 px-4 py-3 rounded-lg border ${
                darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
              }`}
            />
            <button 
              onClick={handleSearch} 
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <Search className="w-5 h-5" /> Search
            </button>
          </div>
          <div className={`border-2 border-dashed ${
            darkMode ? 'border-gray-600' : 'border-gray-300'
          } rounded-lg p-8 text-center`}>
            <Upload className={`w-12 h-12 mx-auto mb-3 ${mutedTextClass}`} />
            <p className={mutedTextClass}>Upload vehicle number image for OCR</p>
            <button className="mt-3 text-blue-500 hover:text-blue-600 font-semibold">
              Browse Files
            </button>
          </div>
        </div>
      </div>

      {selectedVehicle && selectedVehicle !== 'not-found' && (
        <div className={`${cardBgClass} p-6 rounded-xl shadow-lg`}>
          <h3 className={`text-xl font-semibold mb-4 ${textClass}`}>Vehicle Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className={`text-sm ${mutedTextClass}`}>Vehicle Number</p>
              <p className={`font-semibold ${textClass}`}>{selectedVehicle.number}</p>
            </div>
            <div>
              <p className={`text-sm ${mutedTextClass}`}>Type</p>
              <p className={`font-semibold ${textClass}`}>{selectedVehicle.type}</p>
            </div>
            <div>
              <p className={`text-sm ${mutedTextClass}`}>Color</p>
              <p className={`font-semibold ${textClass}`}>{selectedVehicle.color}</p>
            </div>
            <div>
              <p className={`text-sm ${mutedTextClass}`}>Fuel Type</p>
              <p className={`font-semibold ${textClass}`}>{selectedVehicle.fuel}</p>
            </div>
            <div>
              <p className={`text-sm ${mutedTextClass}`}>User Name</p>
              <p className={`font-semibold ${textClass}`}>{selectedVehicle.userName}</p>
            </div>
            <div>
              <p className={`text-sm ${mutedTextClass}`}>Role</p>
              <p className={`font-semibold ${textClass}`}>{selectedVehicle.role}</p>
            </div>
            <div>
              <p className={`text-sm ${mutedTextClass}`}>Phone</p>
              <p className={`font-semibold ${textClass}`}>{selectedVehicle.phone}</p>
            </div>
            <div>
              <p className={`text-sm ${mutedTextClass}`}>Email</p>
              <p className={`font-semibold ${textClass}`}>{selectedVehicle.email}</p>
            </div>
          </div>
          <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2">
            <Phone className="w-4 h-4" /> Call User
          </button>
        </div>
      )}

      {selectedVehicle === 'not-found' && (
        <div className={`${cardBgClass} p-6 rounded-xl shadow-lg border-2 border-red-500`}>
          <p className="text-red-500 font-semibold text-center">User does not exist</p>
        </div>
      )}

      <button 
        onClick={() => setCurrentPage('dashboard')} 
        className={`flex items-center gap-2 ${mutedTextClass} hover:text-gray-900 dark:hover:text-white transition-colors`}
      >
        <ArrowLeft className="w-4 h-4" /> Go Back
      </button>
    </div>
  );
}