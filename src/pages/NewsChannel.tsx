import React from 'react';

const NewsChannel: React.FC = () => {
  const videoItems = [
    {
      id: 1,
      title: 'समाज सभा - सप्टेंबर २०२३',
      date: '१५ सप्टेंबर, २०२३',
      description: 'गाडी लोहार समाज उन्नती मंडळाची वार्षिक सर्वसाधारण सभा',
      embedId: 'dQw4w9WgXcQ', // This is just a sample YouTube video ID
    },
    {
      id: 2,
      title: 'शैक्षणिक कार्यक्रम - ऑगस्ट २०२३',
      date: '२० ऑगस्ट, २०२३',
      description: 'विद्यार्थ्यांना मार्गदर्शन व शिष्यवृत्ती वाटप समारंभ',
      embedId: 'dQw4w9WgXcQ', // This is just a sample YouTube video ID
    },
    {
      id: 3,
      title: 'आरोग्य शिबिर - जुलै २०२३',
      date: '५ जुलै, २०२३',
      description: 'समाजातील लोकांसाठी आरोग्य तपासणी व औषध वाटप शिबिर',
      embedId: 'dQw4w9WgXcQ', // This is just a sample YouTube video ID
    },
    {
      id: 4,
      title: 'सांस्कृतिक कार्यक्रम - मे २०२३',
      date: '२५ मे, २०२३',
      description: 'परंपरागत कला व संस्कृती जपण्यासाठी सांस्कृतिक कार्यक्रम',
      embedId: 'dQw4w9WgXcQ', // This is just a sample YouTube video ID
    },
    {
      id: 5,
      title: 'महिला सक्षमीकरण कार्यक्रम - मार्च २०२३',
      date: '८ मार्च, २०२३',
      description: 'जागतिक महिला दिनानिमित्त महिला सक्षमीकरण कार्यक्रम',
      embedId: 'dQw4w9WgXcQ', // This is just a sample YouTube video ID
    },
    {
      id: 6,
      title: 'वृक्षारोपण कार्यक्रम - जून २०२३',
      date: '५ जून, २०२३',
      description: 'जागतिक पर्यावरण दिनानिमित्त वृक्षारोपण कार्यक्रम',
      embedId: 'dQw4w9WgXcQ', // This is just a sample YouTube video ID
    },
  ];

  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-2 text-primary-700">न्यूज चॅनल</h1>
        <p className="mb-8 text-gray-600">
          गाडी लोहार समाज उन्नती मंडळाच्या कार्यक्रमांची व्हिडिओ गॅलरी.
        </p>

        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src={`https://www.youtube.com/embed/${videoItems[0].embedId}`} 
                title={videoItems[0].title}
                className="w-full h-[500px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-primary-700 mb-2">{videoItems[0].title}</h2>
              <p className="text-gray-600 mb-2">{videoItems[0].date}</p>
              <p className="text-gray-700">{videoItems[0].description}</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-primary-700">अन्य व्हिडिओ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoItems.slice(1).map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  className="w-full h-48"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-primary-700 mb-1">{video.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{video.date}</p>
                <p className="text-gray-700 text-sm line-clamp-2">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary inline-flex items-center"
          >
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            आमचा YouTube चॅनल
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsChannel;