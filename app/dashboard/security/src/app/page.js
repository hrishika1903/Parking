'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';
import EntryExitPage from '../components/EntryExitPage';
import IdentifyVehiclePage from '../components/IdentifyVehiclePage';
import ParkingSlotsPage from '../components/ParkingSlotsPage';
import ExtendedParkingPage from '../components/ExtendedParkingPage';
import ComplaintsPage from '../components/ComplaintsPage';
import AnalyticsPage from '../components/AnalyticsPage';
import ProfilePage from '../components/ProfilePage';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors`}>
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        setCurrentPage={setCurrentPage}
      />
      <div className="container mx-auto px-6 py-8">
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