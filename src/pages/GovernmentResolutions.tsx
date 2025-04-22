import React, { useState } from 'react';
import PdfViewer from '../components/PdfViewer';

interface GRDocument {
  id: number;
  title: string;
  url: string;
  date: string;
  description: string;
}

type YearType = '2025' | '2024' | '2023';

type GRDocuments = Record<YearType, GRDocument[]>;

const GovernmentResolutions: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<YearType>('2025');

  const years: YearType[] = ['2025', '2024', '2023'];

  const grDocuments: GRDocuments = {
    '2025': [
      {
        id: 1,
        title: 'गाडी लोहार समाज शासकीय अधिसूचना - २०२५',
        url: '/public/gr/sample-1.pdf',
        date: '१० जानेवारी, २०२५',
        description: 'गाडी लोहार समाजाला विशेष मागास प्रवर्ग (एस.बी.सी.) म्हणून मान्यता देणारा शासन निर्णय.',
      },
      {
        id: 2,
        title: 'शैक्षणिक सवलती संदर्भात शासन निर्णय - २०२५',
        url: '/public/gr/sample-2.pdf',
        date: '१५ मार्च, २०२५',
        description: 'गाडी लोहार समाजातील विद्यार्थ्यांना शैक्षणिक सवलती देण्यासंदर्भात शासन निर्णय.',
      }
    ],
    '2024': [
      {
        id: 1,
        title: 'कल्याणकारी योजना - २०२४',
        url: '/public/gr/sample-3.pdf',
        date: '२० सप्टेंबर, २०२४',
        description: 'गाडी लोहार समाजासाठी विशेष कल्याणकारी योजना लागू करण्याबाबत शासन निर्णय.',
      },
      {
        id: 2,
        title: 'आर्थिक मदत योजना - २०२४',
        url: '/public/gr/sample-4.pdf',
        date: '५ डिसेंबर, २०२४',
        description: 'गाडी लोहार समाजातील गरजू कुटुंबांना आर्थिक मदत देण्याबाबत शासन निर्णय.',
      }
    ],
    '2023': [
      {
        id: 1,
        title: 'व्यवसाय प्रशिक्षण योजना - २०२३',
        url: '/public/gr/sample-5.pdf',
        date: '१८ जून, २०२३',
        description: 'गाडी लोहार समाजातील युवकांसाठी व्यवसाय प्रशिक्षण योजना राबविण्याबाबत शासन निर्णय.',
      },
      {
        id: 2,
        title: 'आरोग्य सेवा योजना - २०२३',
        url: '/public/gr/sample-6.pdf',
        date: '३० नोव्हेंबर, २०२३',
        description: 'गाडी लोहार समाजातील व्यक्तींसाठी विशेष आरोग्य सेवा योजना राबविण्याबाबत शासन निर्णय.',
      }
    ]
  };

  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-2 text-primary-700">शासन निर्णय (जी.आर.)</h1>
        <p className="mb-6 text-gray-600">
          गाडी लोहार समाजाशी संबंधित सर्व शासकीय निर्णय आणि अधिसूचना येथे उपलब्ध आहेत.
        </p>

        {/* Year Selection Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedYear === year
                  ? 'bg-primary-700 text-white'
                  : 'bg-white text-primary-700 hover:bg-primary-50'
              } shadow-md`}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {grDocuments[selectedYear].map((doc) => (
            <div key={doc.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary-700">{doc.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{doc.date}</p>
                <p className="text-gray-700 mt-2">{doc.description}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <PdfViewer pdfUrl={doc.url} title={doc.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GovernmentResolutions;