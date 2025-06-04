import React, { useEffect } from 'react';
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
  Settings
} from 'lucide-react';

const AdminLayout: React.FC = () => {
  const { isAuthenticated, isAdmin, logout, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || !isAdmin) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, isAdmin, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!isAuthenticated || !isAdmin) {
    return null;
  }

  const navItems = [
    { path: '/admin', icon: <Home size={20} />, label: 'डॅशबोर्ड', exact: true },
    { path: '/admin/home-content', icon: <Settings size={20} />, label: 'मुख्य पृष्ठ व्यवस्थापन' },
    { path: '/admin/executive-committee', icon: <Users size={20} />, label: 'कार्यकारिणी व्यवस्थापन' },
    { path: '/admin/members', icon: <Users size={20} />, label: 'सभासद व्यवस्थापन' },
    { path: '/admin/bride-groom', icon: <Heart size={20} />, label: 'वधू-वर व्यवस्थापन' },
    { path: '/admin/census', icon: <FileText size={20} />, label: 'खानेसुमारी व्यवस्थापन' },
    { path: '/admin/feedback', icon: <MessageSquare size={20} />, label: 'अभिप्राय व्यवस्थापन' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-primary-700">
                प्रशासक पॅनल - गाडी लोहार समाज
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                स्वागत, {user?.username}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut size={18} />
                <span>लॉगआउट</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 bg-white shadow-sm min-h-screen">
          <div className="p-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.exact}
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-primary-700 text-white'
                          : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'
                      }`
                    }
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Stats */}
          <div className="p-4 border-t border-gray-200 mt-8">
            <h3 className="text-sm font-medium text-gray-500 mb-3">द्रुत आकडेवारी</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">एकूण सभासद</span>
                <span className="font-medium text-primary-700">
                  {JSON.parse(localStorage.getItem('gadilohar_members') || '[]').length}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">वधू-वर नोंदणी</span>
                <span className="font-medium text-primary-700">
                  {JSON.parse(localStorage.getItem('gadilohar_bride_groom') || '[]').length}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">अभिप्राय</span>
                <span className="font-medium text-primary-700">
                  {JSON.parse(localStorage.getItem('gadilohar_feedback') || '[]').length}
                </span>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
