import React, { useState, useEffect } from 'react';
import { Users, Save, RefreshCw, Edit, Plus, Trash2 } from 'lucide-react';
import { executiveCommitteeService, ExecutiveCommittee } from '../../services/firebaseService';

const ManageExecutiveCommittee: React.FC = () => {
  const [committee, setCommittee] = useState<ExecutiveCommittee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<ExecutiveCommittee | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    position: '',
    phone: '',
    email: '',
    address: '',
    education: '',
    job: '',
    description: '',
    imageUrl: '',
    tenure: '',
    order: 1,
    isActive: true
  });

  useEffect(() => {
    loadCommittee();
  }, []);

  const loadCommittee = async () => {
    setIsLoading(true);
    try {
      const data = await executiveCommitteeService.getAll();
      setCommittee(data as ExecutiveCommittee[]);
    } catch (error) {
      console.error('Error loading committee:', error);
    }
    setIsLoading(false);
  };

  const handleEdit = (item: ExecutiveCommittee) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      position: item.position,
      phone: item.phone || '',
      email: item.email || '',
      address: item.address || '',
      education: item.education || '',
      job: item.job || '',
      description: item.description || '',
      imageUrl: item.imageUrl || '',
      tenure: item.tenure || '',
      order: item.order,
      isActive: item.isActive
    });
    setShowAddForm(true);
  };

  const handleAdd = () => {
    setEditingItem(null);
    setFormData({
      name: '',
      position: '',
      phone: '',
      email: '',
      address: '',
      education: '',
      job: '',
      description: '',
      imageUrl: '',
      tenure: 'कार्यकाल २०१७ - २०२०',
      order: committee.length + 1,
      isActive: true
    });
    setShowAddForm(true);
  };

  const handleDelete = async (id: string, memberName: string) => {
    if (window.confirm(`तुम्हाला खात्री आहे की तुम्ही ${memberName} या सदस्याला हटवू इच्छिता?`)) {
      try {
        await executiveCommitteeService.delete(id);
        loadCommittee();
        alert('सदस्य यशस्वीरित्या हटवला!');
      } catch (error) {
        console.error('Error deleting member:', error);
        alert('सदस्य हटवताना त्रुटी आली.');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingItem && editingItem.id) {
        await executiveCommitteeService.update(editingItem.id, formData);
      } else {
        await executiveCommitteeService.add(formData);
      }

      setShowAddForm(false);
      setEditingItem(null);
      loadCommittee();
      alert(editingItem ? 'सदस्य माहिती यशस्वीरित्या अपडेट केली!' : 'नवीन सदस्य यशस्वीरित्या जोडला!');
    } catch (error) {
      console.error('Error saving member:', error);
      alert('सदस्य माहिती सेव्ह करताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.');
    }
  };

  const handleToggleActive = async (item: ExecutiveCommittee) => {
    if (!item.id) return;
    try {
      await executiveCommitteeService.update(item.id, { isActive: !item.isActive });
      loadCommittee();
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
          <Users className="h-8 w-8 text-primary-700" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">कार्यकारिणी समिती व्यवस्थापन</h1>
            <p className="text-gray-600">कार्यकारिणी समितीच्या सदस्यांची माहिती व्यवस्थापित करा</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={loadCommittee}
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
            <span>नवीन सदस्य जोडा</span>
          </button>
        </div>
      </div>

      {/* Committee List */}
      <div className="bg-white rounded-lg shadow-md">
        {committee.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">कोणतेही सदस्य उपलब्ध नाहीत</p>
            <button
              onClick={handleAdd}
              className="mt-4 btn btn-primary"
            >
              पहिला सदस्य जोडा
            </button>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {committee.map((member, index) => (
              <div key={member.id || index} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    {(member.imageUrl || member.photo) && (
                      <img
                        src={member.imageUrl || member.photo}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          member.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {member.isActive ? 'सक्रिय' : 'निष्क्रिय'}
                        </span>
                      </div>
                      <p className="text-primary-600 font-medium mb-1">{member.position}</p>
                      {member.education && (
                        <p className="text-sm text-gray-600">🎓 {member.education}</p>
                      )}
                      {member.job && (
                        <p className="text-sm text-gray-600">💼 {member.job}</p>
                      )}
                      {member.phone && (
                        <p className="text-sm text-gray-600">📞 {member.phone}</p>
                      )}
                      {member.email && (
                        <p className="text-sm text-gray-600">✉️ {member.email}</p>
                      )}
                      {member.address && (
                        <p className="text-sm text-gray-600">📍 {member.address}</p>
                      )}
                      {member.tenure && (
                        <p className="text-sm text-gray-500 italic">⏰ {member.tenure}</p>
                      )}
                      {member.description && (
                        <p className="text-sm text-gray-700 mt-2">{member.description}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      onClick={() => handleEdit(member)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-md"
                      title="संपादित करा"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleToggleActive(member)}
                      className={`px-3 py-1 text-xs rounded-md ${
                        member.isActive 
                          ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                    >
                      {member.isActive ? 'निष्क्रिय करा' : 'सक्रिय करा'}
                    </button>
                    {member.id && (
                      <button
                        onClick={() => handleDelete(member.id!, member.name)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-md"
                        title="हटवा"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
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
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {editingItem ? 'सदस्य माहिती संपादित करा' : 'नवीन सदस्य जोडा'}
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">नाव *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">पद *</label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">फोन नंबर</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ईमेल</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">पत्ता</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">शिक्षण</label>
                    <input
                      type="text"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">जॉब</label>
                    <input
                      type="text"
                      name="job"
                      value={formData.job}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">फोटो URL</label>
                    <input
                      type="url"
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">कार्यकाल</label>
                    <input
                      type="text"
                      name="tenure"
                      value={formData.tenure}
                      onChange={handleChange}
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
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
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

export default ManageExecutiveCommittee;
