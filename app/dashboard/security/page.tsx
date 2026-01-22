// src/app/page.tsx
'use client';

import { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Dashboard from '@/app/components/Dashboard';
import EntryExitPage from '@/app/components/EntryExitPage';
import IdentifyVehiclePage from '@/app/components/IdentifyVehiclePage';
import ParkingSlotsPage from '@/app/components/ParkingSlotsPage';
import ExtendedParkingPage from '@/app/components/ExtendedParkingPage';
import ComplaintsPage from '@/app/components/ComplaintsPage';
import AnalyticsPage from '@/app/components/AnalyticsPage';
import ProfilePage from '@/app/components/ProfilePage';
import { PageType } from '@/app/dashboard/security/types';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-green-50 via-white to-green-50'} transition-all duration-500`}>
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-8 max-w-7xl">
        {currentPage === 'dashboard' && <Dashboard setCurrentPage={setCurrentPage} darkMode={darkMode} />}
        {currentPage === 'entry-exit' && <EntryExitPage setCurrentPage={setCurrentPage} darkMode={darkMode} />}
        {currentPage === 'identify' && <IdentifyVehiclePage setCurrentPage={setCurrentPage} darkMode={darkMode} />}
        {currentPage === 'slots' && <ParkingSlotsPage setCurrentPage={setCurrentPage} darkMode={darkMode} />}
        {currentPage === 'extended' && <ExtendedParkingPage setCurrentPage={setCurrentPage} darkMode={darkMode} />}
        {currentPage === 'complaints' && <ComplaintsPage setCurrentPage={setCurrentPage} darkMode={darkMode} />}
        {currentPage === 'analytics' && <AnalyticsPage setCurrentPage={setCurrentPage} darkMode={darkMode} />}
        {currentPage === 'profile' && <ProfilePage setCurrentPage={setCurrentPage} darkMode={darkMode} />}
      </div>
    </div>
  );
}