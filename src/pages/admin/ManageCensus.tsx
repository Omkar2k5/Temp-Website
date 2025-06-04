import React, { useState, useEffect } from 'react';
import { FileText, Download, RefreshCw } from 'lucide-react';
import DataTable from '../../components/admin/DataTable';
import ConfirmDialog from '../../components/admin/ConfirmDialog';
import { CensusData } from '../../types/data';
import { getCensusData, deleteCensusData } from '../../utils/storage';

const ManageCensus: React.FC = () => {
  const [censusList, setCensusList] = useState<CensusData[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<CensusData | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [entryToDelete, setEntryToDelete] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadCensusData();
  }, []);

  const loadCensusData = () => {
    setIsLoading(true);
    const data = getCensusData();
    setCensusList(data);
    setIsLoading(false);
  };

  const handleDelete = (id: string) => {
    setEntryToDelete(id);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    if (entryToDelete) {
      const success = deleteCensusData(entryToDelete);
      if (success) {
        loadCensusData();
        setShowDeleteDialog(false);
        setEntryToDelete(null);
      }
    }
  };

  const handleView = (entry: CensusData) => {
    setSelectedEntry(entry);
  };

  const exportToCSV = () => {
    if (censusList.length === 0) return;

    const headers = [
      'कुटुंब प्रमुखाचे नाव', 'कुटुंबातील सदस्य', 'पत्ता', 'शहर', 'जिल्हा', 'पिनकोड',
      'मोबाइल', 'ईमेल', 'व्यवसाय', 'उत्पन्न', 'स्वतःचे घर', 'शिक्षण', 'नोंदणी तारीख'
    ];

    const csvContent = [
      headers.join(','),
      ...censusList.map(entry => [
        entry.headName,
        entry.familyMembers,
        entry.address,
        entry.city,
        entry.district,
        entry.pincode,
        entry.mobile,
        entry.email,
        entry.occupation,
        entry.income,
        entry.ownHouse,
        entry.education,
        new Date(entry.createdAt).toLocaleDateString('mr-IN')
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `खानेसुमारी_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const columns = [
    { key: 'headName', label: 'कुटुंब प्रमुख' },
    { key: 'familyMembers', label: 'कुटुंबातील सदस्य' },
    { key: 'city', label: 'शहर' },
    { key: 'occupation', label: 'व्यवसाय' },
    { key: 'mobile', label: 'मोबाइल' },
    { key: 'createdAt', label: 'नोंदणी तारीख' }
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
          <FileText className="h-8 w-8 text-green-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">खानेसुमारी व्यवस्थापन</h1>
            <p className="text-gray-600">एकूण {censusList.length} कुटुंबे</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={loadCensusData}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <RefreshCw className="h-4 w-4" />
            <span>रिफ्रेश</span>
          </button>
          <button
            onClick={exportToCSV}
            disabled={censusList.length === 0}
            className="flex items-center space-x-2 px-4 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="h-4 w-4" />
            <span>CSV डाउनलोड</span>
          </button>
        </div>
      </div>

      {/* Data Table */}
      <DataTable
        data={censusList}
        columns={columns}
        onDelete={handleDelete}
        onView={handleView}
        searchPlaceholder="खानेसुमारी शोधा (नाव, शहर, व्यवसाय...)"
        emptyMessage="कोणतीही खानेसुमारी नोंदणी नाही"
      />

      {/* Entry Details Modal */}
      {selectedEntry && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={() => setSelectedEntry(null)}></div>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">खानेसुमारी तपशील</h3>
                <button
                  onClick={() => setSelectedEntry(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><strong>कुटुंब प्रमुखाचे नाव:</strong> {selectedEntry.headName}</div>
                <div><strong>कुटुंबातील सदस्य:</strong> {selectedEntry.familyMembers}</div>
                <div><strong>शहर:</strong> {selectedEntry.city}</div>
                <div><strong>जिल्हा:</strong> {selectedEntry.district}</div>
                <div><strong>पिनकोड:</strong> {selectedEntry.pincode}</div>
                <div><strong>मोबाइल:</strong> {selectedEntry.mobile}</div>
                <div><strong>ईमेल:</strong> {selectedEntry.email}</div>
                <div><strong>व्यवसाय:</strong> {selectedEntry.occupation}</div>
                <div><strong>उत्पन्न:</strong> {selectedEntry.income}</div>
                <div><strong>स्वतःचे घर:</strong> {selectedEntry.ownHouse}</div>
                <div><strong>शिक्षण:</strong> {selectedEntry.education}</div>
                <div><strong>नोंदणी तारीख:</strong> {new Date(selectedEntry.createdAt).toLocaleString('mr-IN')}</div>
                <div className="md:col-span-2"><strong>पत्ता:</strong> {selectedEntry.address}</div>
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
        title="खानेसुमारी नोंदणी हटवा"
        message="तुम्हाला खात्री आहे की तुम्ही ही खानेसुमारी नोंदणी हटवू इच्छिता? ही क्रिया पूर्ववत करता येणार नाही."
        confirmText="हटवा"
        cancelText="रद्द करा"
        type="danger"
      />
    </div>
  );
};

export default ManageCensus;
