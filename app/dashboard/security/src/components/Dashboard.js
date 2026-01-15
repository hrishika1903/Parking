import { Car, Search, Grid3x3, Clock, MessageSquare, BarChart3 } from 'lucide-react';

export default function Dashboard({ setCurrentPage, darkMode }) {
  const cardBgClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';

  const cards = [
    { icon: Car, title: 'Mark Entry / Exit', page: 'entry-exit', color: 'bg-blue-500' },
    { icon: Search, title: 'Identify Vehicle', page: 'identify', color: 'bg-green-500' },
    { icon: Grid3x3, title: 'Parking Slot View', page: 'slots', color: 'bg-purple-500' },
    { icon: Clock, title: 'Approve Extended Parking', page: 'extended', color: 'bg-orange-500' },
    { icon: MessageSquare, title: 'View Complaints', page: 'complaints', color: 'bg-red-500' },
    { icon: BarChart3, title: 'View Analytics', page: 'analytics', color: 'bg-teal-500' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(card.page)}
          className={`${cardBgClass} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
        >
          <div className={`${card.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto`}>
            <card.icon className="w-8 h-8 text-white" />
          </div>
          <h3 className={`text-lg font-semibold ${textClass}`}>{card.title}</h3>
        </button>
      ))}
    </div>
  );
}