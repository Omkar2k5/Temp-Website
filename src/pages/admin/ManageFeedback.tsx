import React, { useState, useEffect } from 'react';
import { MessageSquare, Download, RefreshCw, Star } from 'lucide-react';
import DataTable from '../../components/admin/DataTable';
import ConfirmDialog from '../../components/admin/ConfirmDialog';
import { FeedbackData } from '../../types/data';
import { getFeedbackData, deleteFeedbackData } from '../../utils/storage';

const ManageFeedback: React.FC = () => {
  const [feedbackList, setFeedbackList] = useState<FeedbackData[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<FeedbackData | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [entryToDelete, setEntryToDelete] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadFeedbackData();
  }, []);

  const loadFeedbackData = () => {
    setIsLoading(true);
    const data = getFeedbackData();
    setFeedbackList(data);
    setIsLoading(false);
  };

  const handleDelete = (id: string) => {
    setEntryToDelete(id);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    if (entryToDelete) {
      const success = deleteFeedbackData(entryToDelete);
      if (success) {
        loadFeedbackData();
        setShowDeleteDialog(false);
        setEntryToDelete(null);
      }
    }
  };

  const handleView = (entry: FeedbackData) => {
    setSelectedEntry(entry);
  };

  const exportToCSV = () => {
    if (feedbackList.length === 0) return;

    const headers = [
      'नाव', 'ईमेल', 'फोन', 'अभिप्राय प्रकार', 'रेटिंग', 'संदेश', 'नोंदणी तारीख'
    ];

    const csvContent = [
      headers.join(','),
      ...feedbackList.map(entry => [
        entry.name,
        entry.email,
        entry.phone,
        entry.feedbackType,
        entry.rating,
        `"${entry.message.replace(/"/g, '""')}"`, // Escape quotes in message
        new Date(entry.createdAt).toLocaleDateString('mr-IN')
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `अभिप्राय_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderRating = (rating: string) => {
    const numRating = parseInt(rating);
    if (isNaN(numRating)) return rating;
    
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= numRating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">({numRating}/5)</span>
      </div>
    );
  };

  const columns = [
    { key: 'name', label: 'नाव' },
    { key: 'feedbackType', label: 'प्रकार' },
    { 
      key: 'rating', 
      label: 'रेटिंग',
      render: (value: string) => renderRating(value)
    },
    { key: 'phone', label: 'फोन' },
    { 
      key: 'message', 
      label: 'संदेश',
      render: (value: string) => value.length > 50 ? `${value.substring(0, 50)}...` : value
    },
    { key: 'createdAt', label: 'तारीख' }
  ];

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
          <MessageSquare className="h-8 w-8 text-yellow-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">अभिप्राय व्यवस्थापन</h1>
            <p className="text-gray-600">एकूण {feedbackList.length} अभिप्राय</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={loadFeedbackData}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <RefreshCw className="h-4 w-4" />
            <span>रिफ्रेश</span>
          </button>
          <button
            onClick={exportToCSV}
            disabled={feedbackList.length === 0}
            className="flex items-center space-x-2 px-4 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="h-4 w-4" />
            <span>CSV डाउनलोड</span>
          </button>
        </div>
      </div>

      {/* Data Table */}
      <DataTable
        data={feedbackList}
        columns={columns}
        onDelete={handleDelete}
        onView={handleView}
        searchPlaceholder="अभिप्राय शोधा (नाव, प्रकार, संदेश...)"
        emptyMessage="कोणताही अभिप्राय नाही"
      />

      {/* Feedback Details Modal */}
      {selectedEntry && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={() => setSelectedEntry(null)}></div>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">अभिप्राय तपशील</h3>
                <button
                  onClick={() => setSelectedEntry(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><strong>नाव:</strong> {selectedEntry.name}</div>
                  <div><strong>ईमेल:</strong> {selectedEntry.email}</div>
                  <div><strong>फोन:</strong> {selectedEntry.phone}</div>
                  <div><strong>अभिप्राय प्रकार:</strong> {selectedEntry.feedbackType}</div>
                  <div className="md:col-span-2">
                    <strong>रेटिंग:</strong>
                    <div className="mt-1">{renderRating(selectedEntry.rating)}</div>
                  </div>
                  <div><strong>तारीख:</strong> {new Date(selectedEntry.createdAt).toLocaleString('mr-IN')}</div>
                </div>
                <div>
                  <strong>संदेश:</strong>
                  <div className="mt-2 p-3 bg-gray-50 rounded-md">
                    {selectedEntry.message}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        onConfirm={confirmDelete}
        title="अभिप्राय हटवा"
        message="तुम्हाला खात्री आहे की तुम्ही हा अभिप्राय हटवू इच्छिता? ही क्रिया पूर्ववत करता येणार नाही."
        confirmText="हटवा"
        cancelText="रद्द करा"
        type="danger"
      />
    </div>
  );
};

export default ManageFeedback;
