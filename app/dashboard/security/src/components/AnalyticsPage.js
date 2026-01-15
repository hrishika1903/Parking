import { ArrowLeft, BarChart3, Download, FileText } from 'lucide-react';

export default function AnalyticsPage({ setCurrentPage, darkMode }) {
  const cardBgClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
  const mutedTextClass = darkMode ? 'text-gray-400' : 'text-gray-600';

  const stats = [
    { label: 'Total Slots', value: '35', color: 'bg-blue-500' },
    { label: 'Vehicles Entered', value: '127', color: 'bg-green-500' },
    { label: 'Vehicles Exited', value: '115', color: 'bg-orange-500' },
    { label: 'Currently Parked', value: '20', color: 'bg-purple-500' },
  ];

  const zoneData = [
    { zone: 'Zone A', total: 20, filled: 12, occupancy: 60 },
    { zone: 'Zone B', total: 15, filled: 8, occupancy: 53 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className={`${cardBgClass} p-6 rounded-xl shadow-lg`}>
            <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-3`}>
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <p className={`text-sm ${mutedTextClass}`}>{stat.label}</p>
            <p className={`text-3xl font-bold ${textClass}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className={`${cardBgClass} p-6 rounded-xl shadow-lg`}>
        <h3 className={`text-xl font-semibold mb-4 ${textClass}`}>Parking Zone Occupancy</h3>
        <div className="overflow-x-auto">
          <table className="w-full mb-6">
            <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <tr>
                <th className={`px-4 py-3 text-left ${textClass}`}>Zone</th>
                <th className={`px-4 py-3 text-left ${textClass}`}>Total Slots</th>
                <th className={`px-4 py-3 text-left ${textClass}`}>Filled Slots</th>
                <th className={`px-4 py-3 text-left ${textClass}`}>Occupancy %</th>
              </tr>
            </thead>
            <tbody>
              {zoneData.map((zone, idx) => (
                <tr key={idx} className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <td className={`px-4 py-3 ${textClass}`}>{zone.zone}</td>
                  <td className={`px-4 py-3 ${textClass}`}>{zone.total}</td>
                  <td className={`px-4 py-3 ${textClass}`}>{zone.filled}</td>
                  <td className={`px-4 py-3 ${textClass}`}>{zone.occupancy}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-3">
          {zoneData.map((zone, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-1">
                <span className={textClass}>{zone.zone}</span>
                <span className={textClass}>{zone.occupancy}%</span>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-4`}>
                <div 
                  className="bg-blue-500 h-4 rounded-full transition-all" 
                  style={{ width: `${zone.occupancy}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
          <FileText className="w-5 h-5" /> Generate CSV Report
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
          <Download className="w-5 h-5" /> Download Full Report
        </button>
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