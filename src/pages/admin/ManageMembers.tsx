import React, { useState, useEffect } from 'react';
import { Users, Download, RefreshCw } from 'lucide-react';
import DataTable from '../../components/admin/DataTable';
import ConfirmDialog from '../../components/admin/ConfirmDialog';
import { MemberData } from '../../types/data';
import { getMembersData, deleteMemberData } from '../../utils/storage';

const ManageMembers: React.FC = () => {
  const [members, setMembers] = useState<MemberData[]>([]);
  const [selectedMember, setSelectedMember] = useState<MemberData | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = () => {
    setIsLoading(true);
    const data = getMembersData();
    setMembers(data);
    setIsLoading(false);
  };

  const handleDelete = (id: string) => {
    setMemberToDelete(id);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    if (memberToDelete) {
      const success = deleteMemberData(memberToDelete);
      if (success) {
        loadMembers();
        setShowDeleteDialog(false);
        setMemberToDelete(null);
      }
    }
  };

  const handleView = (member: MemberData) => {
    setSelectedMember(member);
  };

  const exportToCSV = () => {
    if (members.length === 0) return;

    const headers = [
      'नाव', 'जन्मतारीख', 'लिंग', 'पत्ता', 'शहर', 'जिल्हा', 'पिनकोड',
      'मोबाइल', 'ईमेल', 'शिक्षण', 'व्यवसाय', 'कुटुंबातील सदस्य', 'नोंदणी तारीख'
    ];

    const csvContent = [
      headers.join(','),
      ...members.map(member => [
        member.name,
        member.dob,
        member.gender,
        member.address,
        member.city,
        member.district,
        member.pincode,
        member.mobile,
        member.email,
        member.education,
        member.occupation,
        member.familyMembers,
        new Date(member.createdAt).toLocaleDateString('mr-IN')
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `सभासद_यादी_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const columns = [
    { key: 'name', label: 'नाव' },
    { key: 'mobile', label: 'मोबाइल' },
    { key: 'city', label: 'शहर' },
    { key: 'education', label: 'शिक्षण' },
    { key: 'occupation', label: 'व्यवसाय' },
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
          <Users className="h-8 w-8 text-primary-700" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">सभासद व्यवस्थापन</h1>
            <p className="text-gray-600">एकूण {members.length} सभासद</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={loadMembers}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <RefreshCw className="h-4 w-4" />
            <span>रिफ्रेश</span>
          </button>
          <button
            onClick={exportToCSV}
            disabled={members.length === 0}
            className="flex items-center space-x-2 px-4 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="h-4 w-4" />
            <span>CSV डाउनलोड</span>
          </button>
        </div>
      </div>

      {/* Data Table */}
      <DataTable
        data={members}
        columns={columns}
        onDelete={handleDelete}
        onView={handleView}
        searchPlaceholder="सभासद शोधा (नाव, मोबाइल, शहर...)"
        emptyMessage="कोणतेही सभासद नोंदणी नाही"
      />

      {/* Member Details Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={() => setSelectedMember(null)}></div>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">सभासद तपशील</h3>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><strong>नाव:</strong> {selectedMember.name}</div>
                <div><strong>जन्मतारीख:</strong> {selectedMember.dob}</div>
                <div><strong>लिंग:</strong> {selectedMember.gender}</div>
                <div><strong>मोबाइल:</strong> {selectedMember.mobile}</div>
                <div><strong>ईमेल:</strong> {selectedMember.email}</div>
                <div><strong>शिक्षण:</strong> {selectedMember.education}</div>
                <div><strong>व्यवसाय:</strong> {selectedMember.occupation}</div>
                <div><strong>शहर:</strong> {selectedMember.city}</div>
                <div><strong>जिल्हा:</strong> {selectedMember.district}</div>
                <div><strong>पिनकोड:</strong> {selectedMember.pincode}</div>
                <div className="md:col-span-2"><strong>पत्ता:</strong> {selectedMember.address}</div>
                <div className="md:col-span-2"><strong>कुटुंबातील सदस्य:</strong> {selectedMember.familyMembers}</div>
                <div className="md:col-span-2"><strong>नोंदणी तारीख:</strong> {new Date(selectedMember.createdAt).toLocaleString('mr-IN')}</div>
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
        title="सभासद हटवा"
        message="तुम्हाला खात्री आहे की तुम्ही हा सभासद हटवू इच्छिता? ही क्रिया पूर्ववत करता येणार नाही."
        confirmText="हटवा"
        cancelText="रद्द करा"
        type="danger"
      />
    </div>
  );
};

export default ManageMembers;
