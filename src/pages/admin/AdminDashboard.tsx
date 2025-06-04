import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Heart, 
  FileText, 
  MessageSquare, 
  TrendingUp,
  Calendar,
  BarChart3,
  Activity
} from 'lucide-react';
import { 
  getMembersData, 
  getBrideGroomData, 
  getCensusData, 
  getFeedbackData 
} from '../../utils/storage';

interface DashboardStats {
  totalMembers: number;
  totalBrideGroom: number;
  totalCensus: number;
  totalFeedback: number;
  recentMembers: number;
  recentBrideGroom: number;
}

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalMembers: 0,
    totalBrideGroom: 0,
    totalCensus: 0,
    totalFeedback: 0,
    recentMembers: 0,
    recentBrideGroom: 0
  });

  useEffect(() => {
    const loadStats = () => {
      const members = getMembersData();
      const brideGroom = getBrideGroomData();
      const census = getCensusData();
      const feedback = getFeedbackData();

      // Calculate recent entries (last 7 days)
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      const recentMembers = members.filter(member => 
        new Date(member.createdAt) > sevenDaysAgo
      ).length;

      const recentBrideGroom = brideGroom.filter(entry => 
        new Date(entry.createdAt) > sevenDaysAgo
      ).length;

      setStats({
        totalMembers: members.length,
        totalBrideGroom: brideGroom.length,
        totalCensus: census.length,
        totalFeedback: feedback.length,
        recentMembers,
        recentBrideGroom
      });
    };

    loadStats();
    
    // Refresh stats every 30 seconds
    const interval = setInterval(loadStats, 30000);
    return () => clearInterval(interval);
  }, []);

  const statCards = [
    {
      title: 'एकूण सभासद',
      value: stats.totalMembers,
      icon: <Users className="h-8 w-8" />,
      color: 'bg-blue-500',
      link: '/admin/members',
      recent: stats.recentMembers
    },
    {
      title: 'वधू-वर नोंदणी',
      value: stats.totalBrideGroom,
      icon: <Heart className="h-8 w-8" />,
      color: 'bg-pink-500',
      link: '/admin/bride-groom',
      recent: stats.recentBrideGroom
    },
    {
      title: 'खानेसुमारी',
      value: stats.totalCensus,
      icon: <FileText className="h-8 w-8" />,
      color: 'bg-green-500',
      link: '/admin/census',
      recent: 0
    },
    {
      title: 'अभिप्राय',
      value: stats.totalFeedback,
      icon: <MessageSquare className="h-8 w-8" />,
      color: 'bg-yellow-500',
      link: '/admin/feedback',
      recent: 0
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">प्रशासक डॅशबोर्ड</h1>
          <p className="text-gray-600">गाडी लोहार समाज उन्नती मंडळ - डेटा व्यवस्थापन</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Calendar className="h-4 w-4" />
          <span>{new Date().toLocaleDateString('mr-IN')}</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => (
          <Link
            key={index}
            to={card.link}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{card.title}</p>
                <p className="text-3xl font-bold text-gray-900">{card.value}</p>
                {card.recent > 0 && (
                  <p className="text-sm text-green-600 mt-1">
                    +{card.recent} गेल्या आठवड्यात
                  </p>
                )}
              </div>
              <div className={`${card.color} text-white p-3 rounded-lg`}>
                {card.icon}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">द्रुत क्रिया</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/admin/members"
            className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Users className="h-6 w-6 text-blue-500" />
            <span className="font-medium">सभासद व्यवस्थापन</span>
          </Link>
          <Link
            to="/admin/bride-groom"
            className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Heart className="h-6 w-6 text-pink-500" />
            <span className="font-medium">वधू-वर व्यवस्थापन</span>
          </Link>
          <Link
            to="/admin/census"
            className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FileText className="h-6 w-6 text-green-500" />
            <span className="font-medium">खानेसुमारी</span>
          </Link>
          <Link
            to="/admin/feedback"
            className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <MessageSquare className="h-6 w-6 text-yellow-500" />
            <span className="font-medium">अभिप्राय</span>
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Activity className="h-5 w-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">अलीकडील क्रियाकलाप</h2>
        </div>
        <div className="space-y-3">
          {stats.recentMembers > 0 && (
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <Users className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-gray-700">
                {stats.recentMembers} नवीन सभासद गेल्या आठवड्यात नोंदणी झाली
              </span>
            </div>
          )}
          {stats.recentBrideGroom > 0 && (
            <div className="flex items-center space-x-3 p-3 bg-pink-50 rounded-lg">
              <Heart className="h-5 w-5 text-pink-500" />
              <span className="text-sm text-gray-700">
                {stats.recentBrideGroom} नवीन वधू-वर नोंदणी गेल्या आठवड्यात झाली
              </span>
            </div>
          )}
          {stats.recentMembers === 0 && stats.recentBrideGroom === 0 && (
            <div className="text-center py-8 text-gray-500">
              <BarChart3 className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>गेल्या आठवड्यात कोणतीही नवीन नोंदणी नाही</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
