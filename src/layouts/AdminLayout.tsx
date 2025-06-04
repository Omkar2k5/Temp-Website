import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  LogOut,
  Home,
  Users,
  Heart,
  FileText,
  MessageSquare,
  BarChart3,
  Settings,
  Menu,
  X
} from 'lucide-react';

const AdminLayout: React.FC = () => {
  const { isAuthenticated, isAdmin, logout, user } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isAuthenticated || !isAdmin) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, isAdmin, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!isAuthenticated || !isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-700 mx-auto mb-4"></div>
          <p className="text-gray-600">प्रमाणीकरण तपासत आहे...</p>
        </div>
      </div>
    );
  }

  const navItems = [
    { path: '/admin/home-content', icon: <Home size={20} />, label: 'मुख्य पृष्ठ व्यवस्थापन', exact: true },
    { path: '/admin/executive-committee', icon: <Users size={20} />, label: 'कार्यकारिणी व्यवस्थापन' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* Mobile menu button */}
              <button
                onClick={toggleSidebar}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-700 hover:bg-primary-50 focus:outline-none mr-3"
              >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <h1 className="text-lg lg:text-xl font-bold text-primary-700">
                प्रशासक पॅनल - गाडी लोहार समाज
              </h1>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-4">
              <span className="text-xs lg:text-sm text-gray-600 hidden sm:block">
                स्वागत, {user?.username}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 lg:space-x-2 text-gray-600 hover:text-red-600 transition-colors text-sm lg:text-base"
              >
                <LogOut size={16} className="lg:w-[18px] lg:h-[18px]" />
                <span className="hidden sm:block">लॉगआउट</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex relative">
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <nav className={`
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:inset-0
          fixed inset-y-0 left-0 z-50
          w-64 bg-white shadow-sm min-h-screen
          transition-transform duration-300 ease-in-out
        `}>
          <div className="p-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.exact}
                    onClick={() => setIsSidebarOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-primary-700 text-white'
                          : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'
                      }`
                    }
                  >
                    {item.icon}
                    <span className="font-medium text-sm lg:text-base">{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Info */}
          <div className="p-4 border-t border-gray-200 mt-8">
            <h3 className="text-sm font-medium text-gray-500 mb-3">माहिती</h3>
            <div className="space-y-2 text-xs text-gray-600">
              <p>मुख्य पृष्ठावरील माहिती संपादित करा</p>
              <p>कार्यकारिणी सदस्य व्यवस्थापित करा</p>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8 lg:ml-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
