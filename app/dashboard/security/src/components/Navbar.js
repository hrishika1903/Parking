import { Car, Moon, Sun, User } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, setCurrentPage }) {
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
  const mutedTextClass = darkMode ? 'text-gray-400' : 'text-gray-600';

  return (
    <nav className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-6 py-4`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Car className="w-8 h-8 text-blue-600" />
          <h1 className={`text-xl font-bold ${textClass}`}>
            Parking Management System - Security Panel
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <div className={`text-sm ${mutedTextClass}`}>
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
            {' • '}
            {new Date().toLocaleTimeString('en-US', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </div>
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
          <button 
            onClick={() => setCurrentPage('profile')} 
            className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
          >
            <User className="w-5 h-5 text-blue-600" />
          </button>
          <span className={`text-sm font-medium ${textClass}`}>
            Welcome, Security Officer
          </span>
        </div>
      </div>
    </nav>
  );
}