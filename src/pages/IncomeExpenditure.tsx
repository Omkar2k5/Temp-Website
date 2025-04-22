import React from 'react';
import PdfViewer from '../components/PdfViewer';

const IncomeExpenditure: React.FC = () => {
  const financialReports = [
    {
      id: 1,
      title: 'वार्षिक आर्थिक अहवाल २०२२-२३',
      url: '/income/sample-1.pdf',
      date: '३१ मार्च, २०२३',
    },
    {
      id: 2,
      title: 'वार्षिक आर्थिक अहवाल २०२१-२२',
      url: '/income/sample-2.pdf',
      date: '३१ मार्च, २०२२',
    },
    {
      id: 3,
      title: 'वार्षिक आर्थिक अहवाल २०२०-२१',
      url: '/income/sample-3.pdf',
      date: '३१ मार्च, २०२१',
    },
  ];

  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <div className="container-custom max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-3 text-primary-700">जमाखर्च</h1>
          <p className="text-gray-600">
            संस्थेचे वार्षिक आर्थिक अहवाल
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-primary-700 text-center">आर्थिक अहवाल</h2>
          <div className="space-y-8">
            {financialReports.map((report) => (
              <div key={report.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-primary-50 p-4 border-b border-primary-100">
                  <h3 className="text-xl font-semibold text-primary-700">{report.title}</h3>
                  <p className="text-sm text-primary-600 mt-1">{report.date}</p>
                </div>
                <div className="p-4">
                  <PdfViewer pdfUrl={report.url} title={report.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenditure;