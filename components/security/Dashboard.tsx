// src/app/components/Dashboard.tsx
'use client';

import React from 'react';
import { Car, Search, Grid3x3, Clock, MessageSquare, BarChart3, LucideIcon } from 'lucide-react';
import { BasePageProps, PageType } from '@/app/types';

interface CardItem {
  icon: LucideIcon;
  title: string;
  page: PageType;
  color: string;
  gradient: string;
}

const Dashboard: React.FC<BasePageProps> = ({ setCurrentPage, darkMode }) => {
  const cardBgClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';

  const cards: CardItem[] = [
    { icon: Car, title: 'Entry / Exit', page: 'entry-exit', color: 'bg-green-500', gradient: 'from-green-500 to-green-600' },
    { icon: Search, title: 'Identify Vehicle', page: 'identify', color: 'bg-emerald-500', gradient: 'from-emerald-500 to-emerald-600' },
    { icon: Grid3x3, title: 'Parking Slots', page: 'slots', color: 'bg-teal-500', gradient: 'from-teal-500 to-teal-600' },
    { icon: Clock, title: 'Extended Parking', page: 'extended', color: 'bg-lime-500', gradient: 'from-lime-500 to-lime-600' },
    { icon: MessageSquare, title: 'Complaints', page: 'complaints', color: 'bg-amber-500', gradient: 'from-amber-500 to-amber-600' },
    { icon: BarChart3, title: 'Analytics', page: 'analytics', color: 'bg-cyan-500', gradient: 'from-cyan-500 to-cyan-600' },
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h2 className={`text-2xl md:text-3xl font-bold ${textClass} mb-2 animate-slide-down`}>
          Dashboard
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base animate-slide-up">
          Quick access to all features
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {cards.map((card, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(card.page)}
            style={{ animationDelay: `${index * 100}ms` }}
            className={`${cardBgClass} p-4 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group animate-scale-in border-2 border-transparent hover:border-green-200 dark:hover:border-green-700`}
          >
            <div className={`bg-gradient-to-br ${card.gradient} w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mx-auto shadow-lg`}>
              <card.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className={`text-sm md:text-lg font-semibold ${textClass} transition-colors group-hover:text-green-600 dark:group-hover:text-green-400`}>
              {card.title}
            </h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;