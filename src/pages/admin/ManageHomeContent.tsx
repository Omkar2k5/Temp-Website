import React, { useState, useEffect } from 'react';
import { Home, Save, RefreshCw, Edit, Plus } from 'lucide-react';
import { communityInfoService, CommunityInfo } from '../../services/firebaseService';

const ManageHomeContent: React.FC = () => {
  const [homeContent, setHomeContent] = useState<CommunityInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<CommunityInfo | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    order: 1,
    isActive: true
  });

  useEffect(() => {
    loadHomeContent();
  }, []);

  const loadHomeContent = async () => {
    setIsLoading(true);
    try {
      const data = await communityInfoService.getBySection('about');
      setHomeContent(data as CommunityInfo[]);
    } catch (error) {
      console.error('Error loading home content:', error);
    }
    setIsLoading(false);
  };

  const handleEdit = (item: CommunityInfo) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      description: item.description,
      content: item.content,
      order: item.order,
      isActive: item.isActive
    });
    setShowAddForm(true);
  };

  const handleAdd = () => {
    setEditingItem(null);
    setFormData({
      title: '',
      description: '',
      content: '',
      order: homeContent.length + 1,
      isActive: true
    });
    setShowAddForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const contentData = {
        ...formData,
        section: 'about' as const
      };

      if (editingItem && editingItem.id) {
        await communityInfoService.update(editingItem.id, contentData);
      } else {
        await communityInfoService.add(contentData);
      }

      setShowAddForm(false);
      setEditingItem(null);
      loadHomeContent();
      alert(editingItem ? 'माहिती यशस्वीरित्या अपडेट केली!' : 'नवीन माहिती यशस्वीरित्या जोडली!');
    } catch (error) {
      console.error('Error saving content:', error);
      alert('माहिती सेव्ह करताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.');
    }
  };

  const handleToggleActive = async (item: CommunityInfo) => {
    if (!item.id) return;
    try {
      await communityInfoService.update(item.id, { isActive: !item.isActive });
      loadHomeContent();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="h-8 w-8 animate-spin text-primary-700" />
        <span className="ml-2">लोड करत आहे...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Home className="h-8 w-8 text-primary-700" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">मुख्य पृष्ठ माहिती व्यवस्थापन</h1>
            <p className="text-gray-600">मुख्य पृष्ठावरील समाज माहिती संपादित करा</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={loadHomeContent}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <RefreshCw className="h-4 w-4" />
            <span>रिफ्रेश</span>
          </button>
          <button
            onClick={handleAdd}
            className="flex items-center space-x-2 px-4 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800"
          >
            <Plus className="h-4 w-4" />
            <span>नवीन जोडा</span>
          </button>
        </div>
      </div>

      {/* Content List */}
      <div className="bg-white rounded-lg shadow-md">
        {homeContent.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">कोणतीही माहिती उपलब्ध नाही</p>
            <button
              onClick={handleAdd}
              className="mt-4 btn btn-primary"
            >
              पहिली माहिती जोडा
            </button>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {homeContent.map((item, index) => (
              <div key={item.id || index} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {item.isActive ? 'सक्रिय' : 'निष्क्रिय'}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md">
                      {item.content.length > 200 
                        ? `${item.content.substring(0, 200)}...` 
                        : item.content
                      }
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      onClick={() => handleEdit(item)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-md"
                      title="संपादित करा"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleToggleActive(item)}
                      className={`px-3 py-1 text-xs rounded-md ${
                        item.isActive 
                          ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                    >
                      {item.isActive ? 'निष्क्रिय करा' : 'सक्रिय करा'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add/Edit Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={() => setShowAddForm(false)}></div>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {editingItem ? 'माहिती संपादित करा' : 'नवीन माहिती जोडा'}
                </h3>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">शीर्षक *</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">क्रमांक</label>
                    <input
                      type="number"
                      name="order"
                      value={formData.order}
                      onChange={handleChange}
                      min="1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">वर्णन</label>
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">मुख्य माहिती *</label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    rows={10}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="समाजाची संपूर्ण माहिती येथे लिहा..."
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-900">सक्रिय</label>
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    रद्द करा
                  </button>
                  <button
                    type="submit"
                    className="flex items-center space-x-2 px-4 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800"
                  >
                    <Save className="h-4 w-4" />
                    <span>{editingItem ? 'अपडेट करा' : 'सेव्ह करा'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageHomeContent;
