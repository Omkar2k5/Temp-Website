import React, { useState } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface PdfViewerProps {
  pdfUrl: string;
  title: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl, title }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${isExpanded ? 'fixed inset-0 z-50 p-4' : 'relative'}`}>
      <div className="flex justify-between items-center p-4 bg-gray-100">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <button 
          onClick={toggleExpand}
          className="bg-primary-700 text-white px-3 py-1 rounded-md hover:bg-primary-800 transition"
        >
          {isExpanded ? 'संकुचित करा' : 'विस्तार करा'}
        </button>
      </div>
      
      <div className={`${isExpanded ? 'h-[calc(100vh-8rem)]' : 'h-[500px]'}`}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer 
            fileUrl={pdfUrl} 
            plugins={[defaultLayoutPluginInstance]} 
          />
        </Worker>
      </div>
    </div>
  );
};

export default PdfViewer;